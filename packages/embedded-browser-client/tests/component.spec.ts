import { mountVeridEmbeddedComponent } from '../src/index';
import type {
  VeridEmbeddedError,
  VeridEmbeddedComponent,
} from '../src/embedded/types';

const LOADER_SRC = 'https://gateway.example.com/embedded.js';

function bootstrap(container: HTMLElement) {
  return {
    container,
    loaderUri: LOADER_SRC,
    clientId: '11111111-1111-4111-8111-111111111111',
    scope: 'disclosure',
    state: 'state-abc',
    codeChallenge: 'challenge-xyz',
    webhookUri: 'https://app.example.com/api/verid/webhook',
  };
}

/** The page's loader script, as the client added it. */
function loaderScript(): HTMLScriptElement {
  return document.querySelector(`script[src="${LOADER_SRC}"]`) as HTMLScriptElement;
}

/** Collects `verid:open` events, the loader's cue to start the flow. */
function listenForOpen(): jest.Mock {
  const onOpen = jest.fn();
  document.addEventListener('verid:open', onOpen);
  return onOpen;
}

/** Lets settled promise callbacks run. */
const flush = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 0));

/** The loader reports a lifecycle event on the host element, bubbling, as embedded.js does. */
function loaderFires(component: VeridEmbeddedComponent, type: string, detail?: unknown): void {
  component.host.dispatchEvent(new CustomEvent(type, { bubbles: true, detail }));
}

describe('mountVeridEmbeddedComponent', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
    document.querySelectorAll('script').forEach((script) => script.remove());
  });

  it('adds the loader host element with the flow parameters to the container', () => {
    const component = mountVeridEmbeddedComponent({
      ...bootstrap(container),
      intentId: 'intent-123',
    });

    expect(container.contains(component.host)).toBe(true);
    expect(component.host.getAttribute('data-verid-embed')).toBe('');
    expect(component.host.getAttribute('data-client-id')).toBe(
      '11111111-1111-4111-8111-111111111111',
    );
    expect(component.host.getAttribute('data-scope')).toBe('disclosure');
    expect(component.host.getAttribute('data-state')).toBe('state-abc');
    expect(component.host.getAttribute('data-code-challenge')).toBe('challenge-xyz');
    expect(component.host.getAttribute('data-webhook-uri')).toBe(
      'https://app.example.com/api/verid/webhook',
    );
    expect(component.host.getAttribute('data-intent-id')).toBe('intent-123');
    component.destroy();
  });

  it('leaves data-intent-id off when the bootstrap has no intent', () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    expect(component.host.hasAttribute('data-intent-id')).toBe(false);
    component.destroy();
  });

  it('loads the loader from loaderUri, once per page', () => {
    const first = mountVeridEmbeddedComponent(bootstrap(container));
    first.destroy();
    const second = mountVeridEmbeddedComponent(bootstrap(container));

    expect(document.querySelectorAll(`script[src="${LOADER_SRC}"]`)).toHaveLength(1);
    second.destroy();
  });

  it('open() fires verid:open once the loader has run, and again on each call', async () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    const onOpen = listenForOpen();

    component.open();
    await flush();
    expect(onOpen).not.toHaveBeenCalled();

    loaderScript().dispatchEvent(new Event('load'));
    await flush();
    expect(onOpen).toHaveBeenCalledTimes(1);

    component.open();
    await flush();
    expect(onOpen).toHaveBeenCalledTimes(2);

    document.removeEventListener('verid:open', onOpen);
    component.destroy();
  });

  it('open() after destroy() fires nothing', async () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    const onOpen = listenForOpen();

    component.open();
    component.destroy();
    loaderScript().dispatchEvent(new Event('load'));
    await flush();

    expect(onOpen).not.toHaveBeenCalled();
    document.removeEventListener('verid:open', onOpen);
  });

  it('open() surfaces a loader that failed to load as a loader_unavailable error', async () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    const details: VeridEmbeddedError[] = [];
    component.addEventListener('error', (event) => details.push(event.detail));

    component.open();
    loaderScript().dispatchEvent(new Event('error'));
    await flush();

    expect(details).toEqual([
      {
        error: 'loader_unavailable',
        error_description: `Could not load ${LOADER_SRC}`,
      },
    ]);
    component.destroy();
  });

  it('re-dispatches the loader\'s verid: events on the host as ready, complete and cancel', () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    const events: string[] = [];
    for (const type of ['ready', 'complete', 'cancel']) {
      component.addEventListener(type, () => events.push(type));
    }

    loaderFires(component, 'verid:ready');
    loaderFires(component, 'verid:complete');
    loaderFires(component, 'verid:cancel');

    expect(events).toEqual(['ready', 'complete', 'cancel']);
    component.destroy();
  });

  it('maps verid:error to a typed error event', () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    const details: VeridEmbeddedError[] = [];
    component.addEventListener('error', (event) => details.push(event.detail));

    loaderFires(component, 'verid:error', { error: 'server_error' });

    expect(details).toEqual([{ error: 'server_error' }]);
    component.destroy();
  });

  it("hears only its own host's events", () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    const onComplete = jest.fn();
    component.addEventListener('complete', onComplete);

    document.dispatchEvent(new CustomEvent('verid:complete', { bubbles: true }));

    expect(onComplete).not.toHaveBeenCalled();
    component.destroy();
  });

  it('destroy() removes the listeners and the host element', () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    const onComplete = jest.fn();
    component.addEventListener('complete', onComplete);

    component.destroy();

    expect(container.contains(component.host)).toBe(false);
    loaderFires(component, 'verid:complete');
    expect(onComplete).not.toHaveBeenCalled();
  });
});

// Type-check only (never called): asserts each event name narrows event.detail correctly.
function typeLevelAssertions(component: VeridEmbeddedComponent): void {
  component.addEventListener('error', (event) => {
    const detail: VeridEmbeddedError = event.detail;
    void detail;
  });
  component.addEventListener('complete', (event) => {
    const detail: void = event.detail;
    void detail;
  });
  component.addEventListener('ready', (event) => {
    const detail: void = event.detail;
    void detail;
  });
}
void typeLevelAssertions;
