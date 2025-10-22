/**
 * @internal
 * Re-export everything from core for convenience.
 * See @verid-sdk-js-mono/core module for shared types and utilities documentation.
 */
export * from '@verid-sdk-js-mono/core';

// client exports
export { VeridAuthenticationClient, VeridDisclosureClient } from './client/index.js';

// // Cache exports (browser-specific)
export { SessionStorageCacheManager, LocalStorageCacheManager } from './cache/index.js';

export type {
  AuthenticationClientConfig,
  AuthenticationClientConfigOptions,
  AuthenticationRequestParams,
  AuthenticationFinalizeParams,
} from './client/authentication.js';

export type {
  DisclosureClientConfig,
  DisclosureClientConfigOptions,
  DisclosureRequestParams,
  DisclosureFinalizeParams,
} from './client/disclosure.js';
