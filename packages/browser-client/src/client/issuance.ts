import {
  VeridIssuanceClient as CoreIssuanceClient,
  IssuanceClientConfig,
  IssuanceFinalizeParams as CoreIssuanceFinalizeParams,
  IssuanceResponse,
} from '@verid-sdk-js-mono/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

// Re-export types from core
export type {
  IssuanceIntentPayload,
  IssuanceClientConfig,
  IssuanceRequestParams,
} from '@verid-sdk-js-mono/core';

/**
 * Parameters to Issuance finalize.
 */
export interface IssuanceFinalizeParams extends Omit<CoreIssuanceFinalizeParams, 'callbackParams'> {
  callbackParams?: URL | URLSearchParams | string;
}

/**
 * Ver.iD Issuance client for OpenID Connect issuance flows.
 * Handles user issuance and retrieves access tokens with verified credentials.
 * @public
 */
export class VeridIssuanceClient extends CoreIssuanceClient {
  constructor(config: IssuanceClientConfig) {
    super(config, new SessionStorageCacheManager());
  }

  /**
   * Finalizes the issuance flow and retrieves the issuance response.
   * Exchanges the authorization code for tokens including the access token.
   *
   * @param params - Parameters for finalizing the issuance flow
   * @returns The issuance response containing access_token and token metadata
   */
  async finalize(params?: IssuanceFinalizeParams): Promise<IssuanceResponse> {
      // Assign callbackParams from params
      let callbackParams = params?.callbackParams;
  
      // If not provided, use current window location
      if (!callbackParams) {
        callbackParams = window.location.href;
      }
      return this.finalizeIssuance({ ...params, callbackParams });
    }
}
