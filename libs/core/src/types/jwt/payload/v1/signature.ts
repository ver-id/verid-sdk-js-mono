import { JWTPayload } from 'jose';
import { JSONValue, UUID } from '../../../generic.js';
import { SignatureCredential } from './credential.js';

/**
 * JWT payload structure for signature tokens (v2).
 * Contains credential-grouped signed data with catalog metadata.
 * Used in the 'ver-id/ssi/signature/v1+JWT' token type.
 *
 * @public
 * @extends JWTPayload
 */
export interface SignatureJwtPayload extends JWTPayload {
  /** Process identifier */
  uuid: UUID;
  /** Replay protection */
  parameter: { challenge: string };
  /** Flow-level metadata from studio */
  meta: Record<string, JSONValue>;
  /** Field transformation results */
  mapping: Record<string, JSONValue>;
  /** Credentials grouped by credential with catalog metadata */
  credentials: SignatureCredential[];
  /** Signature UUID from studio */
  signatureUuid: UUID;
  /** Organization that configured the flow */
  organizationUuid: UUID;
  /** ProviderApp UUID — the app instance used to complete the flow */
  providerAppUuid: UUID;
  /** App name — human-readable name of the app */
  appName: string;
}
