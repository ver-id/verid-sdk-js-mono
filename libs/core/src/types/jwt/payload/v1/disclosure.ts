import { JWTPayload } from 'jose';
import { JSONValue, UUID } from '../../../generic.js';
import { DisclosureCredential } from './credential.js';

/**
 * JWT payload structure for disclosure tokens (v2).
 * Contains credential-grouped disclosed data with catalog metadata.
 * Used in the 'ver-id/ssi/disclosure/v1+JWT' token type.
 *
 * @public
 * @extends JWTPayload
 */
export interface DisclosureJwtPayload extends JWTPayload {
  /** Process identifier */
  uuid: UUID;
  /** Replay protection */
  parameter: { challenge: string };
  /** Flow-level metadata from studio */
  meta: Record<string, JSONValue>;
  /** Field transformation results */
  mapping: Record<string, JSONValue>;
  /** Credentials grouped by credential with catalog metadata */
  credentials: DisclosureCredential[];
  /** Disclosure UUID from studio */
  disclosureUuid: UUID;
  /** Organization that configured the flow */
  organizationUuid: UUID;
  /** ProviderApp UUID — the app instance used to complete the flow */
  providerAppUuid: UUID;
  /** App name — human-readable name of the app */
  appName: string;
}
