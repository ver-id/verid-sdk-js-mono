import { JWTPayload } from 'jose';
import { JSONValue, UUID } from '../../../generic.js';

/**
 * Represents a single data item in a flat issuance JWT payload.
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
 * Represents an output item in a flat issuance JWT.
 * Contains the data items along with metadata and verification parameters.
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
  /** Array of data items */
  data: IssuanceOutputData[];
  /** Mapping information for field transformations or aliases */
  mapping: Record<string, JSONValue>;
}

/**
 * Legacy JWT payload structure for issuance (flat format).
 * Used in the 'ver-id/ssi/issuance/flat/v1+JWT' token type.
 *
 * @public
 * @extends JWTPayload
 * @deprecated Use IssuanceV1JwtPayload for new integrations
 */
export interface IssuanceFlatV1JwtPayload extends JWTPayload {
  /** Array of output items containing issuance data */
  output: IssuanceOutputItem[];
}
