export {
  EmbeddedDisclosureClient,
  EmbeddedAuthenticationClient,
  EmbeddedIssuanceClient,
} from './clients/index.js';
export type { EmbeddedClientConfig, FinalizeEmbeddedParams } from './clients/index.js';

export {
  verifyEmbeddedWebhook,
  embeddedWebhookRejectionError,
} from './embedded/webhook.js';
export type {
  EmbeddedWebhookVerification,
  EmbeddedWebhookRejectionReason,
  VerifyEmbeddedWebhookParams,
} from './embedded/webhook.js';
export type {
  EmbeddedSessionParams,
  EmbeddedSessionBootstrap,
} from './embedded/session.js';

// Cache managers
export { FileStorageCacheManager, MemoryStorageCacheManager } from './cache/index.js';
export type { ICacheManager } from '@verid-sdk-js-mono/core';

// Shared protocol from core
export { parseEmbeddedWebhookPayload } from '@verid-sdk-js-mono/core';
export type {
  EmbeddedWebhookPayload,
  ParseEmbeddedWebhookResult,
} from '@verid-sdk-js-mono/core';

// Errors
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

// Common assert helpers + response types for decode()
export {
  assertDisclosureV1JwtPayload,
  assertOpenIdJwtPayload,
  assertIssuanceV1JwtPayload,
  assertSignatureV1JwtPayload,
} from '@verid-sdk-js-mono/core/utils';
export type {
  DisclosureResponse,
  AuthenticationResponse,
  IssuanceResponse,
  ClientAuth,
  Jwt,
  DisclosureV1JwtPayload,
  IssuanceV1JwtPayload,
  OpenIdJwtPayload,
} from '@verid-sdk-js-mono/core/types';
