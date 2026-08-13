import { UUID } from '../generic.js';

/**
 * Represents a trust-app join entity from the Ver.iD GraphQL API.
 * Links a Trust to an App (many-to-many).
 *
 * @public
 */
export interface TrustAppEntity {
  /** Unique identifier for the trust-app link */
  uuid: UUID;
  /** UUID of the trust */
  trustUuid: UUID;
  /** UUID of the app */
  appUuid: UUID;
}
