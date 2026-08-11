import {
  VeridEmbeddedComponentImpl,
  type MountEmbeddedVeridComponentParams,
} from './component.js';
import type { VeridEmbeddedComponent } from './types.js';

/**
 * Mounts an embedded Ver.iD component inside an iframe.
 *
 * @public
 */
export function mountEmbeddedVeridComponent(
  params: MountEmbeddedVeridComponentParams,
): VeridEmbeddedComponent {
  return new VeridEmbeddedComponentImpl(params);
}
