import { JSONValue } from '../generic.js';

/**
 * OAuth client configuration metadata.
 * Contains the basic identification information for an OAuth client.
 *
 * @public
 */
export interface ClientConfig {
  /**
   * Unique client identifier assigned during registration.
   * Public identifier for the OAuth client application.
   */
  readonly client_id: string;

  /**
   * Additional metadata about the OAuth client.
   */
  readonly [metadata: string]: JSONValue | undefined;
}
