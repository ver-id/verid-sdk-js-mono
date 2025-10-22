/**
 * Error thrown when an API response is invalid or malformed.
 * Used to indicate that a response from a server doesn't match the expected structure.
 *
 * @public
 * @extends Error
 */
export class InvalidResponseError extends Error {
  /**
   * Error type identifier.
   * @protected
   */
  protected _type = 'ERR_INVALID_RESPONSE';
  /**
   * Human-readable error type description.
   * @protected
   */
  protected _type_description = 'Invalid response.';

  /**
   * Creates a new InvalidResponseError instance.
   *
   * @param message - Detailed error message describing what's wrong with the response
   */
  constructor(message: string) {
    super(message);
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
