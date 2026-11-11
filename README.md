<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/images/header.svg">
    <source media="(prefers-color-scheme: light)" srcset="./public/images/header.svg">
    <img alt="Ver.iD TypeScript SDK" src="./public/images/header.svg" width="100%">
  </picture>
</p>

> [!WARNING]
> **Pre-release software** · This SDK has not yet reached version 1.0. Public APIs, configuration options, and behavior may change between minor releases without prior deprecation. We recommend pinning to an exact version and reviewing the [changelog](#changelogs) before upgrading.

# Ver.iD SDK for TypeScript

The Ver.iD SDK for TypeScript which enables you to easily work with Ver.iD services.

## Packages

### [@ver-id/browser-client](./packages/browser-client)

The TypeScript SDK for browser applications to perform authentication and verification flows.

**Features:**

- OAuth 2.1 Authentication
- Verification for KYC/KYB flows
- Default PKCE support
- PKCE verifier kept in session or local storage
- Result tokens verified before they are returned

**Use Cases:**

- Implementing password-less login in web applications
- Adding identity verification (KYC/KYB) to your platform
- Accessing verified user credentials and attributes
- Building decentralized identity flows

### Authentication flow

```ts
import { VeridBrowserAuthenticationClient } from '@ver-id/browser-client';

const verid = new VeridBrowserAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  clientId: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
  redirectUri: '<REGISTERED_REDIRECT_URI>', // One of the redirect URIs registered on the flow
});

// Start the session and send the user to Ver.iD
const { url } = await verid.createSession({ scope: 'openid profile' });
window.location.href = url;

// On the redirect URI page: exchange the code and verify the result token
const result = await verid.finishSession();
if (result.format === 'openid') console.log(result.payload.sub);
```

For comprehensive configurations and examples, see the [browser-client.](./packages/browser-client/README.md)

### [@ver-id/node-client](./packages/node-client)

The TypeScript SDK for Node.js server applications to perform authentication and verification flows.

**Features:**

- OAuth 2.1 Authentication (Server-side)
- Verification for KYC/KYB flows
- Default PKCE support
- Result tokens verified before they are returned
- Client secret and PKCE verifier kept on the server

**Use Cases:**

- Implementing password-less login with server-side OAuth flow
- Adding identity verification (KYC/KYB) to your platform
- Accessing verified user credentials and attributes
- Building secure backend authentication services

### Authentication flow

```ts
import { MemoryStorageCacheManager, VeridAuthenticationClient } from '@ver-id/node-client';

const verid = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  clientId: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  redirectUri: '<REGISTERED_REDIRECT_URI>', // One of the redirect URIs registered on the flow
  cacheManager: new MemoryStorageCacheManager(), // RedisCacheManager or DynamoDBCacheManager for several instances
});

// Start the session and redirect the user to Ver.iD
app.get('/login', async (_req, res) => {
  const { url } = await verid.createSession({ scope: 'openid profile' });
  res.redirect(url);
});

// On the redirect URI: exchange the code and verify the result token
app.get('/callback', async (req, res) => {
  const result = await verid.finishSession({ callbackUrl: req.originalUrl });
  if (result.format === 'openid') req.session.userId = result.payload.sub;
  res.redirect('/');
});
```

For comprehensive configurations and examples, see the [node-client.](./packages/node-client/README.md)

### [@ver-id/embedded-browser-client](./packages/embedded-browser-client) + [@ver-id/embedded-node-client](./packages/embedded-node-client)

A matched pair of SDKs that run a Ver.iD flow **inside your own page** instead of redirecting the user away. The Node half creates the session and finishes it from a signed webhook; the browser half mounts Ver.iD's embedded card and reports its lifecycle. Neither works without the other.

**Features:**

- In-page identity flows — no full-page redirect, no popup
- PKCE verifier and client secret never leave the server
- Lifecycle events (`ready`, `complete`, `error`, `cancel`), reported only to the flow's allowed embed origins
- HMAC-signed server-to-server webhook carrying the authorization code, checked before it is read
- The result goes to your backend only, never to the browser
- Same authentication, disclosure and issuance clients as the redirect SDKs

**Use Cases:**

- Keeping users inside your checkout, onboarding or account flow
- Embedding verification in an app shell that cannot survive a redirect
- Any surface where you control the page but want Ver.iD to render the flow

### Embedded flow

```ts
// ── SERVER ─────────────────────────────────────────────────────────────────
import express from 'express';
import {
  MemoryStorageCacheManager,
  SessionFinishError,
  VeridEmbeddedDisclosureClient,
} from '@ver-id/embedded-node-client';

const verid = new VeridEmbeddedDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_DISCLOSURE_FLOW_ID>',
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  webhookUri: 'https://your-public-host/api/verid/webhook',
  webhookSecret: process.env.VERID_WEBHOOK_SECRET!,
  cacheManager: new MemoryStorageCacheManager(),
});

app.post('/api/verid/session', async (req, res) => {
  const { sessionContext, state } = await verid.createSession();
  await sessions.save(state, req.user.id); // the webhook has no user session
  res.json({ sessionContext });
});

// The webhook route needs the RAW body: the signature covers the exact bytes.
app.post('/api/verid/webhook', express.text({ type: '*/*' }), async (req, res) => {
  try {
    const outcome = await verid.finishSession({ rawBody: req.body, headers: req.headers });
    if (outcome.kind === 'completed') await results.save(outcome.state, outcome.result);
    res.sendStatus(204);
  } catch (error) {
    if (!(error instanceof SessionFinishError)) return res.sendStatus(401);
    if (await results.has(error.state)) return res.sendStatus(204); // a redelivery
    await sessions.markFailed(error.state, error.cause);
    res.sendStatus(500); // Ver.iD retries
  }
});
```

```ts
// ── BROWSER ────────────────────────────────────────────────────────────────
import { mountVeridEmbeddedComponent } from '@ver-id/embedded-browser-client';

const { sessionContext } = await fetch('/api/verid/session', { method: 'POST' }).then((r) =>
  r.json(),
);

const component = mountVeridEmbeddedComponent({
  container: document.getElementById('verid-embed')!,
  sessionContext,
});

// Nothing starts until open(): call it from your own button, or right away to start on load.
document.getElementById('verid-continue')!.addEventListener('click', () => component.open());

component.onComplete(() => {
  // A lifecycle signal, not a result: the result arrives on your backend via the
  // webhook. Ask your own backend for it.
  pollForResult();
});
```

For comprehensive configurations and examples, see the [embedded-browser-client](./packages/embedded-browser-client/README.md) and [embedded-node-client](./packages/embedded-node-client/README.md).

### [@ver-id/graphql-client](./packages/graphql-client)

Apollo Client-based GraphQL SDK for querying Ver.iD GraphQL APIs.

**Features:**

- Type-safe GraphQL queries with TypeScript
- Built on Apollo Client v4 with caching
- Pre-built helper functions for common queries
- Custom query support with TypedDocumentNode

**Use Cases:**

- Fetching metadata about available credentials and attributes
- Custom GraphQL queries for advanced use cases

### GraphQL Operation

```ts
import { createVeridGraphQLClient, getAttribute } from '@ver-id/graphql-client';

// Create GraphQL client
const client = createVeridGraphQLClient({
  uri: '<VERID_GRAPHQL_API_URL>',
  getAccessToken: async () => {
    // Return OAuth access token
    return 'your-access-token';
  },
});

// Query attribute metadata
const attribute = await getAttribute(client, '<ATTRIBUTE_UUID>');
```

For comprehensive configurations and examples, see the [graphql-client](packages/graphql-client/README.md).

### [@ver-id/core](./packages/core)

The shared foundation every client above is built on: the abstract flow clients, the OAuth client,
the cache contract, the error hierarchy and the shared types. It is
published as its own package and listed as a dependency of the other clients, so a fix lands once
instead of being duplicated into five bundles.

You normally do not install it directly — the client packages re-export what you need. Reach for it
when you are building your own client on top of the Ver.iD protocol.

For details, see the [core](./packages/core/README.md) README.

### Requirements

Install each package from npm with your package manager (`npm install @ver-id/node-client`).
The server packages need Node.js 18 or newer.

## Embedded mode prerequisites

The embedded packages need two things the redirect packages do not.

**A publicly reachable webhook URL.** Ver.iD delivers the authorization code by POSTing
to your server directly, so a `localhost` address is never reachable. During development,
expose your server with a tunnel (`cloudflared tunnel --url http://localhost:3000` or
`ngrok http 3000`) and use the printed URL as the webhook URI.

**Flows registered for embedded delivery.** Each flow you embed must list your page's
origin as an allowed embed origin and carry your webhook URL and a webhook signing secret,
configured in Ver.iD Studio. A page whose origin is not allowed hears only `onError`, never
`onReady`, `onComplete` or `onCancel`. Note that an authentication flow must request more than `openid`
alone; `openid profile` is the working default.

## Changelogs

Each package keeps its own changelog, written on release from the release notes of the
changes it contains. A package's changelog appears once it has shipped its first
release.

- [@ver-id/core](./packages/core/CHANGELOG.md)
- [@ver-id/browser-client](./packages/browser-client/CHANGELOG.md)
- [@ver-id/node-client](./packages/node-client/CHANGELOG.md)
- [@ver-id/embedded-browser-client](./packages/embedded-browser-client/CHANGELOG.md)
- [@ver-id/embedded-node-client](./packages/embedded-node-client/CHANGELOG.md)
- [@ver-id/graphql-client](./packages/graphql-client/CHANGELOG.md)

A breaking change's entry says what to change when you upgrade. How releases are made
is in [CONTRIBUTING.md](./CONTRIBUTING.md#releases).

## Contributing

This repository is a read-only mirror: the SDK is developed in Ver.iD's internal
monorepo, and pull requests here are not merged. Issues are welcome, for problems and
for change requests; [CONTRIBUTING.md](CONTRIBUTING.md) says what a useful report
contains and how the SDK is developed and released.

## License

MIT

Made with ❤️ by the Ver.iD Team
