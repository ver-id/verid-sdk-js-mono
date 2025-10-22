/**
 * Error thrown when an assertion check fails.
 * Used by assertion functions to indicate that a value doesn't meet expected criteria.
 *
 * @public
 * @extends Error
 */
export class InvalidAssertionError extends Error {
  /**
   * Error type identifier.
   * @protected
   */
  protected _type = 'ERR_INVALID_ASSERTION';
  /**
   * Human-readable error type description.
   * @protected
   */
  protected _type_description = 'Assertion failed.';

  /**
   * Creates a new InvalidAssertionError instance.
   *
   * @param message - Detailed error message describing which assertion failed and why
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
