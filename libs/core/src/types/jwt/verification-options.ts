/**
 * Options for JWT verification and validation.
 * Defines expected values for standard JWT claims during token verification.
 *
 * @public
 */
export interface JwtVerificationOptions {
  /**
   * Expected audience (aud) claim value(s).
   * Can be a single string or array of strings.
   * Verification will fail if the token's aud claim doesn't match.
   */
  readonly audience: string | string[];

  /**
   * Expected issuer (iss) claim value(s).
   * Can be a single string or array of strings.
   * Verification will fail if the token's iss claim doesn't match.
   */
  readonly issuer: string | string[];
}
