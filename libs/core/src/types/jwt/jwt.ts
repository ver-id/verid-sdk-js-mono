import { JWTPayload, JWTHeaderParameters } from 'jose';

/**
 * Enumeration of Ver.iD JWT types used in the SSI (Self-Sovereign Identity) system.
 * Each type indicates the format and structure of the JWT payload.
 *
 * @public
 */
export enum JwtType {
  /** Plain disclosure format with full nested structure */
  'jwt_ssi_output_plain_v1' = 'ver-id/ssi/output/plain/v1+JWT',
  /** Attested disclosure format with cryptographic attestation */
  'jwt_ssi_output_attested_v1' = 'ver-id/ssi/output/attested/v1+JWT',
  /** OpenID Connect format with standard OIDC claims */
  'jwt_ssi_output_openid_v1' = 'ver-id/ssi/output/openid/v1+JWT',
}

/**
 * Verified and decoded JWT structure.
 * Contains the validated payload and protected header after signature verification.
 *
 * @typeParam T - The JWT payload type, defaults to standard JWTPayload
 * @public
 */
export interface Jwt<T extends JWTPayload = JWTPayload> {
  /** Decoded and verified JWT payload containing claims */
  readonly payload: T;
  /** Protected JWT header parameters including algorithm and token type */
  readonly protectedHeader: JWTHeaderParameters;
}
