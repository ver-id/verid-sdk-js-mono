import { BaseIntent } from "../intent/base.js";

/** Fields shared by every issuance intent, interactive or headless. */
export interface IssuanceIntentBase extends BaseIntent {
  scope: 'issuance';
  payload: {
    mapping: Record<string, unknown>;
    data: {
      attributeUuid: string;
      value: unknown
    }[];
  },
  challenge?: string
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}

/** Interactive issuance intent — carries the mandatory PKCE code challenge. */
export interface IssuanceIntent extends IssuanceIntentBase {
  code_challenge: string;
}

/**
 * Headless (machine-to-machine) business-wallet issuance intent. Authenticates as a confidential
 * client, so it has no PKCE code challenge.
 */
export type BusinessWalletIssuanceIntent = IssuanceIntentBase;