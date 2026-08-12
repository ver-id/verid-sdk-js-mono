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
 *
 * @public
 */
export abstract class VeridAuthenticationClient extends VeridFlowBaseClient {
  constructor(config: AuthenticationClientConfig) {
    super(
      {
        issuerUri: config.issuerUri,
        clientId: config.clientId,
        options: config.options,
      },
    );
  }

  /**
   * Creates an authentication intent and returns its ID.
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
    const intent: VerificationIntent = {
      scope: 'openid',
      client_id: this.oauthClient.clientId(),
      code_challenge: codeChallenge,
      ...authenticationIntent,
    };

    const response = await this.oauthClient.createIntent(intent, clientAuth);
    return response.intent_id;
  }

  /**
   * Generates the authorization URL for the authentication flow.
   * Automatically includes the `openid` scope if not already present.
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

    this.validateAuthorizationRequestParams(params);

    const { codeChallenge, state } = await this.getPkceParams(params);

    const authorizationUrl = await this.oauthClient.generateAuthorizationUrl(
      {
        binding: this.authCodeDeliveryBinding(),
        scope: scopes.join(' '),
        state,
        codeChallenge,
        codeChallengeMethod: 'S256',
        intentId: params.intentId,
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

  /** Finalizes the authentication flow and returns the token response. */
  protected async finalizeAuthentication(
    params: AuthenticationFinalizeParams,
  ): Promise<AuthenticationResponse> {
    const response = await this.finalizeFlow(params, assertAuthenticationResponse);
    return response as AuthenticationResponse;
  }

  /**
   * Verifies and decodes the ID token from an authentication response.
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
