## Verification

Execute a verification flow to use decentralized identity apps to collect various types of customer information for verification purposes, such as for Know-Your-Customer (KYC) or Know-Your-Business (KYB) processes.

### Prerequisites

> **Important:** If you intend to use a `client_secret` with your disclosure flow, it **must be configured** in Ver.iD Studio first. Only a secret that has been configured in Studio can be used for intent creation and token exchange. When a client secret is configured, the [intent-based flow](#option-2-intent-based-flow-required-when-client-secret-is-configured) and passing the secret during [finalization](#finalize-with-client-secret) are both mandatory.

### Create a Disclosure client

```ts
import { VeridDisclosureClient } from '@ver-id/browser-client';

const disclosureClient = new VeridDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_DISCLOSURE_FLOW_ID>', // Disclosure flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});
```

#### Caching options

The disclosure client can be configured to cache flow context in session storage, local storage or custom storage implementation. The default is in session storage. This setting can be controlled using the cacheManager option when creating the disclosure client.

To use the session storage, no additional options are required as this is the default setting. To configure the client to cache data using local storage, set `cacheManager` as follows:

```ts
import { VeridDisclosureClient } from '@ver-id/browser-client';
import { LocalStorageCacheManager } from '@ver-id/browser-client';

const disclosureClient = new VeridDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_DISCLOSURE_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: new LocalStorageCacheManager(), // Use local storage as cache store
  },
});
```

**Important:** This feature will allow the caching of flow context **such as state and code verifier** to be stored in specified cache store.

**Session Storage vs Local Storage:**

- **Session storage** stores data for the duration of the page session. Data is cleared when the browser/tab is closed.
- **Local storage** persists data even after the browser is closed and reopened.

Choosing between them depends on your use case: use session storage for same browser session/ tab, and local storage for data that should persist across sessions.

**Cache options:** both stores take the same `options` as every other Ver.iD cache manager: `prefix` (default `'verid:'`) namespaces the keys, and `ttlSeconds` (default `3600`) expires them. Pass `0` to disable expiry.

```ts
new LocalStorageCacheManager({ prefix: 'myapp:', ttlSeconds: 600 });
```


**Custom cache implementation:**  
You might want to use a custom cache if you need more control over how and where data is stored (e.g., integrating with server-side storage). Custom caches are useful for advanced security requirements or to meet specific application needs.

#### Creating a custom cache

The client can be configured to use a custom cache store that is implemented by your application. This is useful if you want to have more control over the stored context.

To do this, provide an object to the `cacheManager` property of the client configuration.

The object should implement the following functions. Note that all of these functions can optionally return a Promise or a static value.

| Signature                          | Return type               | Description                                                                                   |
| ---------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------- |
| `get(key)`                         | Promise<string> or string | Returns the item from the cache with the specified key, or `undefined` if it was not found    |
| `save(key: string, value: string)` | Promise<void> or void     | Sets an item into the cache                                                                   |
| `remove(key)`                      | Promise<void> or void     | Removes a single item from the cache at the specified key, or no-op if the item was not found |

Here's an example of a custom cache implementation that uses `sessionStorage` to store context:

```ts
const CustomSessionStorageCache = {
  save(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }
  get(key: string) {
    return sessionStorage.getItem(key);
  }
  remove(key: string) {
    sessionStorage.removeItem(key);
  }
}

const disclosureClient = new VeridDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_DISCLOSURE_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: new CustomSessionStorageCache() // use custom store for caching
  }
})
```

### Disclosure Flow Options

There are two ways to initiate a disclosure flow:

1. **Direct URL Generation** - Generate disclosure URL directly (simpler approach)
2. **Intent-based Flow** - Create an intent first, then generate URL (more control)

**Important:** If your disclosure flow has a `client_secret` configured in Ver.iD Studio, the **intent-based flow is mandatory**. You must create a disclosure intent before generating the disclosure URL, and you must also pass the `client_secret` when calling `finalize`. See [Option 2](#option-2-intent-based-flow-required-when-client-secret-is-configured) and [Finalize Disclosure](#finalize-disclosure) for details.

#### Option 1: Direct URL Generation

For flows **without** a client secret configured, you can generate a disclosure URL directly. This URL is used to redirect the user to the Ver.iD disclosure experience.

```ts
const { disclosureUrl, state } = await disclosureClient.generateDisclosureUrl();
```

**Note:** The `generateDisclosureUrl` method returns a Promise that resolves to the disclosure URL and state. This option is only available for flows that do not have a client secret configured in Ver.iD Studio.

#### Option 2: Intent-based Flow (Required when client secret is configured)

For flows with a `client_secret` configured in Ver.iD Studio, you **must** create an intent first and then generate the disclosure URL. This flow is also useful when you need to customize the disclosure experience with challenges, brand-specific settings, or explicit consent requirements.

##### Step 1: Generate Code Challenge

First, generate a PKCE code challenge:

```ts
const { codeChallenge, state } = await disclosureClient.generateCodeChallenge();
```

##### Step 2: Create Disclosure Intent

Create a disclosure intent with optional customization:

```ts
const intentId = await disclosureClient.createDisclosureIntent(
  {
    challenge: '<OPTIONAL_CHALLENGE_STRING>', // Optional: Custom challenge for the disclosure
    brandUuid: '<OPTIONAL_BRAND_UUID>', // Optional: Brand-specific customization
    requireExplicitConsent: true, // Optional: Require explicit user consent (default: false)
  },
  codeChallenge,
  { client_secret: '<YOUR_CLIENT_SECRET>' } // Required when flow has a client secret configured
);
```

**Important:** If your flow has a `client_secret` configured in Ver.iD Studio, you **must** pass it as the third argument when creating a disclosure intent. The same `client_secret` must also be provided when calling `finalize`. All other parameters (`challenge`, `brandUuid`, and `requireExplicitConsent`) are optional. If not provided, the default disclosure experience will be used.

##### Step 3: Generate Disclosure URL with Intent

Generate the disclosure URL using the created intent:

```ts
const { disclosureUrl, state } = await disclosureClient.generateDisclosureUrl({
  state: state, // Use the state from Step 1
  codeChallenge: codeChallenge, // Use the code challenge from Step 1
  intent_id: intentId, // Pass the intent ID from Step 2
});
```

#### Advanced PKCE Configuration

Disclosure flows are compliant with OAuth 2.1 and use PKCE (Proof Key for Code Exchange) for security. By default, PKCE options (code challenge and state) are automatically generated by `generateDisclosureUrl`. However, you can provide your own PKCE configuration for advanced use cases.

##### Using Custom State

You can provide your own unique state identifier:

```ts
const { disclosureUrl, state } = await disclosureClient.generateDisclosureUrl({
  state: '<UNIQUE_STATE>',
});
```

**Important:** State is mandatory if code challenge is being provided.

##### Using External Code Challenge

You can provide an externally generated code challenge. This is useful when the code challenge is generated elsewhere (e.g., via a backend service):

```ts
const { disclosureUrl, state } = await disclosureClient.generateDisclosureUrl({
  state: '<UNIQUE_STATE>',
  codeChallenge: '<UNIQUE_CODE_CHALLENGE>',
});
```

##### Generating Code Challenge Separately

You can generate a code challenge independently for use in other contexts:

```ts
const { codeChallenge, state } = await disclosureClient.generateCodeChallenge();
// Use codeChallenge and state for intent creation or other purposes
```

You can also provide a custom state when generating the code challenge:

```ts
const { codeChallenge, state } = await disclosureClient.generateCodeChallenge(
  '<CUSTOM_STATE>'
);
```

**Security Note:** As per PKCE standards ([RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636#section-4.1)), a code verifier is created when generating a code challenge. The code verifier is stored in the cache manager against the state and is used to complete the OAuth flow. **Never expose the code verifier or transmit it over the network**, as this could compromise security.

### Initiate Disclosure

To initiate the disclosure process, redirect the user to the generated disclosure URL. This can be done using a client-side navigation method such as `window.location.href`:

```ts
window.location.href = disclosureUrl; // Redirects the user to the Ver.iD disclosure flow
```

Alternatively, you can open the disclosure flow in a new tab or window:

```ts
window.open(disclosureUrl, '_blank'); // Opens the disclosure flow in a new browser tab
```

### Finalize Disclosure

After the user completes the disclosure flow, Ver.iD will redirect back to your registered `redirectUri` with query parameters such as `code`, `state` and any additional parameters you attached to the original disclosure url. You need to finalize the disclosure to get the disclosure response.

#### Finalize without client secret

For flows without a client secret configured:

```ts
const disclosureResponse = await disclosureClient.finalize();
```

#### Finalize with client secret

If your flow has a `client_secret` configured in Ver.iD Studio, you **must** pass it when calling `finalize`:

```ts
const disclosureResponse = await disclosureClient.finalize({
  clientAuth: {
    client_secret: '<YOUR_CLIENT_SECRET>', // Required when flow has a client secret configured
  },
});
```

**Important:** When your flow has a client secret configured in Ver.iD Studio, the `client_secret` is required for both intent creation and finalization. Omitting it will result in an authentication error.

The `finalize` method returns a Promise that resolves to the disclosure response. Response includes output JWT token as `access_token` of type depending on your settings in the disclosure. By default it is configured as an `attested` token.

**Note:** Call `finalize` on the page specified as your `redirectUri`.

#### Finalize at different page

It is possible to finalize disclosure flow at different location then the redirect page provided cache store is accessible from the location. But you need to pass complete redirected url to the finalize method. This can be done using a client-side location method such as `window.location.href`

**Important:** We use code verifier to authorize the client in order to finalize the flow. Code verifier is read from the cache store internally. As code verifier should not travel or exposed externally, flow should be finalized where cache store is accessible.

````ts
const redirectedUrl = window.location.href; // Get the url from the redirect page

// Can be called on any page as long as you can access value of `redirectedUrl'
const disclosureResponse = await disclosureClient.finalize({
  redirectedUrl: redirectedUrl,
});```


### Get decoded Token

Once you have the disclosure response, you can verify and decode the token to get the JWT headers and payload.

You have to pass `typeAssert` function based on the output type configured in you flow.

If your flow is configured for `ver-id/ssi/output/attested/v1+JWT` token type:

```ts
import { assertDisclosureV1JwtPayload } from '@ver-id/browser-client';

const disclosureDecodedToken = await disclosureClient.decode(
  disclosureResponse,
  assertDisclosureV1JwtPayload,
);
````
