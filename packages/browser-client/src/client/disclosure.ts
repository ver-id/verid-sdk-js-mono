import {
  VeridDisclosureClient as CoreDisclosureClient,
  DisclosureClientConfig,
  DisclosureFinalizeParams as CoreDisclosureFinalizeParams,
  DisclosureResponse,
} from '@verid-sdk-js-mono/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

// Re-export types from core
export type {
  DisclosureIntentPayload,
  DisclosureClientConfig,
  DisclosureRequestParams,
} from '@verid-sdk-js-mono/core';

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
  constructor(config: DisclosureClientConfig) {
    super(config, new SessionStorageCacheManager());
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
