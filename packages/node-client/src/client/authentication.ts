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

/**
 * Configuration for the Node.js authentication client.
 *
 * `options` is optional and defaults to caching with a `FileStorageCacheManager`.
 */
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
      clientId: config.clientId,
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
   * Creates an authentication intent; clientAuth is required server-side.
   *
   * @param authenticationIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @param clientAuth - The client authentication credentials (required)
   * @returns The ID of the created intent
   */
  override async createAuthenticationIntent(
    authenticationIntent: AuthenticationIntentPayload,
    codeChallenge: string,
    clientAuth: ClientAuth,
  ): Promise<string> {
    return super.createAuthenticationIntent(authenticationIntent, codeChallenge, clientAuth);
  }

  /**
   * Finalizes the authentication flow using the provided callback params.
   * Exchanges the authorization code for tokens including the ID token.
   *
   * @param params - Parameters for finalizing the authentication flow, including the required
   * client authentication credentials
   * @returns The authentication response containing access_token, id_token, and token metadata
   * @example
   * ```typescript
   * const authenticationResponse = await client.finalize({
   *   callbackParams: new URL(callbackUrl).searchParams,
   *   clientAuth: { client_secret: clientSecret },
   * });
   * const idToken = await client.decode(authenticationResponse);
   * ```
   */
  async finalize(params: AuthenticationFinalizeParams): Promise<AuthenticationResponse> {
    return this.finalizeAuthentication({ ...params, clientAuth: params.clientAuth });
  }
}
