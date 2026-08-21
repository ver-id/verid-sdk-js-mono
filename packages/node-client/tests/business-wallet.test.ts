import {
  VeridOAuthClient,
  InvalidArgumentError,
  OperationFailedError,
} from '@ver-id/core';
import {
  VeridBusinessWalletIssuanceClient,
  BusinessWalletDeliveryState,
  BusinessWalletDeliveryMethod,
  type BusinessWalletDeliveryStatus,
} from '../src/client/business-wallet';

const ISSUER_URI = 'https://issuer.example.com/oauth';
const ORIGIN = 'https://issuer.example.com';
const CLIENT_ID = '550e8400-e29b-41d4-a716-446655440000';
const CLIENT_AUTH = { client_secret: 's3cret' };
const EXPECTED_BASIC = `Basic ${btoa(`${CLIENT_ID}:${CLIENT_AUTH.client_secret}`)}`;

/** Builds a minimal fetch `Response` stand-in for the fields the transport reads. */
function mockResponse(ok: boolean, status: number, body: unknown): Response {
  const text = typeof body === 'string' ? body : JSON.stringify(body);
  return {
    ok,
    status,
    text: () => Promise.resolve(text),
  } as unknown as Response;
}

function makeClient(): VeridBusinessWalletIssuanceClient {
  return new VeridBusinessWalletIssuanceClient({
    issuerUri: ISSUER_URI,
    clientId: CLIENT_ID,
  });
}

function fullStatus(
  state: BusinessWalletDeliveryState,
): BusinessWalletDeliveryStatus {
  return {
    deliveryId: 'd-1',
    state,
    method: BusinessWalletDeliveryMethod.Qerds,
    recipient: 'urn:recipient',
    failureReason: null,
    createdAt: '2026-08-20T00:00:00.000Z',
    updatedAt: '2026-08-20T00:00:00.000Z',
  };
}

