import { Jwt, JWTPayload } from '../types/jwt/index.js';
import { assert, assertArray, assertIssuanceResponse, assertObject } from '../utils/assert.js';
import { IssuanceResponse } from '../types/response/index.js';
import { VeridFlowBaseClient, FlowBaseAuthorizationRequestParams, FlowBaseFinalizeParams, FlowBaseClientConfig } from './base.js';
import { IssuanceIntent, IntentResponse } from '../types/intent/index.js';
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
 *
 * @public
 */
export abstract class VeridIssuanceClient extends VeridFlowBaseClient {
  constructor(config: IssuanceClientConfig) {
    super(
      {
        issuerUri: config.issuerUri,
        client_id: config.client_id,
        options: config.options,
      },
    );
  }

  /** Creates an issuance intent and returns it. */
  async createIssuanceIntent(
    issuanceIntent: IssuanceIntentPayload,
    codeChallenge: string,
    clientAuth?: ClientAuth,
  ): Promise<IntentResponse> {
    const hasData = Array.isArray(issuanceIntent.payload.data) && issuanceIntent.payload.data.length > 0;
    const hasMapping = issuanceIntent.payload.mapping && Object.keys(issuanceIntent.payload.mapping).length > 0;

    assert(
      hasData || hasMapping,
      'At least one of payload.data or payload.mapping must be provided in issuance intent',
      InvalidArgumentError
    );

    assert(
      !(hasData && hasMapping),
      'Both payload.data and payload.mapping should not be provided together.',
      InvalidArgumentError
    );

    if (issuanceIntent.payload.data) {
      assertArray(issuanceIntent.payload.data, 'payload.data', InvalidArgumentError);
    }
    if (issuanceIntent.payload.mapping) {
      assertObject(issuanceIntent.payload.mapping, 'payload.mapping', InvalidArgumentError);
    }

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

    return this.oauthClient.createIntent(intent, clientAuth);
  }

  /** Generates the authorization URL for the issuance flow. */
  async generateIssuanceUrl(
    params: IssuanceRequestParams,
    additionalParams?: Record<string, string>,
  ): Promise<{ issuanceUrl: string; state: string }> {
    this.validateAuthorizationRequestParams(params);

    const { codeChallenge, state } = await this.getPkceParams(params);

    const authorizationUrl = await this.oauthClient.generateAuthorizationUrl(
      {
        binding: this.redirectBinding(),
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

  /** Finalizes the issuance flow and returns the token response. */
  protected async finalizeIssuance(
    params: IssuanceFinalizeParams,
  ): Promise<IssuanceResponse> {
    const response = await this.finalizeFlow(params, assertIssuanceResponse);
    return response as IssuanceResponse;
  }

  /** Verifies and decodes the access token from an issuance response. */
  async decode<T extends JWTPayload>(
    issuanceResponse: IssuanceResponse,
    typeAssertFunc: (payload: unknown, name: string) => asserts payload is T,
  ): Promise<Jwt<T>> {
    const jwt = await this.oauthClient.decode(issuanceResponse.access_token, typeAssertFunc);
    return jwt as Jwt<T>;
  }
}
