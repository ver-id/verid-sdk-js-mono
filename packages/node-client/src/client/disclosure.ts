import {
  VeridDisclosureClient as CoreDisclosureClient,
  DisclosureResponse,
  DisclosureClientConfig,
  DisclosureFinalizeParams as CoreDisclosureFinalizeParams,
  DisclosureIntentPayload,
  ClientAuth,
  ICacheManager,
  FlowAuthCodeDeliveryBinding,
} from '@ver-id/core';
import { FileStorageCacheManager } from '@ver-id/core/cache/node';

// Re-export types from core
export type {
  DisclosureIntentPayload,
  DisclosureClientConfig,
  DisclosureRequestParams,
} from '@ver-id/core';

/**
 * Configuration for the Node.js disclosure client.
 *
 * `options` is optional and defaults to caching with a `FileStorageCacheManager`.
 */
export type NodeDisclosureClientConfig = Omit<DisclosureClientConfig, 'options'> & {
  /** The registered redirect URI for the flow. */
  redirectUri: string;
  options?: {
    cacheManager?: ICacheManager;
  };
};

/**
 * Parameters to Disclosure finalize.
 */
export interface DisclosureFinalizeParams extends Omit<CoreDisclosureFinalizeParams, 'clientAuth'> {
  /**
   * The client authentication credentials.
   */
  clientAuth: ClientAuth;
}

/**
 * Node.js disclosure client for OpenID Connect flows.
 *
 * @public
 */
export class VeridDisclosureClient extends CoreDisclosureClient {
  private readonly redirectUri: string;

  constructor(config: NodeDisclosureClientConfig) {
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
   * Creates a disclosure intent; clientAuth is required server-side.
   *
   * @param disclosureIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @param clientAuth - The client authentication credentials (required)
   * @returns The ID of the created intent
   */
  override async createDisclosureIntent(
    disclosureIntent: DisclosureIntentPayload,
    codeChallenge: string,
    clientAuth: ClientAuth,
  ): Promise<string> {
    return super.createDisclosureIntent(disclosureIntent, codeChallenge, clientAuth);
  }

  /**
   * Finalizes the disclosure flow using the provided callback params.
   * Exchanges the authorization code for tokens including the access token.
   *
   * @param params - Parameters for finalizing the disclosure flow, including the required client
   * authentication credentials
   * @returns The disclosure response containing access_token and token metadata
   * @example
   * ```typescript
   * const disclosureResponse = await client.finalize({
   *   callbackParams: new URL(callbackUrl).searchParams,
   *   clientAuth: { client_secret: clientSecret },
   * });
   * const jwt = await client.decode(disclosureResponse, assertDisclosureV1JwtPayload);
   * ```
   */
  async finalize(params: DisclosureFinalizeParams): Promise<DisclosureResponse> {
    return this.finalizeDisclosure({ ...params, clientAuth: params.clientAuth });
  }
}
