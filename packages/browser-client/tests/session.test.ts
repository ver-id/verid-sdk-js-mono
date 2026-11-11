import { MemoryStorageCacheManager } from '@ver-id/core/cache';
import { exportJWK, generateKeyPair, SignJWT, type CryptoKey } from 'jose';
import { OperationFailedError, VeridBrowserDisclosureClient } from '../src/index.js';

const ISSUER = 'https://ssi.oauth.example.com';
// oauth4webapi requires the discovery `issuer` to equal the issuer URL's href, trailing slash included.
const ISSUER_HREF = `${ISSUER}/`;
const CLIENT_ID = '11111111-1111-4111-8111-111111111111';

function jsonResponse(data: object, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

describe('browser sessions', () => {
  const realFetch = globalThis.fetch;
  let privateKey: CryptoKey;
  let jwks: object;
  let intentAuthorization: string | null | undefined;
  let intentResponse: () => Response;

  const client = () =>
    new VeridBrowserDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      redirectUri: 'https://app.example.com/callback',
      cacheManager: new MemoryStorageCacheManager(),
    });

  beforeAll(async () => {
    const keys = await generateKeyPair('ES384');
    privateKey = keys.privateKey;
    jwks = { keys: [{ ...(await exportJWK(keys.publicKey)), kid: 'key-1', alg: 'ES384' }] };
  });

  beforeEach(() => {
    intentAuthorization = undefined;
    intentResponse = () => jsonResponse({ intent_id: '33333333-3333-4333-8333-333333333333' });
    globalThis.fetch = async (input, init) => {
      const url = String(input);
      if (url.includes('/.well-known/')) {
        return jsonResponse({
          issuer: ISSUER_HREF,
          authorization_endpoint: `${ISSUER_HREF}authorize`,
          token_endpoint: `${ISSUER_HREF}token`,
          intent_endpoint: `${ISSUER_HREF}intent`,
          jwks_uri: `${ISSUER_HREF}jwks`,
          response_types_supported: ['code'],
        });
      }
      if (url.endsWith('/intent')) {
        intentAuthorization = new Headers(init?.headers).get('authorization');
        return intentResponse();
      }
      if (url.endsWith('/jwks')) {
        return jsonResponse(jwks);
      }
      if (url.endsWith('/token')) {
        const accessToken = await new SignJWT({
          uuid: CLIENT_ID,
          parameter: { challenge: CLIENT_ID },
          meta: {},
          mapping: {},
          credentials: [],
          disclosureUuid: CLIENT_ID,
          organizationUuid: CLIENT_ID,
        })
          .setProtectedHeader({ alg: 'ES384', typ: 'ver-id/ssi/disclosure/v1+JWT', kid: 'key-1' })
          .sign(privateKey);
        return jsonResponse({
          token_type: 'bearer',
          access_token: accessToken,
          expires_in: 3600,
          scope: 'disclosure',
        });
      }
      throw new Error(`Unexpected fetch: ${url}`);
    };
  });

  afterEach(() => {
    globalThis.fetch = realFetch;
    delete (globalThis as { window?: unknown }).window;
  });

  it('creates the session without client credentials', async () => {
    const { url, state } = await client().createSession({
      challenge: '22222222-2222-4222-8222-222222222222',
    });

    expect(new URL(url).searchParams.get('state')).toBe(state);
    expect(intentAuthorization).toBeNull();
  });

  it('surfaces the server rejection for a flow that requires client credentials', async () => {
    intentResponse = () => jsonResponse({ error: 'invalid_client' }, 401);

    const error = await client()
      .createSession({ challenge: '22222222-2222-4222-8222-222222222222' })
      .catch((e: unknown) => e);

    expect(error).toBeInstanceOf(OperationFailedError);
    expect((error as Error).message).toContain('401');
  });

  it('finishes from window.location by default', async () => {
    const browser = client();
    const { state } = await browser.createSession();
    (globalThis as { window?: unknown }).window = {
      location: { href: `https://app.example.com/callback?code=auth-code&state=${state}` },
    };

    await expect(browser.finishSession()).resolves.toMatchObject({
      format: 'disclosure_v1',
      payload: { disclosureUuid: CLIENT_ID },
    });
  });

  it('cannot finish in a browser that holds no verifier for the state', async () => {
    await expect(
      client().finishSession({ callbackUrl: '/callback?code=auth-code&state=someone-elses' }),
    ).rejects.toBeInstanceOf(OperationFailedError);
  });
});
