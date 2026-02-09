// client exports
export { VeridAuthenticationClient, VeridDisclosureClient, VeridIssuanceClient } from './client/index.js';

// // Cache exports (browser-specific)
export { SessionStorageCacheManager, LocalStorageCacheManager } from './cache/index.js';
export type { ICacheManager } from '@verid-sdk-js-mono/core';

export type {
  AuthenticationClientConfig,
  BrowserAuthenticationClientConfig,
  AuthenticationIntentPayload,
  AuthenticationRequestParams,
  AuthenticationFinalizeParams,
} from './client/authentication.js';

export type {
  DisclosureClientConfig,
  BrowserDisclosureClientConfig,
  DisclosureIntentPayload,
  DisclosureRequestParams,
  DisclosureFinalizeParams,
} from './client/disclosure.js';

export type {
  IssuanceClientConfig,
  BrowserIssuanceClientConfig,
  IssuanceIntentPayload,
  IssuanceRequestParams,
  IssuanceFinalizeParams,
} from './client/issuance.js';

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
} from '@verid-sdk-js-mono/core/error';

/**
 * Export core oauth client
 */
export { VeridOAuthClient, OAuth4WebApiProvider } from '@verid-sdk-js-mono/core/oauth';
export type {
  OAuthClientConfig,
  OAuthRequestParams,
  OAuthAuthorizationCodeGrantParams,
  OAuthClientCredentialsGrantParams,
  IOAuthProvider,
} from '@verid-sdk-js-mono/core/oauth';

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
  assertAttestedJwtPayload,
  assertOpenIdJwtPayload,
  assertPlainJwtPayload,
  assertIssuanceJwtPayload
} from '@verid-sdk-js-mono/core/utils';

/**
 * Export core types
 */
export type {
  // Payload
  AttestedJwtPayload,
  IssuanceJwtPayload,
  OpenIdJwtPayload,
  PlainJwtPayload,

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
} from '@verid-sdk-js-mono/core/types';
