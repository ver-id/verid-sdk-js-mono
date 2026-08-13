/**
 * Represents localization information for entities in the Ver.iD system.
 * Provides translated names and descriptions for different languages.
 *
 * @public
 */
export interface LocaleEntity {
  /** Language code (e.g., 'en', 'nl', 'de') */
  locale: string;
  /** Localized name */
  name: string;
  /** Localized description */
  description?: string | null;
}
