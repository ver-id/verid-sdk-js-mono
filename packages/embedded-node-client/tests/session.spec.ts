import { EmbeddedDisclosureClient } from '../src/clients/disclosure.js';
import {
  EmbeddedIssuanceClient,
  type EmbeddedIssuanceSessionParams,
} from '../src/clients/issuance.js';
import { MemoryStorageCacheManager } from '../src/cache/index.js';
import { InvalidArgumentError } from '@ver-id/core/error';

const ISSUER = 'https://issuer.example.com';
const CLIENT_ID = '11111111-1111-4111-8111-111111111111';

describe('createEmbeddedSession', () => {
  it('returns a public bootstrap and persists the verifier (disclosure)', async () => {
    const cacheManager = new MemoryStorageCacheManager();
    const client = new EmbeddedDisclosureClient({
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
    expect(bootstrap.gatewayUri).toBe('https://issuer.example.com');
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

  it('passes through explicit gatewayUri and intentId (issuance)', async () => {
    const cacheManager = new MemoryStorageCacheManager();
    const client = new EmbeddedIssuanceClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      options: { cacheManager },
    });

    const gatewayUri = 'https://gateway.example.com';
    const intentId = 'intent-123';
    const bootstrap = await client.createEmbeddedSession({
      scope: 'issuance',
      webhookUri: 'https://app.example.com/api/verid/webhook',
      gatewayUri,
      intentId,
    });

    expect(bootstrap.gatewayUri).toBe(gatewayUri);
    expect(bootstrap.intentId).toBe(intentId);
    expect(bootstrap.scope).toBe('issuance');
  });

  it('rejects an issuance session without an intentId', async () => {
    const client = new EmbeddedIssuanceClient({
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
    const client = new EmbeddedIssuanceClient({
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
    const client = new EmbeddedDisclosureClient({
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
});
