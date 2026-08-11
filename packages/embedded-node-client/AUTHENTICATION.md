## Authentication (embedded mode)

Execute an authentication flow to use decentralized identity apps for shifting from traditional, password-based methods to a secure, password-less system utilizing QR codes. In **embedded mode** the Ver.iD flow runs inside an iframe on your own page instead of a full-page redirect — the browser half ([`@ver-id/embedded-browser-client`](../embedded-browser-client)) mounts the iframe, while this package (the confidential backend half) owns PKCE, verifies the signed webhook, and exchanges the authorization code for tokens. The `code_verifier` and the authorization `code` never reach the browser.

### Create an Authentication client

```ts
import { EmbeddedAuthenticationClient } from '@ver-id/embedded-node-client';

const authenticationClient = new EmbeddedAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
});
```

**Note:** Embedded clients take **no** `redirectUri`. Embedded flows are registered without one; the authorization code is bound to the client purely through PKCE, and the token exchange sends no `redirect_uri`.

#### Caching options

The authentication client caches flow context (state and code verifiers) using a cache manager. The default is `FileStorageCacheManager`, which persists data in a JSON file at `~/.verid-cache/cache.json`. This is controlled with the `cacheManager` option when creating the client.

```ts
import {
  EmbeddedAuthenticationClient,
  FileStorageCacheManager,
} from '@ver-id/embedded-node-client';

const authenticationClient = new EmbeddedAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_AUTHENTICATION_FLOW_ID>',
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
- **Cross-session**: Enables authentication flows that span multiple HTTP requests

For distributed / multi-instance deployments, provide a shared store (Redis, DynamoDB, or your own `ICacheManager`) so every instance can read the verifier back on the webhook. See the package README for the full list of built-in stores.

#### Creating a custom cache

The client can be configured to use a custom cache store implemented by your application. Provide an object to the `cacheManager` property of the client configuration. Each function may return a Promise or a static value.

| Signature                          | Return type                       | Description                                                                                   |
| ---------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| `get(key)`                         | Promise<string> or string or null | Returns the item from the cache with the specified key, or `null` if it was not found        |
| `save(key: string, value: string)` | Promise<void> or void             | Sets an item into the cache                                                                   |
| `remove(key)`                      | Promise<void> or void             | Removes a single item from the cache at the specified key, or no-op if the item was not found |

### Start an embedded session

The backend starts a session and returns a **bootstrap** — the public values the browser needs to mount the iframe. `createEmbeddedSession` generates the PKCE `state`/`codeChallenge`, persists the `code_verifier` against the `state` in the cache manager, and returns only the public bootstrap (never the verifier).

Expose this from an endpoint your frontend calls:

```ts
// POST /api/verid/start
app.post('/api/verid/start', async (_req, res) => {
  const bootstrap = await authenticationClient.createEmbeddedSession({
    scope: 'openid',
    webhookUri: 'https://app.example.com/api/verid/webhook',
  });

  res.json(bootstrap);
  // bootstrap = { clientId, scope, state, codeChallenge, webhookUri, gatewayUri }
});
```

`EmbeddedSessionParams`:

- `scope` — the scopes to request (e.g. `'openid'`). Requested scopes must be registered in the authentication flow.
- `webhookUri` — your backend endpoint that Ver.iD will POST the signed result to.
- `gatewayUri` — optional Ver.iD gateway URL to hand the browser. Defaults to the `issuerUri` origin.
- `state` — optional caller-supplied state; otherwise one is generated.

The returned `EmbeddedSessionBootstrap` is safe to send to the browser as-is:

```ts
{
  clientId: string;
  scope: string;
  state: string;
  codeChallenge: string; // public — the verifier stays on the server
  webhookUri: string;
  gatewayUri: string;
}
```

### Hand the bootstrap to the browser

Your frontend fetches the bootstrap and passes it straight into the browser client, which mounts the Ver.iD iframe and performs the origin-pinned `postMessage` handshake. See [`@ver-id/embedded-browser-client`](../embedded-browser-client/AUTHENTICATION.md) for the browser side.

```ts
// Frontend
import { mountEmbeddedVeridComponent } from '@ver-id/embedded-browser-client';

const bootstrap = await fetch('/api/verid/start', { method: 'POST' }).then((r) => r.json());
const veridComponent = mountEmbeddedVeridComponent({
  container: document.getElementById('verid-embed')!,
  ...bootstrap,
});
```

### Finalize authentication from the signed webhook

When the user completes the flow, Ver.iD does **not** hand the authorization code to the browser. Instead a signed server-to-server webhook is POSTed to your `webhookUri`. Read the request body as **raw text** (the HMAC is computed over the exact bytes) and call `finalizeEmbedded`, which verifies the signature and then exchanges the code for tokens — with no `redirect_uri`:

```ts
// POST /api/verid/webhook  (body read as raw text)
import express from 'express';
import { assertOpenIdJwtPayload } from '@ver-id/embedded-node-client';

app.post('/api/verid/webhook', express.text({ type: '*/*' }), async (req, res) => {
  const result = await authenticationClient.finalizeEmbedded({
    rawBody: req.body,
    signature: req.header('x-signature-256'),
    secret: process.env.VERID_WEBHOOK_SECRET!,
    clientAuth: { client_secret: process.env.VERID_CLIENT_SECRET! },
  });

  const token = await authenticationClient.decode(result, assertOpenIdJwtPayload);
  await store(result.state, token); // correlate to the browser via `state`

  res.json({ received: true });
});
```

`FinalizeEmbeddedParams`:

- `rawBody` — the raw, unparsed webhook request body.
- `signature` — the `x-signature-256` header value (`sha256=<hex>`), or `undefined` if absent.
- `secret` — the flow's webhook secret from Ver.iD Studio.
- `clientAuth` — `{ client_secret }` for the token exchange.

If the signature is missing, malformed, or does not match an HMAC-SHA256 of the raw body computed with your webhook secret, `finalizeEmbedded` throws before any token exchange happens.

#### Verify without finalizing

If you want to inspect the payload before exchanging the code (for example to route by `type`), verify separately:

```ts
const verification = authenticationClient.verifyEmbeddedWebhook({
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

Once you have the authentication response, verify and decode it to get the JWT headers and typed payload:

```ts
import { assertOpenIdJwtPayload } from '@ver-id/embedded-node-client';

const authenticationDecodedToken = await authenticationClient.decode(
  authenticationResponse,
  assertOpenIdJwtPayload,
);
```

**Note:** The token verification happens on the server side, ensuring the token has not been tampered with and was issued by Ver.iD.
