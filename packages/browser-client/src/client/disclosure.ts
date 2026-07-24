import {
  VeridDisclosureClient as CoreDisclosureClient,
  DisclosureClientConfig,
  DisclosureFinalizeParams as CoreDisclosureFinalizeParams,
  DisclosureResponse,
  ICacheManager,
  FlowRedirectBinding,
} from '@verid-sdk-js-mono/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

// Re-export types from core
export type {
  DisclosureIntentPayload,
  DisclosureClientConfig,
  DisclosureRequestParams,
} from '@verid-sdk-js-mono/core';

/** Configuration for the browser disclosure client. */
export type BrowserDisclosureClientConfig = Omit<DisclosureClientConfig, 'options'> & {
  /** The registered redirect URI for the flow. */
  redirectUri: string;
  options?: {
    cacheManager?: ICacheManager;
  };
};

/**
 * Parameters to Disclosure finalize.
 */
export interface DisclosureFinalizeParams extends Omit<CoreDisclosureFinalizeParams, 'callbackParams'> {
  callbackParams?: URL | URLSearchParams | string;
}

/**
 * Browser disclosure client for OpenID Connect flows.
 *
 * @public
 */
export class VeridDisclosureClient extends CoreDisclosureClient {
  private readonly redirectUri: string;

  constructor(config: BrowserDisclosureClientConfig) {
    super({
      issuerUri: config.issuerUri,
      client_id: config.client_id,
      options: {
        cacheManager: config.options?.cacheManager ?? new SessionStorageCacheManager(),
      },
    });
    this.redirectUri = config.redirectUri;
  }

  protected override redirectBinding(): FlowRedirectBinding {
    return { kind: 'redirect', redirectUri: this.redirectUri };
  }

  /** Finalizes the disclosure flow, defaulting to window.location if no params are provided. */
  async finalize(params?: DisclosureFinalizeParams): Promise<DisclosureResponse> {
    let callbackParams = params?.callbackParams;

    if (!callbackParams) {
      callbackParams = window.location.href;
    }
    return this.finalizeDisclosure({ ...params, callbackParams });
  }
}
