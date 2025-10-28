# Ver.iD SDK for JavaScript

The Ver.iD SDK for javascript which enables you to easily work with Ver.iD services.

## Packages

### [@ver-id/browser-client](./packages/browser-client)

The JavaScript SDK for browser applications to perform authentication and verification flows.

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
  apiUrl: '<VERID_OAUTH_API_URL>', // Ver.iD OAuth API url
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

For comprehensive configurations and examples, see the [browser-client.](./packages/browser-client/README.md)

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

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## Example Application

Want to see the SDKs in action? Check out the [Vue 3 Example App](./apps/sample-vue-app) that demonstrates:

- Complete OAuth authentication flow with PKCE
- Token exchange and JWT decoding
- GraphQL queries
- Interactive code examples

### Quick Start

```bash
# Clone the repository
git clone https://github.com/ver-id/verid-sdk-js-mono
cd verid-sdk-js-mono

# Install dependencies and build
npm install
npx nx run-many -t build

# Configure your Ver.iD credentials
cd apps/sample-vue-app
cp .env.example .env
# Edit .env with your credentials

# Run the example app
cd ../..
npx nx serve sample-vue-app 
```

Visit `http://localhost:4200` to explore the examples.

For detailed instructions, see [apps/sample-vue-app/README.md](./apps/sample-vue-app/README.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines and commit message format.

## License

MIT

Made with ❤️ by the Ver.iD Team
