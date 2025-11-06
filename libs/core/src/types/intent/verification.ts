import { BaseIntent } from "../intent/base.js";

export interface VerificationIntent extends BaseIntent {
  type: 'authentication' | 'disclosure';
  challenge?: string
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}