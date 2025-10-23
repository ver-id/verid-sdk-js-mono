# Writing Custom GraphQL Queries

This guide explains how to write and execute custom GraphQL queries using the Ver.iD GraphQL client.

## Table of Contents

- [Overview](#overview)
- [Basic Setup](#basic-setup)
- [Writing Custom Queries](#writing-custom-queries)
- [Type Generation](#type-generation)
- [Using TypedDocumentNode](#using-typeddocumentnode)
- [Query Examples](#query-examples)
- [Mutation Examples](#mutation-examples)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

While the SDK provides pre-built helper functions like `getAttribute`, `getCredential`, etc., you may need to write custom queries for:

- Complex filtering and sorting requirements
- Custom field selections
- Combining multiple queries
- Advanced GraphQL features (fragments, unions, etc.)
- Mutations and subscriptions

## Basic Setup

First, create your GraphQL client:

```typescript
import { createVeridGraphQLClient } from '@ver-id/graphql-client';

const client = createVeridGraphQLClient({
  uri: 'https://api.ver.id/graphql',
  getAccessToken: async () => {
    // Return your OAuth access token
    return 'your-access-token';
  },
});
```

## Writing Custom Queries

### Method 1: Using `gql` Template Tag

The simplest way to write custom queries is using Apollo's `gql` tag:

```typescript
import { gql } from '@apollo/client';

const MY_QUERY = gql`
  query GetAttributesByCredential($credentialId: UUID!) {
    findManyAttributes(
      input: { filtering: [{ field: CREDENTIAL_UUID, type: EQUAL, value: $credentialId }] }
    ) {
      edges {
        node {
          uuid
          name
          description
          dataType
        }
      }
    }
  }
`;

// Execute the query
const response = await client.query({
  query: MY_QUERY,
  variables: {
    credentialId: 'credential-uuid-here',
  },
});

console.log(response.data.findManyAttributes.edges);
```

### Method 2: Using GraphQL Code Generator (Recommended)

For better type safety, use GraphQL Code Generator to generate TypedDocumentNode:

1. **Create a `.graphql` file** in `src/operations/query/`:

```graphql
# src/operations/query/my-custom-query.graphql

query GetAttributesByCredential($credentialId: UUID!) {
  findManyAttributes(
    input: { filtering: [{ field: CREDENTIAL_UUID, type: EQUAL, value: $credentialId }] }
  ) {
    edges {
      node {
        uuid
        name
        description
        dataType
        locale {
          edges {
            node {
              uuid
              locale
              name
              description
            }
          }
        }
      }
    }
  }
}
```

2. **Run the code generator**:

```bash
npm run codegen
```

3. **Use the generated types**:

```typescript
import { GetAttributesByCredentialDocument } from './operations/query/my-custom-query';

const response = await client.query({
  query: GetAttributesByCredentialDocument,
  variables: {
    credentialId: 'credential-uuid-here',
  },
});

// Fully typed response!
const attributes = response.data.findManyAttributes.edges.map((edge) => edge.node);
```

## Type Generation

The GraphQL Code Generator is configured with the `near-operation-file` preset, which means:

- Types are generated next to your `.graphql` files
- Each query gets its own TypedDocumentNode
- Full TypeScript inference for variables and responses
- Auto-completion in your IDE

### Configuration

The codegen is configured in `codegen.ts`:

```typescript
{
  schema: 'https://api.ver.id/graphql',
  documents: 'src/operations/**/*.graphql',
  generates: {
    // Generated types appear next to your .graphql files
    'src/operations/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.ts',
        baseTypesPath: '../../types/schema-types',
      },
      plugins: [
        'typescript-operations',
        'typed-document-node',
      ],
    },
  },
}
```

## Using TypedDocumentNode

TypedDocumentNode provides full type safety for your queries:

```typescript
import { TypedDocumentNode } from '@apollo/client';
import { GetAttributesByCredentialDocument } from './operations/query/my-custom-query';

async function fetchAttributesByCredential(client: ApolloClient, credentialId: string) {
  const { data, error } = await client.query({
    query: GetAttributesByCredentialDocument,
    variables: { credentialId }, // TypeScript knows what variables are required!
  });

  if (error) {
    throw new Error(`Query failed: ${error.message}`);
  }

  // data is fully typed!
  return data.findManyAttributes.edges.map((edge) => ({
    id: edge.node.uuid,
    name: edge.node.name,
    description: edge.node.description,
  }));
}
```

## Query Examples

### Example 1: Filtering Attributes

```graphql
query FilterAttributes($dataType: String!, $locale: String!) {
  findManyAttributes(
    input: {
      filtering: [{ field: DATA_TYPE, type: EQUAL, value: $dataType }]
      localeFiltering: [{ field: LOCALE, type: EQUAL, value: $locale }]
    }
  ) {
    edges {
      node {
        uuid
        name
        dataType
        locale {
          edges {
            node {
              locale
              name
              description
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
```

### Example 2: Deep Hierarchy Query

```graphql
query GetAttributeWithFullHierarchy($uuid: UUID!) {
  findAttribute(uuid: $uuid) {
    uuid
    name
    description
    dataType
    locale {
      edges {
        node {
          locale
          name
          description
        }
      }
    }
    credential {
      uuid
      name
      issuer {
        uuid
        name
        scheme {
          uuid
          name
          provider {
            uuid
            name
          }
        }
      }
    }
  }
}
```

### Example 3: Pagination

```graphql
query GetAttributesPaginated($first: Int!, $after: String) {
  findManyAttributes(input: { pagination: { first: $first, after: $after } }) {
    edges {
      cursor
      node {
        uuid
        name
        description
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

Usage:

```typescript
let cursor: string | undefined;
let hasMore = true;

while (hasMore) {
  const response = await client.query({
    query: GetAttributesPaginatedDocument,
    variables: {
      first: 50,
      after: cursor,
    },
  });

  const { edges, pageInfo } = response.data.findManyAttributes;

  // Process edges
  edges.forEach((edge) => {
    console.log(edge.node);
  });

  cursor = pageInfo.endCursor;
  hasMore = pageInfo.hasNextPage;
}
```

## Mutation Examples

### Example 1: Update Attribute

```graphql
mutation UpdateAttribute($uuid: UUID!, $name: String, $description: String) {
  updateAttribute(uuid: $uuid, input: { name: $name, description: $description }) {
    uuid
    name
    description
    updatedAt
  }
}
```

### Example 2: Create Credential

```graphql
mutation CreateCredential($input: CreateCredentialInput!) {
  createCredential(input: $input) {
    uuid
    name
    description
    issuer {
      uuid
      name
    }
  }
}
```

## Best Practices

### 1. **Use GraphQL Code Generator**

Always use code generation for production code:

```bash
# Generate types whenever you add/modify queries
npm run codegen
```

### 2. **Keep Queries Focused**

Write specific queries for specific use cases instead of fetching everything:

```graphql
# ❌ Bad: Over-fetching
query GetEverything {
  findManyAttributes {
    edges {
      node {
        uuid
        name
        description
        # ... 50 more fields
      }
    }
  }
}

# ✅ Good: Fetch only what you need
query GetAttributeNames {
  findManyAttributes {
    edges {
      node {
        uuid
        name
      }
    }
  }
}
```

### 3. **Handle Errors Properly**

```typescript
import { GraphQLOperationError } from '@ver-id/graphql-client';

try {
  const response = await client.query({ query: MyQuery });

  if (response.error) {
    throw new GraphQLOperationError(response.error);
  }

  return response.data;
} catch (error) {
  if (error instanceof GraphQLOperationError) {
    console.error('GraphQL error:', error.message);
    console.error('Extensions:', error.extensions);
  }
  throw error;
}
```

### 4. **Use Fragments for Reusability**

```graphql
fragment AttributeFields on Attribute {
  uuid
  name
  description
  dataType
}

query GetAttribute($uuid: UUID!) {
  findAttribute(uuid: $uuid) {
    ...AttributeFields
    locale {
      edges {
        node {
          locale
          name
        }
      }
    }
  }
}

query GetAttributes {
  findManyAttributes {
    edges {
      node {
        ...AttributeFields
      }
    }
  }
}
```

### 5. **Use Variables, Not String Interpolation**

```typescript
// ❌ Bad: SQL injection-like vulnerability
const query = gql`
  query {
    findAttribute(uuid: "${userInput}") {
      name
    }
  }
`;

// ✅ Good: Safe parameterized query
const query = gql`
  query GetAttribute($uuid: UUID!) {
    findAttribute(uuid: $uuid) {
      name
    }
  }
`;

await client.query({
  query,
  variables: { uuid: userInput },
});
```

### 6. **Leverage Apollo Client Caching**

```typescript
// First query fetches from network
const response1 = await client.query({
  query: GetAttributeDocument,
  variables: { uuid: 'some-uuid' },
});

// Second query returns from cache (unless cache-first policy changed)
const response2 = await client.query({
  query: GetAttributeDocument,
  variables: { uuid: 'some-uuid' },
  fetchPolicy: 'cache-first', // default
});

// Force network fetch
const response3 = await client.query({
  query: GetAttributeDocument,
  variables: { uuid: 'some-uuid' },
  fetchPolicy: 'network-only',
});
```

## Troubleshooting

### Types Not Generated

If types aren't being generated after running `npm run codegen`:

1. Check your `.graphql` file is in the correct location (`src/operations/**/*.graphql`)
2. Verify your query syntax is valid
3. Make sure the schema URL is accessible
4. Check for TypeScript errors in the codegen output

### TypeScript Errors

If you get type errors when using generated types:

```typescript
// Make sure you import from the generated file
import { MyQueryDocument } from './operations/query/my-query';

// Not from the schema types
// ❌ import { MyQuery } from './contrib/graphql/schema-types';
```

### Query Not Working

If your query executes but returns unexpected results:

1. Test the query in GraphQL Playground/GraphiQL first
2. Check the network tab for the actual request/response
3. Verify your authentication token is valid
4. Check for GraphQL errors in the response:

```typescript
const response = await client.query({ query: MyQuery });

if (response.errors) {
  console.error('GraphQL errors:', response.errors);
}
```

### Cache Issues

If you're seeing stale data:

```typescript
// Clear specific cache entry
client.cache.evict({
  id: client.cache.identify({ __typename: 'Attribute', uuid: 'some-uuid' }),
});

// Or clear entire cache
await client.clearStore();

// Or refetch query
await client.refetchQueries({
  include: [MyQueryDocument],
});
```

## Advanced Topics

### Using with React

```typescript
import { useQuery } from '@apollo/client';
import { GetAttributesDocument } from './operations/query/get-attributes';

function AttributeList() {
  const { data, loading, error } = useQuery(GetAttributesDocument, {
    variables: { first: 10 },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.findManyAttributes.edges.map(edge => (
        <li key={edge.node.uuid}>{edge.node.name}</li>
      ))}
    </ul>
  );
}
```

### Batch Queries

```typescript
const [attributes, credentials] = await Promise.all([
  client.query({ query: GetAttributesDocument }),
  client.query({ query: GetCredentialsDocument }),
]);
```

### Optimistic Updates

```typescript
await client.mutate({
  mutation: UpdateAttributeDocument,
  variables: { uuid: 'some-uuid', name: 'New Name' },
  optimisticResponse: {
    updateAttribute: {
      __typename: 'Attribute',
      uuid: 'some-uuid',
      name: 'New Name',
      updatedAt: new Date().toISOString(),
    },
  },
});
```

## Additional Resources

- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Code Generator Documentation](https://the-guild.dev/graphql/codegen)
- [Ver.iD API Documentation](https://docs.ver.id)
- [Main README](./README.md)

## Support

For questions and issues:

- GitHub Issues: [ver-id/verid-sdk-js](https://github.com/ver-id/verid-sdk-js/issues)
- Documentation: [Ver.iD Docs](https://docs.ver.id)
