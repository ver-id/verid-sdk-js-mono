## Issuance (embedded mode)

Execute an issuance flow to issue verified credentials to users that they can store in their decentralized identity wallets. This package is the **browser half** of Ver.iD embedded mode: it loads Ver.iD's embedded card into your own page and surfaces the flow lifecycle as typed events. It holds **no secrets** — the PKCE `code_verifier` and the authorization `code` never touch the browser.

The browser API is a single, flow-agnostic function, `mountVeridEmbeddedComponent(...)`. Whether a session runs an authentication, verification, or issuance flow is decided by the backend that created the **bootstrap** (here, a `VeridEmbeddedIssuanceClient`) and by the `clientId`/`scope` it carries. This page frames the API for issuance.

> **Issuance requires an `intentId`.** Issuance flows always issue from an intent that carries the credential payload. The backend creates it and passes it to `createEmbeddedSession`, which **requires** `intentId` (`EmbeddedIssuanceSessionParams`) and throws `InvalidArgumentError` without it. The resulting `EmbeddedIssuanceSessionBootstrap` always carries `intentId`, so the browser simply forwards it to the embedded flow. If you spread the bootstrap into `mountVeridEmbeddedComponent`, `intentId` is carried through automatically — no extra work on the browser side.

### Prerequisite: a backend bootstrap (with intent)

The confidential half, [`@ver-id/embedded-node-client`](../embedded-node-client/ISSUANCE.md), creates the issuance intent and returns an `EmbeddedIssuanceSessionBootstrap` that always includes its `intentId`. Expose it from an endpoint your frontend can call:

```ts
// Backend — @ver-id/embedded-node-client
import { VeridEmbeddedIssuanceClient } from '@ver-id/embedded-node-client';

const issuanceClient = new VeridEmbeddedIssuanceClient({ issuerUri, clientId });

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
    state,
    codeChallenge, // reuse the pair the intent was created against
    intentId,
  });

  res.json(bootstrap);
  // { clientId, scope, state, codeChallenge, webhookUri, loaderUri, intentId }
});
```

The bootstrap contains only public values — the `code_verifier` stays on the server, keyed by `state`. Note that the backend passes **both** the `state` and the `codeChallenge` it created the intent against into `createEmbeddedSession`: the intent is bound to that challenge, so the session must reuse the same pair instead of generating a new one.

### Mount the embedded component

Your page needs a container for the card, and whatever starts the flow: usually your own button.

```html
<button id="verid-continue">Continue with Ver.iD</button>
<div id="verid-embed"></div>
```

Fetch the bootstrap and pass it straight into `mountVeridEmbeddedComponent`. Everything except `container` comes directly from the bootstrap — including `intentId` — so spreading it is the idiomatic call:

```ts
import { mountVeridEmbeddedComponent } from '@ver-id/embedded-browser-client';

const bootstrap = await fetch('/api/verid/start', { method: 'POST' }).then((r) => r.json());

const veridComponent = mountVeridEmbeddedComponent({
  container: document.getElementById('verid-embed')!,
  ...bootstrap, // includes intentId
});

document.getElementById('verid-continue')!.addEventListener('click', () => veridComponent.open());
```

`mountVeridEmbeddedComponent` returns **synchronously** so you can attach listeners before anything happens. It adds a host element carrying the flow's parameters (the `intentId` among them, as `data-intent-id`) inside `container` and loads Ver.iD's loader, `embedded.js`, from the bootstrap's `loaderUri` (once per page). The loader preloads the Ver.iD iframe, hidden (on phones in a closed full-screen `<dialog>` under `<body>`, removed together with the host element); nothing starts until you call `veridComponent.open()`. Call it from your button, from your own step, or straight after mounting to start on page load. On a phone, calling it again reopens the drawer the person closed. The card then appears inline, as wide as the container and as tall as its content, or as a full-screen drawer on phones; its look is the flow's embedded appearance from Ver.iD Studio. Mount as early as you can, so the iframe is preloaded by the time you call `open()`, and one component at a time: destroy the previous one before mounting the next. **A bootstrap starts one flow.** For a new attempt (after `cancel` or `error`, after a page reload, or after you removed the card) fetch a new bootstrap from your backend, with a new intent where the flow uses one. Mounting an old bootstrap again fails: Ver.iD starts one flow per intent, and a finished flow's code verifier is gone. Ver.iD's own Try again and reopening the phone drawer stay within the flow and need nothing from you.

`VeridEmbeddedComponentParams`:

