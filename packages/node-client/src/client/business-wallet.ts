import {
  VeridOAuthClient,
  ClientAuth,
  IntentResponse,
  BusinessWalletIssuanceIntent,
  IssuanceIntentPayload,
  BusinessWalletIssueParams,
  BusinessWalletIssueResponse,
  BusinessWalletDeliveryStatus,
  isTerminalDeliveryState,
  assert,
  assertObject,
  assertString,
  assertUrlString,
  InvalidArgumentError,
  OperationFailedError,
} from '@ver-id/core';

// Re-export the wire types so consumers can import them from the client package.
export type {
  BusinessWalletIssueParams,
  BusinessWalletIssueResponse,
  BusinessWalletDeliveryStatus,
  IssuanceIntentPayload,
} from '@ver-id/core';
export { BusinessWalletDeliveryState, BusinessWalletDeliveryMethod } from '@ver-id/core';

/** Path of the machine-to-machine issuance trigger, relative to the issuer origin. */
const ISSUE_PATH = '/oid4vci/business-wallet/issue';
/** Path prefix of the delivery status poll, relative to the issuer origin. */
const DELIVERY_PATH_PREFIX = '/oid4vci/business-wallet/delivery/';
/** The scope every business-wallet issuance client authenticates against. */
const ISSUANCE_SCOPE = 'issuance';

/**
 * Configuration for the Node.js business-wallet issuance client.
 *
 * @public
 */
export interface NodeBusinessWalletIssuanceClientConfig {
  /** The Ver.iD OAuth issuer URI (the origin the endpoints are served from). */
  issuerUri: string;
  /** The `issuance` client identifier (a UUID). */
  clientId: string;
}

/**
 * Options for {@link VeridBusinessWalletIssuanceClient.pollUntilTerminal}.
 *
 * @public
 */
export interface PollUntilTerminalOptions {
  /** How often to poll, in milliseconds. Defaults to 2000. */
  intervalMs?: number;
  /** Give up after this many milliseconds. Defaults to 300000 (5 minutes). 0 disables the timeout. */
  timeoutMs?: number;
  /** Optional callback invoked with each polled status, e.g. for progress logging. */
  onPoll?: (status: BusinessWalletDeliveryStatus) => void;
}

/**
 * Node.js client for the headless (machine-to-machine) business-wallet issuance flow.
 *
 * Unlike the interactive {@link VeridIssuanceClient}, this flow has no PKCE, no redirect, and no
 * token exchange: the caller is a confidential `issuance` client and authenticates every call with
 * HTTP Basic client credentials. Credential delivery is asynchronous and poll-only — there is no
 * callback. The client never sees the credential; it observes the delivery state.
 *
 * @example
 * ```typescript
 * const client = new VeridBusinessWalletIssuanceClient({ issuerUri, clientId });
 * const auth = { client_secret: clientSecret };
 *
 * const { intent_id } = await client.createIssuanceIntent(
 *   { payload: { data: [{ attributeUuid, value }] } },
 *   auth,
 * );
 * const { deliveryId } = await client.issue({ intentId: intent_id, recipient, handlerAppUuid }, auth);
 * const status = await client.pollUntilTerminal(deliveryId, auth);
 * ```
 *
 * @public
 */
export class VeridBusinessWalletIssuanceClient {
  private readonly oauthClient: VeridOAuthClient;

  private readonly issuerOrigin: string;

  constructor(config: NodeBusinessWalletIssuanceClientConfig) {
    assertUrlString(config.issuerUri, 'issuerUri', InvalidArgumentError);
    assertString(config.clientId, 'clientId', InvalidArgumentError);

    this.oauthClient = new VeridOAuthClient({
      clientId: config.clientId,
      issuer: config.issuerUri,
    });
    this.issuerOrigin = new URL(config.issuerUri).origin;
  }

