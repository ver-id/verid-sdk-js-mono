import { BaseIntent } from "../intent/base.js";

export interface IssuanceIntent extends BaseIntent {
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