describe('VeridBusinessWalletIssuanceClient', () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(globalThis, 'fetch');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    it('rejects an invalid issuerUri', () => {
      expect(
        () =>
          new VeridBusinessWalletIssuanceClient({
            issuerUri: 'not-a-url',
            clientId: CLIENT_ID,
          }),
      ).toThrow(InvalidArgumentError);
    });

    it('rejects a non-UUID clientId', () => {
      expect(
        () =>
          new VeridBusinessWalletIssuanceClient({
            issuerUri: ISSUER_URI,
            clientId: 'nope',
          }),
      ).toThrow(InvalidArgumentError);
    });
  });

  describe('createIssuanceIntent', () => {
    it('throws when neither data nor mapping is provided', async () => {
      await expect(
        makeClient().createIssuanceIntent({ payload: {} }, CLIENT_AUTH),
      ).rejects.toThrow(InvalidArgumentError);
    });

    it('throws when both data and mapping are provided', async () => {
      await expect(
        makeClient().createIssuanceIntent(
          {
            payload: {
              data: [{ attributeUuid: 'a', value: 1 }],
              mapping: { a: 1 },
            },
          },
          CLIENT_AUTH,
        ),
      ).rejects.toThrow(InvalidArgumentError);
    });

    it('builds a confidential-client issuance intent (no code_challenge) and returns the response', async () => {
      const createIntent = jest
        .spyOn(VeridOAuthClient.prototype, 'createIntent')
        .mockResolvedValue({ intent_id: 'intent-1' });

      const result = await makeClient().createIssuanceIntent(
        {
          payload: { data: [{ attributeUuid: 'a', value: 'v' }] },
          brandUuid: 'b',
        },
        CLIENT_AUTH,
      );

      expect(result).toEqual({ intent_id: 'intent-1' });
      const [intent, auth] = createIntent.mock.calls[0];
      expect(intent).toMatchObject({
        scope: 'issuance',
        client_id: CLIENT_ID,
        brandUuid: 'b',
        payload: { mapping: {}, data: [{ attributeUuid: 'a', value: 'v' }] },
      });
      expect(
        (intent as Record<string, unknown>).code_challenge,
      ).toBeUndefined();
      expect(auth).toBe(CLIENT_AUTH);
    });
  });

  describe('issue', () => {
    it('POSTs to the issue endpoint with Basic auth and returns the delivery id', async () => {
      fetchSpy.mockResolvedValue(
        mockResponse(true, 200, { deliveryId: 'd-1' }),
      );

      const result = await makeClient().issue(
        {
          intentId: 'intent-1',
          recipient: 'urn:recipient',
          handlerAppUuid: 'handler-app-1',
        },
        CLIENT_AUTH,
      );

      expect(result).toEqual({ deliveryId: 'd-1' });
      const [url, init] = fetchSpy.mock.calls[0];
      expect(url).toBe(`${ORIGIN}/oid4vci/business-wallet/issue`);
      expect(init.method).toBe('POST');
      expect(init.headers.Authorization).toBe(EXPECTED_BASIC);
      expect(init.headers['Content-Type']).toBe('application/json');
      expect(JSON.parse(init.body)).toEqual({
        intentId: 'intent-1',
        recipient: 'urn:recipient',
        handlerAppUuid: 'handler-app-1',
      });
    });

    it('validates required params before calling fetch', async () => {
      await expect(
        makeClient().issue(
          {
            intentId: 'intent-1',
            recipient: '',
            handlerAppUuid: 'handler-app-1',
          },
          CLIENT_AUTH,
        ),
      ).rejects.toThrow(InvalidArgumentError);
      expect(fetchSpy).not.toHaveBeenCalled();
    });

    it('maps the OAuth error envelope to OperationFailedError carrying the error code', async () => {
      fetchSpy.mockResolvedValue(
        mockResponse(false, 400, {
          error: 'invalid_request',
          error_description: 'Invalid intent: intent expired — re-run /intent.',
        }),
      );

      const error = await makeClient()
        .issue(
          {
            intentId: 'intent-1',
            recipient: 'urn:recipient',
            handlerAppUuid: 'handler-app-1',
          },
          CLIENT_AUTH,
        )
        .catch((e: unknown) => e);

      expect(error).toBeInstanceOf(OperationFailedError);
      expect((error as OperationFailedError).code).toBe('invalid_request');
      expect((error as OperationFailedError).message).toBe(
        'Invalid intent: intent expired — re-run /intent.',
      );
    });
  });

  describe('getDelivery', () => {
    it('GETs the delivery endpoint and returns the status', async () => {
      const status = fullStatus(BusinessWalletDeliveryState.Submitted);
      fetchSpy.mockResolvedValue(mockResponse(true, 200, status));

      const result = await makeClient().getDelivery('d-1', CLIENT_AUTH);

      expect(result).toEqual(status);
      const [url, init] = fetchSpy.mock.calls[0];
      expect(url).toBe(`${ORIGIN}/oid4vci/business-wallet/delivery/d-1`);
      expect(init.method).toBe('GET');
      expect(init.headers.Authorization).toBe(EXPECTED_BASIC);
      expect(init.body).toBeUndefined();
    });

    it('maps a not-found envelope to OperationFailedError', async () => {
      fetchSpy.mockResolvedValue(
        mockResponse(false, 400, {
          error: 'not_found',
          error_description: 'Delivery not found.',
        }),
      );

      const error = await makeClient()
        .getDelivery('d-x', CLIENT_AUTH)
        .catch((e: unknown) => e);

      expect(error).toBeInstanceOf(OperationFailedError);
      expect((error as OperationFailedError).code).toBe('not_found');
    });
  });

  describe('pollUntilTerminal', () => {
    it('polls until a terminal state and returns it', async () => {
      fetchSpy
        .mockResolvedValueOnce(
          mockResponse(
            true,
            200,
            fullStatus(BusinessWalletDeliveryState.Pending),
          ),
        )
        .mockResolvedValueOnce(
          mockResponse(
            true,
            200,
            fullStatus(BusinessWalletDeliveryState.Submitted),
          ),
        )
        .mockResolvedValueOnce(
          mockResponse(
            true,
            200,
            fullStatus(BusinessWalletDeliveryState.Redeemed),
          ),
        );

      const onPoll = jest.fn();
      const result = await makeClient().pollUntilTerminal('d-1', CLIENT_AUTH, {
        intervalMs: 1,
        onPoll,
      });

      expect(result.state).toBe(BusinessWalletDeliveryState.Redeemed);
      expect(fetchSpy).toHaveBeenCalledTimes(3);
      expect(onPoll).toHaveBeenCalledTimes(3);
    });

    it('returns a FAILED terminal state without throwing', async () => {
      fetchSpy.mockResolvedValue(
        mockResponse(true, 200, fullStatus(BusinessWalletDeliveryState.Failed)),
      );

      const result = await makeClient().pollUntilTerminal('d-1', CLIENT_AUTH, {
        intervalMs: 1,
      });

      expect(result.state).toBe(BusinessWalletDeliveryState.Failed);
    });

    it('throws OperationFailedError when the timeout elapses', async () => {
      fetchSpy.mockResolvedValue(
        mockResponse(
          true,
          200,
          fullStatus(BusinessWalletDeliveryState.Pending),
        ),
      );

      await expect(
        makeClient().pollUntilTerminal('d-1', CLIENT_AUTH, {
          intervalMs: 5,
          timeoutMs: 1,
        }),
      ).rejects.toThrow(OperationFailedError);
    });
  });
});
