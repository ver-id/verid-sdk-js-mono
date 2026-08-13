import { UUID } from '../generic.js';

export interface BaseIntent {
  scope: string;
  code_challenge: string;
  client_id: string;
}

/**
 * Response from the intent endpoint.
 *
 * @public
 */
export interface IntentResponse {
  intent_id: string;
  issuance_run_uuid?: UUID;
}
