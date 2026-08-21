import { BaseIntent } from "../intent/base.js";

export interface VerificationIntent extends BaseIntent {
  scope: 'openid' | 'disclosure';
  /** The mandatory PKCE code challenge — authentication and disclosure are always interactive. */
  code_challenge: string;
  challenge?: string
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}