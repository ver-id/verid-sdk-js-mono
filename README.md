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
- Automatic token management with session/local storage caching
- JWT token decoding and validation

**Use Cases:**

- Implementing password-less login in web applications
- Adding identity verification (KYC/KYB) to your platform
- Accessing verified user credentials and attributes
- Building decentralized identity flows

### Authentication flow

```ts
import { VeridAuthenticationClient } from '@ver-id/browser-client';

// Create authentication client
const authenticationClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  clientId: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Generate authentication url
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  scope: '<SCOPES_TO_REQUEST>',
});

// Redirects the user to the Ver.iD authentication flow
window.location.href = authenticationUrl;

// User authenticates and is redirected back to your callback URL
// Finalize the flow to get the response
const authenticationResponse = await authenticationClient.finalize();

// Decode the token
const authenticationDecodedToken = await authenticationClient.decode(authenticationResponse);
```

For comprehensive configurations and examples, see the [browser-client.](./packages/browser-client/README.md)

### [@ver-id/node-client](./packages/node-client)

The TypeScript SDK for Node.js server applications to perform authentication and verification flows.

**Features:**

- OAuth 2.1 Authentication (Server-side)
- Verification for KYC/KYB flows
- Default PKCE support
- JWT token decoding and validation
- Secure server-side token handling

**Use Cases:**

- Implementing password-less login with server-side OAuth flow
- Adding identity verification (KYC/KYB) to your platform
- Accessing verified user credentials and attributes
- Building secure backend authentication services

### Authentication flow

```ts
import { VeridAuthenticationClient } from '@ver-id/node-client';

// Create authentication client
const authenticationClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  clientId: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Generate authentication url
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  scope: '<SCOPES_TO_REQUEST>',
});

// Redirect the user to the Ver.iD authentication flow. It can be done via browser or backend based on your system architecture.
// User authenticates and is redirected back to your callback URL

// In your callback handler, finalize the flow to get the response
const authenticationResponse = await authenticationClient.finalize({
  clientAuth: { client_secret: 'YOUR_CLIENT_SECRET' },
  callbackParams: callbackUrl.searchParams,
});

// Decode the token
const authenticationDecodedToken = await authenticationClient.decode(authenticationResponse);
```

For comprehensive configurations and examples, see the [node-client.](./packages/node-client/README.md)

### [@ver-id/embedded-browser-client](./packages/embedded-browser-client) + [@ver-id/embedded-node-client](./packages/embedded-node-client)

A matched pair of SDKs that run a Ver.iD flow **inside an iframe on your own page** instead of redirecting the user away. The browser half mounts and supervises the frame; the Node half holds the PKCE verifier, receives a signed webhook, and exchanges the authorization code. Neither works without the other.

**Features:**

- In-page identity flows — no full-page redirect, no popup
- PKCE verifier and client secret never leave the server
- Origin-pinned `postMessage` lifecycle events (`ready`, `complete`, `error`, `cancel`)
- HMAC-signed server-to-server webhook carrying the authorization code
- Same authentication, disclosure and issuance clients as the redirect SDKs

**Use Cases:**

- Keeping users inside your checkout, onboarding or account flow
- Embedding verification in an app shell that cannot survive a redirect
- Any surface where you control the page but want Ver.iD to render the flow

### Embedded flow

```ts
// ── SERVER ─────────────────────────────────────────────────────────────────
import { VeridEmbeddedDisclosureClient } from '@ver-id/embedded-node-client';

const disclosureClient = new VeridEmbeddedDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_DISCLOSURE_FLOW_ID>',
  // No redirectUri in embedded mode — the code is bound to the client via PKCE.
});

// POST /api/disclosure/embedded/start
const bootstrap = await disclosureClient.createEmbeddedSession({
  scope: '<SCOPES_TO_REQUEST>',
  webhookUri: 'https://your-public-host/api/disclosure/embedded/webhook',
});

// bootstrap = { clientId, scope, state, codeChallenge, webhookUri, gatewayUri }
// The code_verifier stays server-side, cached under bootstrap.state.
res.json(bootstrap);
```

```ts
// ── BROWSER ────────────────────────────────────────────────────────────────
import { mountVeridEmbeddedComponent } from '@ver-id/embedded-browser-client';

const bootstrap = await fetch('/api/disclosure/embedded/start', { method: 'POST' }).then((r) =>
  r.json(),
);

const veridComponent = mountVeridEmbeddedComponent({
  container: document.getElementById('verid-embed'),
  ...bootstrap,
});

veridComponent.addEventListener('complete', () => {
  // A lifecycle signal, not a result: the token arrives on your backend via the
  // webhook. Poll your own endpoint for it.
  pollForResult(bootstrap.state);
});
```

