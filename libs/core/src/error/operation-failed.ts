/**
 * Error thrown when an operation fails to complete successfully.
 * Typically wraps underlying errors from network requests, token exchanges, or other operations.
 *
 * @public
 * @extends Error
 */
export class OperationFailedError extends Error {
  /**
   * Error type identifier.
   * @protected
   */
  protected _type = 'ERR_OPERATION_FAILED';
  /**
   * Human-readable error type description.
   * @protected
   */
  protected _type_description = 'Operation failed.';

  /**
   * Optional error code for additional context.
   * @public
   */
  public code?: string;

  /**
   * Creates a new OperationFailedError instance.
   *
   * @param message - Detailed error message describing which operation failed
   * @param err - Optional underlying error that caused the operation to fail
   * @param code - Optional error code for additional context
   */
  constructor(message: string, err?: unknown, code?: string) {
    const errorMessage = `${message.trim()}: ${err instanceof Error ? err.message : String(err)}`;
    super(errorMessage);
    if (code !== undefined) {
      this.code = code;
    }
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
