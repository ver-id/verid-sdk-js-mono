/**
 * Error thrown when an unexpected or unclassified error occurs.
 * Used as a catch-all for errors that don't fit into other error categories.
 *
 * @public
 * @extends Error
 */
export class UnknownError extends Error {
  /**
   * Error type identifier.
   * @protected
   */
  protected _type = 'ERR_UNKNOWN';
  /**
   * Human-readable error type description.
   * @protected
   */
  protected _type_description = 'Unknown error.';

  /**
   * Creates a new UnknownError instance.
   *
   * @param message - Detailed error message describing the unknown error
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
