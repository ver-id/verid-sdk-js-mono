import { VeridError } from './base.js';

/**
 * Error thrown when an assertion check fails.
 * Used by assertion functions to indicate that a value doesn't meet expected criteria.
 *
 * @public
 */
export class InvalidAssertionError extends VeridError {
  protected readonly _type = 'ERR_INVALID_ASSERTION';
  protected readonly _type_description = 'Assertion failed.';
}
