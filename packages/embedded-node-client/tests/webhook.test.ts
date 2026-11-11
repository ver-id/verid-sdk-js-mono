import { createHmac } from 'node:crypto';
import { readEmbeddedWebhook } from '../src/client/webhook.js';
import { AuthorizationResponseError, InvalidAssertionError } from '../src/index.js';

const SECRET = 'test-webhook-secret';

function sign(rawBody: string, secret: string): string {
  return `sha256=${createHmac('sha256', secret).update(rawBody).digest('hex')}`;
}

function completedBody(code = 'auth-code-abc'): string {
  return JSON.stringify({
    type: 'v1.flow.completed',
    version: 1,
    code,
    state: 'state-xyz',
    intent_id: '',
  });
}

function read(rawBody: string, signature: string | undefined) {
  return readEmbeddedWebhook({
    rawBody,
    headers: { 'x-signature-256': signature },
    secret: SECRET,
  });
}

describe('readEmbeddedWebhook', () => {
  it('reads a correctly signed completion', () => {
    const rawBody = completedBody();

    expect(read(rawBody, sign(rawBody, SECRET))).toEqual({
      kind: 'completed',
      code: 'auth-code-abc',
      state: 'state-xyz',
    });
  });

  it('rejects a payload signed with the wrong secret', () => {
    const rawBody = completedBody();

    expect(() => read(rawBody, sign(rawBody, 'wrong-secret'))).toThrow(AuthorizationResponseError);
  });

  it('rejects a tampered body', () => {
    const signature = sign(completedBody(), SECRET);

    expect(() => read(completedBody('malicious-code'), signature)).toThrow(
      AuthorizationResponseError,
    );
  });

  it('rejects a missing signature header', () => {
    expect(() => read(completedBody(), undefined)).toThrow(InvalidAssertionError);
  });

  it('rejects a signed completion without a code', () => {
    const rawBody = JSON.stringify({ type: 'v1.flow.completed', version: 1, state: 'state-xyz' });

    expect(() => read(rawBody, sign(rawBody, SECRET))).toThrow(InvalidAssertionError);
  });

  it('rejects a signed body without a type', () => {
    const rawBody = JSON.stringify({ code: 'auth-code-abc', state: 'state-xyz' });

    expect(() => read(rawBody, sign(rawBody, SECRET))).toThrow(InvalidAssertionError);
  });

  it('returns a signed event of another type as unknown, whatever its shape', () => {
    const body = { type: 'v1.flow.expired', version: 1, intent_id: 'intent-1' };
    const rawBody = JSON.stringify(body);

    expect(read(rawBody, sign(rawBody, SECRET))).toEqual({
      kind: 'unknown',
      type: 'v1.flow.expired',
      raw: body,
    });
  });

  it('checks the signature before reading the body', () => {
    expect(() => read('not json', sign('something else', SECRET))).toThrow(
      AuthorizationResponseError,
    );
  });

  it('reads the signature from Fetch Headers', () => {
    const rawBody = completedBody();
    const headers = new Headers({ 'X-Signature-256': sign(rawBody, SECRET) });

    expect(readEmbeddedWebhook({ rawBody, headers, secret: SECRET })).toMatchObject({
      kind: 'completed',
    });
  });

  it('finds the header in a Node header object whatever its case', () => {
    const rawBody = completedBody();
    const headers = { 'X-Signature-256': sign(rawBody, SECRET) };

    expect(readEmbeddedWebhook({ rawBody, headers, secret: SECRET })).toMatchObject({
      kind: 'completed',
    });
  });

  it('rejects a repeated signature header', () => {
    const rawBody = completedBody();
    const signature = sign(rawBody, SECRET);
    const headers = { 'x-signature-256': [signature, signature] };

    expect(() => readEmbeddedWebhook({ rawBody, headers, secret: SECRET })).toThrow(
      AuthorizationResponseError,
    );
  });
});
