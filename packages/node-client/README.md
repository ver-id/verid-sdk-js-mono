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
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
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
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_DISCLOSURE_FLOW_ID>', // Disclosure flow id registered in Ver.iD Studio
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

### Issuance

Issuance flows enable you to issue verified credentials to users that they can store in their decentralized identity wallets. This allows users to prove attributes about themselves without repeatedly going through verification processes. Issued credentials can include digital IDs, certificates, licenses, or any verified information.

You can quickly create an issuance flow using [Ver.iD Studio](https://spas.nebula.ver.id/) and execute the flow using issuance client:

```ts
import { VeridIssuanceClient } from '@ver-id/node-client';

// Create issuance client
const issuanceClient = new VeridIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_ISSUANCE_FLOW_ID>', // Issuance flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});

// Step 1: Generate code challenge
const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();

// Step 2: Create issuance intent (required for issuance flows)
// Only pass either payload.mapping or payload.data
const intentId = await issuanceClient.createIssuanceIntent(
  {
    payload: {
      mapping: { name: 'fullName', email: 'emailAddress' },
      data: {
        attributeUuid: '<ATTRIBUTE_UUID>',
        value: 'John Doe',
      },
    },
  },
  codeChallenge,
  { client_secret: '<YOUR_CLIENT_SECRET>' }, // Client authentication required for Node.js
);

// Step 3: Generate issuance url with intent
const { issuanceUrl, state: finalState } = await issuanceClient.generateIssuanceUrl({
  intent_id: intentId,
  state, // Use the state from Step 1
  codeChallenge, // Use the code challenge from Step 1
});

// Redirect the user to the Ver.iD issuance flow (or return URL to frontend)
// After user completes issuance, Ver.iD redirects to your redirectUri with code and state

// Finalize the flow to exchange authorization code for tokens
const issuanceResponse = await issuanceClient.finalize({
  clientAuth: {
    client_secret: '<YOUR_CLIENT_SECRET>', // Client secret from Ver.iD Studio
  },
  callbackParams: callbackUrl, // The complete callback URL with code and state
});

// Decode the token
const issuanceDecodedToken = await issuanceClient.decode(issuanceResponse);
```

**Note:** Unlike authentication and disclosure, issuance flows **require** intent creation with a credential payload before generating the issuance URL. The Node.js client requires `clientAuth` with a `client_secret` for both intent creation and the finalize step for secure server-side flows.

For other comprehensive configurations and examples, see the [ISSUANCE.md](./ISSUANCE.md) document.

## Examples

See the [apps/sample-node-server](../../apps/sample-node-server) directory for a complete Express.js server implementation demonstrating authentication and verification flows.

## Cache Stores

All SDK flow clients use a cache manager to persist temporary OAuth state (PKCE verifiers, nonces). By default, `FileStorageCacheManager` is used. You can swap it for any built-in store — or provide your own `ICacheManager` implementation.

### File Storage (default)

Persists cache to a JSON file on disk. Suitable for single-process servers and local development.

```ts
import { FileStorageCacheManager } from '@ver-id/node-client';

// Uses default directory: ~/.verid-cache/cache.json
const cacheManager = new FileStorageCacheManager();

// Or specify a custom directory
const cacheManager = new FileStorageCacheManager('/tmp/my-app-cache');
```

### Memory Storage

In-memory `Map`-based store. Fastest option but data is lost on process restart and not shared across instances.

```ts
import { MemoryStorageCacheManager } from '@ver-id/node-client';

const cacheManager = new MemoryStorageCacheManager();
```

### Redis

Shared cache for distributed / multi-instance deployments. Works with both [`redis`](https://www.npmjs.com/package/redis) (node-redis) and [`ioredis`](https://www.npmjs.com/package/ioredis).

Install one of the Redis client libraries:

```bash
npm install redis
# or
npm install ioredis
```

**Using `redis` (node-redis):**

```ts
import { createClient } from 'redis';
import { RedisCacheManager } from '@ver-id/node-client';

const redisClient = createClient({ url: 'redis://localhost:6379' });
await redisClient.connect();

const cacheManager = new RedisCacheManager({
  client: redisClient,
  options: {
    prefix: 'myapp:',    // optional, default: 'verid:'
    ttlSeconds: 600,      // optional, auto-expire after 10 minutes
  },
});
```

**Using `ioredis`:**

```ts
import Redis from 'ioredis';
import { RedisCacheManager } from '@ver-id/node-client';

const redisClient = new Redis();

const cacheManager = new RedisCacheManager({ client: redisClient });
```

### AWS DynamoDB

Serverless cache for AWS-native environments. Ideal for Lambda deployments where Redis isn't available.

Install the AWS SDK packages:

```bash
npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb
```

**DynamoDB table requirements:**
- Partition key: `pk` (String)
- Optional TTL attribute: `ttl` (Number) — [enable DynamoDB TTL](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html) on this attribute

```ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBCacheManager } from '@ver-id/node-client';

const dynamoClient = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: 'us-east-1' }),
);

const cacheManager = new DynamoDBCacheManager({
  client: dynamoClient,
  tableName: 'verid-cache',
  options: {
    prefix: 'myapp:',    // optional, default: 'verid:'
    ttlSeconds: 600,      // optional, requires DynamoDB TTL enabled on `ttl` attribute
  },
});
```

### Using a cache store with any flow client

Pass the cache manager via the `options.cacheManager` property:

```ts
const authClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_AUTHENTICATION_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: new RedisCacheManager({ client: redisClient }),
  },
});
```

This works identically for `VeridDisclosureClient` and `VeridIssuanceClient`.

## Acknowledgments

- Built with TypeScript
- Powered by [oauth4webapi](https://github.com/panva/oauth4webapi)
- Uses [jose](https://www.npmjs.com/package/jose) for JWT handling

## License

MIT
