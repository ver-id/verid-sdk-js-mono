import { UUID } from '../generic.js';
import { LocaleEntity } from './locale.js';

/**
 * Represents a handler entity from the Ver.iD GraphQL API.
 * Handlers are protocol implementation services that manage trust frameworks and credential ecosystems.
 *
 * @public
 */
export interface HandlerEntity {
  /** Unique identifier for the handler */
  uuid: UUID;
  /** Name of the handler */
  name: string;
  /** Localized display information for different languages */
  locales: LocaleEntity[];
}
