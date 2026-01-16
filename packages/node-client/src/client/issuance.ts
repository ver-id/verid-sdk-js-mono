import {
  VeridIssuanceClient as CoreIssuanceClient,
  IssuanceResponse,
  IssuanceClientConfig,
  IssuanceFinalizeParams as CoreIssuanceFinalizeParams,
  IssuanceIntentPayload,
  ClientAuth,
} from '@verid-sdk-js-mono/core';
import { FileStorageCacheManager } from '../cache/file-storage.js';

// Re-export types from core
export type {
  IssuanceIntentPayload,
  IssuanceClientConfig,
  IssuanceRequestParams,
} from '@verid-sdk-js-mono/core';

/**
 * Parameters to Issuance finalize.
 */
export interface IssuanceFinalizeParams extends Omit<CoreIssuanceFinalizeParams, 'clientAuth'> {
  /**
   * The client issuance details.
   */
  clientAuth: ClientAuth;
}

/**
 * Ver.iD Issuance client for OpenID Connect issuance flows.
 * Handles user issuance and retrieves ID tokens with user identity information.
 * @public
 */
export class VeridIssuanceClient extends CoreIssuanceClient {
  constructor(config: IssuanceClientConfig) {
    super(config, new FileStorageCacheManager());
  }

  /**
   * Creates a new issuance intent.
   * Client authentication is mandatory for server-side issuance intent creation.
   * 
   * @param issuanceIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @param clientAuth - The client authentication credentials (required)
   * @returns The ID of the created intent
   */
  override async createIssuanceIntent(
    issuanceIntent: IssuanceIntentPayload,
    codeChallenge: string,
    clientAuth: ClientAuth,
  ): Promise<string> {
    return super.createIssuanceIntent(issuanceIntent, codeChallenge, clientAuth);
  }

  /**
   * Finalizes the issuance flow and retrieves the issuance response.
   * Exchanges the authorization code for tokens including the ID token.
   *
   * @param params - Parameters for finalizing the issuance flow
   * @returns The issuance response containing access_token, id_token, and token metadata
   */
  async finalize(params: IssuanceFinalizeParams): Promise<IssuanceResponse> {
    return this.finalizeIssuance({ ...params, clientAuth: params.clientAuth });
  }
}
