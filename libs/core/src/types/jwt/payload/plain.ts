// src/types/jwt/plain.ts
import { JWTPayload } from 'jose';
import { JSONValue, UUID } from '../../generic.js';

/**
 * Internationalization translation item for a specific language.
 * Contains a translated string value for a particular language code.
 *
 * @public
 */
export interface I18nItem {
  /** Language code (e.g., 'en', 'nl', 'de') */
  lang: string;
  /** Translated text value in the specified language */
  value: string;
}

/**
 * Metadata containing internationalized name and description.
 * Provides translations for display names and descriptions in multiple languages.
 *
 * @public
 */
export interface MetaWithI18n {
  /** Array of translated names for different languages */
  i18n_name: I18nItem[];
  /** Array of translated descriptions for different languages */
  i18n_description: I18nItem[];
}

/**
 * Represents a single attribute field in a credential reply.
 * Contains the attribute's value along with its metadata and translations.
 *
 * @public
 */
export interface PlainJwtField {
  /** UUID of the attribute */
  attributeUuid: UUID;
  /** Metadata with internationalized name and description */
  meta: MetaWithI18n;
  /** The actual value of the attribute */
  value: JSONValue;
}

/**
 * Credential reply from a provider containing disclosed fields.
 * Represents a complete credential with its attributes and validity period.
 *
 * @public
 */
export interface PlainJwtReply {
  /** UUID of the scheme governing this credential */
  schemeUuid: UUID;
  /** UUID of the issuer that issued this credential */
  issuerUuid: UUID;
  /** UUID of the credential */
  credentialUuid: UUID;
  /** Metadata with internationalized name and description */
  meta: MetaWithI18n;
  /** Unix timestamp when the credential was issued */
  issuedAt: number;
  /** Unix timestamp when the credential expires */
  expiresAt: number;
  /** Array of attribute fields in this credential */
  fields: PlainJwtField[];
}

/**
 * Provider information containing credential replies.
 * Represents data from a specific identity provider in the disclosure.
 *
 * @public
 */
export interface PlainJwtProvider {
  /** UUID of the provider */
  providerUuid: UUID;
  /** Additional provider-specific configuration options */
  providerOptions: Record<string, unknown>;
  /** Array of credential replies from this provider */
  replies: PlainJwtReply[];
}

/**
 * Represents a single disclosure item in the plain JWT payload.
 * Contains data from one provider with verification parameters.
 *
 * @public
 */
export interface PlainJwtDisclosure {
  /** Unique identifier for this disclosure */
  uuid: UUID;
  /** Parameters for verifying the disclosure */
  parameter: {
    /** Challenge UUID used for replay protection */
    challenge: UUID;
  };
  /** Provider information with credential replies */
  provider: PlainJwtProvider;
}

/**
 * Plain data structure containing all disclosures.
 * Top-level container for disclosed information in plain format.
 *
 * @public
 */
export interface PlainJwtData {
  /** Unique identifier for this disclosure session */
  uuid: UUID;
  /** Array of disclosure items from various providers */
  disclosures: PlainJwtDisclosure[];
}

/**
 * JWT payload structure for plain disclosures in Ver.iD system.
 * Contains user data in a readable format with full metadata and translations.
 * Used in the 'ver-id/ssi/output/plain/v1+JWT' token type.
 *
 * @public
 * @extends JWTPayload
 */
export interface PlainJwtPayload extends JWTPayload {
  /** Plain disclosure data structure */
  plain: PlainJwtData;
}
