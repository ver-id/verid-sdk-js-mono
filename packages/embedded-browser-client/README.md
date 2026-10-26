# Ver.iD Embedded Browser Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fembedded-browser-client.svg)](https://www.npmjs.com/package/@ver-id/embedded-browser-client)
[![Build Status](https://github.com/ver-id/verid-sdk-js-mono/workflows/CI/badge.svg)](https://github.com/ver-id/verid-sdk-js-mono/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Browser](https://img.shields.io/badge/Platform-Browser-orange.svg)](https://developer.mozilla.org/)
[![OAuth 2.1](https://img.shields.io/badge/OAuth-2.1-blueviolet.svg)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-07)

The browser half of Ver.iD **embedded mode**: it loads Ver.iD's embedded card into your
own page and surfaces the flow lifecycle as typed events. The backend half is
[`@ver-id/embedded-node-client`](https://www.npmjs.com/package/@ver-id/embedded-node-client),
which generates the PKCE material, receives the webhook, and finalizes the flow.

## Getting Started

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```bash
npm install @ver-id/embedded-browser-client
```

Using [yarn](https://yarnpkg.com/) in your project directory run the following command:

```bash
yarn add @ver-id/embedded-browser-client
```

Using [pnpm](https://pnpm.io/) in your project directory run the following command:

```bash
pnpm add @ver-id/embedded-browser-client
```

## Usage

Your page needs a container for the card, and whatever starts the flow: usually your own
button.

```html
<button id="verid-continue">Continue with Ver.iD</button>
<div id="verid-embed"></div>
```

Fetch the embedded-session bootstrap from your backend, then mount the component and
attach lifecycle listeners:

```ts
import { mountVeridEmbeddedComponent } from '@ver-id/embedded-browser-client';

const bootstrap = await fetch('/api/verid/start', { method: 'POST' }).then((r) => r.json());
const veridComponent = mountVeridEmbeddedComponent({
  container: document.getElementById('verid-embed')!,
  ...bootstrap,
});

document.getElementById('verid-continue')!.addEventListener('click', () => veridComponent.open());

veridComponent.addEventListener('ready',    () => setStarted(true));
veridComponent.addEventListener('complete', async () => {
  const token = await pollBackend(bootstrap.state); // backend already finalized via webhook
  onVerified(token);
  veridComponent.destroy();
});
veridComponent.addEventListener('error',    (e) => {
  logError(e.detail);                               // for your logs and Ver.iD support
  if (e.detail.error === 'loader_unavailable') showFallback(); // no card: Ver.iD did not load
  // Otherwise the card shows the person what went wrong.
});
veridComponent.addEventListener('cancel',   () => veridComponent.destroy());
```

## How it works

`mountVeridEmbeddedComponent` adds a host element carrying the flow's parameters inside
`container` and loads Ver.iD's loader, `embedded.js`, from the bootstrap's `loaderUri`,
once per page. The loader preloads the Ver.iD iframe, hidden, inside the host element; nothing
starts until you call `open()`: from your button, from your own step, or straight after
mounting to start on page load. Then the flow starts and the card appears: inline, as wide as the container and as tall as its content, or as a
full-screen drawer on phones. Its look is the flow's embedded appearance from Ver.iD
Studio. On a phone, calling `open()` again reopens the drawer the person closed.

The lifecycle reaches the component as plain DOM events that the loader fires on the host
element, bubbling to `document`: `verid:ready` or `verid:error` after `open()`, then
after `verid:ready` at most one of `verid:complete`, `verid:error` (detail `{ error }`)
and `verid:cancel`. The component re-dispatches them as
`ready`, `complete`, `error` and `cancel`. A page that loads `embedded.js` without the SDK
starts the flow with `document.dispatchEvent(new Event('verid:open'))` and listens for the
same `verid:` events.

Mount as early as you can, so the iframe is preloaded by the time you call `open()`, and
one component at a time: destroy the previous one before mounting the next.

**A bootstrap starts one flow.** For a new attempt (after `cancel` or `error`, after a page
reload, or after you removed the card) fetch a new bootstrap from your backend, with a new
intent where the flow uses one. Mounting an old bootstrap again fails: Ver.iD starts one
flow per intent, and a finished flow's code verifier is gone. Ver.iD's own Try again and
reopening the phone drawer stay within the flow and need nothing from you.

## Security & ordering

- **No secrets in the browser.** No PKCE material (verifier) or authorization code
  ever touches the browser. The backend generates the PKCE `state`/`code_challenge`,
  keeps the verifier server-side, and receives the code on its webhook.
- **`complete` is a lifecycle signal, not a result.** It means "start awaiting the
  backend result" (poll/SSE) — not "the result is ready". The backend finalizes the
  flow from the webhook; the browser only learns the flow finished.
- **Either `ready` or `error`, then at most one ending.** After `open()` the page hears
  `ready` (the card is shown) or `error` (the flow could not start). After `ready` comes
  at most one of `complete`, `error` and `cancel`, and possibly none: a person who leaves
  the page ends the flow silently. If your page's origin is not one of the flow's allowed
  embed origins in Studio, the page hears nothing at all and the card shows the error. Do
  not wait on any event; the webhook is the result.
- **Error codes are for logging.** Only `loader_unavailable` is fixed (`embedded.js` could
  not be loaded, so there is no card). Every other `error` code is Ver.iD's own, for your
  logs and Ver.iD support; the set is not fixed. The card shows the person what went
  wrong, so do not destroy it on `error`.
- **Content Security Policy.** If your page sends a CSP, allow the origin of `loaderUri`
  (Ver.iD's gateway) in `script-src`, for `embedded.js`, and in `frame-src`, for the card's iframe. A blocked
  script surfaces as an `error` with `loader_unavailable` when you call `open()`; a
  blocked iframe never appears and the page hears nothing.
- **Origin-pinned lifecycle.** Ver.iD's loader accepts the iframe's messages only from
  its own origin and its own iframe, and fires the `verid:` events only for
  those. Ver.iD reports the lifecycle to your page only if its origin is one of the flow's
  allowed embed origins in Studio.

## Per-flow guides

For other comprehensive configurations and examples, see the per-flow documents. The browser API (`mountVeridEmbeddedComponent`) is the same in all three — each guide frames it for that flow:

- [Authentication](./AUTHENTICATION.md) — mounting an embedded authentication session.
- [Verification](./VERIFICATION.md) — mounting an embedded disclosure session.
- [Issuance](./ISSUANCE.md) — mounting an embedded issuance session (the bootstrap carries an `intentId`).

## License

MIT
