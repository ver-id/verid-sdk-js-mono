import { BaseIntent } from "../intent/base.js";

export interface VerificationIntent extends BaseIntent {
  challenge?: string
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}