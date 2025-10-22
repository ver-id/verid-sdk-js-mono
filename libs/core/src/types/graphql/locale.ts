/**
 * Represents localization information for entities in the Ver.iD system.
 * Provides translated names and descriptions for different languages.
 *
 * @public
 */
export interface LocaleEntity {
  /** Language code (e.g., 'en', 'nl', 'de') */
  locale: string;
  /** Key-value pairs of localized strings (e.g., name, description) */
  i18n: Record<string, string>;
}
