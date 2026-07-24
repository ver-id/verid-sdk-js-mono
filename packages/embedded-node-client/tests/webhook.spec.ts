import { createHmac } from 'node:crypto';
import { verifyEmbeddedWebhook } from '../src/embedded/webhook.js';

const SECRET = 'test-webhook-secret';

function sign(rawBody: string, secret: string): string {
  return `sha256=${createHmac('sha256', secret).update(rawBody).digest('hex')}`;
}

function validPayload(): string {
  return JSON.stringify({
    type: 'verification.completed',
    version: 1,
    code: 'auth-code-abc',
    state: 'state-xyz',
    intent_id: '',
  });
}

describe('verifyEmbeddedWebhook', () => {
  it('accepts a correctly signed payload', () => {
    const rawBody = validPayload();
    const result = verifyEmbeddedWebhook({
      rawBody,
      signature: sign(rawBody, SECRET),
      secret: SECRET,
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.payload.code).toBe('auth-code-abc');
      expect(result.payload.state).toBe('state-xyz');
      expect(result.payload.type).toBe('verification.completed');
      expect(result.payload.version).toBe(1);
      expect(result.payload.intent_id).toBe('');
    }
  });

  it('rejects a payload signed with the wrong secret', () => {
    const rawBody = validPayload();
    const result = verifyEmbeddedWebhook({
      rawBody,
      signature: sign(rawBody, 'wrong-secret'),
      secret: SECRET,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toBe('invalid_signature');
    }
  });

  it('rejects a tampered body', () => {
    const rawBody = validPayload();
    const signature = sign(rawBody, SECRET);
    const tampered = JSON.stringify({
      type: 'verification.completed',
      version: 1,
      code: 'malicious-code',
      state: 'state-xyz',
      intent_id: '',
    });

    const result = verifyEmbeddedWebhook({
      rawBody: tampered,
      signature,
      secret: SECRET,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toBe('invalid_signature');
    }
  });

  it('rejects a missing signature header', () => {
    const rawBody = validPayload();
    const result = verifyEmbeddedWebhook({
      rawBody,
      signature: undefined,
      secret: SECRET,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toBe('missing_signature');
    }
  });

  it('rejects a malformed payload even with a valid signature', () => {
    const rawBody = JSON.stringify({ type: 'verification.completed', version: 1 });
    const result = verifyEmbeddedWebhook({
      rawBody,
      signature: sign(rawBody, SECRET),
      secret: SECRET,
    });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toBe('invalid_payload');
    }
  });
});
