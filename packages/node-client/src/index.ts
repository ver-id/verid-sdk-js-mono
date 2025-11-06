// client exports
export { VeridAuthenticationClient, VeridDisclosureClient, VeridIssuanceClient } from './client/index.js';

// // Cache exports
export { FileStorageCacheManager} from './cache/index.js';

export type {
  AuthenticationClientConfig,
  AuthenticationIntentPayload,
  AuthenticationRequestParams,
  AuthenticationFinalizeParams,
} from './client/authentication.js';

export type {
  DisclosureClientConfig,
  DisclosureIntentPayload,
  DisclosureRequestParams,
  DisclosureFinalizeParams,
} from './client/disclosure.js';

export type {
  IssuanceClientConfig,
  IssuanceIntentPayload,
  IssuanceRequestParams,
  IssuanceFinalizeParams,
} from './client/issuance.js';

/**
 * Export core errors
 */
export {
  InvalidArgumentError,
  InvalidAssertionError,
  InvalidResponseError,
  AuthorizationResponseError,
  TokenGrantError,
  OperationFailedError,
  UnknownError
} from '@verid-sdk-js-mono/core/error';

/**
 * Export core oauth client
 */
export * from '@verid-sdk-js-mono/core/oauth';

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
} from '@verid-sdk-js-mono/core/utils';

/**
 * Export core types
 */
export type {
  // Payload
  AttestedJwtPayload,
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
