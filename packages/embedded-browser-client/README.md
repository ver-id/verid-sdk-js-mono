# Ver.iD Embedded Browser Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fembedded-browser-client.svg)](https://www.npmjs.com/package/@ver-id/embedded-browser-client)
[![Build Status](https://github.com/ver-id/verid-sdk-js-mono/workflows/CI/badge.svg)](https://github.com/ver-id/verid-sdk-js-mono/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Browser](https://img.shields.io/badge/Platform-Browser-orange.svg)](https://developer.mozilla.org/)
[![OAuth 2.1](https://img.shields.io/badge/OAuth-2.1-blueviolet.svg)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-07)

The browser half of Ver.iD **embedded mode**: it mounts the Ronan iframe, performs
the origin-pinned `postMessage` handshake, and surfaces the flow lifecycle as
typed events. The backend half is [`@ver-id/embedded-node-client`](https://www.npmjs.com/package/@ver-id/embedded-node-client),
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

Fetch the embedded-session bootstrap from your backend, then mount the session and
attach lifecycle listeners:

```ts
import { createEmbeddedSession } from '@ver-id/embedded-browser-client';

const bootstrap = await fetch('/api/verid/start', { method: 'POST' }).then((r) => r.json());
const session = createEmbeddedSession({
  container: document.getElementById('verid-embed')!,
  ...bootstrap,
});

session.addEventListener('ready',    () => setLoading(false));
session.addEventListener('complete', async () => {
  const token = await pollBackend(bootstrap.state); // backend already finalized via webhook
  onVerified(token);
  session.destroy();
});
session.addEventListener('error',    (e) => { showError(e.detail.error); session.destroy(); });
session.addEventListener('cancel',   () => session.destroy());
```

## Security & ordering

- **No secrets in the browser.** No PKCE material (verifier) or authorization code
  ever touches the browser. The backend generates the PKCE `state`/`code_challenge`,
  keeps the verifier server-side, and receives the code on its webhook.
- **`complete` is a lifecycle signal, not a result.** It means "start awaiting the
  backend result" (poll/SSE) — not "the result is ready". The backend finalizes the
  flow from the webhook; the browser only learns the flow finished.
- **Origin-pinned messaging.** Outbound `ronan:init` is posted with `targetOrigin`
  fixed to the Ronan origin, and inbound messages are accepted only from that origin
  and from the session's own iframe.

## Per-flow guides

For other comprehensive configurations and examples, see the per-flow documents. The browser API (`createEmbeddedSession`) is the same in all three — each guide frames it for that flow:

- [Authentication](./AUTHENTICATION.md) — mounting an embedded authentication session.
- [Verification](./VERIFICATION.md) — mounting an embedded disclosure session.
- [Issuance](./ISSUANCE.md) — mounting an embedded issuance session (the bootstrap carries an `intentId`).

## License

MIT
