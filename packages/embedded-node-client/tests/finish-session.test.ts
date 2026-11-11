import { createHmac } from 'node:crypto';
import { exportJWK, generateKeyPair, SignJWT, type CryptoKey } from 'jose';
import {
  AuthorizationResponseError,
  MemoryStorageCacheManager,
  OperationFailedError,
  SessionFinishError,
  VeridEmbeddedDisclosureClient,
} from '../src/index.js';

const ISSUER = 'https://ssi.oauth.example.com';
// oauth4webapi requires the discovery `issuer` to equal the issuer URL's href, trailing slash included.
const ISSUER_HREF = 'https://ssi.oauth.example.com/';
const CLIENT_ID = '11111111-1111-4111-8111-111111111111';
const SECRET = 'test-webhook-secret';

function signWebhook(rawBody: string, secret: string): string {
  return `sha256=${createHmac('sha256', secret).update(rawBody).digest('hex')}`;
}

function jsonResponse(data: object): Response {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

function webhookFor(state: string) {
  const rawBody = JSON.stringify({
    type: 'v1.flow.completed',
    version: 1,
    code: 'auth-code-123',
    state,
    intent_id: '33333333-3333-4333-8333-333333333333',
  });
  return { rawBody, headers: { 'x-signature-256': signWebhook(rawBody, SECRET) } };
}

describe('finishSession', () => {
  const realFetch = globalThis.fetch;
  let privateKey: CryptoKey;
  let jwks: object;
  let capturedTokenBody: string | undefined;
  let capturedTokenAuthorization: string | null | undefined;
  let tokenCalls: number;
  /** How many token requests fail with a server error before one succeeds. */
  let tokenFailures: number;
  /** How many signing-key requests fail before one succeeds. */
  let jwksFailures: number;

  beforeAll(async () => {
    const keys = await generateKeyPair('ES384');
    privateKey = keys.privateKey;
    jwks = { keys: [{ ...(await exportJWK(keys.publicKey)), kid: 'key-1', alg: 'ES384' }] };
  });

  beforeEach(() => {
    capturedTokenBody = undefined;
    capturedTokenAuthorization = undefined;
    tokenCalls = 0;
    tokenFailures = 0;
    jwksFailures = 0;

    globalThis.fetch = async (input, init) => {
      const url = String(input);

      if (url.includes('/.well-known/')) {
        return jsonResponse({
          issuer: ISSUER_HREF,
          token_endpoint: `${ISSUER_HREF}token`,
          intent_endpoint: `${ISSUER_HREF}intent`,
          jwks_uri: `${ISSUER_HREF}jwks`,
          embedded_loader_uri: 'https://gateway.example.com/embedded.js',
          response_types_supported: ['code'],
        });
      }
      if (url.endsWith('/intent')) {
        return jsonResponse({ intent_id: '33333333-3333-4333-8333-333333333333' });
      }
      if (url.endsWith('/jwks')) {
        if (jwksFailures > 0) {
          jwksFailures -= 1;
          throw new TypeError('fetch failed');
        }
        return jsonResponse(jwks);
      }
      if (url.endsWith('/token')) {
        capturedTokenBody = String(init?.body);
        capturedTokenAuthorization = new Headers(init?.headers).get('authorization');
        tokenCalls += 1;
        if (tokenFailures > 0) {
          tokenFailures -= 1;
          throw new TypeError('fetch failed');
        }
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
  });

  async function startSession() {
    const client = new VeridEmbeddedDisclosureClient({
      issuerUri: ISSUER,
      clientId: CLIENT_ID,
      clientSecret: 'client-secret',
      webhookUri: 'https://app.example.com/api/verid/webhook',
      webhookSecret: SECRET,
      cacheManager: new MemoryStorageCacheManager(),
    });
    const { state } = await client.createSession();
    return { client, state, webhook: webhookFor(state) };
  }

  it('verifies the webhook and returns the verified result, without redirect_uri', async () => {
    const { client, state, webhook } = await startSession();

    const outcome = await client.finishSession(webhook);

    expect(outcome).toMatchObject({
      kind: 'completed',
      state,
      result: { format: 'disclosure_v1', payload: { disclosureUuid: CLIENT_ID } },
    });
    expect(capturedTokenBody).toContain('grant_type=authorization_code');
    expect(capturedTokenBody).toContain('code=auth-code-123');
    expect(capturedTokenBody).toContain('code_verifier=');
    expect(capturedTokenBody).not.toContain('redirect_uri');
    expect(capturedTokenAuthorization).toBe(
      `Basic ${Buffer.from(`${CLIENT_ID}:client-secret`).toString('base64')}`,
    );
  });

  it('rejects a webhook signed with another secret, with no exchange', async () => {
    const { client, webhook } = await startSession();

    await expect(
      client.finishSession({
        rawBody: webhook.rawBody,
        headers: { 'x-signature-256': signWebhook(webhook.rawBody, 'wrong-secret') },
      }),
    ).rejects.toBeInstanceOf(AuthorizationResponseError);
    expect(tokenCalls).toBe(0);
  });

  it('returns kind unknown for an unknown event type, without an exchange', async () => {
    const { client } = await startSession();
    const rawBody = JSON.stringify({
      type: 'v2.flow.completed',
      version: 2,
      code: 'auth-code-123',
    });

    const outcome = await client.finishSession({
      rawBody,
      headers: { 'x-signature-256': signWebhook(rawBody, SECRET) },
    });

    expect(outcome).toEqual({
      kind: 'unknown',
      type: 'v2.flow.completed',
      raw: JSON.parse(rawBody),
    });
    expect(tokenCalls).toBe(0);
  });

  it('throws SessionFinishError with the state for a redelivery after success, without a second exchange', async () => {
    const { client, state, webhook } = await startSession();
    await client.finishSession(webhook);

    const error: unknown = await client.finishSession(webhook).catch((e: unknown) => e);

    expect(error).toBeInstanceOf(SessionFinishError);
    expect(error).toMatchObject({ state });
    expect((error as SessionFinishError).cause).toBeInstanceOf(OperationFailedError);
    expect(tokenCalls).toBe(1);
  });

  it('throws SessionFinishError for a failed exchange, and keeps the verifier so the redelivery finishes', async () => {
    const { client, state, webhook } = await startSession();
    tokenFailures = 1;

    await expect(client.finishSession(webhook)).rejects.toMatchObject({
      name: 'SessionFinishError',
      state,
    });
    const outcome = await client.finishSession(webhook);

    expect(outcome.kind).toBe('completed');
    expect(tokenCalls).toBe(2);
  });

  it('keeps the received token after a failed token check, so the redelivery finishes without a second exchange', async () => {
    const { client, state, webhook } = await startSession();
    jwksFailures = 1;

    await expect(client.finishSession(webhook)).rejects.toMatchObject({
      name: 'SessionFinishError',
      state,
    });
    const outcome = await client.finishSession(webhook);

    expect(outcome).toMatchObject({
      kind: 'completed',
      state,
      result: { format: 'disclosure_v1' },
    });
    expect(tokenCalls).toBe(1);
    await expect(client.finishSession(webhook)).rejects.toMatchObject({
      name: 'SessionFinishError',
    });
  });

  it('throws SessionFinishError with the state for an unknown state, without an exchange', async () => {
    const { client } = await startSession();

    await expect(client.finishSession(webhookFor('someone-elses-state'))).rejects.toMatchObject({
      name: 'SessionFinishError',
      state: 'someone-elses-state',
    });
    expect(tokenCalls).toBe(0);
  });
});
