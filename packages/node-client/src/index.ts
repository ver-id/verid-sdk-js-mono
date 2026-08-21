// client exports
export {
  VeridAuthenticationClient,
  VeridDisclosureClient,
  VeridIssuanceClient,
  VeridBusinessWalletIssuanceClient,
} from './client/index.js';

// Cache exports
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
export { BaseCacheManager } from '@ver-id/core/cache';
export type { CacheManagerOptions, CacheEntry } from '@ver-id/core/cache';

export type {
  AuthenticationClientConfig,
  NodeAuthenticationClientConfig,
  AuthenticationIntentPayload,
  AuthenticationRequestParams,
  AuthenticationFinalizeParams,
} from './client/authentication.js';

export type {
  DisclosureClientConfig,
  NodeDisclosureClientConfig,
  DisclosureIntentPayload,
  DisclosureRequestParams,
  DisclosureFinalizeParams,
} from './client/disclosure.js';

export type {
  IssuanceClientConfig,
  NodeIssuanceClientConfig,
  IssuanceIntentPayload,
  IssuanceRequestParams,
  IssuanceFinalizeParams,
} from './client/issuance.js';

export type {
  NodeBusinessWalletIssuanceClientConfig,
  PollUntilTerminalOptions,
  BusinessWalletIssueParams,
  BusinessWalletIssueResponse,
  BusinessWalletDeliveryStatus,
} from './client/business-wallet.js';
export {
  BusinessWalletDeliveryState,
  BusinessWalletDeliveryMethod,
} from './client/business-wallet.js';

/**
 * Export core errors
 */
export {
  VeridError,
  InvalidArgumentError,
  InvalidAssertionError,
  InvalidResponseError,
  AuthorizationResponseError,
  TokenGrantError,
  OperationFailedError,
  UnknownError,
} from '@ver-id/core/error';

/**
 * Export core oauth client
 */
export { VeridOAuthClient, OAuth4WebApiProvider } from '@ver-id/core/oauth';
export type {
  OAuthClientConfig,
  OAuthRequestParams,
  OAuthAuthorizationCodeGrantParams,
  OAuthClientCredentialsGrantParams,
  IOAuthProvider,
  FlowAuthCodeDeliveryBinding,
} from '@ver-id/core/oauth';

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
  assertAuthenticationResponse,
  assertDisclosureResponse,
  assertIssuanceResponse,
  assertCacheManager,
  assertJwtPayload,
  assertAttestedFlatV1JwtPayload,
  assertOpenIdJwtPayload,
  assertIssuanceFlatV1JwtPayload,
  assertDisclosureV1JwtPayload,
  assertSignatureV1JwtPayload,
  assertIssuanceV1JwtPayload,
} from '@ver-id/core/utils';

/**
 * Export core types
 */
export type {
  // Payload (legacy flat format)
  AttestedFlatV1JwtPayload,
  IssuanceFlatV1JwtPayload,
  // Payload (v1 credential-grouped format)
  DisclosureV1JwtPayload,
  SignatureV1JwtPayload,
  IssuanceV1JwtPayload,
  // Payload (OpenID)
  OpenIdJwtPayload,
  // Credential types
  OutputCredential,
  OutputAttribute,
  OutputCredentialType,

  // JWT
  JwtType,
  Jwt,
  JwtVerificationOptions,

  // OAuth
  AuthorizationServer,
  ClientAuth,
  ClientConfig,

  // Response
  AuthenticationResponse,
  DisclosureResponse,
  IssuanceResponse,
  GrantResponse
} from '@ver-id/core/types';
