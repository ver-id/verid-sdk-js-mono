# Authentication

Log a user in with their identity wallet instead of a password. The result is an OpenID Connect ID
token with the claims the flow is configured to return.

Create the authentication flow in [Ver.iD Studio](https://spas.nebula.ver.id/) and register your
redirect URI on it. The flow must have no client secret to run in the browser; see the
[README](./README.md#security).

## Create the client

```ts
import { VeridBrowserAuthenticationClient } from '@ver-id/browser-client';

const verid = new VeridBrowserAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_AUTHENTICATION_FLOW_ID>',
  redirectUri: 'https://app.example.com/callback',
});
```

## Start the session

```ts
const { url } = await verid.createSession({ scope: 'profile email' });
window.location.href = url;
```

| Field       | Required | Meaning                                                                                                          |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `scope`     | yes      | The scopes to request, separated by spaces. They must be registered on the flow. `openid` is added when missing. |
| `challenge` | no       | A UUID. It comes back in the result.                                                                             |
| `brandUuid` | no       | The brand to show during the flow.                                                                               |

## Finish the session

On the page at your redirect URI:

```ts
const result = await verid.finishSession();

if (result.format === 'openid') {
  const { sub, name, email } = result.payload;
}
```

`finishSession` reads the callback from `window.location.href`. Pass `{ callbackUrl }` to finish from
another URL, in the same browser.

## The result

| `format`  | `payload` type     | Contents                                                                                                                         |
| --------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `openid`  | `OpenIdJwtPayload` | `sub`, plus the standard OpenID claims the flow returns (`name`, `email`, `address`, …) and Ver.iD's `company` and `nin` claims. |
| `unknown` | JWT payload        | A token format this SDK version does not know.                                                                                   |

`rawToken` holds the original signed ID token.
