## Authentication

Sign users in with a credential from their identity wallet instead of a password. The result is an
OpenID Connect ID token with the claims your flow requests.

Create an authentication flow in [Ver.iD Studio](https://spas.nebula.ver.id/), register your
redirect URI and the scopes you want on it, and copy its flow id and client secret. Configuration,
cache stores, errors and security notes are in the [README](./README.md).

### Create the client

```ts
import { RedisCacheManager, VeridAuthenticationClient } from '@ver-id/node-client';

const verid = new VeridAuthenticationClient({
  issuerUri: process.env.VERID_ISSUER_URI!,
  clientId: process.env.VERID_AUTHENTICATION_FLOW_ID!,
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  redirectUri: 'https://app.example.com/verid/callback',
  cacheManager: new RedisCacheManager({ client: redisClient }),
});
```

### Start a session

```ts
app.get('/login', async (req, res) => {
  const { url, state } = await verid.createSession({ scope: 'profile email' });
  req.session.veridState = state;
  res.redirect(url);
});
```

Input:

| Field       | Required | Description                                                                    |
| ----------- | -------- | ------------------------------------------------------------------------------ |
| `scope`     | yes      | Space-separated scopes registered on the flow. `openid` is added when missing. |
| `challenge` | no       | A UUID of your own for this session.                                           |
| `brandUuid` | no       | The brand to show during the flow.                                             |

It returns `{ url, state }`. Redirect the browser to `url`.

### Finish the session

Ver.iD redirects the browser to your `redirectUri` with `code` and `state`:

```ts
app.get('/verid/callback', async (req, res) => {
  if (req.query.state !== req.session.veridState) {
    return res.status(400).send('This sign-in was not started here.');
  }

  const result = await verid.finishSession({ callbackUrl: req.originalUrl });
  if (result.format !== 'openid') {
    return res.status(502).send('Unexpected token format');
  }

  req.session.userId = result.payload.sub;
  res.redirect('/');
});
```

### The result

`finishSession` returns the verified ID token:

| `format`    | `payload`           |
| ----------- | ------------------- |
| `'openid'`  | `OpenIdJwtPayload`  |
| `'unknown'` | a plain JWT payload |

`OpenIdJwtPayload` has the standard OpenID Connect claims, present when your scopes and flow provide
them:

- `sub` — the subject identifier. Always present.
- `name`, `given_name`, `middle_name`, `family_name`, `birthdate`, `birth_country`
- `email`, `email_verified`, `phone_number`, `phone_number_verified`
- `address`
- `company` and `nin` — Ver.iD extensions for company and national identification number data.

`rawToken` is the signed ID token as received.
