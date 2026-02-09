import { VeridError } from './base.js';

/**
 * Error thrown when token grant request is failed.
 *
 * @public
 */
export class TokenGrantError extends VeridError {
  protected readonly _type = 'ERR_TOKEN_GRANT';
  protected readonly _type_description = 'Token grant error.';

  /**
   * Creates a new TokenGrantError instance.
   *
   * @param message - Detailed error message describing what went wrong
   * @param err - Optional underlying error that caused the failure
   */
  constructor(message: string, err?: unknown) {
    const errorMessage =
      err !== undefined
        ? `${message.trim()}: ${err instanceof Error ? err.message : String(err)}`
        : message.trim();
    super(errorMessage);
  }
}
