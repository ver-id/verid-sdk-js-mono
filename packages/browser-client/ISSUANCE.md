## Issuance

Execute an issuance flow to issue verified credentials to users. This allows you to create and deliver digital credentials that users can store in their decentralized identity wallets, enabling them to prove attributes about themselves without repeatedly going through verification processes.

### Create an Issuance client

```ts
import { VeridIssuanceClient } from '@ver-id/browser-client';

const issuanceClient = new VeridIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_ISSUANCE_FLOW_ID>', // Issuance flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});
```

#### Caching options

The issuance client can be configured to cache flow context in session storage, local storage or custom storage implementation. The default is in session storage. This setting can be controlled using the cacheManager option when creating the issuance client.

To use the session storage, no additional options are required as this is the default setting. To configure the client to cache data using local storage, set `cacheManager` as follows:

```ts
import { VeridIssuanceClient } from '@ver-id/browser-client';
import { LocalStorageCacheManager } from '@ver-id/browser-client';

const issuanceClient = new VeridIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_ISSUANCE_FLOW_ID>',
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

const issuanceClient = new VeridIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_ISSUANCE_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: new CustomSessionStorageCache() // use custom store for caching
  }
})
```

### Issuance Flow

**Important:** Unlike authentication and disclosure flows, issuance flows **require** intent creation. The intent must contain the credential issuance payload with mapping and data information.

#### Step 1: Generate Code Challenge

First, generate a PKCE code challenge:

```ts
const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();
```

#### Step 2: Create Issuance Intent (Required)

Create an issuance intent with the credential payload. This step is **mandatory** for issuance flows.

**Important:** You must provide **either** `payload.mapping` **or** `payload.data`, but **not both**. Choose the approach based on your use case:

##### Option A: Using Mapping (Recommended for flexible credential structures)

Use `mapping` object to assign values to custom claims mapped to one or multiple attributes. You can define and assign mappings to the issuance flow using Ver.iD Studio. Please make sure that all the attributes in your flow are mapped to custom claims and `mapping` object includes all the custom claims.

```ts
const intentId = await issuanceClient.createIssuanceIntent(
  {
    payload: {
      mapping: {
        firstName: 'John',
        email: 'john.doe@example.com',
        dateOfBirth: '1990-01-01',
        // ... other attribute mappings
      },
    },
    challenge: '<OPTIONAL_CHALLENGE_STRING>', // Optional
    brandUuid: '<OPTIONAL_BRAND_UUID>', // Optional
    requireExplicitConsent: true, // Optional: default is false
  },
  codeChallenge,
);
```

##### Option B: Using Data (when no mapping are assigned)

Use `data` array when you don't have mappings assigned to your flow. Please make sure that you have all the attributes from you flow defined in the data array.

```ts
const intentId = await issuanceClient.createIssuanceIntent(
  {
    payload: {
      data: [{
        attributeUuid: '<ATTRIBUTE_UUID>', // UUID of the attribute being issued
        value: 'John',
      }],
    },
    challenge: '<OPTIONAL_CHALLENGE_STRING>', // Optional
    brandUuid: '<OPTIONAL_BRAND_UUID>', // Optional
    requireExplicitConsent: true, // Optional: default is false
  },
  codeChallenge,
);
```

**When to use data:**
- You need to specify exact UUIDs for attributes, credentials, issuers, schemes, and providers
- You're working with multiple credential types and need precise control
- You need to reference specific credential configurations by UUID
- You're programmatically managing credential metadata

**Parameters Summary:**

Required (choose **one**):
- `payload.mapping` - Object mapping credential attribute names to values
- `payload.data` - Explicit credential data object with UUIDs and values
  - `payload.data.attributeUuid` - UUID of the attribute being issued
  - `payload.data.value` - The actual credential data to be issued

Optional:
- `challenge` - Custom challenge string for additional security
- `brandUuid` - Brand-specific customization for the issuance experience
- `requireExplicitConsent` - Whether to require explicit user consent (default: false)

#### Step 3: Generate Issuance URL with Intent

