import {
  ICacheManager,
  Jwt,
  assertAuthenticationResponse,
  assertOpenIdJwtPayload,
  assertUrlString,
  InvalidResponseError,
  AuthenticationResponse,
  OpenIdJwtPayload,
  ClientAuth,
  VeridOAuthClient,
  assertCacheManager,
  InvalidArgumentError,
  assertString,
  InvalidAssertionError,
  OperationFailedError,
  VerificationIntent,
} from '@verid-sdk-js-mono/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

/**
 * Payload for creating an authentication intent.
 */
export interface AuthenticationIntentPayload {
  challenge?: string;
  brandUuid?: string;
}

/**
 * Optional configuration settings for the Authentication client.
 */
export interface AuthenticationClientConfigOptions {
  /**
   * Custom cache manager for storing authentication state and code verifiers.
   * Defaults to SessionStorageCacheManager if not provided.
   */
  cacheManager?: ICacheManager;
}

/**
 * Configuration options for the Authentication client.
 */
export interface AuthenticationClientConfig {
  /**
   * Ver.iD OAuth Issuer URI
   */
  issuerUri: string;
  /**
   * The Authentication flow identifier
   */
  authenticationFlowId: string;
  /**
   * The registered redirect URI for the Authentication flow.
   */
  redirectUri: string;

  /**
   * Options
   */
  options?: AuthenticationClientConfigOptions;
}

/**
 * Parameters for Authentication flow request.
 */
export interface AuthenticationRequestParams {
  /**
   * The authentication scopes
   */
  scope: string;
  /**
   * The state for the oauth flow, if external state must be used
   */
  state?: string;
  /**
   * The code challenge for PKCE flow, if external code challenge must be used
   */
  codeChallenge?: string;
  /**
   * Intent Id to associate with the authentication request
   */
  intentId?: string;
}

/**
 * Parameters to Authentication finalize.
 */
export interface AuthenticationFinalizeParams {
  /**
   * The client authentication details to use for the token request.
   */
  clientAuth?: ClientAuth;
  /**
   * The callback params to use for the authorization response validation. If not provided, the current window URL will be used.
   * Can be a string, URL, or URLSearchParams.
   */
  callbackParams?: URL | URLSearchParams | string;
}

/**
 * Ver.iD Authentication client for OpenID Connect authentication flows.
 * Handles user authentication and retrieves ID tokens with user identity information.
 * @public
 */
export class VeridAuthenticationClient {
  /**
   * Underlying OAuth client for handling authorization flows.
   * @private
   */
  private oauthClient: VeridOAuthClient;
  /**
   * The OAuth 2.1 redirect URI for authorization code flow.
   * @private
   */
  private redirectUri: string;

  /**
   * Cache manager for storing code verifiers and state values.
   * @private
   */
  private cacheManager: ICacheManager;
  constructor(config: AuthenticationClientConfig) {
    assertUrlString(config.issuerUri, 'issuerUri');

    this.oauthClient = new VeridOAuthClient({
      client_id: config.authenticationFlowId,
      issuer: config.issuerUri,
    });

    assertUrlString(config.redirectUri, 'redirectUri');
    this.redirectUri = config.redirectUri;

    if (config.options?.cacheManager) {
      assertCacheManager(config.options.cacheManager, 'cacheManager', InvalidArgumentError);
      this.cacheManager = config.options.cacheManager;
    } else {
      this.cacheManager = new SessionStorageCacheManager();
    }
  }

  /**
   * Generates a PKCE code challenge and state for secure authentication.
   *
   * @param state - Optional state parameter. If not provided, a random state will be generated
   * @returns Object containing the code challenge and state
   */
  async generateCodeChallenge(state?: string) {
    assertString(state, 'state', InvalidArgumentError, {
      allowUndefined: true,
    });
    const { codeChallenge, codeVerifier } = await this.oauthClient.generateCodeChallenge();
    const randomState = state || this.oauthClient.generateRandomState();
    this.cacheManager.save(randomState, codeVerifier);
    
    return { codeChallenge, state: randomState };
  }

