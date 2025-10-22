/**
 * Error thrown when token grant request is failed.
 *
 * @public
 * @extends Error
 */
export class TokenGrantError extends Error {
  /**
   * Error type identifier.
   * @protected
   */
  protected _type = 'ERR_TOKEN_GRANT';
  /**
   * Human-readable error type description.
   * @protected
   */
  protected _type_description = 'Token grant error.';

  /**
   * Creates a new TokenGrantError instance.
   *
   * @param message - Detailed error message describing what's wrong with the response
   */
  constructor(message: string, err?: unknown) {
    const errorMessage = `${message.trim()}: ${err instanceof Error ? err.message : String(err)}`;
    super(errorMessage);
  }

  /**
   * Gets the error type identifier.
   *
   * @returns The error type string
   */
  get type() {
    return this._type;
  }

  /**
   * Gets the human-readable error type description.
   *
   * @returns The error type description string
   */
  get type_description() {
    return this._type_description;
  }
}
