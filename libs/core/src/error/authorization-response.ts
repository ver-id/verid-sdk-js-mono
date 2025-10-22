/**
 * Error thrown when authorization request is failed or rejected.
 *
 * @public
 * @extends Error
 */
export class AuthorizationResponseError extends Error {
  /**
   * Error type identifier.
   * @protected
   */
  protected _type = 'ERR_AUTHORIZATION_RESPONSE';
  /**
   * Human-readable error type description.
   * @protected
   */
  protected _type_description = 'Authorization response error.';

  /**
   * Creates a new AuthorizationResponseError instance.
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
