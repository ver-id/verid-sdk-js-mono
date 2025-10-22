/**
 * @internal
 * Re-export everything from core for convenience.
 * See @verid-sdk-js-mono/core module for shared types and utilities documentation.
 */
export * from '@verid-sdk-js-mono/core';

// client exports
export { createVeridGraphQLClient } from './client/index.js';
export type { GraphQLClientOptions } from './client/graphql.js';

// API exports
export * from './api/index.js';

// Export all generated types and TypedDocumentNodes
// This includes query/mutation types, input types, and pre-generated Document nodes
// Users can import specific types: import { FindManyAttributesQuery } from '@ver-id/graphql-client'
export * from './contrib/graphql/schema-types.js';
