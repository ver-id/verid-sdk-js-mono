import {
  VeridAuthenticationClient as CoreAuthenticationClient,
  AuthenticationResponse,
  AuthenticationClientConfig,
  AuthenticationFinalizeParams as CoreAuthenticationFinalizeParams,
  AuthenticationIntentPayload,
  ClientAuth,
  ICacheManager,
  FlowAuthCodeDeliveryBinding,
} from '@ver-id/core';
import { FileStorageCacheManager } from '@ver-id/core/cache/node';

// Re-export types from core
export type {
  AuthenticationIntentPayload,
  AuthenticationClientConfig,
  AuthenticationRequestParams,
} from '@ver-id/core';

/** Configuration for the Node.js authentication client. */
export type NodeAuthenticationClientConfig = Omit<AuthenticationClientConfig, 'options'> & {
  /** The registered redirect URI for the flow. */
  redirectUri: string;
  options?: {
    cacheManager?: ICacheManager;
  };
};

/**
 * Parameters to Authentication finalize.
 */
export interface AuthenticationFinalizeParams extends Omit<CoreAuthenticationFinalizeParams, 'clientAuth'> {
  /**
   * The client authentication details.
   */
  clientAuth: ClientAuth;
}

/**
 * Node.js authentication client for OpenID Connect flows.
 *
 * @public
 */
export class VeridAuthenticationClient extends CoreAuthenticationClient {
  private readonly redirectUri: string;

  constructor(config: NodeAuthenticationClientConfig) {
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

  /** Creates an authentication intent; clientAuth is required server-side. */
  override async createAuthenticationIntent(
    authenticationIntent: AuthenticationIntentPayload,
    codeChallenge: string,
    clientAuth: ClientAuth,
  ): Promise<string> {
    return super.createAuthenticationIntent(authenticationIntent, codeChallenge, clientAuth);
  }

  /** Finalizes the authentication flow using the provided callback params. */
  async finalize(params: AuthenticationFinalizeParams): Promise<AuthenticationResponse> {
    return this.finalizeAuthentication({ ...params, clientAuth: params.clientAuth });
  }
}