  /**
   * Creates a new authentication intent.
   * @param intent The intent of type AuthenticationIntentPayload.
   * @returns The ID of the created intent.
   * ```typescript
   * const { codeChallenge } = await client.generateCodeChallenge();
   * const intentId = await client.createAuthenticationIntent({
   *   challenge: 'your-challenge-string',
   *   brandUuid: 'your-brand-uuid',
   * }, codeChallenge);
   */
  async createAuthenticationIntent(authenticationIntent: AuthenticationIntentPayload, codeChallenge: string): Promise<string> {
    // Construct VerificationIntent from AuthenticationIntentPayload
    const intent: VerificationIntent = {
      type: 'authentication',
      clientId: this.oauthClient.clientId(),
      codeChallenge: codeChallenge,
      ...authenticationIntent,
    };

    // Create intent
    return this.oauthClient.createIntent(intent);
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
   * window.location.href = authenticationUrl;
   * ```
   */
  async generateAuthenticationUrl(
    params: AuthenticationRequestParams,
    additionalParams?: Record<string, string>,
  ) {
    const scopes = params.scope
      .split(' ')
      .map((s) => s.trim())
      .filter(Boolean);

    if (!scopes.includes('openid')) {
      scopes.push('openid');
    }

    let codeChallenge, state;
    if (params.intentId && !params.codeChallenge) {
      throw new InvalidArgumentError('Code challenge must be provided when using intentId.');
    }

    if (params.codeChallenge && !params.state) {
      throw new InvalidArgumentError('State must be provided when using external code challenge.');
    }

    if (params.codeChallenge && params.state) {
      codeChallenge = params.codeChallenge;
      state = params.state;
    } else {
      const { codeChallenge: randomCodeChallenge, codeVerifier } =
        await this.oauthClient.generateCodeChallenge();
      codeChallenge = randomCodeChallenge;
      state = this.oauthClient.generateRandomState();
      this.cacheManager.save(state, codeVerifier);
    }

    const authorizationUrl = await this.oauthClient.generateAuthorizationUrl(
      {
        redirect_uri: this.redirectUri,
        scope: scopes.join(' '),
        state,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
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
   * @param params - Parameters for finalizing the authentication flow
   * @returns The authentication response containing access_token, id_token, and token metadata
   * @throws {InvalidResponseError} When the response is not a valid authentication response
   * @throws {OperationFailedError} When code verifier is missing or token exchange fails
   */
  async finalize(params?: AuthenticationFinalizeParams): Promise<AuthenticationResponse> {
    let callbackParams: URLSearchParams;
    if (params?.callbackParams) {
      switch (typeof params.callbackParams) {
        case 'string':
          assertUrlString(params.callbackParams, 'callbackParams', InvalidArgumentError);
          callbackParams = new URLSearchParams(new URL(params.callbackParams).search);
          break;
        case 'object':
          if (params.callbackParams instanceof URL) {
            callbackParams = new URLSearchParams(params.callbackParams.search);
          } else if (params.callbackParams instanceof URLSearchParams) {
            callbackParams = params.callbackParams;
          } else {
            throw new InvalidArgumentError(
              'Invalid callbackParams: must be a string, URL, or URLSearchParams.',
            );
          }
          break;
        default:
          throw new InvalidArgumentError(
            'Invalid callbackParams: must be a string, URL, or URLSearchParams.',
          );
      }
    } else {
      callbackParams = new URLSearchParams(window.location.search);
    }

    const state = callbackParams.get('state') || '';
    assertString(state, 'state', InvalidAssertionError);
    const codeVerifier = this.cacheManager.get(state);
    if (!codeVerifier) {
      throw new OperationFailedError(
        `Invalid code verifier: missing or expired code verifier for state ${state}`,
      );
    }
    this.cacheManager.remove(state);
    const response = await this.oauthClient.authorizationCodeGrant({
      redirect_uri: this.redirectUri,
      parameters: callbackParams,
      state,
      code_verifier: codeVerifier,
    });
    assertAuthenticationResponse(response, 'authentication response', InvalidResponseError);

    return response;
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