Generate the issuance URL using the created intent:

```ts
const { issuanceUrl, state } = await issuanceClient.generateIssuanceUrl({
  intent_id: intentId, // Intent ID is mandatory for issuance flows
  state: state, // Use the state from Step 1
  codeChallenge: codeChallenge, // Use the code challenge from Step 1
});
```

**Note:** The `intent_id` parameter is **required** for `generateIssuanceUrl`. You cannot generate an issuance URL without first creating an intent.

#### Advanced PKCE Configuration

Issuance flows are compliant with OAuth 2.1 and use PKCE (Proof Key for Code Exchange) for security. By default, PKCE options (code challenge and state) are automatically generated by `generateCodeChallenge`. However, you can provide your own PKCE configuration for advanced use cases.

##### Using Custom State

You can provide your own unique state identifier:

```ts
const { issuanceUrl, state } = await issuanceClient.generateIssuanceUrl({
  intent_id: intentId,
  state: '<UNIQUE_STATE>',
});
```

**Important:** State is mandatory if code challenge is being provided.

##### Using External Code Challenge

You can provide an externally generated code challenge. This is useful when the code challenge is generated elsewhere (e.g., via a backend service):

```ts
const { issuanceUrl, state } = await issuanceClient.generateIssuanceUrl({
  intent_id: intentId,
  state: '<UNIQUE_STATE>',
  codeChallenge: '<UNIQUE_CODE_CHALLENGE>',
});
```

##### Generating Code Challenge Separately

You can generate a code challenge independently for use in intent creation:

```ts
const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();
// Use codeChallenge and state for intent creation
```

You can also provide a custom state when generating the code challenge:

```ts
const { codeChallenge, state } = await issuanceClient.generateCodeChallenge('<CUSTOM_STATE>');
```

**Security Note:** As per PKCE standards ([RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636#section-4.1)), a code verifier is created when generating a code challenge. The code verifier is stored in the cache manager against the state and is used to complete the OAuth flow. **Never expose the code verifier or transmit it over the network**, as this could compromise security.

### Initiate Issuance

To initiate the issuance process, redirect the user to the generated issuance URL. This can be done using a client-side navigation method such as `window.location.href`:

```ts
window.location.href = issuanceUrl; // Redirects the user to the Ver.iD issuance flow
```

Alternatively, you can open the issuance flow in a new tab or window:

```ts
window.open(issuanceUrl, '_blank'); // Opens the issuance flow in a new browser tab
```

### Finalize Issuance

After the user completes the issuance flow, Ver.iD will redirect back to your registered `redirectUri` with query parameters such as `code`, `state` and any additional parameters you attached to the original issuance url. You need to finalize the issuance to get the issuance response:

```ts
const issuanceResponse = await issuanceClient.finalize();
```

The `finalize` method returns a Promise that resolves to the issuance response. Response includes output JWT token as `access_token` containing the issued credential information.

**Note:** Call `finalize` on the page specified as your `redirectUri`.

#### Finalize at different page

It is possible to finalize issuance flow at different location then the redirect page provided cache store is accessible from the location. But you need to pass complete redirected url to the finalize method. This can be done using a client-side location method such as `window.location.href`

**Important:** We use code verifier to authorize the client in order to finalize the flow. Code verifier is read from the cache store internally. As code verifier should not travel or exposed externally, flow should be finalized where cache store is accessible.

```ts
const redirectedUrl = window.location.href; // Get the url from the redirect page

// Can be called on any page as long as you can access value of `redirectedUrl'
const issuanceResponse = await issuanceClient.finalize({
  redirectedUrl: redirectedUrl,
});
```

### Get decoded Token

Once you have the issuance response, you can verify and decode the token to get the JWT headers and payload.

You have to pass `typeAssert` function based on the output type configured in you flow.

```ts
import { assertIssuanceV1JwtPayload } from '@ver-id/browser-client';

const issuanceDecodedToken = await issuanceClient.decode(
  issuanceResponse,
  assertIssuanceV1JwtPayload,
);
```
