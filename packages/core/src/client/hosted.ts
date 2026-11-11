import { FlowAuthCodeDeliveryBinding } from '../oauth/auth-code-delivery-binding.js';
import { InvalidArgumentError } from '../error/index.js';
import { assertUrlString } from '../utils/assert.js';
import {
  FlowBaseClientConfig,
  VeridFlowBaseClient,
  VeridFlowDefinition,
  VeridSessionArgs,
} from './base.js';

/**
 * Configuration for hosted flow clients.
 */
export interface FlowHostedClientConfig extends FlowBaseClientConfig {
  /** The registered redirect URI for the flow. */
  redirectUri: string;
}

/**
 * A session the browser starts by opening `url`.
 *
 * @public
 */
export interface VeridHostedSession {
  /** The URL to send the browser to. */
  url: string;
  /** Identifies this session on the callback. */
  state: string;
}

/**
 * Base class for hosted flows: the user goes to Ver.iD's page and returns to the redirect URI.
 *
 * @public
 */
export abstract class VeridHostedFlowClient<
  TInput,
  TResult,
  TSessionExtra extends object = object,
> extends VeridFlowBaseClient<TInput, TResult, TSessionExtra> {
  private readonly redirectUri: string;

  constructor(config: FlowHostedClientConfig, flow: VeridFlowDefinition<TInput, TSessionExtra>) {
    super(config, flow);
    assertUrlString(config.redirectUri, 'redirectUri', InvalidArgumentError);
    this.redirectUri = config.redirectUri;
  }

  protected override authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding {
    return { kind: 'redirect', redirectUri: this.redirectUri };
  }

  /**
   * Prepares a session: PKCE, the intent and the authorization URL.
   *
   * @param args - What this session is for
   * @returns The URL to send the browser to, and the `state` identifying the session
   * @throws {InvalidArgumentError} When the input is invalid
   * @throws {OperationFailedError} When the intent endpoint rejects the session
   */
  async createSession(
    ...args: VeridSessionArgs<TInput>
  ): Promise<VeridHostedSession & TSessionExtra> {
    const input = this.sessionInput(args);
    const { codeChallenge, state, intentId, extra } = await this.openSession(input);
    const url = await this.oauthClient.generateAuthorizationUrl({
      binding: this.authCodeDeliveryBinding(),
      scope: this.flow.scope(input),
      state,
      codeChallenge,
      intentId,
    });

    return { url, state, ...extra };
  }
}
