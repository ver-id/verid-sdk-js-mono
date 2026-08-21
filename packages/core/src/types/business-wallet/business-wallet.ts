/**
 * Types for the headless (machine-to-machine) business-wallet issuance flow.
 *
 * The flow is a three-call sequence, all authenticated as a confidential `issuance` client
 * (HTTP Basic client credentials, no PKCE):
 *   1. `POST /intent`                                   — create an issuance intent → `intent_id`
 *   2. `POST /oid4vci/business-wallet/issue`            — trigger issuance → `{ deliveryId }`
 *   3. `GET  /oid4vci/business-wallet/delivery/{id}`    — poll the delivery state
 *
 * Credential delivery itself is asynchronous (out-of-band, to the recipient organisation's
 * wallet) — it is never returned inline. There is no callback; delivery status is poll-only.
 */

/**
 * Lifecycle state of a business-wallet OFFER delivery.
 *
 * Tracks the offer's lifecycle only. States progress `PENDING → SUBMITTED → REDEEMED`, with
 * `FAILED` a terminal failure branch. `REDEEMED` and `FAILED` are the two terminal states — see
 * {@link isTerminalDeliveryState}. Whether the credential was ultimately *issued* is a separate
 * concern (the issuance record), not reflected here.
 *
 * @public
 */
export enum BusinessWalletDeliveryState {
  /** Delivery record created; issuance enqueued but not yet handed to the transport. */
  Pending = 'PENDING',
  /** Handed to the delivery transport (e.g. the QERDS access point). */
  Submitted = 'SUBMITTED',
  /** The recipient retrieved the offer (received & read the delivered message) — terminal success. */
  Redeemed = 'REDEEMED',
  /** Transport or initiation failure — terminal failure. See `failureReason`. */
  Failed = 'FAILED',
}

/**
 * Delivery transport a business-wallet issuance is shipped over. Mirrors the platform
 * `BusinessWalletDeliveryMethod` enum — one value today. The `/issue` caller does not choose this;
 * it is derived from the handler app's configuration and reported back on the delivery status.
 *
 * @public
 */
export enum BusinessWalletDeliveryMethod {
  /** QERDS (qualified electronic registered delivery service) transport. */
  Qerds = 'QERDS',
}

/**
 * The two terminal states a delivery settles into.
 *
 * @public
 */
export const BUSINESS_WALLET_TERMINAL_STATES: readonly BusinessWalletDeliveryState[] =
  [BusinessWalletDeliveryState.Redeemed, BusinessWalletDeliveryState.Failed];

/**
 * Whether a delivery state is terminal (`REDEEMED` or `FAILED`) — i.e. it will not change further.
 *
 * @public
 */
export function isTerminalDeliveryState(
  state: BusinessWalletDeliveryState,
): boolean {
  return BUSINESS_WALLET_TERMINAL_STATES.includes(state);
}

/**
 * Parameters for `POST /oid4vci/business-wallet/issue`.
 *
 * @public
 */
export interface BusinessWalletIssueParams {
  /** The intent created via `createIssuanceIntent()`. Single-use and TTL-bound. */
  intentId: string;
  /**
   * The recipient organisation's delivery address. Method-specific — for `qerds` this is a QERDS
   * digital address.
   */
  recipient: string;
  /**
   * The handler app (wallet) to issue under, e.g. the Yivi business wallet. Must be one of the
   * flow's configured handler apps. The delivery method (e.g. `qerds`) and recipient envelope
   * (e.g. `yivi`) are derived from this handler app's configuration — the caller selects the
   * wallet, not the transport.
   */
  handlerAppUuid: string;
}

/**
 * Response from `POST /oid4vci/business-wallet/issue`.
 *
 * @public
 */
export interface BusinessWalletIssueResponse {
  /** The UUID of the created delivery record — poll it via `getDelivery()`. */
  deliveryId: string;
}

/**
 * Delivery status returned by `GET /oid4vci/business-wallet/delivery/{id}`.
 *
 * @public
 */
export interface BusinessWalletDeliveryStatus {
  /** The delivery record UUID. */
  deliveryId: string;
  /** The current lifecycle state. */
  state: BusinessWalletDeliveryState;
  /** The delivery transport the issuance was shipped over (derived from the handler app config). */
  method: BusinessWalletDeliveryMethod;
  /** The recipient address, or `null` if not recorded. */
  recipient: string | null;
  /** The failure reason when `state` is `FAILED`, or `null`. */
  failureReason: string | null;
  /** When the delivery record was created (born at PENDING). ISO 8601. */
  createdAt: string;
  /** When the delivery record last changed state. ISO 8601. */
  updatedAt: string;
}
