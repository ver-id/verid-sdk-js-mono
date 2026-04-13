import { UUID } from '../generic.js';
import { LocaleEntity } from './locale.js';

/**
 * Represents a trust entity from the Ver.iD GraphQL API.
 * Trust frameworks govern credential issuance and verification.
 * Connects to Handlers via Apps (many-to-many: Trust ↔ TrustApp ↔ App ↔ HandlerApp ↔ Handler).
 * Connects to Issuers via TrustIssuer (many-to-many).
 *
 * @public
 */
export interface TrustEntity {
  /** Unique identifier for the trust */
  uuid: UUID;
  /** Name of the trust */
  name: string;
  /** Localized display information for different languages */
  locales: LocaleEntity[];
}
