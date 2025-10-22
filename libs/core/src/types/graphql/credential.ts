import { UUID } from '../generic.js';
import { IssuerEntityDeep } from './issuer.js';
import { LocaleEntity } from './locale.js';

/**
 * Represents a credential entity from the Ver.iD GraphQL API.
 * Credentials are collections of attributes issued by a specific issuer.
 *
 * @public
 */
export interface CredentialEntity {
  /** Unique identifier for the credential */
  uuid: UUID;
  /** Name of the credential */
  name: string;
  /** Localized display information for different languages */
  locales: LocaleEntity[];
  /** UUID of the issuer that provides this credential */
  issuerUuid: UUID;
}

/**
 * Credential with its complete parent hierarchy including issuer, scheme, and provider.
 * Used when full context about the credential's origin is needed.
 *
 * @public
 * @extends CredentialEntity
 */
export interface CredentialEntityDeep extends CredentialEntity {
  /** Complete issuer object including its full hierarchy */
  issuer: IssuerEntityDeep;
}
