import { BaseIntent } from "../intent/base.js";

export interface VerificationIntent extends BaseIntent {
  scope: 'authentication' | 'disclosure';
  challenge?: string
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}