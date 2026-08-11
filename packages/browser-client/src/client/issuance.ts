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

/** Configuration for the browser issuance client. */
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
      client_id: config.client_id,
      options: {
        cacheManager: config.options?.cacheManager ?? new SessionStorageCacheManager(),
      },
    });
    this.redirectUri = config.redirectUri;
  }

  protected override authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding {
    return { kind: 'redirect', redirectUri: this.redirectUri };
  }

  /** Finalizes the issuance flow, defaulting to window.location if no params are provided. */
  async finalize(params?: IssuanceFinalizeParams): Promise<IssuanceResponse> {
    let callbackParams = params?.callbackParams;

    if (!callbackParams) {
      callbackParams = window.location.href;
    }
    return this.finalizeIssuance({ ...params, callbackParams });
  }
}
