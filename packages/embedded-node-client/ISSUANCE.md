## Issuance (embedded mode)

Execute an issuance flow to issue verified credentials to users. This allows you to create and deliver digital credentials that users can store in their decentralized identity wallets, enabling them to prove attributes about themselves without repeatedly going through verification processes. In **embedded mode** the Ver.iD flow runs inside an iframe on your own page instead of a full-page redirect — the browser half ([`@ver-id/embedded-browser-client`](../embedded-browser-client)) mounts the iframe, while this package (the confidential backend half) owns PKCE, verifies the signed webhook, and exchanges the authorization code for tokens. The `code_verifier` and the authorization `code` never reach the browser.

### Create an Issuance client

```ts
import { EmbeddedIssuanceClient } from '@ver-id/embedded-node-client';

const issuanceClient = new EmbeddedIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_ISSUANCE_FLOW_ID>', // Issuance flow id registered in Ver.iD Studio
});
```

**Note:** Embedded clients take **no** `redirectUri`. Embedded flows are registered without one; the authorization code is bound to the client purely through PKCE, and the token exchange sends no `redirect_uri`.

#### Caching options

The issuance client caches flow context (state and code verifiers) using a cache manager. The default is `FileStorageCacheManager`, which persists data in a JSON file at `~/.verid-cache/cache.json`. This is controlled with the `cacheManager` option when creating the client.

```ts
import {
  EmbeddedIssuanceClient,
  FileStorageCacheManager,
} from '@ver-id/embedded-node-client';

const issuanceClient = new EmbeddedIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_ISSUANCE_FLOW_ID>',
  options: {
    cacheManager: new FileStorageCacheManager('/path/to/custom/cache'), // Use custom directory for file storage
  },
});
```

**Important:** The cache manager stores flow context **such as state and code verifier**. Because the browser must be able to hand the flow off to the same backend that started it, the verifier lives only on the server, keyed by `state`.

**File Storage Benefits:**

- **Persistence**: Data survives server restarts and process terminations
- **Security**: Files are created with restrictive permissions (0o600)
- **Atomicity**: Atomic file writes prevent corruption during concurrent access
- **Cross-session**: Enables issuance flows that span multiple HTTP requests

For distributed / multi-instance deployments, provide a shared store (Redis, DynamoDB, or your own `ICacheManager`) so every instance can read the verifier back on the webhook. See the package README for the full list of built-in stores.

#### Creating a custom cache

The client can be configured to use a custom cache store implemented by your application. Provide an object to the `cacheManager` property of the client configuration. Each function may return a Promise or a static value.

| Signature                          | Return type                       | Description                                                                                   |
| ---------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| `get(key)`                         | Promise<string> or string or null | Returns the item from the cache with the specified key, or `null` if it was not found        |
| `save(key: string, value: string)` | Promise<void> or void             | Sets an item into the cache                                                                   |
| `remove(key)`                      | Promise<void> or void             | Removes a single item from the cache at the specified key, or no-op if the item was not found |

### Issuance requires an intent

**Important:** Unlike authentication and disclosure, issuance flows **require** intent creation. The intent carries the credential issuance payload (mapping or data). You create it on the backend, then forward its `intentId` in the embedded bootstrap so the embedded flow issues the right credential.

#### Step 1: Generate a code challenge

Generate the PKCE material yourself so the intent and the embedded session share the same `state`/`codeChallenge`:

```ts
const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();
```

#### Step 2: Create the issuance intent

Provide **either** `payload.mapping` **or** `payload.data`, but **not both**.

##### Option A: Using mapping (recommended for flexible credential structures)

```ts
const intentId = await issuanceClient.createIssuanceIntent(
  {
    payload: {
      mapping: {
        firstName: 'John',
        email: 'john.doe@example.com',
        dateOfBirth: '1990-01-01',
        // ... other attribute mappings
      },
    },
    challenge: '<OPTIONAL_CHALLENGE_STRING>', // Optional
    brandUuid: '<OPTIONAL_BRAND_UUID>', // Optional
    requireExplicitConsent: true, // Optional: default is false
  },
  codeChallenge,
  { client_secret: process.env.VERID_CLIENT_SECRET! }, // Client authentication required for Node.js
);
```

##### Option B: Using data (when no mapping is assigned)

```ts
const intentId = await issuanceClient.createIssuanceIntent(
  {
    payload: {
      data: [{
        attributeUuid: '<ATTRIBUTE_UUID>', // UUID of the attribute being issued
        value: 'John',
      }],
    },
    challenge: '<OPTIONAL_CHALLENGE_STRING>', // Optional
    brandUuid: '<OPTIONAL_BRAND_UUID>', // Optional
    requireExplicitConsent: true, // Optional: default is false
  },
  codeChallenge,
  { client_secret: process.env.VERID_CLIENT_SECRET! }, // Client authentication required for Node.js
);
```

#### Step 3: Start the embedded session with the intent

Pass the same `state` the intent was bound to, plus the `intentId`, into `createEmbeddedSession`. The `code_verifier` is persisted against the `state`; only the public bootstrap is returned to the browser:

