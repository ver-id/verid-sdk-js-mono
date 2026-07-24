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
} from '@verid-sdk-js-mono/core';
import { FileStorageCacheManager } from '../cache/file-storage.js';

// Re-export types from core
export type {
  IssuanceIntentPayload,
  IssuanceClientConfig,
  IssuanceRequestParams,
} from '@verid-sdk-js-mono/core';

/**
 * Configuration for the Node.js Issuance client.
 * `options` is optional — defaults to using FileStorageCacheManager for caching.
 */
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
 * Ver.iD Issuance client for OpenID Connect issuance flows.
 * Handles credential issuance and retrieves access tokens for credential storage.
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

  /**
   * Creates a new issuance intent.
   * Client authentication is mandatory for server-side issuance intent creation.
   * 
   * @param issuanceIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @param clientAuth - The client authentication credentials (required)
   * @returns The ID of the created intent
   */
  override async createIssuanceIntent(
    issuanceIntent: IssuanceIntentPayload,
    codeChallenge: string,
    clientAuth: ClientAuth,
  ): Promise<IntentResponse> {
    return super.createIssuanceIntent(issuanceIntent, codeChallenge, clientAuth);
  }

  /**
   * Finalizes the issuance flow and retrieves the issuance response.
   * Exchanges the authorization code for tokens including the ID token.
   *
   * @param params - Parameters for finalizing the issuance flow
   * @returns The issuance response containing access_token, id_token, and token metadata
   */
  async finalize(params: IssuanceFinalizeParams): Promise<IssuanceResponse> {
    return this.finalizeIssuance({ ...params, clientAuth: params.clientAuth });
  }
}
