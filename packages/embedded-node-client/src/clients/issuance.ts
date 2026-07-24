import {
  VeridIssuanceClient,
  type IssuanceResponse,
  type FlowRedirectBinding,
} from '@verid-sdk-js-mono/core';
import { FileStorageCacheManager } from '../cache/file-storage.js';
import {
  buildEmbeddedSessionBootstrap,
  type EmbeddedSessionBootstrap,
  type EmbeddedSessionParams,
} from '../embedded/session.js';
import {
  embeddedWebhookRejectionError,
  verifyEmbeddedWebhook,
  type EmbeddedWebhookVerification,
  type VerifyEmbeddedWebhookParams,
} from '../embedded/webhook.js';
import type { EmbeddedClientConfig, FinalizeEmbeddedParams } from './types.js';

/**
 * Embedded-flow issuance client. Owns PKCE + webhook verification; the browser
 * half (`@ver-id/embedded-browser-client`) holds no secrets and never sees the code.
 *
 * @public
 */
export class EmbeddedIssuanceClient extends VeridIssuanceClient {
  readonly #issuerUri: string;

  constructor(config: EmbeddedClientConfig) {
    super({
      issuerUri: config.issuerUri,
      client_id: config.client_id,
      options: {
        cacheManager: config.options?.cacheManager ?? new FileStorageCacheManager(),
      },
    });
    this.#issuerUri = config.issuerUri;
  }

  protected override redirectBinding(): FlowRedirectBinding {
    return { kind: 'embedded' };
  }

  /** Starts an embedded session and returns the browser bootstrap (no code_verifier). */
  async createEmbeddedSession(
    params: EmbeddedSessionParams,
  ): Promise<EmbeddedSessionBootstrap> {
    return buildEmbeddedSessionBootstrap(
      {
        clientId: this.oauthClient.clientId(),
        issuerUri: this.#issuerUri,
        generateCodeChallenge: (state) => this.generateCodeChallenge(state),
      },
      params,
    );
  }

  /** Verifies an inbound signed webhook. */
  verifyEmbeddedWebhook(
    params: VerifyEmbeddedWebhookParams,
  ): EmbeddedWebhookVerification {
    return verifyEmbeddedWebhook(params);
  }

  /** Verifies the webhook and, on success, exchanges the code for tokens (no redirect_uri). */
  async finalizeEmbedded(params: FinalizeEmbeddedParams): Promise<IssuanceResponse> {
    const verification = verifyEmbeddedWebhook({
      rawBody: params.rawBody,
      signature: params.signature,
      secret: params.secret,
    });
    if (!verification.ok) {
      throw embeddedWebhookRejectionError(verification.reason);
    }
    const callbackParams = new URLSearchParams({
      code: verification.payload.code,
      state: verification.payload.state,
    });
    return this.finalizeIssuance({ callbackParams, clientAuth: params.clientAuth });
  }
}
