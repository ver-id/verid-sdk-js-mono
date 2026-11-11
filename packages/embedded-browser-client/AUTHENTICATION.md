## Authentication (embedded mode)

Run an authentication flow to let people log in with their identity wallet instead of a password,
inside your own page.

The browser side is the same for every flow: see the [README](./README.md) for the full API. What
makes this an authentication is the backend client that creates the session.

### Backend: create the session

Use `VeridEmbeddedAuthenticationClient` from
[`@ver-id/embedded-node-client`](../embedded-node-client/AUTHENTICATION.md). Authentication takes
the scopes to request; `openid` is added when missing. Send only the `sessionContext` to the
browser:

```ts
import { VeridEmbeddedAuthenticationClient } from '@ver-id/embedded-node-client';

const verid = new VeridEmbeddedAuthenticationClient({
  issuerUri,
  clientId,
  clientSecret,
  webhookUri,
  webhookSecret,
  cacheManager,
});

app.post('/api/verid/session', async (req, res) => {
  const { sessionContext, state } = await verid.createSession({ scope: 'openid profile' });
  await saveSession(state);
  res.json({ sessionContext });
});
```

The [backend guide](../embedded-node-client/AUTHENTICATION.md) covers the other inputs and the
webhook that receives the result.

### Browser: mount the card

```ts
import { mountVeridEmbeddedComponent } from '@ver-id/embedded-browser-client';

const { sessionContext } = await fetch('/api/verid/session', { method: 'POST' }).then((r) =>
  r.json(),
);

const component = mountVeridEmbeddedComponent({
  container: document.getElementById('verid-embed')!,
  sessionContext,
});

component.onComplete(async () => {
  await completeLoginWithYourBackend(); // your backend stored the verified ID token
  component.destroy();
});
component.onError((error) => logError(error));
component.onCancel(() => component.destroy());

document.getElementById('verid-continue')!.addEventListener('click', () => component.open());
```

### Where the result arrives

The ID token never reaches the browser. When the person finishes, Ver.iD sends a signed webhook to
your backend, whose `finishSession` verifies it and returns the verified result. The browser hears
only `onComplete`, and then asks your backend to complete the login, for example by setting your
own session cookie.
