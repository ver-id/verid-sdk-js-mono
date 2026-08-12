import {
  VeridEmbeddedComponentImpl,
  type MountEmbeddedVeridComponentParams,
} from './component.js';
import type { VeridEmbeddedComponent } from './types.js';

/**
 * Mounts an embedded Ver.iD component inside an iframe.
 *
 * Returns synchronously so listeners can be attached before the iframe loads; the init handshake
 * is posted on the iframe's `load` event with `targetOrigin` pinned to the origin of
 * `params.gatewayUri`.
 *
 * @param params - The embedded-session bootstrap from the backend, plus the container (or an
 *   existing iframe) to render into and optional iframe presentation attributes.
 * @returns The mounted component: its iframe, typed lifecycle events, and `destroy()`. It never
 *   receives the authorization code, so `complete` means "start awaiting the backend result"
 *   rather than "the result is ready".
 * @example
 * ```typescript
 * const bootstrap = await fetch('/api/verid/start', { method: 'POST' }).then((r) => r.json());
 * const veridComponent = mountEmbeddedVeridComponent({
 *   container: document.getElementById('verid-embed')!,
 *   ...bootstrap,
 * });
 *
 * veridComponent.addEventListener('ready', () => setLoading(false));
 * veridComponent.addEventListener('complete', () => veridComponent.destroy());
 * veridComponent.addEventListener('error', (event) => showError(event.detail.error));
 * ```
 *
 * @public
 */
export function mountEmbeddedVeridComponent(
  params: MountEmbeddedVeridComponentParams,
): VeridEmbeddedComponent {
  return new VeridEmbeddedComponentImpl(params);
}
