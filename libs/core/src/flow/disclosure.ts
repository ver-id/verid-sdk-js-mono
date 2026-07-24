import { Jwt, JWTPayload } from '../types/jwt/index.js';
import { assertDisclosureResponse } from '../utils/assert.js';
import { DisclosureResponse } from '../types/response/index.js';
import { VerificationIntent } from '../types/intent/verification.js';
import { VeridFlowBaseClient, FlowBaseAuthorizationRequestParams, FlowBaseFinalizeParams, FlowBaseClientConfig } from './base.js';
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
        client_id: config.client_id,
        options: config.options,
      },
    );
  }

  /** Creates a disclosure intent and returns its ID. */
  async createDisclosureIntent(
    disclosureIntent: DisclosureIntentPayload,
    codeChallenge: string,
    clientAuth?: ClientAuth,
  ): Promise<string> {
    const intent: VerificationIntent = {
      scope: 'disclosure',
      client_id: this.oauthClient.clientId(),
      code_challenge: codeChallenge,
      ...disclosureIntent,
    };

    const response = await this.oauthClient.createIntent(intent, clientAuth);
    return response.intent_id;
  }

  /** Generates the authorization URL for the disclosure flow. */
  async generateDisclosureUrl(
    params?: DisclosureRequestParams,
    additionalParams?: Record<string, string>,
  ): Promise<{ disclosureUrl: string; state: string }> {
    this.validateAuthorizationRequestParams(params);

    const { codeChallenge, state } = await this.getPkceParams(params);

    const authorizationUrl = await this.oauthClient.generateAuthorizationUrl(
      {
        binding: this.redirectBinding(),
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

  /** Finalizes the disclosure flow and returns the token response. */
  protected async finalizeDisclosure(
    params: DisclosureFinalizeParams,
  ): Promise<DisclosureResponse> {
    const response = await this.finalizeFlow(params, assertDisclosureResponse);
    return response as DisclosureResponse;
  }

  /** Verifies and decodes the access token from a disclosure response. */
  async decode<T extends JWTPayload>(
    disclosureResponse: DisclosureResponse,
    typeAssertFunc: (payload: unknown, name: string) => asserts payload is T,
  ): Promise<Jwt<T>> {
    const jwt = await this.oauthClient.decode(disclosureResponse.access_token, typeAssertFunc);
    return jwt as Jwt<T>;
  }
}
