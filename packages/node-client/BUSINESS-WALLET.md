## Business-wallet issuance

Business-wallet issuance is the headless, machine-to-machine variant of an issuance flow: your server triggers issuance directly and the credential is delivered asynchronously to a recipient organization's wallet (for example over QERDS), without a person going through a browser. Because there is no browser, there is no PKCE, no redirect URI, and no cache manager — every call authenticates as a confidential `issuance` client using your `client_secret`.

### Create a Business-wallet issuance client

```ts
import { VeridBusinessWalletIssuanceClient } from '@ver-id/node-client';

const client = new VeridBusinessWalletIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  clientId: '<VERID_ISSUANCE_FLOW_ID>', // Issuance flow id registered in Ver.iD Studio
});

const clientAuth = { client_secret: '<YOUR_CLIENT_SECRET>' };
```

### Trigger an issuance

The flow is three calls. First create an issuance intent (pass either `payload.mapping` or `payload.data`, not both — exactly as with the interactive client), then trigger issuance towards a recipient, telling Ver.iD which handler app (the business wallet) to issue under:

```ts
// Step 1: Create the intent — no code challenge; the confidential client authenticates instead
const { intent_id } = await client.createIssuanceIntent(
  {
    payload: {
      data: [{ attributeUuid: '<ATTRIBUTE_UUID>', value: 'John Doe' }],
    },
  },
  clientAuth,
);

// Step 2: Trigger issuance. The intent is single-use and expires — re-run Step 1 if it does.
const { deliveryId } = await client.issue(
  {
    intentId: intent_id,
    recipient: '<RECIPIENT_ADDRESS>', // The recipient organisation's delivery address
    handlerAppUuid: '<HANDLER_APP_UUID>', // The handler app (business wallet) to issue under, from your Ver.iD Studio flow
  },
  clientAuth,
);
```

### Track the delivery

Delivery happens out of band, so the credential is never returned to your server — you observe the delivery state instead. Status is poll-only; there is no callback.

```ts
// One-shot read
const status = await client.getDelivery(deliveryId, clientAuth);

// Or poll until the delivery settles
const terminal = await client.pollUntilTerminal(deliveryId, clientAuth, {
  intervalMs: 2000, // default 2000
  timeoutMs: 300000, // default 300000; 0 disables the timeout
  onPoll: (s) => console.log('delivery state:', s.state),
});
```

A delivery advances through these states:

| State | Meaning |
| --- | --- |
| `PENDING` | Delivery record created; issuance is queued |
| `SUBMITTED` | Handed to the delivery transport (e.g. the QERDS access point) |
| `REDEEMED` | The recipient redeemed the credential offer — terminal success |
| `FAILED` | Transport or initiation failure — terminal, see `failureReason` |

`pollUntilTerminal` resolves with the terminal status whether it is `REDEEMED` or `FAILED` — a failed delivery is an outcome, not an exception. It throws `OperationFailedError` only when the timeout elapses first.

### Error handling

Server-side errors surface as `OperationFailedError` with the OAuth error code on `error.code` (for example `invalid_request` for an expired intent or an invalid handler app, `invalid_client` for bad credentials, `not_found` for an unknown delivery id).

```ts
import { OperationFailedError } from '@ver-id/node-client';

try {
  await client.issue({ intentId, recipient, handlerAppUuid }, clientAuth);
} catch (error) {
  if (error instanceof OperationFailedError && error.code === 'invalid_request') {
    // e.g. the intent expired — create a fresh one and retry
  }
}
```
