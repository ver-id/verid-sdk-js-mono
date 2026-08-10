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

export { parseRonanMessage } from '@verid-sdk-js-mono/core';
export type {
  RonanMessage,
  RonanInitMessage,
  RonanInboundMessage,
  RonanReadyMessage,
  RonanCompleteMessage,
  RonanErrorMessage,
  RonanCancelMessage,
  ParseRonanMessageResult,
} from '@verid-sdk-js-mono/core';
