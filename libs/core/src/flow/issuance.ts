import { ICacheManager } from '../interface/ICacheManager.js';
import { Jwt, JWTPayload } from '../types/jwt/index.js';
import { assert, assertArray, assertIssuanceResponse, assertObject } from '../utils/assert.js';
import { IssuanceResponse } from '../types/response/index.js';
import { VeridFlowBaseClient, FlowBaseAuthorizationRequestParams, FlowBaseFinalizeParams, FlowBaseClientConfig } from './base.js';
import { IssuanceIntent } from '../types/intent/index.js';
import { InvalidArgumentError } from '../error/index.js';
import { ClientAuth } from '../types/oauth/index.js';

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
    mapping?: Record<string, unknown>;
    data?: {
      attributeUuid: string;
      credentialUuid: string;
      issuerUuid: string;
      schemeUuid: string;
      providerUuid: string;
      value: unknown;
    }[];
  };
  challenge?: string;
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}

/**
 * Configuration for Issuance flow client.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface IssuanceClientConfig extends FlowBaseClientConfig {}


/**
 * Parameters for Issuance flow request.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface IssuanceRequestParams extends FlowBaseAuthorizationRequestParams {
  intent_id: string;
}

/**
 * Parameters for Issuance finalize.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface IssuanceFinalizeParams extends FlowBaseFinalizeParams {}

/**
 * Ver.iD Issuance client for OpenID Connect issuance flows.
 * Handles user issuance and retrieves access tokens with verified credentials.
 * @public
 */
export abstract class VeridIssuanceClient extends VeridFlowBaseClient {
  /**
   * Creates a new issuance client.
   * 
   * @param config - The issuance client configuration
   * @param defaultCacheManager - The default cache manager to use (package-specific)
   */
  constructor(config: IssuanceClientConfig, defaultCacheManager: ICacheManager) {
    super(
      {
        issuerUri: config.issuerUri,
        client_id: config.client_id,
        redirectUri: config.redirectUri,
        options: config.options,
      },
      defaultCacheManager,
    );
  }

  /**
   * Creates a new issuance intent.
   * 
   * @param issuanceIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @param clientAuth - Optional client authentication (required in node-client)
   * @returns The ID of the created intent
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
  async createIssuanceIntent(
    issuanceIntent: IssuanceIntentPayload,
    codeChallenge: string,
    clientAuth?: ClientAuth,
  ): Promise<string> {
    assert(
      issuanceIntent.payload.data || issuanceIntent.payload.mapping,
      'At least one of payload.data or payload.mapping must be provided in issuance intent',
      InvalidArgumentError
    );

    assert(
      !(issuanceIntent.payload.data && issuanceIntent.payload.mapping),
      'Both payload.data and payload.mapping should not be provided together.',
      InvalidArgumentError
    );

    if (issuanceIntent.payload.data) {
      assertArray(issuanceIntent.payload.data, 'payload.data', InvalidArgumentError);
    }
    if (issuanceIntent.payload.mapping) {
      assertObject(issuanceIntent.payload.mapping, 'payload.mapping', InvalidArgumentError);
    }

    // Construct IssuanceIntent from IssuanceIntentPayload
    const intent: IssuanceIntent = {
      ...issuanceIntent,
      scope: 'issuance',
      client_id: this.oauthClient.clientId(),
      code_challenge: codeChallenge,
      payload: {
        mapping: issuanceIntent.payload.mapping || {},
        data: issuanceIntent.payload.data || [],
      },
    };

    // Create intent with optional clientAuth
    return this.oauthClient.createIntent(intent, clientAuth);
  }

  /**
   * Generates a issuance URL for initiating the OpenID Connect flow.
   *
   * @param params - Parameters for the issuance request including optional PKCE options
   * @param additionalParams - Additional query parameters to append to the issuance URL
   * @returns Object containing the issuance URL and state
   * @example
   * ```typescript
   * const { issuanceUrl, state } = await client.generateIssuanceUrl();
   * // Browser: window.location.href = issuanceUrl;
   * // Node: res.redirect(issuanceUrl);
   * ```
   */
  async generateIssuanceUrl(
    params: IssuanceRequestParams,
    additionalParams?: Record<string, string>,
  ): Promise<{ issuanceUrl: string; state: string }> {
    // Validate PKCE params using base class method
    this.validateAuthorizationRequestParams(params);

    // Generate or use provided PKCE params
    const { codeChallenge, state } = await this.getPkceParams(params);

    const authorizationUrl = await this.oauthClient.generateAuthorizationUrl(
      {
        redirect_uri: this.redirectUri,
        scope: ISSUANCE_SCOPE,
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
      issuanceUrl: authorizationUrl,
      state,
    };
  }

  /**
   * Finalizes the issuance flow and retrieves the issuance response.
   * Exchanges the authorization code for tokens including the access token.
   * 
   * This method should be overridden by package-specific implementations to handle
   * clientAuth requirements (optional in browser, required in node).
   *
   * @param params - Parameters for finalizing the issuance flow
   * @returns The issuance response containing access_token and token metadata
   * @throws {InvalidResponseError} When the response is not a valid issuance response
   * @throws {OperationFailedError} When code verifier is missing or token exchange fails
   * @protected
   */
  protected async finalizeIssuance(
    params: IssuanceFinalizeParams,
  ): Promise<IssuanceResponse> {
    const response = await this.finalizeFlow(params, assertIssuanceResponse);
    return response as IssuanceResponse;
  }

  /**
   * Verifies and decodes the access token from the issuance response.
   * Also, validates and typecasts the decoded token to a specific payload type.
   * Ensures the token payload conforms to desired structure.
   *
   * @param issuanceResponse - The issuance response containing the access token
   * @param typeAssertFunc - The function to assert the token payload type
   * @returns Typed JWT with typed payload
   * @throws {OperationFailedError} When JWT verification fails
   * @throws {InvalidAssertionError} When token payload doesn't match expected structure
   */
  async decode<T extends JWTPayload>(
    issuanceResponse: IssuanceResponse,
    typeAssertFunc: (payload: unknown, name: string) => asserts payload is T,
  ): Promise<Jwt<T>> {
    const jwt = await this.oauthClient.decode(issuanceResponse.access_token, typeAssertFunc);
    return jwt as Jwt<T>;
  }
}
