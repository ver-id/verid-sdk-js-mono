import { VeridError } from './base.js';

/**
 * Error thrown when an unexpected or unclassified error occurs.
 * Used as a catch-all for errors that don't fit into other error categories.
 *
 * @public
 */
export class UnknownError extends VeridError {
  protected readonly _type = 'ERR_UNKNOWN';
  protected readonly _type_description = 'Unknown error.';
}
