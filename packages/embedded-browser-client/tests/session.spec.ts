import { createEmbeddedSession } from '../src/index';
import type {
  VeridEmbeddedError,
  VeridEmbeddedSession,
} from '../src/embedded/typed-event-target';

const RONAN_URI = 'https://ronan.example.com/embed';
const RONAN_ORIGIN = 'https://ronan.example.com';

function bootstrap(container: HTMLElement | HTMLIFrameElement) {
  return {
    container,
    ronanUri: RONAN_URI,
    clientId: '11111111-1111-4111-8111-111111111111',
    scope: 'disclosure',
    state: 'state-abc',
    codeChallenge: 'challenge-xyz',
    webhookUri: 'https://app.example.com/api/verid/webhook',
  };
}

function postFromRonan(source: Window | null, data: unknown, origin = RONAN_ORIGIN): void {
  window.dispatchEvent(new MessageEvent('message', { data, origin, source }));
}

describe('createEmbeddedSession', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('creates and appends an iframe pointed at the Ronan URI', () => {
    const session = createEmbeddedSession(bootstrap(container));
    expect(session.iframe).toBeInstanceOf(HTMLIFrameElement);
    expect(container.contains(session.iframe)).toBe(true);
    expect(session.iframe.src).toBe(RONAN_URI);
    session.destroy();
  });

  it('dispatches "complete" for a well-formed message from the pinned origin and source', () => {
    const session = createEmbeddedSession(bootstrap(container));
    const onComplete = jest.fn();
    session.addEventListener('complete', onComplete);

    postFromRonan(session.iframe.contentWindow, { type: 'ronan:complete' });

    expect(onComplete).toHaveBeenCalledTimes(1);
    session.destroy();
  });

  it('ignores messages from a foreign origin', () => {
    const session = createEmbeddedSession(bootstrap(container));
    const onComplete = jest.fn();
    session.addEventListener('complete', onComplete);

    postFromRonan(session.iframe.contentWindow, { type: 'ronan:complete' }, 'https://evil.example.com');

    expect(onComplete).not.toHaveBeenCalled();
    session.destroy();
  });

  it('ignores messages whose source is not the session iframe', () => {
    const session = createEmbeddedSession(bootstrap(container));
    const onComplete = jest.fn();
    session.addEventListener('complete', onComplete);

    postFromRonan(null, { type: 'ronan:complete' });

    expect(onComplete).not.toHaveBeenCalled();
    session.destroy();
  });

  it('surfaces a malformed message from the pinned origin as an error event', () => {
    const session = createEmbeddedSession(bootstrap(container));
    const details: VeridEmbeddedError[] = [];
    session.addEventListener('error', (event) => details.push(event.detail));

    postFromRonan(session.iframe.contentWindow, { type: 'ronan:bogus' });

    expect(details).toHaveLength(1);
    expect(details[0].error).toBe('invalid_message');
    session.destroy();
  });

  it('maps ronan:error to a typed error event with description', () => {
    const session = createEmbeddedSession(bootstrap(container));
    const details: VeridEmbeddedError[] = [];
    session.addEventListener('error', (event) => details.push(event.detail));

    postFromRonan(session.iframe.contentWindow, {
      type: 'ronan:error',
      error: 'access_denied',
      error_description: 'user bailed',
    });

    expect(details).toEqual([{ error: 'access_denied', error_description: 'user bailed' }]);
    session.destroy();
  });

  it('destroy() removes the message listener and the created iframe', () => {
    const session = createEmbeddedSession(bootstrap(container));
    const onComplete = jest.fn();
    session.addEventListener('complete', onComplete);
    const iframe = session.iframe;

    session.destroy();

    expect(container.contains(iframe)).toBe(false);
    postFromRonan(iframe.contentWindow, { type: 'ronan:complete' });
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('adopts an existing iframe without removing it on destroy', () => {
    const existing = document.createElement('iframe');
    container.appendChild(existing);
    const session = createEmbeddedSession(bootstrap(existing));

    expect(session.iframe).toBe(existing);
    session.destroy();
    expect(container.contains(existing)).toBe(true);
  });
});

// Compile-time (tsd-style) assertions: the event name must narrow event.detail.
// This function is never called; it only needs to type-check.
function typeLevelAssertions(session: VeridEmbeddedSession): void {
  session.addEventListener('error', (event) => {
    const detail: VeridEmbeddedError = event.detail;
    void detail;
  });
  session.addEventListener('complete', (event) => {
    const detail: void = event.detail;
    void detail;
  });
  session.addEventListener('ready', (event) => {
    const detail: void = event.detail;
    void detail;
  });
}
void typeLevelAssertions;
