import { UUID } from '../generic.js';

/**
 * Represents a trust-issuer join entity from the Ver.iD GraphQL API.
 * Links a Trust to an Issuer (many-to-many).
 *
 * @public
 */
export interface TrustIssuerEntity {
  /** Unique identifier for the trust-issuer link */
  uuid: UUID;
  /** UUID of the trust */
  trustUuid: UUID;
  /** UUID of the issuer */
  issuerUuid: UUID;
}
