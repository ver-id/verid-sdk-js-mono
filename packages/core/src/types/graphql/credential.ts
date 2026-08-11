import { UUID } from '../generic.js';
import { LocaleEntity } from './locale.js';

/**
 * Represents a credential entity from the Ver.iD GraphQL API.
 * Credentials are collections of attributes.
 * Connects to Issuers via CredentialTrustIssuer → TrustIssuer (many-to-many).
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
}
