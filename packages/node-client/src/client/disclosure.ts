import {
  VeridDisclosureClient as CoreDisclosureClient,
  DisclosureResponse,
  DisclosureClientConfig,
  DisclosureFinalizeParams as CoreDisclosureFinalizeParams,
  DisclosureIntentPayload,
  ClientAuth,
} from '@verid-sdk-js-mono/core';
import { FileStorageCacheManager } from '../cache/file-storage.js';

// Re-export types from core
export type {
  DisclosureIntentPayload,
  DisclosureClientConfig,
  DisclosureRequestParams,
} from '@verid-sdk-js-mono/core';

/**
 * Parameters to Disclosure finalize.
 */
export interface DisclosureFinalizeParams extends Omit<CoreDisclosureFinalizeParams, 'clientAuth'> {
  /**
   * The client disclosure details.
   */
  clientAuth: ClientAuth;
}

/**
 * Ver.iD Disclosure client for OpenID Connect disclosure flows.
 * Handles user disclosure and retrieves ID tokens with user identity information.
 * @public
 */
export class VeridDisclosureClient extends CoreDisclosureClient {
  constructor(config: DisclosureClientConfig) {
    super(config, new FileStorageCacheManager());
  }

  /**
   * Creates a new disclosure intent.
   * Client authentication is mandatory for server-side disclosure intent creation.
   * 
   * @param disclosureIntent - The intent payload
   * @param codeChallenge - The PKCE code challenge
   * @param clientAuth - The client authentication credentials (required)
   * @returns The ID of the created intent
   */
  override async createDisclosureIntent(
    disclosureIntent: DisclosureIntentPayload,
    codeChallenge: string,
    clientAuth: ClientAuth,
  ): Promise<string> {
    return super.createDisclosureIntent(disclosureIntent, codeChallenge, clientAuth);
  }

  /**
   * Finalizes the disclosure flow and retrieves the disclosure response.
   * Exchanges the authorization code for tokens including the ID token.
   *
   * @param params - Parameters for finalizing the disclosure flow
   * @returns The disclosure response containing access_token, id_token, and token metadata
   */
  async finalize(params: DisclosureFinalizeParams): Promise<DisclosureResponse> {
    return this.finalizeDisclosure({ ...params, clientAuth: params.clientAuth });
  }
}
