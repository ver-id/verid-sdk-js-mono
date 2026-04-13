// client exports
export { createVeridGraphQLClient } from './client/index.js';
export type { GraphQLClientOptions } from './client/graphql.js';

// API exports
export * from './api/index.js';

// Export all generated types and TypedDocumentNodes
// This includes query/mutation types, input types, and pre-generated Document nodes
// Users can import specific types: import { FindManyAttributesQuery } from '@ver-id/graphql-client'
export * from './contrib/graphql/schema-types.js';

/**
 * Export core errors
 */
export {
  InvalidArgumentError,
  InvalidAssertionError,
  InvalidResponseError,
  OperationFailedError,
  UnknownError
} from '@verid-sdk-js-mono/core/error';

/**
 * Export core utilities
 */
export {
  assert,
  assertArray,
  assertBoolean,
  assertDate,
  assertFunction,
  assertJsonValue,
  assertNumber,
  assertObject,
  assertString,
  assertUUID,
  assertUrlString,
} from '@verid-sdk-js-mono/core/utils';

/**
 * Export core types
 */
export type {
  AttributeEntity,
  AttributeEntityDeep,
  AttributeEntityEnriched,
  CredentialEntity,
  CredentialTrustIssuerEntity,
  IssuerEntity,
  TrustEntity,
  TrustAppEntity,
  TrustIssuerEntity,
  LocaleEntity
} from '@verid-sdk-js-mono/core/types';
