import { JWTPayload } from 'jose';

/**
 * Enumeration of company identifier types.
 * Defines the type of business registration number or identifier.
 *
 * @public
 */
export enum OpenIdJwtCompanyIdentifierType {
  /** Unknown or unspecified identifier type */
  'UNKNOWN' = 'UNKNOWN',
  /** Dutch Chamber of Commerce (Kamer van Koophandel) number */
  'NL_KVK' = 'NL_KVK',
}

/**
 * Enumeration of company legal entity types.
 * Primarily covers Dutch legal entity classifications.
 *
 * @public
 */
export enum OpenIdJwtCompanyType {
  'UNKNOWN' = 'UNKNOWN',
  'NL_RNP_EZ' = 'NL_RNP_EZ',
  'NL_RS_RED' = 'NL_RS_RED',
  'NL_RS_MA' = 'NL_RS_MA',
  'NL_RS_VOF' = 'NL_RS_VOF',
  'NL_RS_CV' = 'NL_RS_CV',
  'NL_RR_BV' = 'NL_RR_BV',
  'NL_RR_NV' = 'NL_RR_NV',
  'NL_RR_COP' = 'NL_RR_COP',
  'NL_RR_KG' = 'NL_RR_KG',
  'NL_RR_VVE' = 'NL_RR_VVE',
  'NL_RR_OWM' = 'NL_RR_OWM',
  'NL_RR_ST' = 'NL_RR_ST',
  'NL_RR_EESV' = 'NL_RR_EESV',
  'NL_RR_SE' = 'NL_RR_SE',
  'NL_RR_VER' = 'NL_RR_VER',
  'NL_RR_OPR' = 'NL_RR_OPR',
  'NL_RR_SCE' = 'NL_RR_SCE',
  'NL_RR_PR' = 'NL_RR_PR',
  'NL_RBV_0001' = 'NL_RBV_0001',
  'NL_RBV_0002' = 'NL_RBV_0002',
  'NL_RBV_0003' = 'NL_RBV_0003',
  'NL_ROP_01' = 'NL_ROP_01',
  'NL_ROP_02' = 'NL_ROP_02',
  'NL_ROP_03' = 'NL_ROP_03',
  'NL_ROP_04' = 'NL_ROP_04',
  'NL_ROP_05' = 'NL_ROP_05',
  'NL_ROP_06' = 'NL_ROP_06',
  'NL_ROP_07' = 'NL_ROP_07',
  'NL_ROP_08' = 'NL_ROP_08',
  'NL_ROP_09' = 'NL_ROP_09',
  'NL_RP_01' = 'NL_RP_01',
  'NL_RP_02' = 'NL_RP_02',
  'NL_RP_03' = 'NL_RP_03',
  'NL_RP_04' = 'NL_RP_04',
  'NL_RP_05' = 'NL_RP_05',
  'NL_RP_06' = 'NL_RP_06',
  'NL_RP_07' = 'NL_RP_07',
  'NL_RP_08' = 'NL_RP_08',
  'NL_RP_09' = 'NL_RP_09',
  'NL_RP_10' = 'NL_RP_10',
  'NL_RP_11' = 'NL_RP_11',
  'NL_RP_12' = 'NL_RP_12',
  'NL_RP_13' = 'NL_RP_13',
  'NL_RP_14' = 'NL_RP_14',
}

/**
 * Enumeration of National Identification Number (NIN) types.
 * Defines the type of government-issued identification number.
 *
 * @public
 */
export enum OpenIdJwtNINIdentifierType {
  /** Unknown or unspecified identifier type */
  'UNKNOWN' = 'UNKNOWN',
  /** Dutch Citizen Service Number (Burgerservicenummer) */
  'NL_BSN' = 'NL_BSN',
}

/**
 * Structured address information following OpenID Connect standard.
 * Contains address components for international address representation.
 *
 * @public
 */
export interface OpenIdJwtAddress {
  /** Full formatted address string ready for display */
  formatted: string;
  /** Full street address including house number */
  street_address: string;
  /** Postal or ZIP code */
  postal_code: string;
  /** House or building number */
  house_number: string;
  /** Street name without house number */
  street: string;
  /** City or locality name */
  locality: string;
  /** State, province, or region */
  region: string;
  /** Country name or code */
  country: string;
}

/**
 * Company or business entity information.
 * Contains business registration details and legal entity classification.
 *
 * @public
 */
export interface OpenIdJwtCompany {
  /** Company registration number or identifier */
  identifier: string;
  /** Type of the company identifier (e.g., KVK number) */
  identifier_type: OpenIdJwtCompanyIdentifierType;
  /** Official registered name of the company */
  name: string;
  /** Legal entity type classification */
  type: OpenIdJwtCompanyType;
}

/**
 * National Identification Number information.
 * Contains government-issued citizen identification details.
 *
 * @public
 */
export interface OpenIdJwtNIN {
  /** The national identification number */
  identifier: string;
  /** Type of the national identification number */
  identifier_type: OpenIdJwtNINIdentifierType;
}

/**
 * OpenID Connect ID token payload with standard and extended claims.
 * Contains user identity information following OIDC specification with Ver.iD extensions.
 * Used in the 'ver-id/ssi/output/openid/v1+JWT' token type.
 *
 * @public
 * @extends JWTPayload
 * @see {@link https://openid.net/specs/openid-connect-core-1_0.html OpenID Connect Core}
 */
export interface OpenIdJwtPayload extends JWTPayload {
  /** Subject identifier - unique identifier for the end-user */
  sub: string;
  /** End-user's full name in displayable form */
  name?: string;
  /** End-user's given name(s) or first name(s) */
  given_name?: string;
  /** End-user's middle name(s) */
  middle_name?: string;
  /** End-user's surname(s) or last name(s) */
  family_name?: string;
  /** Time the end-user's information was last updated (Unix timestamp) */
  updated_at?: number;
  /** End-user's birthday in ISO 8601:2004 YYYY-MM-DD format */
  birthdate?: string;
  /** Country where the end-user was born */
  birth_country?: string;
  /** String value used to associate a client session with an ID token */
  nonce?: string;
  /** End-user's preferred email address */
  email?: string;
  /** True if the email address has been verified; otherwise false */
  email_verified?: boolean;
  /** End-user's preferred telephone number */
  phone_number?: string;
  /** True if the phone number has been verified; otherwise false */
  phone_number_verified?: boolean;
  /** End-user's preferred postal address */
  address?: OpenIdJwtAddress;
  /** Company or business entity information (Ver.iD extension) */
  company?: OpenIdJwtCompany;
  /** National identification number information (Ver.iD extension) */
  nin?: OpenIdJwtNIN;
}
