import { BaseIntent } from "../intent/base.js";

export interface VerificationIntent extends BaseIntent {
  scope: 'openid' | 'disclosure';
  brandUuid?: string;
}