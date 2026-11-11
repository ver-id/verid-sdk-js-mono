## Verification

Receive verified credentials from a user's identity wallet, such as an ID card, a diploma or company
data, instead of checking documents by hand. This is a disclosure flow: the user chooses to share
the credentials your flow asks for.

Create a disclosure flow in [Ver.iD Studio](https://spas.nebula.ver.id/), choose the credentials it
requests, register your redirect URI, and copy its flow id and client secret. Configuration, cache
stores, errors and security notes are in the [README](./README.md).

### Create the client

```ts
import { RedisCacheManager, VeridDisclosureClient } from '@ver-id/node-client';

const verid = new VeridDisclosureClient({
  issuerUri: process.env.VERID_ISSUER_URI!,
  clientId: process.env.VERID_DISCLOSURE_FLOW_ID!,
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  redirectUri: 'https://app.example.com/verid/callback',
  cacheManager: new RedisCacheManager({ client: redisClient }),
});
```

### Start a session

```ts
import { randomUUID } from 'node:crypto';

app.get('/verify', async (req, res) => {
  const challenge = randomUUID();
  const { url, state } = await verid.createSession({ challenge });
  req.session.verid = { state, challenge };
  res.redirect(url);
});
```

Input, all optional:

| Field       | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| `challenge` | A UUID. Echoed in the result's `payload.parameter.challenge`. |
| `brandUuid` | The brand to show during the flow.                            |

Without input, call `verid.createSession()`. It returns `{ url, state }`. Redirect the browser to
`url`.

### Finish the session

Ver.iD redirects the browser to your `redirectUri` with `code` and `state`:

```ts
app.get('/verid/callback', async (req, res) => {
  const expected = req.session.verid;
  if (!expected || req.query.state !== expected.state) {
    return res.status(400).send('This verification was not started here.');
  }

  const result = await verid.finishSession({ callbackUrl: req.originalUrl });
  if (result.format !== 'disclosure_v1') {
    return res.status(502).send(`Unexpected token format: ${result.format}`);
  }
  if (result.payload.parameter.challenge !== expected.challenge) {
    return res.status(400).send('Challenge mismatch');
  }

  for (const credential of result.payload.credentials) {
    for (const attribute of credential.attributes) {
      console.log(credential.credentialName, attribute.attributeName, attribute.value);
    }
  }
  res.redirect('/verified');
});
```

### The result

Which format you receive depends on the output format configured on the flow in Ver.iD Studio:

| `format`               | `payload`                                       |
| ---------------------- | ----------------------------------------------- |
| `'disclosure_v1'`      | `DisclosureV1JwtPayload`, grouped by credential |
| `'disclosure_flat_v1'` | `AttestedFlatV1JwtPayload`, the older flat form |
| `'unknown'`            | a plain JWT payload                             |

`DisclosureV1JwtPayload` contains:

- `credentials` — one entry per shared credential, with `credentialName`, `issuerName`,
  `trustName`, the credential `type` (for example `'sd_jwt'` or `'mdoc'`) and its `attributes`.
  Each attribute has `attributeName` and `value`.
- `parameter.challenge` — the challenge of the session.
- `mapping` — values of the custom claims mapped on the flow.
- `meta` — metadata configured on the flow.
- `disclosureUuid` and `organizationUuid` — the flow and the organisation that configured it.
- `handlerAppUuid` and `appName` — the app the user completed the flow with.

`rawToken` is the signed token as received.
