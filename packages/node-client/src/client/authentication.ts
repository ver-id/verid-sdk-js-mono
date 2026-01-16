import {
  VeridAuthenticationClient as CoreAuthenticationClient,
  AuthenticationResponse,
  AuthenticationClientConfig,
  AuthenticationFinalizeParams as CoreAuthenticationFinalizeParams,
  AuthenticationIntentPayload,
  ClientAuth,
} from '@verid-sdk-js-mono/core';
import { FileStorageCacheManager } from '../cache/file-storage.js';

// Re-export types from core
export type {
  AuthenticationIntentPayload,
  AuthenticationClientConfig,
  AuthenticationRequestParams,
} from '@verid-sdk-js-mono/core';

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
 * Ver.iD Authentication client for OpenID Connect authentication flows.
 * Handles user authentication and retrieves ID tokens with user identity information.
 * @public
 */
export class VeridAuthenticationClient extends CoreAuthenticationClient {
  constructor(config: AuthenticationClientConfig) {
    super(config, new FileStorageCacheManager());
  }

  /**
   * Creates a new authentication intent.
   * Client authentication is mandatory for server-side authentication intent creation.
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
   * Finalizes the authentication flow and retrieves the authentication response.
   * Exchanges the authorization code for tokens including the ID token.
   *
   * @param params - Parameters for finalizing the authentication flow
   * @returns The authentication response containing access_token, id_token, and token metadata
   */
  async finalize(params: AuthenticationFinalizeParams): Promise<AuthenticationResponse> {
    return this.finalizeAuthentication({ ...params, clientAuth: params.clientAuth });
  }
}
