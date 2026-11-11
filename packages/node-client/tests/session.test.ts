import { exportJWK, generateKeyPair, SignJWT, type CryptoKey } from 'jose';
import {
  AuthorizationResponseError,
  InvalidArgumentError,
  InvalidResponseError,
  MemoryStorageCacheManager,
  OperationFailedError,
  VeridAuthenticationClient,
  VeridDisclosureClient,
  VeridIssuanceClient,
} from '../src/index.js';

const ISSUER = 'https://ssi.oauth.example.com';
// oauth4webapi requires the discovery `issuer` to equal the issuer URL's href, trailing slash included.
const ISSUER_HREF = `${ISSUER}/`;
const CLIENT_ID = '11111111-1111-4111-8111-111111111111';
const UUID = '22222222-2222-4222-8222-222222222222';

const config = () => ({
  issuerUri: ISSUER,
  clientId: CLIENT_ID,
  clientSecret: 'client-secret',
  redirectUri: 'https://app.example.com/callback',
  cacheManager: new MemoryStorageCacheManager(),
});

const disclosurePayload = {
  uuid: UUID,
  parameter: { challenge: UUID },
  meta: {},
  mapping: {},
  credentials: [],
  disclosureUuid: UUID,
  organizationUuid: UUID,
};

function jsonResponse(data: object, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

describe('hosted sessions', () => {
  const realFetch = globalThis.fetch;
  let privateKey: CryptoKey;
  let jwks: object;
  let intentRequests: { body: Record<string, unknown>; authorization: string | null }[];
  let intentResponse: () => Response;
  let tokenResponse: () => Promise<Response>;
  let tokenCalls: number;
  let discoveryCalls: number;
  let discoveryResponse: () => Promise<Response>;
  let jwksResponse: () => Promise<Response>;

  const sign = (payload: object, typ: string, claims: { aud?: string; sub?: string } = {}) => {
    const jwt = new SignJWT({ ...payload })
      .setProtectedHeader({ alg: 'ES384', typ, kid: 'key-1' })
      .setIssuer(ISSUER_HREF)
      .setIssuedAt()
      .setExpirationTime('5m');
    if (claims.aud) jwt.setAudience(claims.aud);
    if (claims.sub) jwt.setSubject(claims.sub);
    return jwt.sign(privateKey);
  };

  const accessTokenResponse = (token: string) =>
    jsonResponse({
      token_type: 'bearer',
      access_token: token,
      expires_in: 3600,
      scope: 'disclosure',
    });

  beforeAll(async () => {
    const keys = await generateKeyPair('ES384');
    privateKey = keys.privateKey;
    jwks = { keys: [{ ...(await exportJWK(keys.publicKey)), kid: 'key-1', alg: 'ES384' }] };
  });

  beforeEach(() => {
    intentRequests = [];
    intentResponse = () =>
      jsonResponse({ intent_id: '33333333-3333-4333-8333-333333333333', issuance_run_uuid: UUID });
    tokenCalls = 0;
    discoveryCalls = 0;
    discoveryResponse = async () =>
      jsonResponse({
        issuer: ISSUER_HREF,
        authorization_endpoint: `${ISSUER_HREF}authorize`,
        token_endpoint: `${ISSUER_HREF}token`,
        intent_endpoint: `${ISSUER_HREF}intent`,
        jwks_uri: `${ISSUER_HREF}jwks`,
        response_types_supported: ['code'],
      });
    tokenResponse = async () =>
      accessTokenResponse(await sign(disclosurePayload, 'ver-id/ssi/disclosure/v1+JWT'));
    jwksResponse = async () => jsonResponse(jwks);

    globalThis.fetch = async (input, init) => {
      const url = String(input);
      if (url.includes('/.well-known/')) {
        discoveryCalls += 1;
        return discoveryResponse();
      }
      if (url.endsWith('/intent')) {
        intentRequests.push({
          body: JSON.parse(String(init?.body)),
          authorization: new Headers(init?.headers).get('authorization'),
        });
        return intentResponse();
      }
      if (url.endsWith('/token')) {
        tokenCalls += 1;
        return tokenResponse();
      }
      if (url.endsWith('/jwks')) {
        return jwksResponse();
      }
      throw new Error(`Unexpected fetch: ${url}`);
    };
  });

  afterEach(() => {
    globalThis.fetch = realFetch;
  });

  const callback = (state: string) => `/callback?code=auth-code&state=${state}`;

  describe('createSession', () => {
    it('creates the intent with the client secret and returns the authorization URL', async () => {
      const { url, state } = await new VeridDisclosureClient(config()).createSession({
        challenge: UUID,
        brandUuid: UUID,
      });

      const params = new URL(url).searchParams;
      expect(params.get('state')).toBe(state);
      expect(params.get('scope')).toBe('disclosure');
      expect(params.get('intent_id')).toBe('33333333-3333-4333-8333-333333333333');
      expect(params.get('code_challenge')).toBe(intentRequests[0].body.code_challenge);
      expect(intentRequests[0].body).toMatchObject({
        scope: 'disclosure',
        client_id: CLIENT_ID,
        challenge: UUID,
        brandUuid: UUID,
      });
      expect(intentRequests[0].authorization).toMatch(/^Basic /);
    });

    it('creates an intent even with nothing to send, so the platform checks the client first', async () => {
      const disclosure = await new VeridDisclosureClient(config()).createSession();
      const authentication = await new VeridAuthenticationClient(config()).createSession({
        scope: 'openid',
      });

      expect(intentRequests).toHaveLength(2);
      for (const { url } of [disclosure, authentication]) {
        expect(new URL(url).searchParams.get('intent_id')).toBe(
          '33333333-3333-4333-8333-333333333333',
        );
      }
    });

    it('creates the intent for a brand alone', async () => {
      const { url } = await new VeridDisclosureClient(config()).createSession({ brandUuid: UUID });

      expect(intentRequests).toHaveLength(1);
      expect(new URL(url).searchParams.get('intent_id')).toBe(
        '33333333-3333-4333-8333-333333333333',
      );
    });

    it('caches no verifier when the intent is rejected', async () => {
      const cacheManager = new MemoryStorageCacheManager();
      const save = jest.spyOn(cacheManager, 'save');
      intentResponse = () => jsonResponse({ error: 'invalid_client' }, 401);

      await expect(
        new VeridDisclosureClient({ ...config(), cacheManager }).createSession({ challenge: UUID }),
      ).rejects.toBeInstanceOf(OperationFailedError);
      expect(save).not.toHaveBeenCalled();
    });

    it('rejects an intent response without an intent_id', async () => {
      const cacheManager = new MemoryStorageCacheManager();
      const save = jest.spyOn(cacheManager, 'save');
      intentResponse = () => jsonResponse({});

      await expect(
        new VeridDisclosureClient({ ...config(), cacheManager }).createSession(),
      ).rejects.toBeInstanceOf(InvalidResponseError);
      expect(save).not.toHaveBeenCalled();
    });

    it('adds openid to the authentication scope and keeps openid on the intent', async () => {
      const { url } = await new VeridAuthenticationClient(config()).createSession({
        scope: 'profile email',
        challenge: UUID,
      });

      expect(new URL(url).searchParams.get('scope')).toBe('profile email openid');
      expect(intentRequests[0].body.scope).toBe('openid');
    });

    it('sends issuance data and returns the issuance run', async () => {
      const data = [{ attributeUuid: UUID, value: 'Jane' }];
      const session = await new VeridIssuanceClient(config()).createSession({ data });

      expect(session.issuanceRunUuid).toBe(UUID);
      expect(intentRequests[0].body.payload).toEqual({ data, mapping: {} });
    });

    it('sends the issuance expiry overrides', async () => {
      await new VeridIssuanceClient(config()).createSession({
        mapping: { name: 'Jane' },
        expirationDuration: 3600,
        credentialExpirationDurations: { [UUID]: 7200 },
      });

      expect(intentRequests[0].body).toMatchObject({
        expirationDuration: 3600,
        credentialExpirationDurations: { [UUID]: 7200 },
      });
    });

    it('leaves the expiry to the flow when none is given', async () => {
      await new VeridIssuanceClient(config()).createSession({ mapping: { name: 'Jane' } });

      expect(intentRequests[0].body).not.toHaveProperty('expirationDuration');
      expect(intentRequests[0].body).not.toHaveProperty('credentialExpirationDurations');
    });

    it('rejects issuance with both or neither of data and mapping', async () => {
      const client = new VeridIssuanceClient(config());
      const both = {
        data: [{ attributeUuid: UUID, value: 'Jane' }],
        mapping: { name: 'Jane' },
      } as never;

      await expect(client.createSession(both)).rejects.toBeInstanceOf(InvalidArgumentError);
      await expect(client.createSession({ mapping: {} })).rejects.toBeInstanceOf(
        InvalidArgumentError,
      );
      expect(intentRequests).toHaveLength(0);
    });
  });

  describe('discovery', () => {
    it('discovers the issuer once for a whole session', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();
      await client.finishSession({ callbackUrl: callback(state) });

      expect(discoveryCalls).toBe(1);
    });

    it('discovers again after a failed discovery', async () => {
      const client = new VeridDisclosureClient(config());
      const succeed = discoveryResponse;
      discoveryResponse = () => Promise.reject(new TypeError('fetch failed'));

      await expect(client.createSession()).rejects.toBeInstanceOf(OperationFailedError);
      discoveryResponse = succeed;

      await expect(client.createSession()).resolves.toHaveProperty('state');
      expect(discoveryCalls).toBe(2);
    });
  });

  describe('finishSession', () => {
    it('returns the verified result with its format and token', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();

      const result = await client.finishSession({
        callbackUrl: callback(state),
      });

      expect(result.format).toBe('disclosure_v1');
      expect(result.payload).toMatchObject({ disclosureUuid: UUID });
      expect(result.rawToken.split('.')).toHaveLength(3);
    });

    it('selects the flat format from the typ header', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();
      tokenResponse = async () =>
        accessTokenResponse(await sign({ output: [] }, 'ver-id/ssi/disclosure/flat/v1+JWT'));

      const result = await client.finishSession({
        callbackUrl: callback(state),
      });

      expect(result.format).toBe('disclosure_flat_v1');
    });

    it('returns a verified token of an unknown typ as unknown', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();
      tokenResponse = async () =>
        accessTokenResponse(await sign({ anything: true }, 'ver-id/ssi/disclosure/v2+JWT'));

      const result = await client.finishSession({
        callbackUrl: callback(state),
      });

      expect(result).toMatchObject({
        format: 'unknown',
        typ: 'ver-id/ssi/disclosure/v2+JWT',
        payload: { anything: true },
      });
    });

    it('rejects a token that fails verification', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();
      const otherKey = (await generateKeyPair('ES384')).privateKey;
      tokenResponse = async () =>
        accessTokenResponse(
          await new SignJWT(disclosurePayload)
            .setProtectedHeader({
              alg: 'ES384',
              typ: 'ver-id/ssi/disclosure/v1+JWT',
              kid: 'key-1',
            })
            .sign(otherKey),
        );

      await expect(client.finishSession({ callbackUrl: callback(state) })).rejects.toThrow(
        'JWT verification failed',
      );
    });

    it('reports a malformed token response as an invalid response', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();
      tokenResponse = async () =>
        jsonResponse({ token_type: 'bearer', access_token: 'token', expires_in: 3600 });

      await expect(client.finishSession({ callbackUrl: callback(state) })).rejects.toBeInstanceOf(
        InvalidResponseError,
      );
    });

    it('returns the ID token for authentication', async () => {
      const client = new VeridAuthenticationClient(config());
      const { state } = await client.createSession({ scope: 'openid' });
      tokenResponse = async () =>
        jsonResponse({
          token_type: 'bearer',
          access_token: 'opaque-access-token',
          expires_in: 3600,
          scope: 'openid',
          id_token: await sign({}, 'ver-id/ssi/output/openid/v1+JWT', {
            aud: CLIENT_ID,
            sub: 'subject-1',
          }),
        });

      const result = await client.finishSession({
        callbackUrl: callback(state),
      });

      expect(result).toMatchObject({ format: 'openid', payload: { sub: 'subject-1' } });
    });

    it('keeps the verifier after a failed exchange, so a retry can finish', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();
      const succeed = tokenResponse;
      tokenResponse = () => Promise.reject(new TypeError('fetch failed'));
      const params = { callbackUrl: callback(state) };

      await expect(client.finishSession(params)).rejects.toThrow();
      tokenResponse = succeed;

      await expect(client.finishSession(params)).resolves.toHaveProperty('format', 'disclosure_v1');
    });

    it('keeps the received token after a failed verification, for a retry with the same code', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();
      jwksResponse = () => Promise.reject(new TypeError('fetch failed'));

      const failure = await client.finishSession({ callbackUrl: callback(state) }).catch((e) => e);
      expect(failure).toBeInstanceOf(OperationFailedError);
      expect(failure.cause).toBeDefined();
      jwksResponse = async () => jsonResponse(jwks);

      for (const callbackUrl of [
        `/callback?state=${state}`,
        `/callback?code=other&state=${state}`,
      ]) {
        await expect(client.finishSession({ callbackUrl })).rejects.toThrow(
          'does not carry the code',
        );
      }
      await expect(client.finishSession({ callbackUrl: callback(state) })).resolves.toHaveProperty(
        'format',
        'disclosure_v1',
      );
      expect(tokenCalls).toBe(1);
    });

    it('reports a cancel as an authorization error, even when the session has expired', async () => {
      const client = new VeridDisclosureClient(config());

      await expect(
        client.finishSession({
          callbackUrl: '/callback?error=access_denied&error_description=Cancelled&state=gone',
        }),
      ).rejects.toThrow(new AuthorizationResponseError('Cancelled'));
    });

    it('accepts a URL object that is not a URL subclass, such as Next.js req.nextUrl', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();
      const nextUrl = { search: `?code=auth-code&state=${state}` } as unknown as URL;

      await expect(client.finishSession({ callbackUrl: nextUrl })).resolves.toHaveProperty(
        'format',
        'disclosure_v1',
      );
    });

    it('cannot finish the same session twice', async () => {
      const client = new VeridDisclosureClient(config());
      const { state } = await client.createSession();
      const params = { callbackUrl: callback(state) };
      await client.finishSession(params);

      await expect(client.finishSession(params)).rejects.toBeInstanceOf(OperationFailedError);
      expect(tokenCalls).toBe(1);
    });
  });

  it('requires a client secret and a cache manager', () => {
    expect(
      () => new VeridDisclosureClient({ ...config(), clientSecret: undefined as never }),
    ).toThrow(InvalidArgumentError);
    expect(
      () => new VeridDisclosureClient({ ...config(), cacheManager: undefined as never }),
    ).toThrow(InvalidArgumentError);
  });
});
