import { BaseIntent } from "../intent/base.js";

export interface IssuanceIntent extends BaseIntent {
  type: 'issuance';
  payload: {
    mapping: Record<string, unknown>;
    data: {
      attributeUuid: string;
      credentialUuid: string;
      issuerUuid: string;
      schemeUuid: string;
      providerUuid: string;
      value: unknown
    }[];
  },
  challenge?: string
  brandUuid?: string;
  requireExplicitConsent?: boolean;
}