```ts
// POST /api/verid/start
app.post('/api/verid/start', async (_req, res) => {
  const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();

  const intentId = await issuanceClient.createIssuanceIntent(
    { payload: { mapping: { firstName: 'John', email: 'john.doe@example.com' } } },
    codeChallenge,
    { client_secret: process.env.VERID_CLIENT_SECRET! },
  );

  const bootstrap = await issuanceClient.createEmbeddedSession({
    scope: 'openid issuance',
    webhookUri: 'https://app.example.com/api/verid/webhook',
    state, // reuse the state the intent was bound to
    intentId, // issuance-only
  });

  res.json(bootstrap);
  // bootstrap = { clientId, scope, state, codeChallenge, webhookUri, gatewayUri, intentId }
});
```

`EmbeddedSessionParams`:

- `scope` — the scopes to request (e.g. `'openid issuance'`). Requested scopes must be registered in the issuance flow.
- `webhookUri` — your backend endpoint that Ver.iD will POST the signed result to.
- `gatewayUri` — optional Ver.iD gateway URL to hand the browser. Defaults to the `issuerUri` origin.
- `intentId` — **required for issuance**; the intent created in Step 2.
- `state` — optional caller-supplied state; otherwise one is generated.

For issuance the returned `EmbeddedSessionBootstrap` also carries the `intentId`, so the browser can forward it to the embedded flow unchanged.

### Hand the bootstrap to the browser

Your frontend fetches the bootstrap and passes it straight into the browser client, which mounts the Ver.iD iframe and performs the origin-pinned `postMessage` handshake. See [`@ver-id/embedded-browser-client`](../embedded-browser-client/ISSUANCE.md) for the browser side.

```ts
// Frontend
import { mountEmbeddedVeridComponent } from '@ver-id/embedded-browser-client';

const bootstrap = await fetch('/api/verid/start', { method: 'POST' }).then((r) => r.json());
const veridComponent = mountEmbeddedVeridComponent({
  container: document.getElementById('verid-embed')!,
  ...bootstrap, // includes intentId
});
```

### Finalize issuance from the signed webhook

When the user completes the flow, Ver.iD does **not** hand the authorization code to the browser. Instead a signed server-to-server webhook is POSTed to your `webhookUri`. Read the request body as **raw text** (the HMAC is computed over the exact bytes) and call `finalizeEmbedded`, which verifies the signature and then exchanges the code for tokens — with no `redirect_uri`:

```ts
// POST /api/verid/webhook  (body read as raw text)
import express from 'express';
import { assertIssuanceV1JwtPayload } from '@ver-id/embedded-node-client';

app.post('/api/verid/webhook', express.text({ type: '*/*' }), async (req, res) => {
  const result = await issuanceClient.finalizeEmbedded({
    rawBody: req.body,
    signature: req.header('x-signature-256'),
    secret: process.env.VERID_WEBHOOK_SECRET!,
    clientAuth: { client_secret: process.env.VERID_CLIENT_SECRET! },
  });

  const token = await issuanceClient.decode(result, assertIssuanceV1JwtPayload);
  await store(result.state, token); // correlate to the browser via `state`

  res.json({ received: true });
});
```

`FinalizeEmbeddedParams`:

- `rawBody` — the raw, unparsed webhook request body.
- `signature` — the `x-signature-256` header value (`sha256=<hex>`), or `undefined` if absent.
- `secret` — the flow's webhook secret from Ver.iD Studio.
- `clientAuth` — `{ client_secret }` for the token exchange.

If the signature is missing, malformed, or does not match an HMAC-SHA256 of the raw body computed with your webhook secret, `finalizeEmbedded` throws before any token exchange happens. For issuance the webhook payload's `intent_id` echoes the intent used to start the flow.

#### Verify without finalizing

If you want to inspect the payload before exchanging the code (for example to match `intent_id`), verify separately:

```ts
const verification = issuanceClient.verifyEmbeddedWebhook({
  rawBody: req.body,
  signature: req.header('x-signature-256'),
  secret: process.env.VERID_WEBHOOK_SECRET!,
});

if (!verification.ok) {
  // verification.reason is 'invalid_payload' | 'invalid_signature' | 'missing_signature'
  return res.status(400).json({ error: verification.reason });
}

// verification.payload = { type, version, code, state, intent_id }
```

### Correlate `complete` with the finalized result

The browser receives a `complete` lifecycle event when the flow finishes, but that event carries **no** authorization code — it only means "start awaiting the backend result". The backend is what finalizes, from the webhook. Correlate the two with `state`: store the decoded token against `result.state` on the webhook, and let the frontend poll (or use SSE) for it after `complete`.

### Get decoded Token

Once you have the issuance response, verify and decode it to get the JWT headers and payload. Pass the `typeAssert` function that matches the output type configured in your flow:

```ts
import { assertIssuanceV1JwtPayload } from '@ver-id/embedded-node-client';

const issuanceDecodedToken = await issuanceClient.decode(
  issuanceResponse,
  assertIssuanceV1JwtPayload,
);
```

**Note:** The token verification happens on the server side, ensuring the token has not been tampered with and was issued by Ver.iD. The decoded token contains the issued credential information based on your issuance flow configuration.
