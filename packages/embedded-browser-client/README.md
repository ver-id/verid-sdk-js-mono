# Ver.iD Embedded Browser Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fembedded-browser-client.svg)](https://www.npmjs.com/package/@ver-id/embedded-browser-client)
[![Build Status](https://github.com/ver-id/verid-sdk-js-mono/workflows/CI/badge.svg)](https://github.com/ver-id/verid-sdk-js-mono/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Browser](https://img.shields.io/badge/Platform-Browser-orange.svg)](https://developer.mozilla.org/)
[![OAuth 2.1](https://img.shields.io/badge/OAuth-2.1-blueviolet.svg)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-07)

The browser half of Ver.iD **embedded mode**. It shows Ver.iD's card inside your own page and
tells you when the flow starts, finishes, fails or is cancelled.

The backend half is
[`@ver-id/embedded-node-client`](https://www.npmjs.com/package/@ver-id/embedded-node-client). It
creates the session, receives the result on your webhook and verifies it. The result never
reaches the browser.

## Installation

```bash
npm install @ver-id/embedded-browser-client
# or
yarn add @ver-id/embedded-browser-client
# or
pnpm add @ver-id/embedded-browser-client
```

## Before you start

- **A backend with [`@ver-id/embedded-node-client`](../embedded-node-client).** It creates the
  session, receives the result on its webhook, and tells your page the outcome. Its README has the
  complete example this page code belongs to, including the Ver.iD Studio setup.
- **Your page's origin in the flow's allowed embed origins** in Ver.iD Studio. A page on any other
  origin hears only `onError`.

## Usage

The page below talks to two backend routes from that example: `POST /api/verid/session` returns
`{ sessionContext, state }`, and `GET /api/verid/session/:state` returns the outcome once the
webhook arrived.

```html
<button id="verid-continue">Continue with Ver.iD</button>
<div id="verid-embed"></div>
```

```ts
import {
  mountVeridEmbeddedComponent,
  type VeridEmbeddedComponent,
} from '@ver-id/embedded-browser-client';

const container = document.getElementById('verid-embed')!;
let component: VeridEmbeddedComponent;

// A session runs one flow: mount a fresh one on page load and after a cancel. Mounting early
// lets the card load before the user clicks.
async function mountSession() {
  const { sessionContext, state } = await fetch('/api/verid/session', { method: 'POST' }).then(
    (r) => r.json(),
  );
  component = mountVeridEmbeddedComponent({ container, sessionContext });

  component.onComplete(async () => {
    const outcome = await waitForOutcome(state);
    component.destroy();
    if (outcome.status === 'completed') showVerified(outcome.payload);
    else showFailed();
  });
  component.onError((error) => {
    console.error('Ver.iD', error); // for your logs and Ver.iD support
    if (error.error === 'loader_unavailable') showFailed(); // there is no card
    // Otherwise the card shows the user what went wrong: leave it in place.
  });
  component.onCancel(() => {
    component.destroy();
    void mountSession();
  });
}

await mountSession();
document.getElementById('verid-continue')!.addEventListener('click', () => component.open());

// `onComplete` is only a signal. The result arrives on your backend's webhook, which can land
// just before or just after it, so poll briefly.
async function waitForOutcome(state: string) {
  for (let attempt = 0; attempt < 30; attempt++) {
    const outcome = await fetch(`/api/verid/session/${state}`).then((r) => r.json());
    if (outcome.status !== 'pending') return outcome;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return { status: 'failed' };
}
```

`showVerified` and `showFailed` stand for your own UI.

## API

### `mountVeridEmbeddedComponent({ container, sessionContext })`

| Parameter        | Description                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `container`      | The `HTMLElement` the card renders in. Size its width; the height follows the card.               |
| `sessionContext` | The `sessionContext` from your backend's `createSession`, unchanged. Its contents are not an API. |

It returns the component synchronously, so you can attach listeners before anything happens. It
throws a `TypeError` when `sessionContext` is not a value from `createSession`.

### The component

| Member                 | Description                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `open()`               | Starts the flow. Call it from your button, your own step, or right after mounting. Safe to call before Ver.iD's loader has loaded. |
| `destroy()`            | Detaches the listeners and removes the card. The loader script stays on the page.                                                  |
| `host`                 | The element the card renders into, inside `container`.                                                                             |
| `onReady(listener)`    | The flow started and the card is shown.                                                                                            |
| `onComplete(listener)` | The flow finished. It carries no result: fetch that from your backend.                                                             |
| `onError(listener)`    | An error ended the flow, or stopped it from starting. The listener gets `{ error, error_description? }`.                           |
| `onCancel(listener)`   | The person cancelled the flow.                                                                                                     |

Each `on*` method returns a function that removes the listener. Attach listeners before
`open()`: an event that already fired is not replayed.

### Event order

After `open()` comes either `onReady` or `onError` (the flow could not start). After `onReady`,
at most one of `onComplete`, `onError` and `onCancel` follows, and possibly none: a person who
leaves the page ends the flow silently. So do not wait on any event. Your webhook is where the
result arrives.

### Error codes

`error.error` is for your logs and Ver.iD support, not for branching. Only `loader_unavailable` is
fixed: Ver.iD's loader could not be loaded (network, or a blocked script), so there is no card
and your page should say what to do next. Every other code is Ver.iD's own, and the set can change
without a new release. The card already shows the person what went wrong, so leave it in place on
`onError`.

## How it works

`mountVeridEmbeddedComponent` adds a host element inside `container` and loads Ver.iD's loader
script once per page. The loader preloads the card's iframe, hidden, and nothing starts until you
call `open()`. On desktop the card appears inline, as wide as the container and as tall as its
content. On a phone it opens as a full-screen drawer, and calling `open()` again reopens the
drawer the person closed. The card's look is the flow's embedded appearance from Ver.iD Studio.

Mount as early as you can, so the iframe is preloaded by the time you call `open()`. Mount one
component at a time: destroy the previous one before mounting the next.

**A session starts one flow.** For a new attempt (after a cancel or an error, after a page reload,
or after you removed the card) ask your backend for a new session. Mounting an old
`sessionContext` again fails. Ver.iD's own Try again button, and reopening the phone drawer, stay
within the flow and need nothing from you.

### `verid:` DOM events

The loader also fires the lifecycle as DOM events on `host`, bubbling to `document`:
`verid:ready`, `verid:complete`, `verid:error` (with the error as `detail`) and `verid:cancel`.
The `on*` methods are built on these; listen to them directly only if you need to.

The loader starts the flow on a `verid:open` event, which is what `open()` sends. To have focus
return to your own button when the phone drawer closes, send it from that button instead:

```ts
button.dispatchEvent(new Event('verid:open', { bubbles: true, composed: true }));
```

`composed` lets the event leave a web component's shadow root. The host element itself must be
in the page's main document, not inside a shadow root.

## Security

- **No secrets in the browser.** The PKCE code verifier stays on your backend and the
  authorization code goes only to your webhook. `sessionContext` holds public values only.
- **`onComplete` is a signal, not a result.** It means "ask your backend for the result", not
  "the result is here". Your backend receives and verifies the result from the webhook.
- **Allowed embed origins.** Ver.iD reports the lifecycle only to pages whose origin is one of the
  flow's allowed embed origins in Ver.iD Studio. Any other page hears only `onError`, with
  `origin_not_allowed` or the error that stopped the flow before its origin was checked.
- **Content Security Policy.** If your page sends a CSP, allow the origin of Ver.iD's loader in
  `script-src` and in `frame-src`, for the card's iframe. That origin is the one of the
  `embedded_loader_uri` in your Ver.iD issuer's metadata. A blocked script surfaces as
  `onError` with `loader_unavailable` when you call `open()`. A blocked iframe never appears, and
  the page hears nothing.

## Per-flow guides

The browser API is the same for every flow. The flow is chosen by the backend client that created
the session. Each guide shows the matching backend call:

- [Authentication](./AUTHENTICATION.md)
- [Verification](./VERIFICATION.md)
- [Issuance](./ISSUANCE.md)

## License

MIT
