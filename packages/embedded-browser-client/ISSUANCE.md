## Issuance (embedded mode)

Run an issuance flow to issue verified credentials that people store in their identity wallet,
inside your own page.

The browser side is the same for every flow: see the [README](./README.md) for the full API. What
makes this an issuance is the backend client that creates the session.

### Backend: create the session

Use `VeridEmbeddedIssuanceClient` from
[`@ver-id/embedded-node-client`](../embedded-node-client/ISSUANCE.md). The session carries the
credential data, as exactly one of `mapping` or `data`. Send only the `sessionContext` to the
browser:

```ts
import { VeridEmbeddedIssuanceClient } from '@ver-id/embedded-node-client';

const verid = new VeridEmbeddedIssuanceClient({
  issuerUri,
  clientId,
  clientSecret,
  webhookUri,
  webhookSecret,
  cacheManager,
});

app.post('/api/verid/session', async (req, res) => {
  const { sessionContext, state } = await verid.createSession({
    mapping: { firstName: 'John', email: 'john.doe@example.com' },
  });
  await saveSession(state, req.user.id);
  res.json({ sessionContext });
});
```

The [backend guide](../embedded-node-client/ISSUANCE.md) covers `data`, the validity options and
the webhook that receives the result.

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
  showIssued(await fetchResultFromYourBackend());
  component.destroy();
});
component.onError((error) => logError(error));
component.onCancel(() => component.destroy());

document.getElementById('verid-continue')!.addEventListener('click', () => component.open());
```

### Where the result arrives

The issuance result never reaches the browser. When the person has accepted the credential,
Ver.iD sends a signed webhook to your backend, whose `finishSession` verifies it and returns the
verified result. The browser hears only `onComplete`, and then asks your backend for it.
