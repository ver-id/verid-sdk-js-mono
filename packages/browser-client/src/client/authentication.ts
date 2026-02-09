import {
  VeridAuthenticationClient as CoreAuthenticationClient,
  AuthenticationResponse,
  AuthenticationClientConfig,
  AuthenticationFinalizeParams as CoreAuthenticationFinalizeParams,
  ICacheManager,
} from '@verid-sdk-js-mono/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

// Re-export types from core
export type {
  AuthenticationIntentPayload,
  AuthenticationClientConfig,
  AuthenticationRequestParams,
} from '@verid-sdk-js-mono/core';

/**
 * Configuration for the Browser Authentication client.
 * `options` is optional — defaults to using SessionStorageCacheManager for caching.
 */
export type BrowserAuthenticationClientConfig = Omit<AuthenticationClientConfig, 'options'> & {
  options?: {
    cacheManager?: ICacheManager;
  };
};

/**
 * Parameters to Authentication finalize.
 */
export interface AuthenticationFinalizeParams extends Omit<CoreAuthenticationFinalizeParams, 'callbackParams'> {
  callbackParams?: URL | URLSearchParams | string;
}

/**
 * Ver.iD Authentication client for OpenID Connect authentication flows.
 * Handles user authentication and retrieves ID tokens with user identity information.
 * @public
 */
export class VeridAuthenticationClient extends CoreAuthenticationClient {
  constructor(config: BrowserAuthenticationClientConfig) {
    super({
      ...config,
      options: {
        cacheManager: config.options?.cacheManager ?? new SessionStorageCacheManager(),
      },
    });
  }

  /**
   * Finalizes the authentication flow and retrieves the authentication response.
   * Exchanges the authorization code for tokens including the ID token.
   *
   * @param params - Parameters for finalizing the authentication flow
   * @returns The authentication response containing access_token, id_token, and token metadata
   */
  async finalize(params?: AuthenticationFinalizeParams): Promise<AuthenticationResponse> {
    // Assign callbackParams from params
    let callbackParams = params?.callbackParams;

    // If not provided, use current window location
    if (!callbackParams) {
      callbackParams = window.location.href;
    }
    return this.finalizeAuthentication({ ...params, callbackParams });
  }
}
