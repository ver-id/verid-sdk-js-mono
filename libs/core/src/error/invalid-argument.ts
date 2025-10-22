/**
 * Error thrown when a function receives an invalid argument.
 * Used for parameter validation failures in API methods.
 *
 * @public
 * @extends Error
 */
export class InvalidArgumentError extends Error {
  /**
   * Error type identifier.
   * @protected
   */
  protected _type = 'ERR_INVALID_ARG';
  /**
   * Human-readable error type description.
   * @protected
   */
  protected _type_description = 'Invalid argument.';

  /**
   * Creates a new InvalidArgumentError instance.
   *
   * @param message - Detailed error message describing which argument is invalid and why
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
