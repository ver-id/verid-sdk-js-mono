# Ver.iD Browser Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fverid-browser-js.svg)](https://www.npmjs.com/package/@ver-id/browser-client)
[![Build Status](https://github.com/ver-id/verid-browser-js/workflows/CI/badge.svg)](https://github.com/ver-id/verid-browser-js/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

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
  authenticationFlowId: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Generate authentication url
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  scope: '<SCOPES_TO_REQUEST>',
});

// Redirects the user to the Ver.iD authentication flow
window.location.href = authenticationUrl;

// Finalize the flow to get the response
const authenticationResponse = await authenticationClient.finalize();

// Decode the token
const authenticationDecodedToken = await authenticationClient.decode(authenticationResponse);
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
  disclosureFlowId: '<VERID_DISCLOSURE_FLOW_ID>', // Disclosure flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Generate disclosure url
const { disclosureUrl, state } = await disclosureClient.generateDisclosureUrl();

// Redirects the user to the Ver.iD disclosure flow
window.location.href = disclosureUrl;

// Finalize the flow to get the response
const disclosureResponse = await disclosureClient.finalize();

// Decode the token
const disclosureDecodedToken = await disclosureClient.decode(disclosureResponse);
```

For other comprehensive configurations and examples, see the [VERIFICATION.md](./VERIFICATION.md) document.

## Examples

See the [examples](./examples) directory for complete usage examples.

## Acknowledgments

- Built with TypeScript
- Powered by [oauth4webapi](https://github.com/panva/oauth4webapi)
- Uses [jose](https://www.npmjs.com/package/jose) for JWT handling

## License

MIT
