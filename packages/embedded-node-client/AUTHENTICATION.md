## Authentication (embedded mode)

Run a password-less login inside your own page: the user signs in with their wallet, and your
backend receives a verified OpenID Connect ID token. The browser half is
[`@ver-id/embedded-browser-client`](../embedded-browser-client/AUTHENTICATION.md).

The [README](./README.md) covers configuration, cache managers, webhook handling and errors in
full. This guide shows what is specific to authentication.

### Create an authentication client

```ts
import {
  MemoryStorageCacheManager,
  VeridEmbeddedAuthenticationClient,
} from '@ver-id/embedded-node-client';

const authenticationClient = new VeridEmbeddedAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_AUTHENTICATION_FLOW_ID>',
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  webhookUri: 'https://app.example.com/api/verid/webhook',
  webhookSecret: process.env.VERID_WEBHOOK_SECRET!,
  cacheManager: new MemoryStorageCacheManager(), // RedisCacheManager or DynamoDBCacheManager for several instances
});
```

### Start a session

```ts
app.post('/api/verid/session', async (_req, res) => {
  const { sessionContext, state } = await authenticationClient.createSession({
    scope: 'openid profile', // required; `openid` is added when missing
    challenge: '<OPTIONAL_CHALLENGE_UUID>',
    brandUuid: '<OPTIONAL_BRAND_UUID>',
  });
  await loginAttempts.save(state);
  res.json({ sessionContext });
});
```

`scope` lists the scopes to request, separated by spaces. Each one must be registered on the flow,
and the flow must request more than `openid` alone: `openid profile` is the working default.

### Finish the session from the webhook

```ts
import express from 'express';
import { SessionFinishError } from '@ver-id/embedded-node-client';

app.post('/api/verid/webhook', express.text({ type: '*/*' }), async (req, res) => {
  try {
    const outcome = await authenticationClient.finishSession({
      rawBody: req.body,
      headers: req.headers,
    });
    if (outcome.kind === 'completed') await results.save(outcome.state, outcome.result);
    res.sendStatus(204);
  } catch (error) {
    if (!(error instanceof SessionFinishError)) return res.sendStatus(401);
    if (await results.has(error.state)) return res.sendStatus(204); // a redelivery
    await loginAttempts.markFailed(error.state, error.cause);
    res.sendStatus(500);
  }
});
```

### Read the result

| `format`  | `payload`                                                   |
| --------- | ----------------------------------------------------------- |
| `openid`  | `OpenIdJwtPayload`: the verified ID token's claims          |
| `unknown` | A verified token in a format this SDK version does not know |

```ts
if (outcome.kind === 'completed' && outcome.result.format === 'openid') {
  const { payload } = outcome.result; // OpenIdJwtPayload
  // Sign the user in on the page that polls for this state's result.
}
```

The webhook reaches your backend without the user's browser session. Sign the user in when their
page picks up the result for its `state`, not in the webhook handler.
