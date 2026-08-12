export {
  EmbeddedDisclosureClient,
  EmbeddedAuthenticationClient,
  EmbeddedIssuanceClient,
} from './clients/index.js';
export type { EmbeddedClientConfig, FinalizeEmbeddedParams } from './clients/index.js';
export type {
  EmbeddedIssuanceSessionParams,
  EmbeddedIssuanceSessionBootstrap,
} from './clients/index.js';

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
export type { ICacheManager } from '@ver-id/core';

// Shared protocol from core
export { parseEmbeddedWebhookPayload } from '@ver-id/core';
export type {
  EmbeddedWebhookPayload,
  ParseEmbeddedWebhookResult,
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
  UnknownError,
} from '@ver-id/core/error';

// Common assert helpers + response types for decode()
export {
  assertDisclosureV1JwtPayload,
  assertOpenIdJwtPayload,
  assertIssuanceV1JwtPayload,
  assertSignatureV1JwtPayload,
} from '@ver-id/core/utils';
export type {
  DisclosureResponse,
  AuthenticationResponse,
  IssuanceResponse,
  ClientAuth,
  Jwt,
  DisclosureV1JwtPayload,
  IssuanceV1JwtPayload,
  OpenIdJwtPayload,
} from '@ver-id/core/types';
