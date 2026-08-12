import {
  VeridIssuanceClient as CoreIssuanceClient,
  IssuanceClientConfig,
  IssuanceFinalizeParams as CoreIssuanceFinalizeParams,
  IssuanceResponse,
  ICacheManager,
  FlowAuthCodeDeliveryBinding,
} from '@ver-id/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

// Re-export types from core
export type {
  IssuanceIntentPayload,
  IssuanceClientConfig,
  IssuanceRequestParams,
} from '@ver-id/core';

/**
 * Configuration for the browser issuance client.
 *
 * `options` is optional and defaults to caching with a `SessionStorageCacheManager`.
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
 * Browser issuance client for OpenID Connect flows.
 *
 * @public
 */
export class VeridIssuanceClient extends CoreIssuanceClient {
  private readonly redirectUri: string;

  constructor(config: BrowserIssuanceClientConfig) {
    super({
      issuerUri: config.issuerUri,
      clientId: config.clientId,
      options: {
        cacheManager: config.options?.cacheManager ?? new SessionStorageCacheManager(),
      },
    });
    this.redirectUri = config.redirectUri;
  }

  protected override authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding {
    return { kind: 'redirect', redirectUri: this.redirectUri };
  }

  /**
   * Finalizes the issuance flow, defaulting to window.location if no params are provided.
   * Exchanges the authorization code for tokens including the access token.
   *
   * @param params - Parameters for finalizing the issuance flow
   * @returns The issuance response containing access_token and token metadata
   * @example
   * ```typescript
   * // Reads the callback params from window.location by default
   * const issuanceResponse = await client.finalize();
   * ```
   */
  async finalize(params?: IssuanceFinalizeParams): Promise<IssuanceResponse> {
    let callbackParams = params?.callbackParams;

    if (!callbackParams) {
      callbackParams = window.location.href;
    }
    return this.finalizeIssuance({ ...params, callbackParams });
  }
}
