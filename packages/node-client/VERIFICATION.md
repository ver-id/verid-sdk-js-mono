## Verification

Execute a verification flow to use decentralized identity apps to collect various types of customer information for verification purposes, such as for Know-Your-Customer (KYC) or Know-Your-Business (KYB) processes.

### Prerequisites

> **Important:** Flows intended to be executed via the Node.js client **must have a client secret configured** in Ver.iD Studio. Only a secret that has been configured in Studio can be used for intent creation and token exchange. Without a configured client secret, the Node.js disclosure flow will not work.

### Create a Disclosure client

```ts
import { VeridDisclosureClient } from '@ver-id/node-client';

const disclosureClient = new VeridDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_DISCLOSURE_FLOW_ID>', // Disclosure flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});
```

#### Caching options

The disclosure client can be configured to cache flow context (state and code verifiers) using file storage. The default is `FileStorageCacheManager` which persists data in a JSON file at `~/.verid-cache/cache.json`. This setting can be controlled using the `cacheManager` option when creating the disclosure client.

To use the default file storage, no additional options are required. To configure the client to use a custom cache directory:

```ts
import {
  VeridDisclosureClient,
  FileStorageCacheManager,
} from '@ver-id/node-client';

const disclosureClient = new VeridDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_DISCLOSURE_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: new FileStorageCacheManager('/path/to/custom/cache'), // Use custom directory for file storage
  },
});
```

**Important:** This feature allows the caching of flow context **such as state and code verifier** to be stored in the specified cache store.

**File Storage Benefits:**

- **Persistence**: Data survives server restarts and process terminations
- **Security**: Files are created with restrictive permissions (0o600)
- **Atomicity**: Atomic file writes prevent corruption during concurrent access
- **Cross-session**: Enables disclosure flows that span multiple HTTP requests

Choosing file storage is ideal for server-side applications where data needs to persist across requests and server restarts.

#### Creating a custom cache

The client can be configured to use a custom cache store that is implemented by your application. This is useful if you want to have more control over the stored context (e.g., using Redis, database, or encrypted storage).

To do this, provide an object to the `cacheManager` property of the client configuration.

The object should implement the following functions. Note that all of these functions can optionally return a Promise or a static value.

| Signature                          | Return type                       | Description                                                                                   |
| ---------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| `get(key)`                         | Promise<string> or string or null | Returns the item from the cache with the specified key, or `null` if it was not found         |
| `save(key: string, value: string)` | Promise<void> or void             | Sets an item into the cache                                                                   |
| `remove(key)`                      | Promise<void> or void             | Removes a single item from the cache at the specified key, or no-op if the item was not found |

Here's an example of a custom cache implementation that uses an in-memory store:

```ts
const CustomMemoryCache = {
  private store: Record<string, string> = {};

  save(key: string, value: string) {
    this.store[key] = value;
  },
  get(key: string) {
    return this.store[key] || null;
  },
  remove(key: string) {
    delete this.store[key];
  }
}

const disclosureClient = new VeridDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_DISCLOSURE_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: CustomMemoryCache // use custom store for caching
  }
})
```

### Disclosure Flow

The Node.js client requires a `client_secret` for the token endpoint during finalization. Because of this, **creating a disclosure intent is mandatory** for the Node.js client. The intent-based flow ensures the client secret is used to authenticate both the intent creation and the token exchange.

> **Note:** The `client_secret` used here must be the one configured for your flow in Ver.iD Studio. You cannot use an arbitrary secret — only a Studio-configured secret is accepted for intent creation and token exchange.

To initiate a disclosure flow, you must create an intent first and then generate the disclosure URL. This also allows you to customize the disclosure experience with challenges, brand-specific settings, or explicit consent requirements.

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
  { client_secret: '<YOUR_CLIENT_SECRET>' } // Client authentication required for Node.js
);
```

**Important:** Creating a disclosure intent is **mandatory** for the Node.js client. The `client_secret` is required for both intent creation and token exchange (finalize). All other parameters (`challenge`, `brandUuid`, and `requireExplicitConsent`) are optional. If not provided, the default disclosure experience will be used.

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

To initiate the disclosure process, redirect the user to the generated disclosure URL. In a server-side context, you can send this URL to your frontend:

```ts
// Return URL to frontend
res.json({ disclosureUrl, state });

// Or redirect directly
res.redirect(disclosureUrl);
```

Your frontend can then redirect the user to the disclosure flow:

```ts
// Frontend code
window.location.href = disclosureUrl; // Redirects the user to the Ver.iD disclosure flow
```

Alternatively, you can open the disclosure flow in a new tab or window:

```ts
window.open(disclosureUrl, '_blank'); // Opens the disclosure flow in a new browser tab
```

### Finalize Disclosure

After the user completes the disclosure flow, Ver.iD will redirect back to your registered `redirectUri` with query parameters such as `code` and `state`. You need to finalize the disclosure to exchange the authorization code for tokens:

```ts
const disclosureResponse = await disclosureClient.finalize({
  clientAuth: {
    client_secret: '<YOUR_CLIENT_SECRET>', // Client secret from Ver.iD Studio
  },
  callbackParams: callbackUrl, // The complete callback URL with code and state parameters
});
```

The `finalize` method returns a Promise that resolves to the disclosure response. The response includes the `access_token` (JWT) containing verified credentials and user information, along with token metadata.

**Important:** The Node.js client requires explicit `clientAuth` with a `client_secret` parameter. This enables secure server-side disclosure flows where the client secret is never exposed to the frontend. The `client_secret` can be obtained from Ver.iD Studio when you register your disclosure flow.

#### Understanding the finalize flow

In a typical server-side OAuth flow:

1. **Generate URL**: Backend generates the disclosure URL and sends it to frontend
2. **User Disclosure**: Frontend redirects user to Ver.iD disclosure flow
3. **Callback**: Ver.iD redirects user back to your `redirectUri` (usually a frontend route)
4. **Backend Finalize**: Frontend sends the callback URL/params to your backend
5. **Token Exchange**: Backend calls `finalize()` with client secret to exchange code for tokens

Example backend endpoint for finalization:

```ts
app.post('/api/disclosure/finalize', async (req, res) => {
  try {
    const { callbackUrl } = req.body;

    const disclosureResponse = await disclosureClient.finalize({
      clientAuth: {
        client_secret: process.env.VERID_CLIENT_SECRET,
      },
      callbackParams: callbackUrl,
    });

    res.json(disclosureResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

#### Callback parameters format

The `callbackParams` parameter accepts multiple formats:

- **String (complete URL)**: `'https://example.com/callback?code=ABC&state=XYZ'`
- **URL object**: `new URL('https://example.com/callback?code=ABC&state=XYZ')`
- **URLSearchParams**: `new URLSearchParams('code=ABC&state=XYZ')`

### Get decoded Token

Once you have the disclosure response, you can verify and decode the token to get the JWT headers and payload.

You have to pass `typeAssert` function based on the output type configured in your flow.

If your flow is configured for `ver-id/ssi/output/attested/v1+JWT` token type:

```ts
import { assertDisclosureV1JwtPayload } from '@ver-id/node-client';

const disclosureDecodedToken = await disclosureClient.decode(
  disclosureResponse,
  assertDisclosureV1JwtPayload
);
```

**Note:** The token verification happens on the server side, ensuring that the token has not been tampered with and was issued by Ver.iD. The decoded token contains verified credentials and user information based on your disclosure flow configuration.
