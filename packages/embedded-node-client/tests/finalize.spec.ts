import { createHmac } from 'node:crypto';
import { VeridEmbeddedDisclosureClient } from '../src/clients/disclosure.js';
import { MemoryStorageCacheManager } from '../src/cache/index.js';
import { OperationFailedError } from '../src/index.js';

const ISSUER = 'https://ssi.oauth.example.com';
// oauth4webapi requires the discovery `issuer` to equal the issuer URL's href, trailing slash included.
const ISSUER_HREF = 'https://ssi.oauth.example.com/';
const CLIENT_ID = '11111111-1111-4111-8111-111111111111';
const SECRET = 'test-webhook-secret';

function sign(rawBody: string, secret: string): string {
  return `sha256=${createHmac('sha256', secret).update(rawBody).digest('hex')}`;
}

function jsonResponse(data: object): Response {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

describe('finalizeEmbedded', () => {
  const realFetch = globalThis.fetch;
  let capturedTokenBody: string | undefined;
  let tokenCalls: number;
  /** How many token requests fail with a server error before one succeeds. */
  let tokenFailures: number;

  beforeEach(() => {
    capturedTokenBody = undefined;
    tokenCalls = 0;
    tokenFailures = 0;

    const mockFetch: typeof fetch = (input, init) => {
      const url = String(input);

      if (url.includes('/.well-known/')) {
        return Promise.resolve(
          jsonResponse({
            issuer: ISSUER_HREF,
            token_endpoint: `${ISSUER_HREF}token`,
            jwks_uri: `${ISSUER_HREF}jwks`,
            embedded_loader_uri: 'https://gateway.example.com/embedded.js',
            response_types_supported: ['code'],
          }),
        );
      }

      if (url.includes('/token')) {
        capturedTokenBody = String(init?.body);
        tokenCalls += 1;
        if (tokenFailures > 0) {
          tokenFailures -= 1;
          return Promise.reject(new TypeError('fetch failed'));
        }
        return Promise.resolve(
          jsonResponse({
            token_type: 'bearer',
            access_token: 'access-token-value',
            expires_in: 3600,
            scope: 'disclosure',
          }),
        );
      }

      return Promise.reject(new Error(`Unexpected fetch: ${url}`));
    };

    globalThis.fetch = mockFetch;
  });

  afterEach(() => {
    globalThis.fetch = realFetch;
  });

  it('verifies the webhook and exchanges the code without redirect_uri', async () => {
    const cacheManager = new MemoryStorageCacheManager();
    const client = new VeridEmbeddedDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager },
    });

    const bootstrap = await client.createEmbeddedSession({
      scope: 'disclosure',
      webhookUri: 'https://app.example.com/api/verid/webhook',
    });

    const rawBody = JSON.stringify({
      type: 'v1.flow.completed',
      version: 1,
      code: 'auth-code-123',
      state: bootstrap.state,
      intent_id: '',
    });
    const signature = sign(rawBody, SECRET);

    const response = await client.finalizeEmbedded({
      rawBody,
      signature,
      secret: SECRET,
      clientAuth: { client_secret: 'client-secret' },
    });

    expect(response.access_token).toBe('access-token-value');

    expect(capturedTokenBody).toBeDefined();
    if (capturedTokenBody !== undefined) {
      expect(capturedTokenBody).toContain('grant_type=authorization_code');
      expect(capturedTokenBody).toContain('code=auth-code-123');
      expect(capturedTokenBody).toContain('code_verifier=');
      expect(capturedTokenBody).not.toContain('redirect_uri');
    }
  });

  async function startSession() {
    const cacheManager = new MemoryStorageCacheManager();
    const client = new VeridEmbeddedDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager },
    });
    const bootstrap = await client.createEmbeddedSession({
      scope: 'disclosure',
      webhookUri: 'https://app.example.com/api/verid/webhook',
    });
    const rawBody = JSON.stringify({
      type: 'v1.flow.completed',
      version: 1,
      code: 'auth-code-123',
      state: bootstrap.state,
      intent_id: '',
    });
    const webhook = {
      rawBody,
      signature: sign(rawBody, SECRET),
      secret: SECRET,
      clientAuth: { client_secret: 'client-secret' },
    };
    return { client, webhook };
  }

  it('a redelivered webhook after success → OperationFailedError, no second exchange', async () => {
    const { client, webhook } = await startSession();
    await client.finalizeEmbedded(webhook);

    await expect(client.finalizeEmbedded(webhook)).rejects.toBeInstanceOf(OperationFailedError);
    expect(tokenCalls).toBe(1);
  });

  it('a failed exchange keeps the verifier → the redelivered webhook finalizes', async () => {
    const { client, webhook } = await startSession();
    tokenFailures = 1;

    await expect(client.finalizeEmbedded(webhook)).rejects.toThrow();
    const response = await client.finalizeEmbedded(webhook);

    expect(response.access_token).toBe('access-token-value');
    expect(tokenCalls).toBe(2);
  });

  it('an unknown state → OperationFailedError, no exchange', async () => {
    const { client } = await startSession();
    const rawBody = JSON.stringify({
      type: 'v1.flow.completed',
      version: 1,
      code: 'auth-code-123',
      state: 'someone-elses-state',
      intent_id: '',
    });

    const attempt = client.finalizeEmbedded({
      rawBody,
      signature: sign(rawBody, SECRET),
      secret: SECRET,
      clientAuth: { client_secret: 'client-secret' },
    });

    await expect(attempt).rejects.toBeInstanceOf(OperationFailedError);
    expect(tokenCalls).toBe(0);
  });
});