```ts
// ── SERVER ─────────────────────────────────────────────────────────────────
// The webhook route needs the RAW body — the HMAC covers the exact bytes.
app.use('/api/disclosure/embedded/webhook', express.text({ type: '*/*' }));
app.use(express.json());

app.post('/api/disclosure/embedded/webhook', async (req, res) => {
  const result = await disclosureClient.finalizeEmbedded({
    rawBody: req.body,
    signature: req.header('x-signature-256'),
    secret: process.env.VERID_EMBEDDED_DISCLOSURE_WEBHOOK_SECRET,
    clientAuth: { client_secret: 'YOUR_CLIENT_SECRET' },
  });

  const token = await disclosureClient.decode(result, assertDisclosureV1JwtPayload);
  resultStore.resolve(result.state, token);

  res.json({ received: true });
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
the cache contract, the embedded wire protocol, the error hierarchy and the shared types. It is
published as its own package and listed as a dependency of the other clients, so a fix lands once
instead of being duplicated into five bundles.

You normally do not install it directly — the client packages re-export what you need. Reach for it
when you are building your own client on top of the Ver.iD protocol.

For details, see the [core](./packages/core/README.md) README.

### Prerequisites

- Node.js >= 18.0.0
- yarn >= 4.0.0

## Example Application

Want to see the SDKs in action? Check out the [Vue 3 Example App](./apps/sample-vue-app) that demonstrates:

- Complete OAuth authentication flow with PKCE
- Embedded (iframe) flows for authentication, disclosure and issuance
- Token exchange and JWT decoding
- GraphQL queries
- Interactive code examples

### Quick Start

```bash
# Clone the repository
git clone https://github.com/ver-id/verid-sdk-js-mono
cd verid-sdk-js-mono

# Install dependencies and build
yarn install
yarn nx run-many -t build

# Configure your Ver.iD credentials for the Vue app
cd apps/sample-vue-app
cp .env.example .env
# Edit .env with your credentials

# Configure your Ver.iD credentials for the Node server (required for Node.js flow)
cd ../sample-node-server
cp .env.example .env
# Edit .env with your credentials

# Run the example app
cd ../..
yarn nx serve sample-vue-app

# In a separate terminal, run the Node.js backend server (required for Node.js flow)
yarn nx serve sample-node-server
```

Visit `http://localhost:4200` to explore the examples.

**Note:** The Node.js flow requires both the Vue app and the Node server to be running:
- Vue app: `http://localhost:4200` (frontend)
- Node server: `http://localhost:3000` (backend API for server-side OAuth flow)

### Execution modes

Each of the three flow scopes — authentication, disclosure and issuance — can be run three ways from the example app:

| Mode | What happens | Packages |
| --- | --- | --- |
| **Browser** | Full-page redirect to Ver.iD, driven entirely from the SPA | `@ver-id/browser-client` |
| **Node.js** | Full-page redirect to Ver.iD, driven from the backend | `@ver-id/node-client` |
| **Embedded** | The flow renders in an iframe on the page; the backend finalizes it from a signed webhook | `@ver-id/embedded-browser-client` + `@ver-id/embedded-node-client` |

### Embedded mode prerequisites

Embedded mode needs two things beyond the redirect modes.

**1. A publicly reachable webhook URL.** Ver.iD delivers the authorization code by POSTing to your server directly, so `http://localhost:3000` is never reachable. Set `VERID_WEBHOOK_PUBLIC_URL` in `apps/sample-node-server/.env` to a host Ver.iD can resolve:

```bash
# Start a tunnel to the Node server
cloudflared tunnel --url http://localhost:3000
# ...then paste the printed URL:
VERID_WEBHOOK_PUBLIC_URL=https://your-tunnel-subdomain.trycloudflare.com
```

The server refuses to start an embedded session when this points at `localhost`, rather than leaving the browser waiting on a webhook that will never arrive. `ngrok http 3000` works equally well. If you run Ver.iD in a local Garden cluster, its wildcard DNS already resolves your profile host from inside the cluster, so `http://<profile>.ver.garden:3000` works without a tunnel — bind the server with `HOST=0.0.0.0` so it accepts connections from outside the loopback interface.

**2. Flows registered for embedded delivery.** Each scope needs a flow whose registration includes your page origin as an allowed embed origin, your webhook URL, and a webhook signing secret. Configure them per scope:

```bash
# apps/sample-node-server/.env
VERID_EMBEDDED_DISCLOSURE_FLOW_ID=<flow id>
VERID_EMBEDDED_DISCLOSURE_WEBHOOK_SECRET=<signing secret>
VERID_EMBEDDED_DISCLOSURE_SCOPES=disclosure

# apps/sample-vue-app/.env — the app shows the id, the browser never sees the secret
VITE_VERID_EMBEDDED_DISCLOSURE_FLOW_ID=<flow id>
```

Set `VERID_GATEWAY_URI` when the Ver.iD flow UI is hosted separately from the OAuth issuer; it otherwise defaults to the issuer origin. Note that `VERID_EMBEDDED_AUTHENTICATION_SCOPES` must request more than `openid` alone — `openid profile` is the working default.


## Changelogs

Each package keeps its own changelog, generated on release from conventional commits:

- [@ver-id/browser-client](./packages/browser-client/CHANGELOG.md)
- [@ver-id/node-client](./packages/node-client/CHANGELOG.md)
- [@ver-id/graphql-client](./packages/graphql-client/CHANGELOG.md)
- [@ver-id/core](./packages/core/CHANGELOG.md)
- [@ver-id/embedded-browser-client](./packages/embedded-browser-client/CHANGELOG.md)
- [@ver-id/embedded-node-client](./packages/embedded-node-client/CHANGELOG.md)

Upgrading between versions is covered in [UPGRADING.md](./UPGRADING.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines and commit message format.

## License

MIT

Made with ❤️ by the Ver.iD Team
