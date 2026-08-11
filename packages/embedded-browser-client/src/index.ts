export { createEmbeddedSession } from './embedded/factory.js';
export type {
  CreateEmbeddedSessionParams,
  EmbeddedIframeOptions,
} from './embedded/session.js';
export type {
  VeridEmbeddedSession,
  VeridEmbeddedEventMap,
  VeridEmbeddedError,
} from './embedded/typed-event-target.js';

export { parseRonanMessage } from '@ver-id/core';
export type {
  RonanMessage,
  RonanInitMessage,
  RonanInboundMessage,
  RonanReadyMessage,
  RonanCompleteMessage,
  RonanErrorMessage,
  RonanCancelMessage,
  ParseRonanMessageResult,
} from '@ver-id/core';
