// Clients
export {
  VeridEmbeddedDisclosureClient,
  VeridEmbeddedAuthenticationClient,
  VeridEmbeddedIssuanceClient,
} from './client/index.js';
export type {
  EmbeddedClientConfig,
  EmbeddedFinishSessionParams,
  EmbeddedWebhookHeaders,
  VeridEmbeddedOutcome,
  VeridEmbeddedSession,
  VeridEmbeddedUnknownEvent,
} from './client/index.js';

// Cache managers
export {
  FileStorageCacheManager,
  MemoryStorageCacheManager,
  RedisCacheManager,
  DynamoDBCacheManager,
} from './cache/index.js';
export type {
  RedisCacheManagerConfig,
  RedisCompatibleClient,
  DynamoDBCacheManagerConfig,
  DynamoDBCompatibleClient,
} from './cache/index.js';
export type { ICacheManager } from '@ver-id/core';
export type { CacheManagerOptions } from '@ver-id/core/cache';

// Sessions and results
export type {
  AuthenticationResult,
  AuthenticationSessionInput,
  DisclosureResult,
  DisclosureSessionInput,
  IssuanceResult,
  IssuanceSessionExtra,
  IssuanceSessionInput,
  VeridSessionInput,
  VeridTokenResult,
  VeridUnknownTokenResult,
} from '@ver-id/core';

// Errors
export {
  VeridError,
  InvalidArgumentError,
  InvalidAssertionError,
  InvalidResponseError,
  AuthorizationResponseError,
  TokenGrantError,
  OperationFailedError,
  SessionFinishError,
} from '@ver-id/core/error';

// Result payloads
export {
  OutputCredentialType,
  OpenIdJwtCompanyIdentifierType,
  OpenIdJwtCompanyType,
  OpenIdJwtNINIdentifierType,
} from '@ver-id/core/types';
export type {
  OpenIdJwtPayload,
  DisclosureV1JwtPayload,
  AttestedFlatV1JwtPayload,
  IssuanceV1JwtPayload,
  IssuanceFlatV1JwtPayload,
  OutputCredential,
  OutputAttribute,
} from '@ver-id/core/types';
