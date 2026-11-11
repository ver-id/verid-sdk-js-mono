# Verification

Ask a user to share credentials from their identity wallet, for example for Know-Your-Customer (KYC)
or Know-Your-Business (KYB) checks. The result holds the shared credentials and their attributes.

Create the disclosure flow in [Ver.iD Studio](https://spas.nebula.ver.id/), choose the credentials
it asks for, and register your redirect URI on it. The flow must have no client secret to run in the
browser; see the [README](./README.md#security).

## Create the client

```ts
import { VeridBrowserDisclosureClient } from '@ver-id/browser-client';

const verid = new VeridBrowserDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_DISCLOSURE_FLOW_ID>',
  redirectUri: 'https://app.example.com/callback',
});
```

## Start the session

```ts
const { url } = await verid.createSession();
window.location.href = url;
```

The input is optional:

| Field       | Meaning                                                      |
| ----------- | ------------------------------------------------------------ |
| `challenge` | A UUID. It comes back in the result's `parameter.challenge`. |
| `brandUuid` | The brand to show during the flow.                           |

## Finish the session

On the page at your redirect URI:

```ts
const result = await verid.finishSession();

switch (result.format) {
  case 'disclosure_v1':
    for (const credential of result.payload.credentials) {
      console.log(credential.credentialName, credential.attributes);
    }
    break;
  case 'disclosure_flat_v1':
    console.log(result.payload.output);
    break;
  default:
    // A token format this SDK version does not know.
    console.log(result.payload);
}
```

`finishSession` reads the callback from `window.location.href`. Pass `{ callbackUrl }` to finish from
another URL, in the same browser.

## The result

The token format is the one configured on the flow.

| `format`             | `payload` type             | Contents                                                                                                                                          |
| -------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disclosure_v1`      | `DisclosureV1JwtPayload`   | `credentials`: each shared credential with its catalog names and `attributes` (name and value). Also `parameter.challenge`, `mapping` and `meta`. |
| `disclosure_flat_v1` | `AttestedFlatV1JwtPayload` | `output`: the shared attributes as a flat list.                                                                                                   |
| `unknown`            | JWT payload                | A token format this SDK version does not know.                                                                                                    |

`rawToken` holds the original signed token.
