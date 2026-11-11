// Clients
export {
  VeridBrowserAuthenticationClient,
  VeridBrowserDisclosureClient,
  VeridBrowserIssuanceClient,
} from './client/index.js';
export type { BrowserClientConfig, BrowserFinishSessionParams } from './client/index.js';

// Cache managers
export { SessionStorageCacheManager, LocalStorageCacheManager } from './cache/index.js';
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
  VeridHostedSession,
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
