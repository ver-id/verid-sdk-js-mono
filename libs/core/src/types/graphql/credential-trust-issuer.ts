import { UUID } from '../generic.js';

/**
 * Represents a credential-trust-issuer join entity from the Ver.iD GraphQL API.
 * Links a Credential to a TrustIssuer (many-to-many).
 *
 * @public
 */
export interface CredentialTrustIssuerEntity {
  /** Unique identifier for the credential-trust-issuer link */
  uuid: UUID;
  /** UUID of the credential */
  credentialUuid: UUID;
  /** UUID of the trust-issuer */
  trustIssuerUuid: UUID;
}
