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

/** Configuration for the Node.js disclosure client. */
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

  /** Creates a disclosure intent; clientAuth is required server-side. */
  override async createDisclosureIntent(
    disclosureIntent: DisclosureIntentPayload,
    codeChallenge: string,
    clientAuth: ClientAuth,
  ): Promise<string> {
    return super.createDisclosureIntent(disclosureIntent, codeChallenge, clientAuth);
  }

  /** Finalizes the disclosure flow using the provided callback params. */
  async finalize(params: DisclosureFinalizeParams): Promise<DisclosureResponse> {
    return this.finalizeDisclosure({ ...params, clientAuth: params.clientAuth });
  }
}
