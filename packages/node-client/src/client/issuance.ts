import {
  VeridIssuanceClient as CoreIssuanceClient,
  IssuanceResponse,
  IssuanceClientConfig,
  IssuanceFinalizeParams as CoreIssuanceFinalizeParams,
  IssuanceIntentPayload,
  IntentResponse,
  ClientAuth,
  ICacheManager,
  FlowRedirectBinding,
} from '@ver-id/core';
import { FileStorageCacheManager } from '../cache/file-storage.js';

// Re-export types from core
export type {
  IssuanceIntentPayload,
  IssuanceClientConfig,
  IssuanceRequestParams,
} from '@ver-id/core';

/** Configuration for the Node.js issuance client. */
export type NodeIssuanceClientConfig = Omit<IssuanceClientConfig, 'options'> & {
  /** The registered redirect URI for the flow. */
  redirectUri: string;
  options?: {
    cacheManager?: ICacheManager;
  };
};

/**
 * Parameters to Issuance finalize.
 */
export interface IssuanceFinalizeParams extends Omit<CoreIssuanceFinalizeParams, 'clientAuth'> {
  /**
   * The client authentication credentials.
   */
  clientAuth: ClientAuth;
}

/**
 * Node.js issuance client for OpenID Connect flows.
 *
 * @public
 */
export class VeridIssuanceClient extends CoreIssuanceClient {
  private readonly redirectUri: string;

  constructor(config: NodeIssuanceClientConfig) {
    super({
      issuerUri: config.issuerUri,
      client_id: config.client_id,
      options: {
        cacheManager: config.options?.cacheManager ?? new FileStorageCacheManager(),
      },
    });
    this.redirectUri = config.redirectUri;
  }

  protected override redirectBinding(): FlowRedirectBinding {
    return { kind: 'redirect', redirectUri: this.redirectUri };
  }

  /** Creates an issuance intent; clientAuth is required server-side. */
  override async createIssuanceIntent(
    issuanceIntent: IssuanceIntentPayload,
    codeChallenge: string,
    clientAuth: ClientAuth,
  ): Promise<IntentResponse> {
    return super.createIssuanceIntent(issuanceIntent, codeChallenge, clientAuth);
  }

  /** Finalizes the issuance flow using the provided callback params. */
  async finalize(params: IssuanceFinalizeParams): Promise<IssuanceResponse> {
    return this.finalizeIssuance({ ...params, clientAuth: params.clientAuth });
  }
}