  /**
   * Creates an issuance intent as a confidential client (no PKCE).
   *
   * Exactly one of `payload.data` or `payload.mapping` must be provided.
   *
   * @param issuanceIntent - The intent payload carrying the credential data or mapping.
   * @param clientAuth - The client authentication credentials (required).
   * @returns The created intent, containing `intent_id` and an optional issuance run UUID.
   * @throws {InvalidArgumentError} When neither or both of `payload.data` and `payload.mapping`
   *   are provided.
   */
  async createIssuanceIntent(
    issuanceIntent: IssuanceIntentPayload,
    clientAuth: ClientAuth,
  ): Promise<IntentResponse> {
    assertObject(issuanceIntent?.payload, 'issuanceIntent.payload', InvalidArgumentError);

    const hasData =
      Array.isArray(issuanceIntent.payload.data) && issuanceIntent.payload.data.length > 0;
    const hasMapping =
      !!issuanceIntent.payload.mapping &&
      Object.keys(issuanceIntent.payload.mapping).length > 0;

    assert(
      hasData || hasMapping,
      'At least one of payload.data or payload.mapping must be provided in issuance intent',
      InvalidArgumentError,
    );
    assert(
      !(hasData && hasMapping),
      'Both payload.data and payload.mapping should not be provided together.',
      InvalidArgumentError,
    );

    const intent: BusinessWalletIssuanceIntent = {
      ...issuanceIntent,
      scope: ISSUANCE_SCOPE,
      client_id: this.oauthClient.clientId(),
      payload: {
        mapping: issuanceIntent.payload.mapping || {},
        data: issuanceIntent.payload.data || [],
      },
    };

    return this.oauthClient.createIntent(intent, clientAuth);
  }

  /**
   * Triggers headless issuance for a previously created intent.
   *
   * @param params - The intent id, recipient address, and handler app (wallet) to issue under.
   * @param clientAuth - The client authentication credentials (required).
   * @returns The created delivery id — poll it with {@link getDelivery} or
   *   {@link pollUntilTerminal}.
   */
  async issue(
    params: BusinessWalletIssueParams,
    clientAuth: ClientAuth,
  ): Promise<BusinessWalletIssueResponse> {
    assertString(params?.intentId, 'intentId', InvalidArgumentError);
    assertString(params?.recipient, 'recipient', InvalidArgumentError);
    assertString(params?.handlerAppUuid, 'handlerAppUuid', InvalidArgumentError);

    return this.oauthClient.authenticatedRequest<BusinessWalletIssueResponse>(
      'POST',
      new URL(ISSUE_PATH, this.issuerOrigin),
      clientAuth,
      {
        intentId: params.intentId,
        recipient: params.recipient,
        handlerAppUuid: params.handlerAppUuid,
      },
    );
  }

  /**
   * Reads the current delivery status.
   *
   * @param deliveryId - The delivery id returned by {@link issue}.
   * @param clientAuth - The client authentication credentials (required).
   * @returns The current delivery status.
   */
  async getDelivery(
    deliveryId: string,
    clientAuth: ClientAuth,
  ): Promise<BusinessWalletDeliveryStatus> {
    assertString(deliveryId, 'deliveryId', InvalidArgumentError);

    return this.oauthClient.authenticatedRequest<BusinessWalletDeliveryStatus>(
      'GET',
      new URL(`${DELIVERY_PATH_PREFIX}${encodeURIComponent(deliveryId)}`, this.issuerOrigin),
      clientAuth,
    );
  }

  /**
   * Polls {@link getDelivery} until the delivery reaches a terminal state (`REDEEMED` or `FAILED`),
   * or the timeout elapses.
   *
   * This does not treat `FAILED` as an error — it returns the terminal status either way; inspect
   * `status.state` and `status.failureReason`.
   *
   * @param deliveryId - The delivery id returned by {@link issue}.
   * @param clientAuth - The client authentication credentials (required).
   * @param options - Poll interval, timeout, and an optional per-poll callback.
   * @returns The terminal delivery status.
   * @throws {OperationFailedError} When the timeout elapses before a terminal state is reached.
   */
  async pollUntilTerminal(
    deliveryId: string,
    clientAuth: ClientAuth,
    options?: PollUntilTerminalOptions,
  ): Promise<BusinessWalletDeliveryStatus> {
    const intervalMs = options?.intervalMs ?? 2000;
    const timeoutMs = options?.timeoutMs ?? 300000;
    const deadline = timeoutMs > 0 ? Date.now() + timeoutMs : Infinity;

    for (;;) {
      const status = await this.getDelivery(deliveryId, clientAuth);
      options?.onPoll?.(status);

      if (isTerminalDeliveryState(status.state)) {
        return status;
      }

      if (Date.now() + intervalMs > deadline) {
        throw new OperationFailedError(
          `Timed out after ${timeoutMs}ms polling delivery ${deliveryId}; last state was ${status.state}`,
          undefined,
          status.state,
        );
      }

      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
  }
}
