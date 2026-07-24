## Verification (embedded mode)

Execute a verification flow to use decentralized identity apps to collect various types of customer information for verification purposes, such as for Know-Your-Customer (KYC) or Know-Your-Business (KYB) processes. This package is the **browser half** of Ver.iD embedded mode: it mounts the Ronan iframe on your own page, performs the origin-pinned `postMessage` handshake, and surfaces the flow lifecycle as typed events. It holds **no secrets** — the PKCE `code_verifier` and the authorization `code` never touch the browser.

The browser API is a single, flow-agnostic function, `createEmbeddedSession(...)`. Whether a session runs an authentication, verification, or issuance flow is decided by the backend that created the **bootstrap** (here, an `EmbeddedDisclosureClient`) and by the `clientId`/`scope` it carries. This page frames the API for verification.

### Prerequisite: a backend bootstrap

The confidential half, [`@ver-id/embedded-node-client`](../embedded-node-client/VERIFICATION.md), starts the session and returns a bootstrap. Expose it from an endpoint your frontend can call:

```ts
// Backend — @ver-id/embedded-node-client
import { EmbeddedDisclosureClient } from '@ver-id/embedded-node-client';

const disclosureClient = new EmbeddedDisclosureClient({ issuerUri, client_id });

app.post('/api/verid/start', async (_req, res) => {
  const bootstrap = await disclosureClient.createEmbeddedSession({
    scope: 'openid disclosure',
    webhookUri: 'https://app.example.com/api/verid/webhook',
  });
  res.json(bootstrap);
  // { clientId, scope, state, codeChallenge, webhookUri, ronanUri }
});
```

The bootstrap contains only public values — the `code_verifier` stays on the server, keyed by `state`.

### Mount the embedded session

Fetch the bootstrap and pass it straight into `createEmbeddedSession`. Everything except `container` (and optional `iframe`) comes directly from the bootstrap, so spreading it is the idiomatic call:

```ts
import { createEmbeddedSession } from '@ver-id/embedded-browser-client';

const bootstrap = await fetch('/api/verid/start', { method: 'POST' }).then((r) => r.json());

const session = createEmbeddedSession({
  container: document.getElementById('verid-embed')!,
  ...bootstrap,
});
```

`createEmbeddedSession` returns **synchronously** so you can attach listeners before the iframe loads. `CreateEmbeddedSessionParams`:

| Field          | Source     | Description                                                              |
| -------------- | ---------- | ----------------------------------------------------------------------- |
| `container`    | you        | An `HTMLElement` to mount into, or an existing `HTMLIFrameElement`.     |
| `ronanUri`     | bootstrap  | Ronan embed origin. Inbound messages are pinned to this origin.         |
| `clientId`     | bootstrap  | The disclosure flow id.                                                 |
| `scope`        | bootstrap  | The requested scopes (e.g. `openid disclosure`).                        |
| `state`        | bootstrap  | PKCE state; correlate the backend result to this value.                 |
| `codeChallenge`| bootstrap  | Public PKCE challenge. The verifier never reaches the browser.          |
| `webhookUri`   | bootstrap  | The backend endpoint Ronan posts the signed result to.                  |
| `intentId`     | bootstrap  | Optional; only present if the backend used a disclosure intent.         |
| `iframe`       | you        | Optional presentation overrides (see below).                            |

#### Customizing the iframe

Pass `iframe` to override how the SDK creates the element (ignored if you supplied your own `HTMLIFrameElement` as the container):

```ts
const session = createEmbeddedSession({
  container: document.getElementById('verid-embed')!,
  ...bootstrap,
  iframe: {
    className: 'verid-frame',
    style: { width: '100%', height: '640px', border: '0' },
    allow: 'camera; microphone', // default
    sandbox: 'allow-scripts allow-same-origin', // default
    title: 'Ver.iD embedded flow', // default
  },
});
```

### Handle lifecycle events

`VeridEmbeddedSession` extends `EventTarget` with a typed `addEventListener`. The event map is:

| Event      | Detail                | Meaning                                                          |
| ---------- | --------------------- | --------------------------------------------------------------- |
| `ready`    | `void`                | The Ronan iframe finished loading and is interactive.           |
| `complete` | `void`                | The flow finished. **Lifecycle only — carries no code.**        |
| `error`    | `VeridEmbeddedError`  | `{ error: string; error_description?: string }`.                |
| `cancel`   | `void`                | The user cancelled the flow.                                    |

```ts
session.addEventListener('ready', () => setLoading(false));

session.addEventListener('complete', async () => {
  // `complete` means "start awaiting the backend result" — NOT "the result is ready".
  // The backend finalizes the flow from the signed webhook; correlate via bootstrap.state.
  const token = await pollBackend(bootstrap.state);
  onVerified(token);
  session.destroy();
});

session.addEventListener('error', (e) => {
  showError(e.detail.error);
  session.destroy();
});

session.addEventListener('cancel', () => session.destroy());
```

Call `session.destroy()` to detach the message listener and remove the iframe (if the SDK created it). The readonly `session.iframe` gives you the underlying `HTMLIFrameElement` if you need it.

### How the result actually arrives

The authorization `code` is **never** delivered to the browser. When Ronan completes, it triggers a signed server-to-server webhook to your backend's `webhookUri`; the backend verifies the HMAC signature and exchanges the code for tokens (see the [backend verification guide](../embedded-node-client/VERIFICATION.md)). The browser only learns that the flow finished, via `complete`, and then fetches the finalized result from your own backend — correlated by `state`.

### Security & ordering

- **No secrets in the browser.** No PKCE verifier or authorization code ever touches the browser. The backend generates the `state`/`codeChallenge`, keeps the verifier server-side, and receives the code on its webhook.
- **`complete` is a lifecycle signal, not a result.** It means "start awaiting the backend result" (poll/SSE) — not "the result is ready".
- **Origin-pinned messaging.** Outbound `ronan:init` is posted with `targetOrigin` fixed to `ronanUri`; inbound messages are accepted only from that origin and from the session's own iframe. A malformed message from the pinned origin is surfaced as an `error` event.
