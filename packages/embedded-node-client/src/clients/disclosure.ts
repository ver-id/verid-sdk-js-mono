import {
  VeridDisclosureClient,
  type DisclosureResponse,
  type FlowAuthCodeDeliveryBinding,
} from '@ver-id/core';
import { FileStorageCacheManager } from '@ver-id/core/cache/node';
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
 * Embedded disclosure client that owns PKCE and webhook verification.
 *
 * @public
 */
export class EmbeddedDisclosureClient extends VeridDisclosureClient {
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

  protected override authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding {
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
  async finalizeEmbedded(params: FinalizeEmbeddedParams): Promise<DisclosureResponse> {
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
    return this.finalizeDisclosure({ callbackParams, clientAuth: params.clientAuth });
  }
}
