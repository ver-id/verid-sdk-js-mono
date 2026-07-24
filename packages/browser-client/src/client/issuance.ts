import {
  VeridIssuanceClient as CoreIssuanceClient,
  IssuanceClientConfig,
  IssuanceFinalizeParams as CoreIssuanceFinalizeParams,
  IssuanceResponse,
  ICacheManager,
  FlowRedirectBinding,
} from '@verid-sdk-js-mono/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

// Re-export types from core
export type {
  IssuanceIntentPayload,
  IssuanceClientConfig,
  IssuanceRequestParams,
} from '@verid-sdk-js-mono/core';

/**
 * Configuration for the Browser Issuance client.
 * `options` is optional — defaults to using SessionStorageCacheManager for caching.
 */
export type BrowserIssuanceClientConfig = Omit<IssuanceClientConfig, 'options'> & {
  /** The registered redirect URI for the flow. */
  redirectUri: string;
  options?: {
    cacheManager?: ICacheManager;
  };
};

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
  private readonly redirectUri: string;

  constructor(config: BrowserIssuanceClientConfig) {
    super({
      issuerUri: config.issuerUri,
      client_id: config.client_id,
      options: {
        cacheManager: config.options?.cacheManager ?? new SessionStorageCacheManager(),
      },
    });
    this.redirectUri = config.redirectUri;
  }

  protected override redirectBinding(): FlowRedirectBinding {
    return { kind: 'redirect', redirectUri: this.redirectUri };
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
