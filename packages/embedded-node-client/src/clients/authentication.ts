import {
  VeridAuthenticationClient,
  type AuthenticationResponse,
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
 * Embedded authentication client that owns PKCE and webhook verification.
 *
 * @public
 */
export class EmbeddedAuthenticationClient extends VeridAuthenticationClient {
  readonly #issuerUri: string;

  constructor(config: EmbeddedClientConfig) {
    super({
      issuerUri: config.issuerUri,
      clientId: config.clientId,
      options: {
        cacheManager: config.options?.cacheManager ?? new FileStorageCacheManager(),
      },
    });
    this.#issuerUri = config.issuerUri;
  }

  protected override authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding {
    return { kind: 'embedded' };
  }

  /**
   * Starts an embedded session and returns the browser bootstrap (no code_verifier).
   *
   * @param params - The scopes to request, the backend's own webhook endpoint, and optionally the
   *   gateway URI, an intent id, and a caller-supplied state.
   * @returns The public bootstrap values to hand to `@ver-id/embedded-browser-client`.
   */
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

  /**
   * Verifies an inbound signed webhook.
   *
   * @param params - The raw request body, the `x-signature-256` header value, and the flow's
   *   webhook secret.
   * @returns `{ ok: true, payload }` with the verified payload, or `{ ok: false, reason }`
   *   describing why the webhook was rejected.
   */
  verifyEmbeddedWebhook(
    params: VerifyEmbeddedWebhookParams,
  ): EmbeddedWebhookVerification {
    return verifyEmbeddedWebhook(params);
  }

  /**
   * Verifies the webhook and, on success, exchanges the code for tokens (no redirect_uri).
   *
   * @param params - The raw webhook body, its signature header, the flow's webhook secret, and the
   *   client authentication credentials for the token exchange.
   * @returns The authentication response containing access_token, id_token, and token metadata.
   * @throws {InvalidAssertionError} When the signature header is missing or the payload is
   *   malformed.
   * @throws {AuthorizationResponseError} When the signature does not match the raw body.
   */
  async finalizeEmbedded(params: FinalizeEmbeddedParams): Promise<AuthenticationResponse> {
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
    return this.finalizeAuthentication({ callbackParams, clientAuth: params.clientAuth });
  }
}
