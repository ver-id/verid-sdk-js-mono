## Issuance (embedded mode)

Issue credentials inside your own page: the user accepts them into their wallet, and your backend
receives a verified record of what was issued. The browser half is
[`@ver-id/embedded-browser-client`](../embedded-browser-client/ISSUANCE.md).

The [README](./README.md) covers configuration, cache managers, webhook handling and errors in
full. This guide shows what is specific to issuance.

### Create an issuance client

```ts
import {
  MemoryStorageCacheManager,
  VeridEmbeddedIssuanceClient,
} from '@ver-id/embedded-node-client';

const issuanceClient = new VeridEmbeddedIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_ISSUANCE_FLOW_ID>',
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  webhookUri: 'https://app.example.com/api/verid/webhook',
  webhookSecret: process.env.VERID_WEBHOOK_SECRET!,
  cacheManager: new MemoryStorageCacheManager(), // RedisCacheManager or DynamoDBCacheManager for several instances
});
```

### Start a session

`createSession` takes what to issue, as exactly one of `mapping` or `data`. Passing both, or
neither, throws `InvalidArgumentError`.

#### With `mapping`

Use `mapping` when the flow has a mapping assigned in Ver.iD Studio. Keys are the mapping's input
names:

```ts
app.post('/api/verid/session', async (req, res) => {
  const { sessionContext, state, issuanceRunUuid } = await issuanceClient.createSession({
    mapping: {
      firstName: 'John',
      email: 'john.doe@example.com',
      dateOfBirth: '1990-01-01',
    },
  });
  await issuances.save(state, { userId: req.user.id, issuanceRunUuid });
  res.json({ sessionContext });
});
```

#### With `data`

Use `data` when the flow has no mapping. Each entry sets one attribute by its UUID:

```ts
const { sessionContext, state } = await issuanceClient.createSession({
  data: [
    { attributeUuid: '<ATTRIBUTE_UUID>', value: 'John' },
    { attributeUuid: '<ATTRIBUTE_UUID>', value: 'john.doe@example.com' },
  ],
});
```

#### Other options

- `challenge` and `brandUuid`: as for every flow, see the [README](./README.md#creating-a-session).
- `expirationDuration`: how long the issued credentials stay valid, in seconds. Overrides the
  flow's configured validity.
- `credentialExpirationDurations`: validity in seconds per credential, keyed by credential UUID.
  Overrides `expirationDuration` for those credentials.

`issuanceRunUuid` in the returned session identifies the issuance run, when Ver.iD allocated one.

### Finish the session from the webhook

```ts
import express from 'express';
import { SessionFinishError } from '@ver-id/embedded-node-client';

app.post('/api/verid/webhook', express.text({ type: '*/*' }), async (req, res) => {
  try {
    const outcome = await issuanceClient.finishSession({ rawBody: req.body, headers: req.headers });
    if (outcome.kind === 'completed') await results.save(outcome.state, outcome.result);
    res.sendStatus(204);
  } catch (error) {
    if (!(error instanceof SessionFinishError)) return res.sendStatus(401);
    if (await results.has(error.state)) return res.sendStatus(204); // a redelivery
    await issuances.markFailed(error.state, error.cause);
    res.sendStatus(500);
  }
});
```

### Read the result

The result's `format` follows the output format configured on the flow:

| `format`           | `payload`                                                   |
| ------------------ | ----------------------------------------------------------- |
| `issuance_v1`      | `IssuanceV1JwtPayload`: the issued credentials              |
| `issuance_flat_v1` | The issued attributes as flat claims                        |
| `unknown`          | A verified token in a format this SDK version does not know |

```ts
if (outcome.kind === 'completed' && outcome.result.format === 'issuance_v1') {
  const { payload } = outcome.result; // IssuanceV1JwtPayload
}
```
