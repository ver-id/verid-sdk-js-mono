## Issuance

Issue credentials, such as a membership card, a certificate or a licence, to a user's identity
wallet. The user can then prove those attributes elsewhere without being verified again.

Create an issuance flow in [Ver.iD Studio](https://spas.nebula.ver.id/), choose the credentials it
issues, register your redirect URI, and copy its flow id and client secret. Configuration, cache
stores, errors and security notes are in the [README](./README.md).

### Create the client

```ts
import { RedisCacheManager, VeridIssuanceClient } from '@ver-id/node-client';

const verid = new VeridIssuanceClient({
  issuerUri: process.env.VERID_ISSUER_URI!,
  clientId: process.env.VERID_ISSUANCE_FLOW_ID!,
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  redirectUri: 'https://app.example.com/verid/callback',
  cacheManager: new RedisCacheManager({ client: redisClient }),
});
```

### Start a session

`createSession` takes what to issue, as exactly one of `mapping` or `data`.

With `mapping`, you set the custom claims mapped on the flow in Ver.iD Studio. Include every claim
the flow maps:

```ts
app.post('/issue', async (req, res) => {
  const { url, state, issuanceRunUuid } = await verid.createSession({
    mapping: {
      firstName: 'John',
      email: 'john.doe@example.com',
      dateOfBirth: '1990-01-01',
    },
  });
  req.session.verid = { state, issuanceRunUuid };
  res.redirect(url);
});
```

With `data`, you set attribute values directly by attribute UUID. Use it for flows without
mappings, and include every attribute the flow issues:

```ts
const { url, state } = await verid.createSession({
  data: [
    { attributeUuid: '<ATTRIBUTE_UUID>', value: 'John' },
    { attributeUuid: '<ANOTHER_ATTRIBUTE_UUID>', value: 'john.doe@example.com' },
  ],
});
```

Input:

| Field                           | Description                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| `mapping`                       | Values by custom claim name. Give this or `data`, not both.                                       |
| `data`                          | `{ attributeUuid, value }` entries. Give this or `mapping`, not both.                             |
| `expirationDuration`            | Optional. How long the issued credentials stay valid, in seconds. Overrides the flow's setting.   |
| `credentialExpirationDurations` | Optional. Validity in seconds per credential, by credential UUID. Overrides `expirationDuration`. |
| `challenge`                     | Optional. A UUID. Echoed in the result's `payload.parameter.challenge`.                           |
| `brandUuid`                     | Optional. The brand to show during the flow.                                                      |

`createSession` throws `InvalidArgumentError` when neither or both of `mapping` and `data` are
given, and `OperationFailedError` when Ver.iD rejects the session.

It returns:

- `url` — send the browser here.
- `state` — identifies the session.
- `issuanceRunUuid` — the issuance run this session belongs to, when the platform allocated one.

### Finish the session

Ver.iD redirects the browser to your `redirectUri` with `code` and `state`:

```ts
app.get('/verid/callback', async (req, res) => {
  const expected = req.session.verid;
  if (!expected || req.query.state !== expected.state) {
    return res.status(400).send('This issuance was not started here.');
  }

  const result = await verid.finishSession({ callbackUrl: req.originalUrl });
  if (result.format !== 'issuance_v1') {
    return res.status(502).send(`Unexpected token format: ${result.format}`);
  }

  for (const credential of result.payload.credentials) {
    console.log(credential.credentialName, credential.status, credential.credentialRecordUuid);
  }
  res.redirect('/issued');
});
```

### The result

Which format you receive depends on the output format configured on the flow in Ver.iD Studio:

| `format`             | `payload`                                       |
| -------------------- | ----------------------------------------------- |
| `'issuance_v1'`      | `IssuanceV1JwtPayload`, grouped by credential   |
| `'issuance_flat_v1'` | `IssuanceFlatV1JwtPayload`, the older flat form |
| `'unknown'`          | a plain JWT payload                             |

`IssuanceV1JwtPayload` contains:

- `credentials` — one entry per issued credential, with `credentialName`, `issuerName`, its
  `attributes`, its `status` (for example `'FULFILLED'`) and `credentialRecordUuid`, the record of
  the issued credential.
- `issuanceRunUuid` — the issuance run that produced the token.
- `parameter.challenge` and `parameter.payload` — the session's challenge, and the `data` and
  `mapping` you sent.
- `meta` — metadata configured on the flow.
- `issuanceUuid` and `organizationUuid` — the flow and the organisation that configured it.
- `handlerAppUuid` and `appName` — the app the user completed the flow with.

`rawToken` is the signed token as received.