| Field          | Source     | Description                                                                          |
| -------------- | ---------- | ------------------------------------------------------------------------------------ |
| `container`    | you        | An `HTMLElement` the card renders in. Size its width; the height follows the card.   |
| `loaderUri`    | bootstrap  | Ver.iD's loader script (`embedded.js`), as the issuer advertises it. |
| `clientId`     | bootstrap  | The issuance flow id.                                                                |
| `scope`        | bootstrap  | The requested scopes (e.g. `openid issuance`).                                       |
| `state`        | bootstrap  | PKCE state; correlate the backend result to this value.                              |
| `codeChallenge`| bootstrap  | Public PKCE challenge. The verifier never reaches the browser.                       |
| `webhookUri`   | bootstrap  | The backend endpoint Ver.iD posts the signed result to.                              |
| `intentId`     | bootstrap  | **Required for issuance** — the intent the credential is issued from.                |

### Handle lifecycle events

`VeridEmbeddedComponent` extends `EventTarget` with a typed `addEventListener`. The event map is:

| Event      | Detail                | Meaning                                                                              |
| ---------- | --------------------- | ------------------------------------------------------------------------------------ |
| `ready`    | `void`                | `open()` started the flow; the card is shown.                                        |
| `complete` | `void`                | The flow finished. **Lifecycle only — carries no code.**                             |
| `error`    | `VeridEmbeddedError`  | `{ error: string; error_description?: string }` — `loader_unavailable` when `embedded.js` could not be loaded, otherwise Ver.iD's code for logging and support (see below). |
| `cancel`   | `void`                | The person cancelled the flow.                                                       |

After `open()` the page hears **either** `ready` (the flow started and the card is shown) **or** `error` (the flow could not start; the card shows why). After `ready` comes **at most one** of `complete`, `error` and `cancel`, and possibly none: a person who leaves the page ends the flow silently, and a wallet-side cancel or an expired request is not an ending (the card offers to try again). If your page's origin is not one of the flow's allowed embed origins in Studio, the page hears **nothing at all**: Ver.iD reports nothing to a site it has not verified, and the card shows the error. Do not wait on any event; the backend's webhook is the result.

```ts
veridComponent.addEventListener('ready', () => setStarted(true));

veridComponent.addEventListener('complete', async () => {
  // `complete` means "start awaiting the backend result" — NOT "the result is ready".
  // The backend finalizes the flow from the signed webhook; correlate via bootstrap.state.
  const credential = await pollBackend(bootstrap.state);
  onIssued(credential);
  veridComponent.destroy();
});

veridComponent.addEventListener('error', (e) => {
  logError(e.detail); // for your logs and Ver.iD support
  if (e.detail.error === 'loader_unavailable') {
    showFallback(); // there is no card: Ver.iD could not be loaded
  }
  // Otherwise the card shows the person what went wrong; keep it until you remove it.
});

veridComponent.addEventListener('cancel', () => veridComponent.destroy());
```

**Error codes.** `error` is for your logs and for Ver.iD support, not for branching. Only `loader_unavailable` is fixed: `open()` could not load `embedded.js` (network, or a blocked script), so there is no card and your page should say what to do next. Every other code is Ver.iD's own; the set is not fixed and can change without a new SDK release. The card already shows the person what went wrong, so leave it in place rather than destroying it on `error`.

Call `veridComponent.destroy()` to detach the event listeners and remove the host element, and with it the card. The readonly `veridComponent.host` is that element if you need it. The loader script stays on the page.

### How the result actually arrives

The authorization `code` is **never** delivered to the browser. When the flow completes, it triggers a signed server-to-server webhook to your backend's `webhookUri`; the backend verifies the HMAC signature and exchanges the code for tokens (see the [backend issuance guide](../embedded-node-client/ISSUANCE.md)). The webhook payload's `intent_id` echoes the intent used to start the flow. The browser only learns that the flow finished, via `complete`, and then fetches the finalized result from your own backend — correlated by `state`.

### Security & ordering

- **No secrets in the browser.** No PKCE verifier or authorization code ever touches the browser. The backend generates the `state`/`codeChallenge`, keeps the verifier server-side, and receives the code on its webhook.
- **`complete` is a lifecycle signal, not a result.** It means "start awaiting the backend result" (poll/SSE) — not "the result is ready".
- **Content Security Policy.** If your page sends a CSP, allow the origin of `loaderUri` (Ver.iD's gateway) in `script-src`, for `embedded.js`, and in `frame-src`, for the card's iframe. A blocked script surfaces as an `error` with `loader_unavailable` when you call `open()`; a blocked iframe never appears and the page hears nothing.
- **Origin-pinned lifecycle.** Ver.iD's loader accepts the iframe's messages only from its own origin and its own iframe, and fires the `verid:` events on the host element only for those. Ver.iD posts the lifecycle to your page only if its origin is one of the flow's allowed embed origins in Studio; any other origin hears only `error` with `origin_not_allowed`.
