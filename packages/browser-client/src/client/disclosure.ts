import {
  VeridDisclosureClient as CoreDisclosureClient,
  DisclosureClientConfig,
  DisclosureFinalizeParams as CoreDisclosureFinalizeParams,
  DisclosureResponse,
  ICacheManager,
} from '@verid-sdk-js-mono/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

// Re-export types from core
export type {
  DisclosureIntentPayload,
  DisclosureClientConfig,
  DisclosureRequestParams,
} from '@verid-sdk-js-mono/core';

/**
 * Configuration for the Browser Disclosure client.
 * `options` is optional — defaults to using SessionStorageCacheManager for caching.
 */
export type BrowserDisclosureClientConfig = Omit<DisclosureClientConfig, 'options'> & {
  options?: {
    cacheManager?: ICacheManager;
  };
};

/**
 * Parameters to Disclosure finalize.
 */
export interface DisclosureFinalizeParams extends Omit<CoreDisclosureFinalizeParams, 'callbackParams'> {
  callbackParams?: URL | URLSearchParams | string;
}

/**
 * Ver.iD Disclosure client for OpenID Connect disclosure flows.
 * Handles user disclosure and retrieves access tokens with verified credentials.
 * @public
 */
export class VeridDisclosureClient extends CoreDisclosureClient {
  constructor(config: BrowserDisclosureClientConfig) {
    super({
      ...config,
      options: {
        cacheManager: config.options?.cacheManager ?? new SessionStorageCacheManager(),
      },
    });
  }

  /**
   * Finalizes the disclosure flow and retrieves the disclosure response.
   * Exchanges the authorization code for tokens including the access token.
   *
   * @param params - Parameters for finalizing the disclosure flow
   * @returns The disclosure response containing access_token and token metadata
   */
  async finalize(params?: DisclosureFinalizeParams): Promise<DisclosureResponse> {
    // Assign callbackParams from params
    let callbackParams = params?.callbackParams;

    // If not provided, use current window location
    if (!callbackParams) {
      callbackParams = window.location.href;
    }
    return this.finalizeDisclosure({ ...params, callbackParams });
  }
}
