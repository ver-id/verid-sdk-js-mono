# Ver.iD Embedded Node Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fembedded-node-client.svg)](https://www.npmjs.com/package/@ver-id/embedded-node-client)
[![Build Status](https://github.com/ver-id/verid-sdk-js-mono/workflows/CI/badge.svg)](https://github.com/ver-id/verid-sdk-js-mono/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green.svg)](https://nodejs.org/)
[![OAuth 2.1](https://img.shields.io/badge/OAuth-2.1-blueviolet.svg)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-07)

The backend half of **Ver.iD embedded mode**. This package owns the confidential
side of an embedded flow: it bootstraps PKCE, verifies signed webhooks, and
exchanges the authorization code for tokens — all server-side. The browser half
is [`@ver-id/embedded-browser-client`](../embedded-browser-client), which holds
no secrets and never sees the authorization code.

## Getting Started

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```bash
npm install @ver-id/embedded-node-client
```

Using [yarn](https://yarnpkg.com/) in your project directory run the following command:

```bash
yarn add @ver-id/embedded-node-client
```

Using [pnpm](https://pnpm.io/) in your project directory run the following command:

```bash
pnpm add @ver-id/embedded-node-client
```

## Usage

```ts
import { EmbeddedDisclosureClient } from '@ver-id/embedded-node-client';

const client = new EmbeddedDisclosureClient({ issuerUri, client_id });

app.post('/api/verid/start', async (_req, res) => {
  const bootstrap = await client.createEmbeddedSession({
    scope: 'openid disclosure',
    webhookUri: 'https://app.example.com/api/verid/webhook',
  });
  res.json(bootstrap); // { clientId, scope, state, codeChallenge, webhookUri, ronanUri }
});

app.post('/api/verid/webhook', express.text({ type: '*/*' }), async (req, res) => {
  const result = await client.finalizeEmbedded({
    rawBody: req.body,
    signature: req.header('x-signature-256'),
    secret: process.env.VERID_WEBHOOK_SECRET!,
    clientAuth: { client_secret: process.env.VERID_CLIENT_SECRET! },
  });
  const token = await client.decode(result, assertDisclosureV1JwtPayload);
  await store(result.state, token);
  res.json({ received: true });
});
```

The same shape applies to `EmbeddedAuthenticationClient` and
`EmbeddedIssuanceClient`. For issuance, create an intent first and forward its
`intentId` via `createEmbeddedSession`.

## Security

- **The `code_verifier` never leaves the backend.** `createEmbeddedSession`
  persists it against the `state` in the cache manager and returns only the
  public `codeChallenge` to the browser.
- **The authorization code arrives only via the HMAC-verified webhook.**
  `finalizeEmbedded` rejects any webhook whose `x-signature-256` header does not
  match an HMAC-SHA256 of the raw body computed with your flow's webhook secret
  (checked with a timing-safe comparison).
- **The token exchange sends no `redirect_uri`.** Embedded flows are registered
  without one; the authorization code is bound to the client purely through PKCE.

## License

MIT
