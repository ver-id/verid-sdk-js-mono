import { Jwt } from '../types/jwt/index.js';
import { assertAuthenticationResponse } from '../utils/assert.js';
import { assertOpenIdJwtPayload } from '../utils/assert.js';
import { AuthenticationResponse } from '../types/response/index.js';
import { OpenIdJwtPayload } from '../types/jwt/payload/index.js';
import { VerificationIntent } from '../types/intent/verification.js';
import { FlowBaseAuthorizationRequestParams, FlowBaseClientConfig, FlowBaseFinalizeParams, VeridFlowBaseClient } from './base.js';
import { ClientAuth } from '../types/oauth/index.js';

/**
 * Payload for creating an authentication intent.
 */
export interface AuthenticationIntentPayload {
  challenge?: string;
  brandUuid?: string;
}

/**
 * Configuration for Authentication flow client.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface AuthenticationClientConfig extends FlowBaseClientConfig {}

/**
 * Parameters for Authentication flow request.
 */
export interface AuthenticationRequestParams extends FlowBaseAuthorizationRequestParams {
  /**
   * The authentication scopes
   */
  scope: string;
}

/**
 * Parameters for Authentication finalize.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface AuthenticationFinalizeParams extends FlowBaseFinalizeParams {}

/**
 * Ver.iD Authentication client for OpenID Connect authentication flows.
 * Handles user authentication and retrieves ID tokens with user identity information.
 * @public
 */
export abstract class VeridAuthenticationClient extends VeridFlowBaseClient {
  /**
   * Creates a new authentication client.
   * 
   * @param config - The authentication client configuration
   * @param defaultCacheManager - The default cache manager to use (package-specific)
   */
  constructor(config: AuthenticationClientConfig) {
    super(
      {
        issuerUri: config.issuerUri,
        client_id: config.client_id,
        options: config.options,
      },
    );
  }

  /**
   * Creates a new authentication intent.
   * 
   * @param authenticationIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @param clientAuth - Optional client authentication (required in node-client)
   * @returns The ID of the created intent
   * @example
   * ```typescript
   * const { codeChallenge } = await client.generateCodeChallenge();
   * const intentId = await client.createAuthenticationIntent({
   *   challenge: 'your-challenge-string',
   *   brandUuid: 'your-brand-uuid',
   * }, codeChallenge);
   * ```
   */
  async createAuthenticationIntent(
    authenticationIntent: AuthenticationIntentPayload,
    codeChallenge: string,
    clientAuth?: ClientAuth,
  ): Promise<string> {
    // Construct VerificationIntent from AuthenticationIntentPayload
    const intent: VerificationIntent = {
      scope: 'openid',
      client_id: this.oauthClient.clientId(),
      code_challenge: codeChallenge,
      ...authenticationIntent,
    };

    // Create intent with optional clientAuth
    const response = await this.oauthClient.createIntent(intent, clientAuth);
    return response.intent_id;
  }

  /**
   * Generates an authentication URL for initiating the OpenID Connect flow.
   * Automatically includes 'openid' scope if not already present.
   *
   * @param params - Parameters for the authentication request including scope and optional PKCE options
   * @param additionalParams - Additional query parameters to append to the authentication URL
   * @returns Object containing the authentication URL and state
   * @example
   * ```typescript
   * const { authenticationUrl, state } = await client.generateAuthenticationUrl({
   *   scope: 'profile email'
   * });
   * // Browser: window.location.href = authenticationUrl;
   * // Node: res.redirect(authenticationUrl);
   * ```
   */
  async generateAuthenticationUrl(
    params: AuthenticationRequestParams,
    additionalParams?: Record<string, string>,
  ): Promise<{ authenticationUrl: string; state: string }> {
    const scopes = params.scope
      .split(' ')
      .map((s) => s.trim())
      .filter(Boolean);

    if (!scopes.includes('openid')) {
      scopes.push('openid');
    }

    // Validate PKCE params using base class method
    this.validateAuthorizationRequestParams(params);

    // Generate or use provided PKCE params
    const { codeChallenge, state } = await this.getPkceParams(params);

    const authorizationUrl = await this.oauthClient.generateAuthorizationUrl(
      {
        binding: this.redirectBinding(),
        scope: scopes.join(' '),
        state,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
        intent_id: params.intent_id,
      },
      {
        ...additionalParams,
      },
    );

    return {
      authenticationUrl: authorizationUrl,
      state,
    };
  }

  /**
   * Finalizes the authentication flow and retrieves the authentication response.
   * Exchanges the authorization code for tokens including the ID token.
   * 
   * This method should be overridden by package-specific implementations to handle
   * clientAuth requirements (optional in browser, required in node).
   *
   * @param params - Parameters for finalizing the authentication flow
   * @returns The authentication response containing access_token, id_token, and token metadata
   * @throws {InvalidResponseError} When the response is not a valid authentication response
   * @throws {OperationFailedError} When code verifier is missing or token exchange fails
   * @protected
   */
  protected async finalizeAuthentication(
    params: AuthenticationFinalizeParams,
  ): Promise<AuthenticationResponse> {
    const response = await this.finalizeFlow(params, assertAuthenticationResponse);
    return response as AuthenticationResponse;
  }

  /**
   * Verifies and decodes the ID token from the authentication response.
   * Also, validates and typecasts the decoded token to OpenID Connect format.
   * Ensures the token payload conforms to OpenIdJwtPayload structure.
   *
   * @param authenticationResponse - The authentication response containing the ID token
   * @returns Typed JWT with OpenIdJwtPayload
   * @throws {OperationFailedError} When JWT verification fails
   * @throws {InvalidAssertionError} When token payload doesn't match OpenID Connect structure
   */
  async decode(authenticationResponse: AuthenticationResponse): Promise<Jwt<OpenIdJwtPayload>> {
    return await this.oauthClient.decode(authenticationResponse.id_token, assertOpenIdJwtPayload);
  }
}
