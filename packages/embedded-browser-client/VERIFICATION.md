## Verification (embedded mode)

Run a verification flow to collect verified information about a person from their identity
wallet, for example for Know-Your-Customer (KYC) or Know-Your-Business (KYB) checks, inside your
own page.

The browser side is the same for every flow: see the [README](./README.md) for the full API. What
makes this a verification is the backend client that creates the session.

### Backend: create the session

Use `VeridEmbeddedDisclosureClient` from
[`@ver-id/embedded-node-client`](../embedded-node-client/VERIFICATION.md). Send only the
`sessionContext` to the browser:

```ts
import { VeridEmbeddedDisclosureClient } from '@ver-id/embedded-node-client';

const verid = new VeridEmbeddedDisclosureClient({
  issuerUri,
  clientId,
  clientSecret,
  webhookUri,
  webhookSecret,
  cacheManager,
});

app.post('/api/verid/session', async (req, res) => {
  const { sessionContext, state } = await verid.createSession({ challenge });
  await saveSession(state, req.user.id);
  res.json({ sessionContext });
});
```

`challenge` is optional. The [backend guide](../embedded-node-client/VERIFICATION.md) covers the
other inputs and the webhook that receives the result.

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
  showResult(await fetchResultFromYourBackend());
  component.destroy();
});
component.onError((error) => logError(error));
component.onCancel(() => component.destroy());

document.getElementById('verid-continue')!.addEventListener('click', () => component.open());
```

### Where the result arrives

The shared information never reaches the browser. When the person finishes, Ver.iD sends a signed
webhook to your backend, whose `finishSession` verifies it and returns the verified result. The
browser hears only `onComplete`, and then asks your backend for the result it stored.
