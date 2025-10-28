# @ver-id/graphql-client

Type-safe GraphQL client for querying Ver.iD GraphQL APIs. Built with Apollo Client and fully type-generated from the GraphQL schema.

## Features

- **Type-Safe**: Full TypeScript support with auto-generated types from GraphQL schema
- **Apollo Client**: Built on industry-standard Apollo Client
- **Automatic Authentication**: OAuth2 client credentials flow handled automatically
- **Error Handling**: Comprehensive error types for GraphQL, network, and validation errors
- **Helper functions**: Pre-built functions for common queries

## Getting Started

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```bash
npm install @ver-id/graphql-client
```

Using [yarn](https://yarnpkg.com/) in your project directory run the following command:

```bash
yarn add @ver-id/graphql-client
```

Using [pnpm](https://pnpm.io/) in your project directory run the following command:

```bash
pnpm add @ver-id/graphql-client
```

### Create the GraphQL Client

Ver.iD GraphQL SDK provides a graphql client which is a thin wrapper over [Apollo Client](https://github.com/apollographql/apollo-client) featuring built-in authorization, caching and error handling.

It will initialize an instance of apollo client.

```typescript
import { createVeridGraphQLClient } from '@ver-id/graphql-client';

const client = createVeridGraphQLClient({
  endpoint: '<VERID_GRAPHQL_ENDPOINT>'',
  authorizationServer: '<VERID_AUTHORIZATION_SERVER>'',
  clientId: '<GRAPHQL_CLIENT_ID>',
  clientSecret: 'GRAPHQL_CLIENT_SECRET',
});
```

### Use helper functions

All helper functions can be called with an instance of Apollo Client. You can use `createVeridGraphQLClient` to create one or create your own client.

```typescript
import { getAttribute, getAttributes, getAttributesWithHierarchy } from '@ver-id/graphql-client';

// Fetch a single attribute
const attribute = await getAttribute(client, 'attribute-uuid');

// Fetch multiple attributes
const attributes = await getAttributes(client, ['uuid1', 'uuid2']);

// Fetch attributes with full hierarchy (credential → issuer → scheme → provider)
const attributesDeep = await getAttributesWithHierarchy(client, ['uuid1']);
console.log(attributesDeep[0].credential.issuer.scheme.provider.name);
```

### Configuration

```typescript
interface GraphQLClientOptions {
  /** GraphQL API endpoint */
  endpoint: string;

  /** OAuth2 authorization server URL */
  authorizationServer: string;

  /** OAuth2 GraphQL client ID */
  clientId: string;

  /** OAuth2 GraphQL client secret */
  clientSecret: string;

  /** Optional Apollo Client cache (default: InMemoryCache) */
  cache?: InMemoryCache;
}
```

### API Reference

#### Attributes

```typescript
// Fetch single attribute
getAttribute(client: ApolloClient, uuid: UUID): Promise<AttributeEntity>
// Fetch multiple attributes
getAttributes(client: ApolloClient, uuids: UUID[]): Promise<AttributeEntity[]>
// Fetch attributes with full hierarchy (includes credential, issuer, scheme, provider)
getAttributesWithHierarchy(client: ApolloClient, uuids: UUID[]): Promise<AttributeEntityDeep[]>
```

#### Credentials

```typescript
// Fetch single credential
getCredential(client: ApolloClient, uuid: UUID): Promise<CredentialEntity>
// Fetch multiple credentials
getCredentials(client: ApolloClient, uuids: UUID[]): Promise<CredentialEntity[]>
```

#### Issuers

```typescript
// Fetch single issuer
getIssuer(client: ApolloClient, uuid: UUID): Promise<IssuerEntity>
// Fetch multiple issuers
getIssuers(client: ApolloClient, uuids: UUID[]): Promise<IssuerEntity[]>
```

#### Schemes

```typescript
// Fetch single scheme
getScheme(client: ApolloClient, uuid: UUID): Promise<SchemeEntity>
// Fetch multiple schemes
getSchemes(client: ApolloClient, uuids: UUID[]): Promise<SchemeEntity[]>
```

#### Providers

```typescript
// Fetch single provider
getProvider(client: ApolloClient, uuid: UUID): Promise<ProviderEntity>
// Fetch multiple providers
getProviders(client: ApolloClient, uuids: UUID[]): Promise<ProviderEntity[]>
```

## Advanced Usage

### Custom Queries

You can write custom queries using the generated types:

```typescript
import { graphql } from '@ver-id/graphql-client';
import type { ResultOf, VariablesOf } from '@graphql-typed-document-node/core';

const MyCustomQuery = graphql(`
  query GetCustomData($uuid: UUID!) {
    findAttribute(uuid: $uuid) {
      uuid
      name
      credential {
        name
      }
    }
  }
`);

type QueryResult = ResultOf<typeof MyCustomQuery>;
type QueryVariables = VariablesOf<typeof MyCustomQuery>;

const { data } = await client.query({
  query: MyCustomQuery,
  variables: { uuid: 'attribute-uuid' },
});

// data is fully typed!
```

See [CUSTOM_QUERIES.md](./CUSTOM_QUERIES.md) for detailed guide.

### Generated Types

All GraphQL schema types are exported:

```typescript
import type {
  Attribute,
  Credential,
  Issuer,
  Scheme,
  Provider,
  FindManyAttributesInput,
  AttributeFilteringField,
  FilteringType,
} from '@ver-id/graphql-client';
```

### Pre-Generated Query Documents

```typescript
import {
  FindAttributeDocument,
  FindManyAttributesDocument,
  FindManyAttributesDeepDocument,
  FindCredentialDocument,
  // ... and more
} from '@ver-id/graphql-client';
```

## Type Definitions

### Entity Types

The SDK provides domain entity types that are flattened and simplified from the GraphQL schema:

- `AttributeEntity` - Attribute metadata
- `AttributeEntityDeep` - Attribute with full hierarchy
- `CredentialEntity` - Credential metadata
- `IssuerEntity` - Issuer metadata
- `SchemeEntity` - Scheme metadata
- `ProviderEntity` - Provider metadata

### GraphQL Schema Types

Raw GraphQL types are also exported:

- `Attribute` - Raw GraphQL Attribute type
- `Credential` - Raw GraphQL Credential type
- etc.

## Examples

See the [examples](./examples) directory.

## Acknowledgments

- Built with TypeScript
- Powered by [apollo](https://github.com/apollographql/apollo-client)

## License

MIT
