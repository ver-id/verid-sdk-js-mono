/**
 * @jest-environment-options {"url": "https://shop.example.com/checkout"}
 */
import { mountVeridEmbeddedComponent } from '../src/index.js';

/** Packs fields the way `createSession` does on the backend. */
function encodeContext(loaderUri: string): string {
  const fields = {
    v: 1,
    loaderUri,
    clientId: '11111111-1111-4111-8111-111111111111',
    scope: 'disclosure',
    state: 'state-abc',
    codeChallenge: 'challenge-xyz',
    webhookUri: 'https://shop.example.com/api/verid/webhook',
    intentId: 'intent-123',
  };
  return Buffer.from(JSON.stringify(fields)).toString('base64url');
}

describe('mountVeridEmbeddedComponent on a live page', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
    document.querySelectorAll('script').forEach((script) => script.remove());
  });

  it("loads Ver.iD's loader", () => {
    const loaderUri = 'https://gateway.ver.id/embedded.js';
    const component = mountVeridEmbeddedComponent({
      container,
      sessionContext: encodeContext(loaderUri),
    });
    expect(document.querySelector(`script[src="${loaderUri}"]`)).not.toBeNull();
    component.destroy();
  });

  it('refuses a development loader and adds no script', () => {
    expect(() =>
      mountVeridEmbeddedComponent({
        container,
        sessionContext: encodeContext('https://gateway.dev.ver.garden/embedded.js'),
      }),
    ).toThrow('Invalid sessionContext');
    expect(document.querySelector('script')).toBeNull();
    expect(container.children).toHaveLength(0);
  });
});
