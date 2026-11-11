import { VeridError } from './base.js';

/**
 * Error thrown when an embedded session cannot finish from a webhook whose signature matched.
 * Carries the verified `state`, so the backend can tell a redelivery from a failure and report it
 * to the session waiting on it.
 *
 * @public
 */
export class SessionFinishError extends VeridError {
  protected readonly _type = 'ERR_SESSION_FINISH';
  protected readonly _type_description = 'Session finish failed.';

  /**
   * The state of the session the webhook belongs to, from the verified webhook.
   * @public
   */
  public readonly state: string;

  /**
   * Creates a new SessionFinishError instance.
   *
   * @param state - The state from the verified webhook
   * @param cause - The error that stopped the session from finishing
   */
  constructor(state: string, cause: unknown) {
    super('Finishing the session failed', cause);
    this.state = state;
  }
}
