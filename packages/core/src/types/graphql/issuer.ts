import { UUID } from '../generic.js';
import { LocaleEntity } from './locale.js';

/**
 * Represents an issuer entity from the Ver.iD GraphQL API.
 * Issuers are organizations or systems that issue credentials to users.
 * Connects to Trusts via TrustIssuer (many-to-many).
 *
 * @public
 */
export interface IssuerEntity {
  /** Unique identifier for the issuer */
  uuid: UUID;
  /** Name of the issuer */
  name: string;
  /** Localized display information for different languages */
  locales: LocaleEntity[];
}
