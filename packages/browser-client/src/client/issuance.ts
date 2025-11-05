import {
  ICacheManager,
  Jwt,
  assertIssuanceResponse,
  assertUrlString,
  InvalidResponseError,
  IssuanceResponse,
  ClientAuth,
  VeridOAuthClient,
  assertCacheManager,
  InvalidArgumentError,
  assertString,
  InvalidAssertionError,
  OperationFailedError,
  JWTPayload,
  IssuanceIntent,
} from '@verid-sdk-js-mono/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

/**
 * Default OAuth scope for issuance requests.
 * @constant
 */
const ISSUANCE_SCOPE = 'issuance';

/**
 * Payload for creating an issuance intent.
 */
export interface IssuanceIntentPayload {
  payload: {
    mapping: Record<string, unknown>;
    data: {
      attributeUuid: string;
      credentialUuid: string;
      issuerUuid: string;
      schemeUuid: string;
      providerUuid: string;
      value: unknown;
    };
  };
  challenge?: string;
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}

/**
 * Optional configuration settings for the Issuance client.
 */
export interface IssuanceClientConfigOptions {
  /**
   * Custom cache manager for storing issuance state and code verifiers.
   * Defaults to SessionStorageCacheManager if not provided.
   */
  cacheManager?: ICacheManager;
}

/**
 * Configuration options for the Issuance client.
 */
export interface IssuanceClientConfig {
  /**
   * Ver.iD OAuth Issuer URI
   */
  issuerUri: string;
  /**
   * The Issuance flow identifier
   */
  issuanceFlowId: string;
  /**
   * The registered redirect URI for the Issuance flow.
   */
  redirectUri: string;

  /**
   * Options
   */
  options?: IssuanceClientConfigOptions;
}

/**
 * Parameters for Issuance flow request.
 */
export interface IssuanceRequestParams {
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
 * Parameters to Issuance finalize.
 */
export interface IssuanceFinalizeParams {
  /**
   * The client issuance details to use for the token request.
   */
  clientAuth?: ClientAuth;
  /**
   * The callback params to use for the authorization response validation. If not provided, the current window URL will be used.
   * Can be a string, URL, or URLSearchParams.
   */
  callbackParams?: URL | URLSearchParams | string;
}

/**
 * Ver.iD Issuance client for OpenID Connect issuance flows.
 * Handles user issuance and retrieves ID tokens with user identity information.
 * @public
 */
export class VeridIssuanceClient {
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
  constructor(config: IssuanceClientConfig) {
    assertUrlString(config.issuerUri, 'issuerUri');

    this.oauthClient = new VeridOAuthClient({
      client_id: config.issuanceFlowId,
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
   * Generates a PKCE code challenge and state for secure issuance.
   *
   * @param state - Optional state parameter. If not provided, a random state will be generated
   * @returns Object containing the code challenge and state
   */
  async generateCodeChallenge(state?: string) {
    assertString(state, 'state', InvalidArgumentError, { allowUndefined: true });
    const { codeChallenge, codeVerifier } = await this.oauthClient.generateCodeChallenge();
    const randomState = state || this.oauthClient.generateRandomState();
    this.cacheManager.save(randomState, codeVerifier);
    return { codeChallenge, state: randomState };
  }

  /**
   * Creates a new issuance intent.
   * @param intent The intent of type IssuanceIntentPayload.
   * @returns The ID of the created intent.
   * @example
   * ```typescript
   * const { codeChallenge } = await client.generateCodeChallenge();
   * const intentId = await client.createIssuanceIntent({
   *   challenge: 'your-challenge-string',
   *   brandUuid: 'your-brand-uuid',
   *   requireExplicitConsent: true,
   * }, codeChallenge);
   * ```
   */
  async createIssuanceIntent(issuanceIntent: IssuanceIntentPayload, codeChallenge: string): Promise<string> {
    // Construct IssuanceIntent from IssuanceIntentPayload
    const intent: IssuanceIntent = {
      type: 'issuance',
      clientId: this.oauthClient.clientId(),
      codeChallenge: codeChallenge,
      ...issuanceIntent
    };

    // Create intent
    return this.oauthClient.createIntent(intent);
  }

  /**
   * Generates an issuance URL for initiating the OpenID Connect flow.
   * Automatically includes 'openid' scope if not already present.
   *
   * @param params - Parameters for the issuance request including scope and optional PKCE options
   * @param additionalParams - Additional query parameters to append to the issuance URL
   * @returns Object containing the issuance URL and state
   * @example
   * ```typescript
   * const { issuanceUrl, state } = await client.generateIssuanceUrl({
   *   scope: 'profile email'
   * });
   * window.location.href = issuanceUrl;
   * ```
   */
  async generateIssuanceUrl(
    params?: IssuanceRequestParams,
    additionalParams?: Record<string, string>,
  ) {
    let codeChallenge, state;

    if (params?.intentId && !params?.codeChallenge) {
      throw new InvalidArgumentError('Code challenge must be provided when using intentId.');
    }

    if (params?.codeChallenge && !params?.state) {
      throw new InvalidArgumentError('State must be provided when using external code challenge.');
    }

    if (params?.codeChallenge) {
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
        scope: ISSUANCE_SCOPE,
        state,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
      },
      {
        ...additionalParams,
      },
    );

    return {
      issuanceUrl: authorizationUrl,
      state,
    };
  }

  /**
   * Finalizes the issuance flow and retrieves the issuance response.
   * Exchanges the authorization code for tokens including the ID token.
   *
   * @param params - Parameters for finalizing the issuance flow
   * @returns The issuance response containing access_token, id_token, and token metadata
   * @throws {InvalidResponseError} When the response is not a valid issuance response
   * @throws {OperationFailedError} When code verifier is missing or token exchange fails
   */
  async finalize(params?: IssuanceFinalizeParams): Promise<IssuanceResponse> {
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
    assertIssuanceResponse(response, 'issuance response', InvalidResponseError);

    return response;
  }

  /**
   * Verifies and decodes the ID token from the issuance response.
   * Also, validates and typecasts the decoded token to a specific payload type.
   * Ensures the token payload conforms to desired structure.
   *
   * @param issuanceResponse - The issuance response containing the ID token
   * @param typeAssertFunc - The function to assert the token payload type
   * @returns Typed JWT with typed payload
   * @throws {OperationFailedError} When JWT verification fails
   * @throws {InvalidAssertionError} When token payload doesn't match OpenID Connect structure
   */
  async decode<T extends JWTPayload>(
    issuanceResponse: IssuanceResponse,
    typeAssertFunc: (payload: unknown, name: string) => asserts payload is T,
  ): Promise<Jwt<T>> {
    const jwt = await this.oauthClient.decode(issuanceResponse.access_token, typeAssertFunc);

    return jwt as Jwt<T>;
  }
}
