import { JWTPayload, JWTHeaderParameters } from 'jose';

/**
 * Enumeration of Ver.iD JWT types used in the SSI (Self-Sovereign Identity) system.
 * Each type indicates the format and structure of the JWT payload.
 *
 * @public
 */
export enum JwtType {
  /** Disclosure token (credentials[] grouped, catalog metadata) */
  jwt_ssi_disclosure_v1 = 'ver-id/ssi/disclosure/v1+JWT',
  /** Signature token (credentials[] grouped, catalog metadata) */
  jwt_ssi_signature_v1 = 'ver-id/ssi/signature/v1+JWT',
  /** Issuance token (credentials[] grouped, catalog metadata) */
  jwt_ssi_issuance_v1 = 'ver-id/ssi/issuance/v1+JWT',
  /** Legacy: flat disclosure token (flat data[], output[] wrapper) */
  jwt_ssi_disclosure_flat_v1 = 'ver-id/ssi/disclosure/flat/v1+JWT',
  /** Legacy: flat signature token (flat data[], output[] wrapper) */
  jwt_ssi_signature_flat_v1 = 'ver-id/ssi/signature/flat/v1+JWT',
  /** Legacy: flat issuance token (flat data[], output[] wrapper) */
  jwt_ssi_issuance_flat_v1 = 'ver-id/ssi/issuance/flat/v1+JWT',
  /** OpenID Connect output token */
  jwt_ssi_output_openid_v1 = 'ver-id/ssi/output/openid/v1+JWT',
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
