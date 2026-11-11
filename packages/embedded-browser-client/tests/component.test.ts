import {
  mountVeridEmbeddedComponent,
  type VeridEmbeddedComponent,
  type VeridEmbeddedError,
} from '../src/index.js';

const LOADER_SRC = 'https://gateway.example.com/embedded.js';

/** Packs fields the way `createSession` does on the backend. */
function encodeContext(fields: object): string {
  return Buffer.from(JSON.stringify({ v: 1, ...fields })).toString('base64url');
}

const sessionFields = {
  loaderUri: LOADER_SRC,
  clientId: '11111111-1111-4111-8111-111111111111',
  scope: 'disclosure',
  state: 'state-abc',
  codeChallenge: 'challenge-xyz',
  webhookUri: 'https://app.example.com/api/verid/webhook',
  intentId: 'intent-123',
};

function bootstrap(container: HTMLElement) {
  return { container, sessionContext: encodeContext(sessionFields) };
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
      container,
      sessionContext: encodeContext(sessionFields),
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

  it('passes a field it does not know on to the loader', () => {
    const component = mountVeridEmbeddedComponent({
      container,
      sessionContext: encodeContext({ ...sessionFields, nonce: 'nonce-1' }),
    });
    expect(component.host.getAttribute('data-nonce')).toBe('nonce-1');
    component.destroy();
  });

  it('keeps the version tag and loader URI off the host element', () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    expect(component.host.hasAttribute('data-v')).toBe(false);
    expect(component.host.hasAttribute('data-loader-uri')).toBe(false);
    component.destroy();
  });

  it('rejects a context that was not created by the backend', () => {
    expect(() =>
      mountVeridEmbeddedComponent({ container, sessionContext: 'not-a-context' }),
    ).toThrow('Invalid sessionContext');
    expect(container.children).toHaveLength(0);
  });

  describe('on* methods', () => {
    it('run when the matching event fires', () => {
      const component = mountVeridEmbeddedComponent(bootstrap(container));
      const onReady = jest.fn();
      const onComplete = jest.fn();
      const onCancel = jest.fn();
      component.onReady(onReady);
      component.onComplete(onComplete);
      component.onCancel(onCancel);

      loaderFires(component, 'verid:ready');
      expect(onReady).toHaveBeenCalledTimes(1);
      expect(onComplete).not.toHaveBeenCalled();

      loaderFires(component, 'verid:complete');
      loaderFires(component, 'verid:cancel');
      expect(onComplete).toHaveBeenCalledTimes(1);
      expect(onCancel).toHaveBeenCalledTimes(1);
      component.destroy();
    });

    it('onError receives the error itself', () => {
      const component = mountVeridEmbeddedComponent(bootstrap(container));
      const onError = jest.fn();
      component.onError(onError);
      const error: VeridEmbeddedError = { error: 'origin_not_allowed' };

      loaderFires(component, 'verid:error', error);

      expect(onError).toHaveBeenCalledWith(error);
      component.destroy();
    });

    it('leave addEventListener out of the public API', () => {
      const component = mountVeridEmbeddedComponent(bootstrap(container));
      expect('addEventListener' in component).toBe(false);
      component.destroy();
    });

    it('allow several listeners and return a function that removes one', () => {
      const component = mountVeridEmbeddedComponent(bootstrap(container));
      const first = jest.fn();
      const second = jest.fn();
      const removeFirst = component.onComplete(first);
      component.onComplete(second);

      removeFirst();
      loaderFires(component, 'verid:complete');

      expect(first).not.toHaveBeenCalled();
      expect(second).toHaveBeenCalledTimes(1);
      component.destroy();
    });

    it('call the listener without arguments', () => {
      const component = mountVeridEmbeddedComponent(bootstrap(container));
      const onComplete = jest.fn();
      component.onComplete(onComplete);

      loaderFires(component, 'verid:complete');

      expect(onComplete).toHaveBeenCalledWith();
      component.destroy();
    });

    it('run the same function once per registration, each removed on its own', () => {
      const component = mountVeridEmbeddedComponent(bootstrap(container));
      const listener = jest.fn();
      const removeFirst = component.onCancel(listener);
      component.onCancel(listener);

      loaderFires(component, 'verid:cancel');
      expect(listener).toHaveBeenCalledTimes(2);

      removeFirst();
      loaderFires(component, 'verid:cancel');
      expect(listener).toHaveBeenCalledTimes(3);
      component.destroy();
    });
  });

  it('loads the loader from the context, once per page', () => {
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
    component.onError((error) => details.push(error));

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

  it('retries a loader that failed to load on the next mount', async () => {
    const first = mountVeridEmbeddedComponent(bootstrap(container));
    loaderScript().dispatchEvent(new Event('error'));
    await flush();
    first.destroy();
    expect(loaderScript()).toBeNull();

    const second = mountVeridEmbeddedComponent(bootstrap(container));
    const onOpen = listenForOpen();
    second.open();
    loaderScript().dispatchEvent(new Event('load'));
    await flush();

    expect(onOpen).toHaveBeenCalledTimes(1);
    document.removeEventListener('verid:open', onOpen);
    second.destroy();
  });

  it('leaves no unhandled rejection when the loader fails before open()', async () => {
    const unhandled = jest.fn();
    process.on('unhandledRejection', unhandled);
    const component = mountVeridEmbeddedComponent(bootstrap(container));

    loaderScript().dispatchEvent(new Event('error'));
    await flush();

    expect(unhandled).not.toHaveBeenCalled();
    process.off('unhandledRejection', unhandled);
    component.destroy();
  });

  it("hears only its own host's events", () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    const onComplete = jest.fn();
    component.onComplete(onComplete);

    document.dispatchEvent(new CustomEvent('verid:complete', { bubbles: true }));

    expect(onComplete).not.toHaveBeenCalled();
    component.destroy();
  });

  it('destroy() removes the listeners and the host element', () => {
    const component = mountVeridEmbeddedComponent(bootstrap(container));
    const onComplete = jest.fn();
    component.onComplete(onComplete);

    component.destroy();

    expect(container.contains(component.host)).toBe(false);
    loaderFires(component, 'verid:complete');
    expect(onComplete).not.toHaveBeenCalled();
  });
});
