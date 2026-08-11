import { createHmac } from 'node:crypto';
import { EmbeddedDisclosureClient } from '../src/clients/disclosure.js';
import { MemoryStorageCacheManager } from '../src/cache/index.js';

const ISSUER = 'https://issuer.example.com';
// oauth4webapi requires the discovery `issuer` to equal the issuer URL's href, trailing slash included.
const ISSUER_HREF = 'https://issuer.example.com/';
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

  beforeEach(() => {
    capturedTokenBody = undefined;

    const mockFetch: typeof fetch = (input, init) => {
      const url = String(input);

      if (url.includes('/.well-known/')) {
        return Promise.resolve(
          jsonResponse({
            issuer: ISSUER_HREF,
            token_endpoint: `${ISSUER_HREF}token`,
            jwks_uri: `${ISSUER_HREF}jwks`,
            response_types_supported: ['code'],
          }),
        );
      }

      if (url.includes('/token')) {
        capturedTokenBody = String(init?.body);
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
    const client = new EmbeddedDisclosureClient({
      issuerUri: ISSUER,
      client_id: CLIENT_ID,
      options: { cacheManager },
    });

    const bootstrap = await client.createEmbeddedSession({
      scope: 'disclosure',
      webhookUri: 'https://app.example.com/api/verid/webhook',
    });

    const rawBody = JSON.stringify({
      type: 'verification.completed',
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
});
