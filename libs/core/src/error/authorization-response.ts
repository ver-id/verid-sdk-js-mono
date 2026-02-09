import { VeridError } from './base.js';

/**
 * Error thrown when authorization request is failed or rejected.
 *
 * @public
 */
export class AuthorizationResponseError extends VeridError {
  protected readonly _type = 'ERR_AUTHORIZATION_RESPONSE';
  protected readonly _type_description = 'Authorization response error.';
}
