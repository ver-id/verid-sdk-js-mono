import {
  VeridAuthenticationClient as CoreAuthenticationClient,
  AuthenticationResponse,
  AuthenticationClientConfig,
  AuthenticationFinalizeParams as CoreAuthenticationFinalizeParams,
  ICacheManager,
  FlowAuthCodeDeliveryBinding,
} from '@ver-id/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

// Re-export types from core
export type {
  AuthenticationIntentPayload,
  AuthenticationClientConfig,
  AuthenticationRequestParams,
} from '@ver-id/core';

/**
 * Configuration for the browser authentication client.
 *
 * `options` is optional and defaults to caching with a `SessionStorageCacheManager`.
 */
export type BrowserAuthenticationClientConfig = Omit<AuthenticationClientConfig, 'options'> & {
  /** The registered redirect URI for the flow. */
  redirectUri: string;
  options?: {
    cacheManager?: ICacheManager;
  };
};

/**
 * Parameters to Authentication finalize.
 */
export interface AuthenticationFinalizeParams extends Omit<CoreAuthenticationFinalizeParams, 'callbackParams'> {
  callbackParams?: URL | URLSearchParams | string;
}

/**
 * Browser authentication client for OpenID Connect flows.
 *
 * @public
 */
export class VeridAuthenticationClient extends CoreAuthenticationClient {
  private readonly redirectUri: string;

  constructor(config: BrowserAuthenticationClientConfig) {
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
   * Finalizes the authentication flow, defaulting to window.location if no params are provided.
   * Exchanges the authorization code for tokens including the ID token.
   *
   * @param params - Parameters for finalizing the authentication flow
   * @returns The authentication response containing access_token, id_token, and token metadata
   * @example
   * ```typescript
   * // Reads the callback params from window.location by default
   * const authenticationResponse = await client.finalize();
   * const idToken = await client.decode(authenticationResponse);
   * ```
   */
  async finalize(params?: AuthenticationFinalizeParams): Promise<AuthenticationResponse> {
    let callbackParams = params?.callbackParams;

    if (!callbackParams) {
      callbackParams = window.location.href;
    }
    return this.finalizeAuthentication({ ...params, callbackParams });
  }
}
