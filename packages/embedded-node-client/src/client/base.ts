import {
  assertString,
  assertUrlString,
  InvalidArgumentError,
  SessionFinishError,
  VeridFlowBaseClient,
  type FlowAuthCodeDeliveryBinding,
  type VeridFlowDefinition,
  type VeridSessionArgs,
} from '@ver-id/core';
import { encodeSessionContext } from './session-context.js';
import { readEmbeddedWebhook } from './webhook.js';
import type {
  EmbeddedClientConfig,
  EmbeddedFinishSessionParams,
  VeridEmbeddedOutcome,
  VeridEmbeddedSession,
} from './types.js';

/** A flow client that hands the browser a session and receives the result by webhook. */
export abstract class EmbeddedFlowClient<
  TInput,
  TResult,
  TSessionExtra extends object = object,
> extends VeridFlowBaseClient<TInput, TResult, TSessionExtra> {
  private readonly webhookUri: string;

  private readonly webhookSecret: string;

  constructor(config: EmbeddedClientConfig, flow: VeridFlowDefinition<TInput, TSessionExtra>) {
    super(config, flow);
    assertString(config.clientSecret, 'clientSecret', InvalidArgumentError);
    assertUrlString(config.webhookUri, 'webhookUri', InvalidArgumentError);
    assertString(config.webhookSecret, 'webhookSecret', InvalidArgumentError);
    this.webhookUri = config.webhookUri;
    this.webhookSecret = config.webhookSecret;
  }

  protected override authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding {
    return { kind: 'embedded' };
  }

  /**
   * Prepares a session: PKCE, the intent and the context the browser mounts.
   *
   * @param args - What this session is for
   * @returns The `sessionContext` for the browser, and the `state` identifying the session. The
   *   code verifier stays on the backend.
   * @throws {InvalidArgumentError} When the input is invalid
   * @throws {InvalidAssertionError} When the issuer's metadata has no `embedded_loader_uri`
   * @throws {OperationFailedError} When the intent endpoint rejects the session
   */
  async createSession(
    ...args: VeridSessionArgs<TInput>
  ): Promise<VeridEmbeddedSession & TSessionExtra> {
    const input = this.sessionInput(args);
    // Before the session opens, so a failed lookup leaves no intent or cached verifier.
    const loaderUri = await this.oauthClient.embeddedLoaderUri();
    const { codeChallenge, state, intentId, extra } = await this.openSession(input);

    const sessionContext = encodeSessionContext({
      loaderUri,
      clientId: this.oauthClient.clientId(),
      scope: this.flow.scope(input),
      state,
      codeChallenge,
      webhookUri: this.webhookUri,
      intentId,
    });

    return { sessionContext, state, ...extra };
  }

  /**
   * Verifies a webhook's signature, then exchanges its code and verifies the result token.
   *
   * @param params - The raw webhook body and the request's headers
   * @returns The session's `state` and the verified result, or `kind: 'unknown'` for an event
   *   this SDK version does not know
   * @throws {InvalidAssertionError} When the signature header is missing or the signed payload is
   *   malformed
   * @throws {AuthorizationResponseError} When the signature does not match the raw body
   * @throws {SessionFinishError} When the signature matched but the session could not finish: a
   *   redelivery after success, no verifier cached for the state, or a failed exchange or token
   *   verification. Carries the verified `state`, and the original error as `cause`.
   */
  async finishSession(params: EmbeddedFinishSessionParams): Promise<VeridEmbeddedOutcome<TResult>> {
    const event = readEmbeddedWebhook({ ...params, secret: this.webhookSecret });
    if (event.kind === 'unknown') {
      return event;
    }
    const { code, state } = event;

    try {
      return {
        kind: 'completed',
        state,
        result: await this.finishWithCode(new URLSearchParams({ code, state })),
      };
    } catch (error) {
      throw new SessionFinishError(state, error);
    }
  }
}
