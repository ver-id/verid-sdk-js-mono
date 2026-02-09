import { VeridError } from './base.js';

/**
 * Error thrown when an operation fails to complete successfully.
 * Typically wraps underlying errors from network requests, token exchanges, or other operations.
 *
 * @public
 */
export class OperationFailedError extends VeridError {
  protected readonly _type = 'ERR_OPERATION_FAILED';
  protected readonly _type_description = 'Operation failed.';

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
    const errorMessage =
      err !== undefined
        ? `${message.trim()}: ${err instanceof Error ? err.message : String(err)}`
        : message.trim();
    super(errorMessage);
    if (code !== undefined) {
      this.code = code;
    }
  }
}
