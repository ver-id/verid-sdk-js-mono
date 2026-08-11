import { BaseIntent } from "../intent/base.js";

export interface VerificationIntent extends BaseIntent {
  scope: 'openid' | 'disclosure';
  challenge?: string
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}