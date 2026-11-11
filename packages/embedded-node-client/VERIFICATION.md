## Verification (embedded mode)

Run a disclosure flow inside your own page: the user shares credentials from their wallet, and
your backend receives the verified result. Use it to collect customer information for checks such
as Know-Your-Customer (KYC) or Know-Your-Business (KYB). The browser half is
[`@ver-id/embedded-browser-client`](../embedded-browser-client/VERIFICATION.md).

The [README](./README.md) covers configuration, cache managers, webhook handling and errors in
full. This guide shows what is specific to disclosure.

### Create a disclosure client

```ts
import {
  MemoryStorageCacheManager,
  VeridEmbeddedDisclosureClient,
} from '@ver-id/embedded-node-client';

const disclosureClient = new VeridEmbeddedDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_DISCLOSURE_FLOW_ID>',
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  webhookUri: 'https://app.example.com/api/verid/webhook',
  webhookSecret: process.env.VERID_WEBHOOK_SECRET!,
  cacheManager: new MemoryStorageCacheManager(), // RedisCacheManager or DynamoDBCacheManager for several instances
});
```

### Start a session

```ts
app.post('/api/verid/session', async (req, res) => {
  const { sessionContext, state } = await disclosureClient.createSession({
    challenge: '<OPTIONAL_CHALLENGE_UUID>', // echoed back in the result token
    brandUuid: '<OPTIONAL_BRAND_UUID>', // the brand to show during the flow
  });
  await sessions.save(state, req.user.id);
  res.json({ sessionContext });
});
```

Both fields are optional, so `createSession()` with no input works too. The credentials to
request are configured on the flow in Ver.iD Studio.

### Finish the session from the webhook

```ts
import express from 'express';
import { SessionFinishError } from '@ver-id/embedded-node-client';

app.post('/api/verid/webhook', express.text({ type: '*/*' }), async (req, res) => {
  try {
    const outcome = await disclosureClient.finishSession({
      rawBody: req.body,
      headers: req.headers,
    });
    if (outcome.kind === 'completed') await results.save(outcome.state, outcome.result);
    res.sendStatus(204);
  } catch (error) {
    if (!(error instanceof SessionFinishError)) return res.sendStatus(401);
    if (await results.has(error.state)) return res.sendStatus(204); // a redelivery
    await sessions.markFailed(error.state, error.cause);
    res.sendStatus(500);
  }
});
```

### Read the result

The result's `format` follows the output format configured on the flow:

| `format`             | `payload`                                                   |
| -------------------- | ----------------------------------------------------------- |
| `disclosure_v1`      | `DisclosureV1JwtPayload`: the disclosed credentials         |
| `disclosure_flat_v1` | The disclosed attributes as flat claims                     |
| `unknown`            | A verified token in a format this SDK version does not know |

```ts
if (outcome.kind === 'completed' && outcome.result.format === 'disclosure_v1') {
  const { payload } = outcome.result; // DisclosureV1JwtPayload
}
```

If you passed a `challenge`, compare it with the one in the payload's `parameter.challenge`
before you trust the result for that purpose.
