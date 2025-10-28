# Ver.iD Node.js Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fverid-node-js.svg)](https://www.npmjs.com/package/@ver-id/node-client)
[![Build Status](https://github.com/ver-id/verid-node-js/workflows/CI/badge.svg)](https://github.com/ver-id/verid-node-js/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A powerful TypeScript SDK for integrating Ver.iD decentralized identity authentication and disclosure flows into your Node.js server applications. This package enables server-side OAuth 2.1 flows with secure client authentication using client secrets.

## Getting Started

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```bash
npm install @ver-id/node-client
```

Using [yarn](https://yarnpkg.com/) in your project directory run the following command:

```bash
yarn add @ver-id/node-client
```

Using [pnpm](https://pnpm.io/) in your project directory run the following command:

```bash
pnpm add @ver-id/node-client
```

### Authentication

Decentralized identity apps redefine the authentication experience, shifting from traditional, password-based methods to a secure, password-less system utilizing QR codes. This modern approach enhances security, simplifies the login process, and significantly improves user experience by leveraging user-controlled, decentralized authentication.

You can quickly create an authentication flow using [Ver.iD Studio](https://spas.nebula.ver.id/) and execute the flow using authentication client:

```ts
import { VeridAuthenticationClient } from '@ver-id/node-client';

// Create authentication client
const authenticationClient = new VeridAuthenticationClient({
  apiUrl: '<VERID_OAUTH_API_URL>', // Ver.iD OAuth API url
  authenticationFlowId: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Generate authentication url
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  scope: '<SCOPES_TO_REQUEST>',
});

// Redirect the user to the Ver.iD authentication flow (or return URL to frontend)
// After user completes authentication, Ver.iD redirects to your redirectUri with code and state

// Finalize the flow to exchange authorization code for tokens
const authenticationResponse = await authenticationClient.finalize({
  clientAuth: {
    client_secret: '<YOUR_CLIENT_SECRET>', // Client secret from Ver.iD Studio
  },
  callbackParams: callbackUrl, // The complete callback URL with code and state
});

// Decode the ID token
const authenticationDecodedToken = await authenticationClient.decode(authenticationResponse);
```

**Note:** Unlike browser clients, the Node.js client requires explicit `clientAuth` with a `client_secret` during the finalize step. This enables secure server-side authentication flows where the client secret is never exposed to the frontend.

For other comprehensive configurations and examples, see the [AUTHENTICATION.md](./AUTHENTICATION.md) document.

### Verification

Decentralized identity apps transform Know-Your-Customer (KYC) and Know-Your-Business (KYB) procedures used by large online platforms to verify their platform users or companies, effectively replacing tedious manual document verification with a swift, secure exchange of verified digital credentials. This process leverages decentralized identity apps that not only provide essential credentials like passports and ID cards but also enable direct integration with governmental identity databases globally. With regulations such as eIDAS 2.0 and DMA on the horizon, our solution is poised to meet official credential requirements, offering a future-proof method for identity verification.

You can quickly create a disclosure flow using [Ver.iD Studio](https://spas.nebula.ver.id/) and execute the flow using disclosure client:

```ts
import { VeridDisclosureClient } from '@ver-id/node-client';

// Create disclosure client
const disclosureClient = new VeridDisclosureClient({
  apiUrl: '<VERID_OAUTH_API_URL>', // Ver.iD OAuth API url
  disclosureFlowId: '<VERID_DISCLOSURE_FLOW_ID>', // Disclosure flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Generate disclosure url
const { disclosureUrl, state } = await disclosureClient.generateDisclosureUrl();

// Redirect the user to the Ver.iD disclosure flow (or return URL to frontend)
// After user completes disclosure, Ver.iD redirects to your redirectUri with code and state

// Finalize the flow to exchange authorization code for tokens
const disclosureResponse = await disclosureClient.finalize({
  clientAuth: {
    client_secret: '<YOUR_CLIENT_SECRET>', // Client secret from Ver.iD Studio
  },
  callbackParams: callbackUrl, // The complete callback URL with code and state
});

// Decode the token
const disclosureDecodedToken = await disclosureClient.decode(disclosureResponse);
```

**Note:** Unlike browser clients, the Node.js client requires explicit `clientAuth` with a `client_secret` during the finalize step. This enables secure server-side disclosure flows where the client secret is never exposed to the frontend.

For other comprehensive configurations and examples, see the [VERIFICATION.md](./VERIFICATION.md) document.

## Examples

See the [apps/sample-node-server](../../apps/sample-node-server) directory for a complete Express.js server implementation demonstrating authentication and verification flows.

## Acknowledgments

- Built with TypeScript
- Powered by [oauth4webapi](https://github.com/panva/oauth4webapi)
- Uses [jose](https://www.npmjs.com/package/jose) for JWT handling

## License

MIT
