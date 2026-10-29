import { VeridOAuthClient } from '../src/oauth/client';
import { OAuth4WebApiProvider } from '../src/oauth/provider';
import { InvalidArgumentError, OperationFailedError } from '../src/error';
import { AuthorizationServer } from '../src/types/oauth';

const intent = {
  scope: 'disclosure',
  client_id: '1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d',
  code_challenge: 'challenge',
};

describe('VeridOAuthClient.createIntent', () => {
  const client = new VeridOAuthClient({
    issuer: 'https://ssi.example',
    clientId: intent.client_id,
  });
  const fetchMock = jest.fn();

  beforeEach(() => {
    jest
      .spyOn(OAuth4WebApiProvider.prototype, 'discover')
      .mockResolvedValue({ intent_endpoint: 'https://ssi.example/intent' } as AuthorizationServer);
    fetchMock.mockReset();
    global.fetch = fetchMock;
  });

  afterEach(() => jest.restoreAllMocks());

  it('keeps the HTTP status and body of a rejected intent', async () => {
    fetchMock.mockResolvedValue(new Response('invalid challenge', { status: 400 }));

    const error = await client.createIntent(intent).catch((e: unknown) => e);

    expect(error).toBeInstanceOf(OperationFailedError);
    expect((error as Error).message).toBe(
      'Error occurred while calling intent endpoint: 400: invalid challenge',
    );
  });

  it('wraps network failures', async () => {
    fetchMock.mockRejectedValue(new TypeError('fetch failed'));

    await expect(client.createIntent(intent)).rejects.toThrow(
      'Unknown error occurred while creating intent',
    );
  });

  it('rejects a challenge that is not a UUID before calling the endpoint', async () => {
    await expect(client.createIntent({ ...intent, challenge: 'order-123' })).rejects.toBeInstanceOf(
      InvalidArgumentError,
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('sends a UUID challenge', async () => {
    fetchMock.mockResolvedValue(Response.json({ intent_id: 'intent' }));

    await expect(
      client.createIntent({ ...intent, challenge: '4d5e6f7a-8b9c-4d0e-9f2a-3b4c5d6e7f8a' }),
    ).resolves.toEqual({ intent_id: 'intent' });
  });
});
