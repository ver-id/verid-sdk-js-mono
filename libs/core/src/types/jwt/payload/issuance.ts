import { JWTPayload } from 'jose';
import { JSONValue, UUID } from '../../generic.js';

/**
 * Represents a single disclosed data item in an attested JWT payload.
 * Contains the attribute value along with its complete identity hierarchy.
 *
 * @public
 */
export interface IssuanceOutputData {
  /** UUID of the attribute being disclosed */
  attributeUuid: UUID;
  /** UUID of the credential containing this attribute */
  credentialUuid: UUID;
  /** UUID of the issuer that issued the credential */
  issuerUuid: UUID;
  /** UUID of the scheme governing the credential */
  schemeUuid: UUID;
  /** UUID of the provider managing the scheme */
  providerUuid: UUID;
  /** The actual disclosed value of the attribute */
  value: JSONValue;
}
/**
 * Represents a revocation key associated with a credential.
 * @public
 */
export interface IssuanceRevocationKey {
  /** UUID of the credential containing this revocation key */
  credentialUuid: UUID;
  /** Revocation key */
  key: string;
}
/**
 * Represents a disclosure or signature output item in an attested JWT.
 * Contains the disclosed data items along with metadata and verification parameters.
 *
 * @public
 */
export interface IssuanceOutputItem {
  /** Unique identifier for this output item */
  uuid: UUID;
  /** Parameters used to verify the output */
  parameter: {
    /** Challenge string used for replay protection */
    challenge: string;
  };
  /** Additional metadata about the output */
  meta: Record<string, JSONValue>;
  /** Array of disclosed data items */
  data: IssuanceOutputData[];
  /** */
  revocationKeys: IssuanceRevocationKey[];
  /** Mapping information for field transformations or aliases */
  mapping: Record<string, JSONValue>;
}

/**
 * Legacy JWT payload structure for issuance (flat format).
 * Used in the 'ver-id/ssi/output/issuance/v1+JWT' token type.
 *
 * @public
 * @extends JWTPayload
 * @deprecated Use IssuanceV2JwtPayload for new integrations
 */
export interface IssuanceJwtPayload extends JWTPayload {
  /** Array of output items containing disclosed or signed data */
  output: IssuanceOutputItem[];
}

/**
 * JWT payload structure for issuance tokens (v2).
 * Contains credential-grouped issued data with catalog metadata.
 * Used in the 'ver-id/ssi/issuance/v1+JWT' token type.
 *
 * @public
 * @extends JWTPayload
 */
export interface IssuanceV2JwtPayload extends JWTPayload {
  /** Process identifier */
  uuid: string;
  /** Replay protection with echoed input payload */
  parameter: {
    challenge: string;
    payload: {
      data: Array<{ attributeUuid: string; value: JSONValue }>;
      mapping: Record<string, JSONValue>;
    };
  };
  /** Flow-level metadata from studio */
  meta: Record<string, JSONValue>;
  /** Field transformation results */
  mapping: Record<string, JSONValue>;
  /** Credentials grouped by credential with catalog metadata and status */
  credentials: import('./credential.js').IssuanceCredential[];
  /** Issuance UUID from studio */
  issuanceUuid: string;
  /** Organization that configured the flow */
  organizationUuid: string;
}
