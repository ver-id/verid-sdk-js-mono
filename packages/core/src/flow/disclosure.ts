import { Jwt, JWTPayload } from '../types/jwt/index.js';
import { assertDisclosureResponse, assertString } from '../utils/assert.js';
import { DisclosureResponse } from '../types/response/index.js';
import { VerificationIntent } from '../types/intent/verification.js';
import { VeridFlowBaseClient, FlowBaseAuthorizationRequestParams, FlowBaseFinalizeParams, FlowBaseClientConfig } from './base.js';
import { InvalidArgumentError } from '../error/index.js';
import { ClientAuth } from '../types/oauth/index.js';

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
 *
 * @public
 */
export abstract class VeridDisclosureClient extends VeridFlowBaseClient {
  constructor(config: DisclosureClientConfig) {
    super(
      {
        issuerUri: config.issuerUri,
        clientId: config.clientId,
        options: config.options,
      },
    );
  }

  /**
   * Creates a disclosure intent and returns its ID.
   *
   * @param disclosureIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @param clientAuth - Optional client authentication (required in node-client)
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
    clientAuth?: ClientAuth,
  ): Promise<string> {
    assertString(codeChallenge, 'codeChallenge', InvalidArgumentError);

    const intent: VerificationIntent = {
      scope: 'disclosure',
      client_id: this.oauthClient.clientId(),
      code_challenge: codeChallenge,
      ...disclosureIntent,
    };

    const response = await this.oauthClient.createIntent(intent, clientAuth);
    return response.intent_id;
  }

  /**
   * Generates the authorization URL for the disclosure flow.
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
    this.validateAuthorizationRequestParams(params);

    const { codeChallenge, state } = await this.getPkceParams(params);

    const authorizationUrl = await this.oauthClient.generateAuthorizationUrl(
      {
        binding: this.authCodeDeliveryBinding(),
        scope: DISCLOSURE_SCOPE,
        state,
        codeChallenge,
        codeChallengeMethod: 'S256',
        intentId: params?.intentId,
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

  /** Finalizes the disclosure flow and returns the token response. */
  protected async finalizeDisclosure(
    params: DisclosureFinalizeParams,
  ): Promise<DisclosureResponse> {
    const response = await this.finalizeFlow(params, assertDisclosureResponse);
    return response as DisclosureResponse;
  }

  /**
   * Verifies and decodes the access token from a disclosure response.
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
