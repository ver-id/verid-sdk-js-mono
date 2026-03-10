import { JSONValue, UUID } from '../../../generic.js';

/**
 * Credential format type discriminator.
 * Lowercase snake_case values match the optional bucket property names.
 *
 * @public
 */
export enum OutputCredentialType {
  sd_jwt = 'sd_jwt',
  mdoc = 'mdoc',
  yivi = 'yivi',
  datakeeper = 'datakeeper',
  nl_wallet = 'nl_wallet',
  none = 'none',
}

/**
 * Base credential structure shared by all operations.
 * Groups attributes by credential with catalog metadata and format-specific buckets.
 *
 * @public
 */
export interface OutputCredential {
  /** UUID of the credential */
  credentialUuid: UUID;
  /** UUID of the issuer that issued the credential */
  issuerUuid: UUID;
  /** UUID of the scheme governing the credential */
  schemeUuid: UUID;
  /** UUID of the provider managing the scheme */
  providerUuid: UUID;
  /** Canonical credential name from catalog (e.g., "PID", "Diploma") */
  credentialName: string;
  /** Canonical issuer name from catalog (e.g., "RvIG", "DUO") */
  issuerName: string;
  /** Canonical scheme name from catalog (e.g., "PID Scheme NL") */
  schemeName: string;
  /** Canonical provider name from catalog (e.g., "OID4VC", "Yivi") */
  providerName: string;
  /** Format discriminator — tells consumer which bucket to read */
  type: OutputCredentialType;
  /** SD-JWT format-specific metadata (present when type is "sd_jwt") */
  sd_jwt?: {
    /** SD-JWT VC type identifier */
    vct: string;
  };
  /** mdoc format-specific metadata (present when type is "mdoc") */
  mdoc?: {
    /** mdoc document type */
    docType: string;
  };
  /** Attributes belonging to this credential */
  attributes: OutputAttribute[];
}

/**
 * Disclosure/Signature credential — no additional fields over base.
 *
 * @public
 */
export type DisclosureCredential = OutputCredential;

/**
 * Signature credential — same shape as disclosure.
 *
 * @public
 */
export type SignatureCredential = OutputCredential;

/**
 * Issuance credential — extends base with fulfillment status.
 *
 * @public
 */
export interface IssuanceCredential extends OutputCredential {
  /** Per-credential fulfillment status (e.g., "FULFILLED", "PARTIAL") */
  status: string;
}

/**
 * Attribute structure within a credential.
 * Carries the disclosed/issued value with format-specific metadata.
 *
 * @public
 */
export interface OutputAttribute {
  /** UUID of the attribute */
  attributeUuid: UUID;
  /** Canonical attribute name (not localized, e.g., "family_name") */
  attributeName: string;
  /** The disclosed/issued value */
  value: JSONValue;
  /** Format discriminator — mirrors credential-level type */
  type: OutputCredentialType;
  /** SD-JWT format-specific metadata */
  sd_jwt?: {
    /** SD-JWT VC claim path */
    claimPath: JSONValue;
  };
  /** mdoc format-specific metadata */
  mdoc?: {
    /** mdoc namespace */
    namespace: string;
    /** mdoc data element */
    docElement: string;
  };
}
