import { JWTPayload } from 'jose';
import { JSONValue, UUID } from '../../../generic.js';
import { IssuanceCredential } from './credential.js';

/**
 * JWT payload structure for issuance tokens (v1 credential-grouped format).
 * Contains credential-grouped issued data with catalog metadata.
 * Used in the 'ver-id/ssi/issuance/v1+JWT' token type.
 *
 * @public
 * @extends JWTPayload
 */
export interface IssuanceV1JwtPayload extends JWTPayload {
  /** Process identifier */
  uuid: UUID;
  /** Replay protection with echoed input payload */
  parameter: {
    challenge: string;
    payload: {
      data: Array<{ attributeUuid: string; value: JSONValue }>;
      mapping: Record<string, JSONValue>;
    };
  };
  /** Flow-level metadata from studio */
  meta: Record<string, JSONValue>;
  /** Credentials grouped by credential with catalog metadata and status */
  credentials: IssuanceCredential[];
  /** Issuance UUID from studio */
  issuanceUuid: UUID;
  /** Organization that configured the flow */
  organizationUuid: UUID;
  /** ProviderApp UUID — the app instance used to complete the flow */
  providerAppUuid: UUID;
  /** App name — human-readable name of the app */
  appName: string;
}
