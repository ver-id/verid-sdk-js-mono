import { VeridEmbeddedDisclosureClient } from '../src/clients/disclosure.js';
import {
  VeridEmbeddedIssuanceClient,
  type EmbeddedIssuanceSessionParams,
} from '../src/clients/issuance.js';
import { MemoryStorageCacheManager } from '../src/cache/index.js';
import { InvalidArgumentError, InvalidAssertionError } from '@ver-id/core/error';

const ISSUER = 'https://ssi.oauth.example.com';
// oauth4webapi requires the discovery `issuer` to equal the issuer URL's href, trailing slash included.
const ISSUER_HREF = 'https://ssi.oauth.example.com/';
const CLIENT_ID = '11111111-1111-4111-8111-111111111111';
const LOADER_URI = 'https://gateway.example.com/embedded.js';

describe('createEmbeddedSession', () => {
  const realFetch = globalThis.fetch;
  /** What the issuer's metadata advertises as its embedded loader; `undefined` leaves it out. */
  let advertisedLoaderUri: string | undefined;

  beforeEach(() => {
    advertisedLoaderUri = LOADER_URI;
    globalThis.fetch = (input) => {
      const url = String(input);
      if (!url.includes('/.well-known/')) {
        return Promise.reject(new Error(`Unexpected fetch: ${url}`));
      }
      return Promise.resolve(
        new Response(
          JSON.stringify({
            issuer: ISSUER_HREF,
            token_endpoint: `${ISSUER_HREF}token`,
            embedded_loader_uri: advertisedLoaderUri,
            response_types_supported: ['code'],
          }),
          { status: 200, headers: { 'content-type': 'application/json' } },
        ),
      );
    };
  });

  afterEach(() => {
    globalThis.fetch = realFetch;
  });

  it('returns a public bootstrap and persists the verifier (disclosure)', async () => {
    const cacheManager = new MemoryStorageCacheManager();
    const client = new VeridEmbeddedDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager },
    });

    const webhookUri = 'https://app.example.com/api/verid/webhook';
    const bootstrap = await client.createEmbeddedSession({
      scope: 'disclosure',
      webhookUri,
    });

    expect(bootstrap.clientId).toBe(CLIENT_ID);
    expect(bootstrap.scope).toBe('disclosure');
    expect(bootstrap.webhookUri).toBe(webhookUri);
    expect(bootstrap.loaderUri).toBe(LOADER_URI);
    expect(bootstrap.state).toBeTruthy();
    expect(bootstrap.codeChallenge).toBeTruthy();
    expect(bootstrap.intentId).toBeUndefined();

    const verifier = cacheManager.get(bootstrap.state);
    expect(verifier).toBeTruthy();

    if (verifier !== null) {
      expect(verifier.length).toBeGreaterThan(0);
      // The public bootstrap must never leak the code_verifier.
      expect(JSON.stringify(bootstrap)).not.toContain(verifier);
    }
  });

  it('carries the intentId (issuance)', async () => {
    const cacheManager = new MemoryStorageCacheManager();
    const client = new VeridEmbeddedIssuanceClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager },
    });

    const intentId = 'intent-123';
    const bootstrap = await client.createEmbeddedSession({
      scope: 'issuance',
      webhookUri: 'https://app.example.com/api/verid/webhook',
      intentId,
    });

    expect(bootstrap.intentId).toBe(intentId);
    expect(bootstrap.scope).toBe('issuance');
  });

  it('an issuer that advertises no embedded_loader_uri → InvalidAssertionError, caching nothing', async () => {
    advertisedLoaderUri = undefined;
    const cacheManager = new MemoryStorageCacheManager();
    const client = new VeridEmbeddedDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager },
    });

    await expect(
      client.createEmbeddedSession({
        scope: 'disclosure',
        webhookUri: 'https://app.example.com/api/verid/webhook',
        state: 'state-123',
      }),
    ).rejects.toThrow(InvalidAssertionError);
    expect(cacheManager.get('state-123')).toBeNull();
  });

  it('rejects an issuance session without an intentId', async () => {
    const client = new VeridEmbeddedIssuanceClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager: new MemoryStorageCacheManager() },
    });

    await expect(
      client.createEmbeddedSession({
        scope: 'issuance',
        webhookUri: 'https://app.example.com/api/verid/webhook',
      } as EmbeddedIssuanceSessionParams),
    ).rejects.toThrow(InvalidArgumentError);
  });

  it('reuses an existing state/codeChallenge pair so the session stays bound to its intent', async () => {
    const cacheManager = new MemoryStorageCacheManager();
    const client = new VeridEmbeddedIssuanceClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager },
    });

    // The intent is created against this challenge, so the session must not mint a new one.
    const { codeChallenge, state } = await client.generateCodeChallenge();
    const verifier = cacheManager.get(state);

    const bootstrap = await client.createEmbeddedSession({
      scope: 'issuance',
      webhookUri: 'https://app.example.com/api/verid/webhook',
      state,
      codeChallenge,
      intentId: 'intent-123',
    });

    expect(bootstrap.state).toBe(state);
    expect(bootstrap.codeChallenge).toBe(codeChallenge);
    expect(cacheManager.get(state)).toBe(verifier);
  });

  it('rejects a codeChallenge supplied without its state', async () => {
    const client = new VeridEmbeddedDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager: new MemoryStorageCacheManager() },
    });

    await expect(
      client.createEmbeddedSession({
        scope: 'disclosure',
        webhookUri: 'https://app.example.com/api/verid/webhook',
        codeChallenge: 'challenge-without-state',
      }),
    ).rejects.toThrow(InvalidArgumentError);
  });

  it('rejects a webhookUri that is not a valid url', async () => {
    const client = new VeridEmbeddedDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager: new MemoryStorageCacheManager() },
    });

    await expect(
      client.createEmbeddedSession({
        scope: 'disclosure',
        webhookUri: 'not-a-url',
      }),
    ).rejects.toThrow(InvalidArgumentError);
  });

  it('rejects an empty scope', async () => {
    const client = new VeridEmbeddedDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager: new MemoryStorageCacheManager() },
    });

    await expect(
      client.createEmbeddedSession({
        scope: '',
        webhookUri: 'https://app.example.com/api/verid/webhook',
      }),
    ).rejects.toThrow(InvalidArgumentError);
  });

  it('does not cache a verifier when the input is invalid', async () => {
    const cacheManager = new MemoryStorageCacheManager();
    const client = new VeridEmbeddedDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager },
    });

    await expect(
      client.createEmbeddedSession({
        scope: 'disclosure',
        webhookUri: 'not-a-url',
        state: 'state-123',
      }),
    ).rejects.toThrow(InvalidArgumentError);

    expect(cacheManager.get('state-123')).toBeNull();
  });
});
