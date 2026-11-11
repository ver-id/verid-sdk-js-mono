import {
  InvalidArgumentError,
  InvalidAssertionError,
  MemoryStorageCacheManager,
  VeridEmbeddedDisclosureClient,
  VeridEmbeddedIssuanceClient,
} from '../src/index.js';

const ISSUER = 'https://ssi.oauth.example.com';
// oauth4webapi requires the discovery `issuer` to equal the issuer URL's href, trailing slash included.
const ISSUER_HREF = 'https://ssi.oauth.example.com/';
const CLIENT_ID = '11111111-1111-4111-8111-111111111111';
const LOADER_URI = 'https://gateway.example.com/embedded.js';
const WEBHOOK_URI = 'https://app.example.com/api/verid/webhook';

const config = (cacheManager = new MemoryStorageCacheManager()) => ({
  issuerUri: ISSUER,
  clientId: CLIENT_ID,
  clientSecret: 'client-secret',
  webhookUri: WEBHOOK_URI,
  webhookSecret: 'webhook-secret',
  cacheManager,
});

const decode = (sessionContext: string) =>
  JSON.parse(Buffer.from(sessionContext, 'base64url').toString());

describe('createSession', () => {
  const realFetch = globalThis.fetch;
  /** What the issuer's metadata advertises as its embedded loader; `undefined` leaves it out. */
  let advertisedLoaderUri: string | undefined;
  let intentBodies: Record<string, unknown>[];
  let intentAuthorizations: (string | null)[];

  beforeEach(() => {
    advertisedLoaderUri = LOADER_URI;
    intentBodies = [];
    intentAuthorizations = [];
    globalThis.fetch = (input, init) => {
      const url = String(input);
      const json = (data: object) =>
        Promise.resolve(
          new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'content-type': 'application/json' },
          }),
        );
      if (url.includes('/.well-known/')) {
        return json({
          issuer: ISSUER_HREF,
          token_endpoint: `${ISSUER_HREF}token`,
          intent_endpoint: `${ISSUER_HREF}intent`,
          embedded_loader_uri: advertisedLoaderUri,
          response_types_supported: ['code'],
        });
      }
      if (url.endsWith('/intent')) {
        intentBodies.push(JSON.parse(String(init?.body)));
        intentAuthorizations.push(new Headers(init?.headers).get('authorization'));
        return json({
          intent_id: '33333333-3333-4333-8333-333333333333',
          issuance_run_uuid: CLIENT_ID,
        });
      }
      return Promise.reject(new Error(`Unexpected fetch: ${url}`));
    };
  });

  afterEach(() => {
    globalThis.fetch = realFetch;
  });

  it('returns an opaque context with the public fields and persists the verifier', async () => {
    const cacheManager = new MemoryStorageCacheManager();
    const { sessionContext, state } = await new VeridEmbeddedDisclosureClient(
      config(cacheManager),
    ).createSession({ challenge: CLIENT_ID });

    expect(decode(sessionContext)).toEqual({
      v: 1,
      loaderUri: LOADER_URI,
      clientId: CLIENT_ID,
      scope: 'disclosure',
      state,
      codeChallenge: intentBodies[0].code_challenge,
      webhookUri: WEBHOOK_URI,
      intentId: '33333333-3333-4333-8333-333333333333',
    });
    expect(await cacheManager.get(state)).toEqual(expect.any(String));
  });

  it('creates an intent even with nothing to send', async () => {
    const { sessionContext } = await new VeridEmbeddedDisclosureClient(config()).createSession();
    const context = decode(sessionContext);

    expect(intentBodies).toHaveLength(1);
    expect(intentBodies[0]).toMatchObject({
      scope: 'disclosure',
      client_id: CLIENT_ID,
      code_challenge: context.codeChallenge,
    });
    expect(context.intentId).toBe('33333333-3333-4333-8333-333333333333');
  });

  it('authenticates the intent with the client secret', async () => {
    await new VeridEmbeddedDisclosureClient(config()).createSession();

    expect(intentAuthorizations).toEqual([
      `Basic ${Buffer.from(`${CLIENT_ID}:client-secret`).toString('base64')}`,
    ]);
  });

  it('never puts the code verifier or a secret in the context', async () => {
    const cacheManager = new MemoryStorageCacheManager();
    const { sessionContext, state } = await new VeridEmbeddedDisclosureClient(
      config(cacheManager),
    ).createSession();
    const decoded = Buffer.from(sessionContext, 'base64url').toString();

    expect(decoded).not.toContain(await cacheManager.get(state));
    expect(decoded).not.toContain('client-secret');
    expect(decoded).not.toContain('webhook-secret');
  });

  it('sends issuance data and returns the issuance run', async () => {
    const data = [{ attributeUuid: CLIENT_ID, value: 'Jane' }];
    const session = await new VeridEmbeddedIssuanceClient(config()).createSession({ data });

    expect(session.issuanceRunUuid).toBe(CLIENT_ID);
    expect(intentBodies[0].payload).toEqual({ data, mapping: {} });
    expect(decode(session.sessionContext).scope).toBe('issuance');
  });

  it('creates no intent and caches no verifier when the issuer advertises no loader', async () => {
    advertisedLoaderUri = undefined;
    const cacheManager = new MemoryStorageCacheManager();
    const save = jest.spyOn(cacheManager, 'save');

    await expect(
      new VeridEmbeddedDisclosureClient(config(cacheManager)).createSession({
        challenge: CLIENT_ID,
      }),
    ).rejects.toBeInstanceOf(InvalidAssertionError);
    expect(intentBodies).toHaveLength(0);
    expect(save).not.toHaveBeenCalled();
  });

  it('rejects an invalid config', () => {
    expect(
      () => new VeridEmbeddedDisclosureClient({ ...config(), webhookUri: 'not-a-url' }),
    ).toThrow(InvalidArgumentError);
    expect(
      () => new VeridEmbeddedDisclosureClient({ ...config(), webhookSecret: undefined as never }),
    ).toThrow(InvalidArgumentError);
    expect(
      () => new VeridEmbeddedDisclosureClient({ ...config(), clientSecret: undefined as never }),
    ).toThrow(InvalidArgumentError);
  });
});
