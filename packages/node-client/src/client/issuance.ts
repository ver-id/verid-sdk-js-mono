import {
  VeridIssuanceClient as CoreIssuanceClient,
  IssuanceResponse,
  IssuanceClientConfig,
  IssuanceFinalizeParams as CoreIssuanceFinalizeParams,
  IssuanceIntentPayload,
  IntentResponse,
  ClientAuth,
  ICacheManager,
  FlowAuthCodeDeliveryBinding,
} from '@ver-id/core';
import { FileStorageCacheManager } from '@ver-id/core/cache/node';

// Re-export types from core
export type {
  IssuanceIntentPayload,
  IssuanceClientConfig,
  IssuanceRequestParams,
} from '@ver-id/core';

/**
 * Configuration for the Node.js issuance client.
 *
 * `options` is optional and defaults to caching with a `FileStorageCacheManager`.
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

  protected override authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding {
    return { kind: 'redirect', redirectUri: this.redirectUri };
  }

  /**
   * Creates an issuance intent; clientAuth is required server-side.
   *
   * @param issuanceIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @param clientAuth - The client authentication credentials (required)
   * @returns The created intent, containing the intent ID and optional issuance run UUID
   */
  override async createIssuanceIntent(
    issuanceIntent: IssuanceIntentPayload,
    codeChallenge: string,
    clientAuth: ClientAuth,
  ): Promise<IntentResponse> {
    return super.createIssuanceIntent(issuanceIntent, codeChallenge, clientAuth);
  }

  /**
   * Finalizes the issuance flow using the provided callback params.
   * Exchanges the authorization code for tokens including the access token.
   *
   * @param params - Parameters for finalizing the issuance flow, including the required client
   * authentication credentials
   * @returns The issuance response containing access_token and token metadata
   * @example
   * ```typescript
   * const issuanceResponse = await client.finalize({
   *   callbackParams: new URL(callbackUrl).searchParams,
   *   clientAuth: { client_secret: clientSecret },
   * });
   * ```
   */
  async finalize(params: IssuanceFinalizeParams): Promise<IssuanceResponse> {
    return this.finalizeIssuance({ ...params, clientAuth: params.clientAuth });
  }
}
