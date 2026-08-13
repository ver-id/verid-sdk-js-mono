import { JSONValue, UUID } from '../generic.js';
import { CredentialEntity } from './credential.js';
import { LocaleEntity } from './locale.js';

/**
 * Represents an attribute entity from the Ver.iD GraphQL API.
 * Attributes are individual data fields that can be disclosed by users.
 *
 * @public
 */
export interface AttributeEntity {
  /** Unique identifier for the attribute */
  uuid: UUID;
  /** Name of the attribute */
  name: string;
  /** Localized display information for different languages */
  locales: LocaleEntity[];
  /** UUID of the parent credential that contains this attribute */
  credentialUuid: UUID;
}

/**
 * Attribute with its parent credential.
 * Used when context about the attribute's credential is needed.
 *
 * @public
 * @extends AttributeEntity
 */
export interface AttributeEntityDeep extends AttributeEntity {
  /** Complete credential object */
  credential: CredentialEntity;
}

/**
 * Attribute enriched with its actual value from a JWT payload.
 * Combines metadata from the GraphQL API with the disclosed value.
 *
 * @public
 * @extends AttributeEntityDeep
 */
export interface AttributeEntityEnriched extends AttributeEntityDeep {
  /** The actual value of the attribute from the JWT disclosure */
  value: JSONValue;
}
