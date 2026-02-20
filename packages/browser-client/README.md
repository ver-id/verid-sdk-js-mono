# Ver.iD Browser Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fbrowser-client.svg)](https://www.npmjs.com/package/@ver-id/browser-client)
[![Build Status](https://github.com/ver-id/verid-sdk-js-mono/workflows/CI/badge.svg)](https://github.com/ver-id/verid-sdk-js-mono/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Browser](https://img.shields.io/badge/Platform-Browser-orange.svg)](https://developer.mozilla.org/)

A powerful TypeScript SDK for integrating Ver.iD decentralized identity authentication and disclosure flows into your browser applications.

## Getting Started

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```bash
npm install @ver-id/browser-client
```

Using [yarn](https://yarnpkg.com/) in your project directory run the following command:

```bash
yarn add @ver-id/browser-client
```

Using [pnpm](https://pnpm.io/) in your project directory run the following command:

```bash
pnpm add @ver-id/browser-client
```

### Authentication

Decentralized identity apps redefine the authentication experience, shifting from traditional, password-based methods to a secure, password-less system utilizing QR codes. This modern approach enhances security, simplifies the login process, and significantly improves user experience by leveraging user-controlled, decentralized authentication.

You can quickly create an authentication flow using [Ver.iD Studio](https://spas.nebula.ver.id/) and execute the flow using authentication client:

```ts
import { VeridAuthenticationClient } from '@ver-id/browser-client';

// Create authentication client
const authenticationClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Generate authentication url
const { authenticationUrl, state } =
  await authenticationClient.generateAuthenticationUrl({
    scope: '<SCOPES_TO_REQUEST>',
  });

// Redirects the user to the Ver.iD authentication flow
window.location.href = authenticationUrl;

// Finalize the flow to get the response
const authenticationResponse = await authenticationClient.finalize();

// Decode the token
const authenticationDecodedToken = await authenticationClient.decode(
  authenticationResponse
);
```

For other comprehensive configurations and examples, see the [AUTHENTICATION.md](./AUTHENTICATION.md) document.

### Verification

Decentralized identity apps transform Know-Your-Customer (KYC) and Know-Your-Business (KYB) procedures used by large online platforms to verify their platform users or companies, effectively replacing tedious manual document verification with a swift, secure exchange of verified digital credentials. This process leverages decentralized identity apps that not only provide essential credentials like passports and ID cards but also enable direct integration with governmental identity databases globally. With regulations such as eIDAS 2.0 and DMA on the horizon, our solution is poised to meet official credential requirements, offering a future-proof method for identity verification.

You can quickly create a disclosure flow using [Ver.iD Studio](https://spas.nebula.ver.id/) and execute the flow using disclosure client:

```ts
import { VeridDisclosureClient } from '@ver-id/browser-client';

// Create disclosure client
const disclosureClient = new VeridDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_DISCLOSURE_FLOW_ID>', // Disclosure flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Generate disclosure url
const { disclosureUrl, state } = await disclosureClient.generateDisclosureUrl();

// Redirects the user to the Ver.iD disclosure flow
window.location.href = disclosureUrl;

// Finalize the flow to get the response
const disclosureResponse = await disclosureClient.finalize();

// Decode the token
const disclosureDecodedToken = await disclosureClient.decode(
  disclosureResponse
);
```

For other comprehensive configurations and examples, see the [VERIFICATION.md](./VERIFICATION.md) document.

### Issuance

Issuance flows enable you to issue verified credentials to users that they can store in their decentralized identity wallets. This allows users to prove attributes about themselves without repeatedly going through verification processes. Issued credentials can include digital IDs, certificates, licenses, or any verified information.

You can quickly create an issuance flow using [Ver.iD Studio](https://spas.nebula.ver.id/) and execute the flow using issuance client:

```ts
import { VeridIssuanceClient } from '@ver-id/browser-client';

// Create issuance client
const issuanceClient = new VeridIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_ISSUANCE_FLOW_ID>', // Issuance flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Step 1: Generate code challenge
const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();

// Step 2: Create issuance intent (required for issuance flows)
const intentId = await issuanceClient.createIssuanceIntent(
  {
    payload: {
      mapping: {
        name: 'fullName',
        email: 'emailAddress',
      },
      data: {
        attributeUuid: '<ATTRIBUTE_UUID>',
        value: 'John Doe',
      },
    },
  },
  codeChallenge
);

// Step 3: Generate issuance url with intent
const { issuanceUrl, state: finalState } =
  await issuanceClient.generateIssuanceUrl({
    intent_id: intentId,
    state, // Use the state from Step 1
    codeChallenge, // Use the code challenge from Step 1
  });

// Redirects the user to the Ver.iD issuance flow
window.location.href = issuanceUrl;

// Finalize the flow to get the response
const issuanceResponse = await issuanceClient.finalize();

// Decode the token
const issuanceDecodedToken = await issuanceClient.decode(issuanceResponse);
```

**Note:** Unlike authentication and disclosure, issuance flows **require** intent creation with a credential payload before generating the issuance URL.

For other comprehensive configurations and examples, see the [ISSUANCE.md](./ISSUANCE.md) document.

## Cache Stores

All SDK flow clients use a cache manager to persist temporary OAuth state (PKCE verifiers, nonces). By default, `SessionStorageCacheManager` is used. You can swap it for `LocalStorageCacheManager` — or provide your own `ICacheManager` implementation.

### Session Storage (default)

Persists cache to `sessionStorage`. Data is available for the lifetime of the browser tab.

```ts
import { SessionStorageCacheManager } from '@ver-id/browser-client';

const cacheManager = new SessionStorageCacheManager();
```

### Local Storage

Persists cache to `localStorage`. Data survives tab closes and browser restarts.

```ts
import { LocalStorageCacheManager } from '@ver-id/browser-client';

const cacheManager = new LocalStorageCacheManager();
```

### Custom Cache Manager

Implement the `ICacheManager` interface to integrate any storage backend:

```ts
import type { ICacheManager } from '@ver-id/browser-client';

class MyCacheManager implements ICacheManager {
  async save(key: string, value: string): Promise<void> {
    /* ... */
  }
  async get(key: string): Promise<string | null> {
    /* ... */
  }
  async remove(key: string): Promise<void> {
    /* ... */
  }
}
```

### Using a cache store with any flow client

Pass the cache manager via the `options` property:

```ts
const authClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_AUTHENTICATION_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: new LocalStorageCacheManager(),
  },
});
```

This works identically for `VeridDisclosureClient` and `VeridIssuanceClient`.

## Examples

See the [sample Vue application](https://github.com/ver-id/verid-sdk-js-mono/tree/main/apps/sample-vue-app) for a complete browser integration example.

## Troubleshooting

| Problem                                           | Fix                                                                                                                              |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `sessionStorage is not defined`                   | You're running in a non-browser environment. Use `@ver-id/node-client` for server-side flows.                                    |
| State mismatch after redirect                     | Make sure `redirectUri` matches exactly — including trailing slashes and protocol.                                               |
| CORS errors on token exchange                     | The Ver.iD authorization server must list your origin. Check your flow settings in [Ver.iD Studio](https://spas.nebula.ver.id/). |
| `OperationFailedError: Failed to discover issuer` | Verify `issuerUri` is correct and reachable from the browser.                                                                    |

## Acknowledgments

- Built with TypeScript
- Powered by [oauth4webapi](https://github.com/panva/oauth4webapi)
- Uses [jose](https://www.npmjs.com/package/jose) for JWT handling

## License

MIT
