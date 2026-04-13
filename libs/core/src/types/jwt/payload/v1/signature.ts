import { JWTPayload } from 'jose';
import { JSONValue, UUID } from '../../../generic.js';
import { SignatureV1Credential } from './credential.js';

/**
 * JWT payload structure for signature tokens (v2).
 * Contains credential-grouped signed data with catalog metadata.
 * Used in the 'ver-id/ssi/signature/v1+JWT' token type.
 *
 * @public
 * @extends JWTPayload
 */
export interface SignatureV1JwtPayload extends JWTPayload {
  /** Process identifier */
  uuid: UUID;
  /** Replay protection */
  parameter: { challenge: string };
  /** Flow-level metadata from studio */
  meta: Record<string, JSONValue>;
  /** Field transformation results */
  mapping: Record<string, JSONValue>;
  /** Credentials grouped by credential with catalog metadata */
  credentials: SignatureV1Credential[];
  /** Signature UUID from studio */
  signatureUuid: UUID;
  /** Organization that configured the flow */
  organizationUuid: UUID;
  /** HandlerApp UUID — the app instance used to complete the flow */
  handlerAppUuid: UUID;
  /** App name — human-readable name of the app */
  appName: string;
}
