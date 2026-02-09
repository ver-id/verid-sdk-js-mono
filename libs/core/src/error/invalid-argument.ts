import { VeridError } from './base.js';

/**
 * Error thrown when a function receives an invalid argument.
 * Used for parameter validation failures in API methods.
 *
 * @public
 */
export class InvalidArgumentError extends VeridError {
  protected readonly _type = 'ERR_INVALID_ARG';
  protected readonly _type_description = 'Invalid argument.';
}
