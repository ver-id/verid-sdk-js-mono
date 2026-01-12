import { ICacheManager } from '../interface/ICacheManager.js';
import { Jwt, JWTPayload } from '../types/jwt/index.js';
import { assertDisclosureResponse } from '../utils/assert.js';
import { DisclosureResponse } from '../types/response/index.js';
import { VerificationIntent } from '../types/intent/verification.js';
import { VeridFlowBaseClient, FlowBaseAuthorizationRequestParams, FlowBaseFinalizeParams, FlowBaseClientConfig } from './base.js';

/**
 * Default OAuth scope for disclosure requests.
 * @constant
 */
const DISCLOSURE_SCOPE = 'disclosure';

/**
 * Payload for creating a disclosure intent.
 */
export interface DisclosureIntentPayload {
  challenge?: string;
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}

/**
 * Configuration for Disclosure flow client.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface DisclosureClientConfig extends FlowBaseClientConfig {}


/**
 * Parameters for Disclosure flow request.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface DisclosureRequestParams extends FlowBaseAuthorizationRequestParams {}

/**
 * Parameters for Disclosure finalize.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface DisclosureFinalizeParams extends FlowBaseFinalizeParams {}

/**
 * Ver.iD Disclosure client for OpenID Connect disclosure flows.
 * Handles user disclosure and retrieves access tokens with verified credentials.
 * @public
 */
export abstract class VeridDisclosureClient extends VeridFlowBaseClient {
  /**
   * Creates a new disclosure client.
   * 
   * @param config - The disclosure client configuration
   * @param defaultCacheManager - The default cache manager to use (package-specific)
   */
  constructor(config: DisclosureClientConfig, defaultCacheManager: ICacheManager) {
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
   * Creates a new disclosure intent.
   * 
   * @param disclosureIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @returns The ID of the created intent
   * @example
   * ```typescript
   * const { codeChallenge } = await client.generateCodeChallenge();
   * const intentId = await client.createDisclosureIntent({
   *   challenge: 'your-challenge-string',
   *   brandUuid: 'your-brand-uuid',
   *   requireExplicitConsent: true,
   * }, codeChallenge);
   * ```
   */
  async createDisclosureIntent(
    disclosureIntent: DisclosureIntentPayload,
    codeChallenge: string,
  ): Promise<string> {
    // Construct VerificationIntent from DisclosureIntentPayload
    const intent: VerificationIntent = {
      scope: 'disclosure',
      client_id: this.oauthClient.clientId(),
      code_challenge: codeChallenge,
      ...disclosureIntent,
    };

    // Create intent
    return this.oauthClient.createIntent(intent);
  }

  /**
   * Generates a disclosure URL for initiating the OpenID Connect flow.
   *
   * @param params - Parameters for the disclosure request including optional PKCE options
   * @param additionalParams - Additional query parameters to append to the disclosure URL
   * @returns Object containing the disclosure URL and state
   * @example
   * ```typescript
   * const { disclosureUrl, state } = await client.generateDisclosureUrl();
   * // Browser: window.location.href = disclosureUrl;
   * // Node: res.redirect(disclosureUrl);
   * ```
   */
  async generateDisclosureUrl(
    params?: DisclosureRequestParams,
    additionalParams?: Record<string, string>,
  ): Promise<{ disclosureUrl: string; state: string }> {
    // Validate PKCE params using base class method
    this.validateAuthorizationRequestParams(params);

    // Generate or use provided PKCE params
    const { codeChallenge, state } = await this.getPkceParams(params);

    const authorizationUrl = await this.oauthClient.generateAuthorizationUrl(
      {
        redirect_uri: this.redirectUri,
        scope: DISCLOSURE_SCOPE,
        state,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
        intent_id: params?.intent_id,
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
   * Exchanges the authorization code for tokens including the access token.
   * 
   * This method should be overridden by package-specific implementations to handle
   * clientAuth requirements (optional in browser, required in node).
   *
   * @param params - Parameters for finalizing the disclosure flow
   * @returns The disclosure response containing access_token and token metadata
   * @throws {InvalidResponseError} When the response is not a valid disclosure response
   * @throws {OperationFailedError} When code verifier is missing or token exchange fails
   * @protected
   */
  protected async finalizeDisclosure(
    params: DisclosureFinalizeParams,
  ): Promise<DisclosureResponse> {
    const response = await this.finalizeFlow(params, assertDisclosureResponse);
    return response as DisclosureResponse;
  }

  /**
   * Verifies and decodes the access token from the disclosure response.
   * Also, validates and typecasts the decoded token to a specific payload type.
   * Ensures the token payload conforms to desired structure.
   *
   * @param disclosureResponse - The disclosure response containing the access token
   * @param typeAssertFunc - The function to assert the token payload type
   * @returns Typed JWT with typed payload
   * @throws {OperationFailedError} When JWT verification fails
   * @throws {InvalidAssertionError} When token payload doesn't match expected structure
   */
  async decode<T extends JWTPayload>(
    disclosureResponse: DisclosureResponse,
    typeAssertFunc: (payload: unknown, name: string) => asserts payload is T,
  ): Promise<Jwt<T>> {
    const jwt = await this.oauthClient.decode(disclosureResponse.access_token, typeAssertFunc);
    return jwt as Jwt<T>;
  }
}
