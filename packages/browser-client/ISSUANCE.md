# Issuance

Issue credentials to a user's identity wallet, so they can prove those attributes later without
being verified again.

Create the issuance flow in [Ver.iD Studio](https://spas.nebula.ver.id/) and register your redirect
URI on it. Issuance in the browser is limited to flows that need no client secret, such as demo
flows; issue anything else from your backend with
[`@ver-id/node-client`](https://www.npmjs.com/package/@ver-id/node-client). See the
[README](./README.md#security).

## Create the client

```ts
import { VeridBrowserIssuanceClient } from '@ver-id/browser-client';

const verid = new VeridBrowserIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_ISSUANCE_FLOW_ID>',
  redirectUri: 'https://app.example.com/callback',
});
```

## Start the session

Say what to issue with exactly one of `mapping` or `data`.

**With `mapping`**, when the flow assigns its attributes to custom claims in Ver.iD Studio. Give a
value for every claim:

```ts
const { url, issuanceRunUuid } = await verid.createSession({
  mapping: {
    firstName: 'John',
    email: 'john.doe@example.com',
    dateOfBirth: '1990-01-01',
  },
});
window.location.href = url;
```

**With `data`**, when the flow has no mapping. Give a value for every attribute of the flow, by its
UUID:

```ts
const { url } = await verid.createSession({
  data: [{ attributeUuid: '<ATTRIBUTE_UUID>', value: 'John' }],
});
window.location.href = url;
```

| Field                           | Required       | Meaning                                                                                 |
| ------------------------------- | -------------- | --------------------------------------------------------------------------------------- |
| `mapping`                       | one of the two | Values by custom claim name.                                                            |
| `data`                          | one of the two | Values by attribute UUID: `{ attributeUuid, value }[]`.                                 |
| `expirationDuration`            | no             | How long the issued credentials stay valid, in seconds. Overrides the flow's setting.   |
| `credentialExpirationDurations` | no             | Validity in seconds per credential, by credential UUID. Overrides `expirationDuration`. |
| `challenge`                     | no             | A UUID. It comes back in the result's `parameter.challenge`.                            |
| `brandUuid`                     | no             | The brand to show during the flow.                                                      |

Passing both `mapping` and `data`, or neither, throws `InvalidArgumentError`.

`createSession` returns `url`, `state` and, when the platform allocated one, `issuanceRunUuid`: the
issuance run this session belongs to.

## Finish the session

On the page at your redirect URI:

```ts
const result = await verid.finishSession();

if (result.format === 'issuance_v1') {
  for (const credential of result.payload.credentials) {
    console.log(credential.credentialName, credential.status);
  }
}
```

`finishSession` reads the callback from `window.location.href`. Pass `{ callbackUrl }` to finish from
another URL, in the same browser.

## The result

The token format is the one configured on the flow.

| `format`           | `payload` type             | Contents                                                                                                                                                                                     |
| ------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `issuance_v1`      | `IssuanceV1JwtPayload`     | `credentials`: each issued credential with its `status`, `credentialRecordUuid` and `attributes`. Also `issuanceRunUuid`, and `parameter` echoing the challenge and what you asked to issue. |
| `issuance_flat_v1` | `IssuanceFlatV1JwtPayload` | `output`: the issued attributes as a flat list, and `issuanceRunUuid`.                                                                                                                       |
| `unknown`          | JWT payload                | A token format this SDK version does not know.                                                                                                                                               |

`rawToken` holds the original signed token.
