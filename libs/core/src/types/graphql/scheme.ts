import { UUID } from '../generic.js';
import { LocaleEntity } from './locale.js';
import { ProviderEntity } from './provider.js';

/**
 * Represents a scheme entity from the Ver.iD GraphQL API.
 * Schemes are trust frameworks or standards that govern credential issuance.
 *
 * @public
 */
export interface SchemeEntity {
  /** Unique identifier for the scheme */
  uuid: UUID;
  /** Name of the scheme */
  name: string;
  /** Localized display information for different languages */
  locales: LocaleEntity[];
  /** UUID of the provider that manages this scheme */
  providerUuid: UUID;
}

/**
 * Scheme with its complete parent hierarchy including provider.
 * Used when full context about the scheme's origin is needed.
 *
 * @public
 * @extends SchemeEntity
 */
export interface SchemeEntityDeep extends SchemeEntity {
  /** Complete provider object */
  provider: ProviderEntity;
}
