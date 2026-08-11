// Authentication client exports
export { VeridAuthenticationClient } from './authentication.js';
export type {
  AuthenticationIntentPayload,
  AuthenticationClientConfig,
  AuthenticationRequestParams,
  AuthenticationFinalizeParams,
} from './authentication.js';

// Disclosure client exports
export { VeridDisclosureClient } from './disclosure.js';
export type {
  DisclosureIntentPayload,
  DisclosureClientConfig,
  DisclosureRequestParams,
  DisclosureFinalizeParams,
} from './disclosure.js';

// Issuance client exports
export { VeridIssuanceClient } from './issuance.js';
export type {
  IssuanceIntentPayload,
  IssuanceClientConfig,
  IssuanceRequestParams,
  IssuanceFinalizeParams,
} from './issuance.js';

// Base client exports (for advanced usage)
export { VeridFlowBaseClient } from './base.js';
export type {
  FlowBaseClientConfig,
  FlowBasePkceParams,
  FlowBasePkceResult,
  FlowBaseFinalizeParams,
} from './base.js';