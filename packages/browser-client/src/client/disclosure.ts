import {
  ICacheManager,
  Jwt,
  assertDisclosureResponse,
  assertUrlString,
  InvalidResponseError,
  DisclosureResponse,
  ClientAuth,
  VeridOAuthClient,
  assertCacheManager,
  InvalidArgumentError,
  assertString,
  InvalidAssertionError,
  OperationFailedError,
  JWTPayload,
} from '@verid-sdk-js-mono/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

/**
 * Default OAuth scope for disclosure requests.
 * @constant
 */
const DISCLOSURE_SCOPE = 'disclosure';

/**
 * Optional configuration settings for the Disclosure client.
 */
export interface DisclosureClientConfigOptions {
  /**
   * Custom cache manager for storing disclosure state and code verifiers.
   * Defaults to SessionStorageCacheManager if not provided.
   */
  cacheManager?: ICacheManager;
}

/**
 * Configuration options for the Disclosure client.
 */
export interface DisclosureClientConfig {
  /**
   * Ver.iD API URL
   */
  apiUrl: string;
  /**
   * The Disclosure flow identifier
   */
  disclosureFlowId: string;
  /**
   * The registered redirect URI for the Disclosure flow.
   */
  redirectUri: string;

  /**
   * Options
   */
  options?: DisclosureClientConfigOptions;
}

/**
 * Parameters for Disclosure flow request.
 */
export interface DisclosureRequestParams {
  /**
   * The state for the oauth flow, if external state must be used
   */
  state?: string;
  /**
   * The code challenge for PKCE flow, if external code challenge must be used
   */
  codeChallenge?: string;
}

/**
 * Parameters to Disclosure finalize.
 */
export interface DisclosureFinalizeParams {
  /**
   * The client disclosure details to use for the token request.
   */
  clientAuth?: ClientAuth;
  /**
   * The callback params to use for the authorization response validation. If not provided, the current window URL will be used.
   * Can be a string, URL, or URLSearchParams.
   */
  callbackParams?: URL | URLSearchParams | string;
}

/**
 * Ver.iD Disclosure client for OpenID Connect disclosure flows.
 * Handles user disclosure and retrieves ID tokens with user identity information.
 * @public
 */
export class VeridDisclosureClient {
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
  constructor(config: DisclosureClientConfig) {
    assertUrlString(config.apiUrl, 'apiUrl');

    this.oauthClient = new VeridOAuthClient({
      client_id: config.disclosureFlowId,
      issuer: config.apiUrl,
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
   * Generates a PKCE code challenge and state for secure disclosure.
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
   * Generates an disclosure URL for initiating the OpenID Connect flow.
   * Automatically includes 'openid' scope if not already present.
   *
   * @param params - Parameters for the disclosure request including scope and optional PKCE options
   * @param additionalParams - Additional query parameters to append to the disclosure URL
   * @returns Object containing the disclosure URL and state
   * @example
   * ```typescript
   * const { disclosureUrl, state } = await client.generateDisclosureUrl({
   *   scope: 'profile email'
   * });
   * window.location.href = disclosureUrl;
   * ```
   */
  async generateDisclosureUrl(
    params?: DisclosureRequestParams,
    additionalParams?: Record<string, string>,
  ) {
    let codeChallenge, state;

    if (params?.codeChallenge) {
      if (!params.state) {
        throw new InvalidArgumentError('State must be provided when using external code challenge');
      }
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
        scope: DISCLOSURE_SCOPE,
        state,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
      },
      {
        ...additionalParams,
      },
    );

    return {
      disclosureUrl: authorizationUrl,
      state,
    };
  }

  /**
   * Finalizes the disclosure flow and retrieves the disclosure response.
   * Exchanges the authorization code for tokens including the ID token.
   *
   * @param params - Parameters for finalizing the disclosure flow
   * @returns The disclosure response containing access_token, id_token, and token metadata
   * @throws {InvalidResponseError} When the response is not a valid disclosure response
   * @throws {OperationFailedError} When code verifier is missing or token exchange fails
   */
  async finalize(params?: DisclosureFinalizeParams): Promise<DisclosureResponse> {
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
    assertDisclosureResponse(response, 'disclosure response', InvalidResponseError);

    return response;
  }

  /**
   * Verifies and decodes the ID token from the disclosure response.
   * Also, validates and typecasts the decoded token to a specific payload type.
   * Ensures the token payload conforms to desired structure.
   *
   * @param disclosureResponse - The disclosure response containing the ID token
   * @returns Typed JWT with typed payload
   * @throws {OperationFailedError} When JWT verification fails
   * @throws {InvalidAssertionError} When token payload doesn't match OpenID Connect structure
   */
  async decode<T extends JWTPayload>(
    disclosureResponse: DisclosureResponse,
    typeAssert: (payload: unknown, name: string) => asserts payload is T,
  ): Promise<Jwt<T>> {
    const jwt = await this.oauthClient.decode(disclosureResponse.access_token, typeAssert);

    return jwt as Jwt<T>;
  }
}
