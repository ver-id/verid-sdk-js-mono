import { VeridError } from './base.js';

/**
 * Error thrown when an API response is invalid or malformed.
 * Used to indicate that a response from a server doesn't match the expected structure.
 *
 * @public
 */
export class InvalidResponseError extends VeridError {
  protected readonly _type = 'ERR_INVALID_RESPONSE';
  protected readonly _type_description = 'Invalid response.';
}
