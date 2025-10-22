import { UUID } from '../generic.js';
import { LocaleEntity } from './locale.js';
import { SchemeEntityDeep } from './scheme.js';

/**
 * Represents an issuer entity from the Ver.iD GraphQL API.
 * Issuers are organizations or systems that issue credentials to users.
 *
 * @public
 */
export interface IssuerEntity {
  /** Unique identifier for the issuer */
  uuid: UUID;
  /** Name of the issuer */
  name: string;
  /** Localized display information for different languages */
  locales: LocaleEntity[];
  /** UUID of the scheme this issuer belongs to */
  schemeUuid: UUID;
}

/**
 * Issuer with its complete parent hierarchy including scheme and provider.
 * Used when full context about the issuer's origin is needed.
 *
 * @public
 * @extends IssuerEntity
 */
export interface IssuerEntityDeep extends IssuerEntity {
  /** Complete scheme object including its full hierarchy */
  scheme: SchemeEntityDeep;
}
