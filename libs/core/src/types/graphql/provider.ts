import { UUID } from '../generic.js';
import { LocaleEntity } from './locale.js';

/**
 * Represents a provider entity from the Ver.iD GraphQL API.
 * Providers are top-level organizations that manage schemes and credential ecosystems.
 *
 * @public
 */
export interface ProviderEntity {
  /** Unique identifier for the provider */
  uuid: UUID;
  /** Name of the provider */
  name: string;
  /** Localized display information for different languages */
  locales: LocaleEntity[];
}
