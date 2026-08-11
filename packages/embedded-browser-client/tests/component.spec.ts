import { mountEmbeddedVeridComponent } from '../src/index';
import type {
  VeridEmbeddedError,
  VeridEmbeddedComponent,
} from '../src/embedded/types';

const GATEWAY_URI = 'https://gateway.example.com/embed';
const GATEWAY_ORIGIN = 'https://gateway.example.com';

function bootstrap(container: HTMLElement | HTMLIFrameElement) {
  return {
    container,
    gatewayUri: GATEWAY_URI,
    clientId: '11111111-1111-4111-8111-111111111111',
    scope: 'disclosure',
    state: 'state-abc',
    codeChallenge: 'challenge-xyz',
    webhookUri: 'https://app.example.com/api/verid/webhook',
  };
}

function postFromGateway(source: Window | null, data: unknown, origin = GATEWAY_ORIGIN): void {
  window.dispatchEvent(new MessageEvent('message', { data, origin, source }));
}

describe('mountEmbeddedVeridComponent', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('creates and appends an iframe pointed at the gateway URI', () => {
    const component = mountEmbeddedVeridComponent(bootstrap(container));
    expect(component.iframe).toBeInstanceOf(HTMLIFrameElement);
    expect(container.contains(component.iframe)).toBe(true);
    expect(component.iframe.src).toBe(GATEWAY_URI);
    component.destroy();
  });

  it('dispatches "complete" for a well-formed message from the pinned origin and source', () => {
    const component = mountEmbeddedVeridComponent(bootstrap(container));
    const onComplete = jest.fn();
    component.addEventListener('complete', onComplete);

    postFromGateway(component.iframe.contentWindow, { type: 'ronan:complete' });

    expect(onComplete).toHaveBeenCalledTimes(1);
    component.destroy();
  });

  it('ignores messages from a foreign origin', () => {
    const component = mountEmbeddedVeridComponent(bootstrap(container));
    const onComplete = jest.fn();
    component.addEventListener('complete', onComplete);

    postFromGateway(component.iframe.contentWindow, { type: 'ronan:complete' }, 'https://evil.example.com');

    expect(onComplete).not.toHaveBeenCalled();
    component.destroy();
  });

  it('ignores messages whose source is not the component iframe', () => {
    const component = mountEmbeddedVeridComponent(bootstrap(container));
    const onComplete = jest.fn();
    component.addEventListener('complete', onComplete);

    postFromGateway(null, { type: 'ronan:complete' });

    expect(onComplete).not.toHaveBeenCalled();
    component.destroy();
  });

  it('surfaces a malformed message from the pinned origin as an error event', () => {
    const component = mountEmbeddedVeridComponent(bootstrap(container));
    const details: VeridEmbeddedError[] = [];
    component.addEventListener('error', (event) => details.push(event.detail));

    postFromGateway(component.iframe.contentWindow, { type: 'ronan:bogus' });

    expect(details).toHaveLength(1);
    expect(details[0].error).toBe('invalid_message');
    component.destroy();
  });

  it('maps ronan:error to a typed error event with description', () => {
    const component = mountEmbeddedVeridComponent(bootstrap(container));
    const details: VeridEmbeddedError[] = [];
    component.addEventListener('error', (event) => details.push(event.detail));

    postFromGateway(component.iframe.contentWindow, {
      type: 'ronan:error',
      error: 'access_denied',
      error_description: 'user bailed',
    });

    expect(details).toEqual([{ error: 'access_denied', error_description: 'user bailed' }]);
    component.destroy();
  });

  it('destroy() removes the message listener and the created iframe', () => {
    const component = mountEmbeddedVeridComponent(bootstrap(container));
    const onComplete = jest.fn();
    component.addEventListener('complete', onComplete);
    const iframe = component.iframe;

    component.destroy();

    expect(container.contains(iframe)).toBe(false);
    postFromGateway(iframe.contentWindow, { type: 'ronan:complete' });
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('adopts an existing iframe without removing it on destroy', () => {
    const existing = document.createElement('iframe');
    container.appendChild(existing);
    const component = mountEmbeddedVeridComponent(bootstrap(existing));

    expect(component.iframe).toBe(existing);
    component.destroy();
    expect(container.contains(existing)).toBe(true);
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
