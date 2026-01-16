## Issuance

Execute an issuance flow to issue verified credentials to users. This allows you to create and deliver digital credentials that users can store in their decentralized identity wallets, enabling them to prove attributes about themselves without repeatedly going through verification processes.

### Create an Issuance client

```ts
import { VeridIssuanceClient } from '@ver-id/node-client';

const issuanceClient = new VeridIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_ISSUANCE_FLOW_ID>', // Issuance flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});
```

#### Caching options

The issuance client can be configured to cache flow context (state and code verifiers) using file storage. The default is `FileStorageCacheManager` which persists data in a JSON file at `~/.verid-cache/cache.json`. This setting can be controlled using the `cacheManager` option when creating the issuance client.

To use the default file storage, no additional options are required. To configure the client to use a custom cache directory:

```ts
import { VeridIssuanceClient, FileStorageCacheManager } from '@ver-id/node-client';

const issuanceClient = new VeridIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_ISSUANCE_FLOW_ID>',
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
- **Cross-session**: Enables issuance flows that span multiple HTTP requests

Choosing file storage is ideal for server-side applications where data needs to persist across requests and server restarts.

#### Creating a custom cache

The client can be configured to use a custom cache store that is implemented by your application. This is useful if you want to have more control over the stored context (e.g., using Redis, database, or encrypted storage).

To do this, provide an object to the `cacheManager` property of the client configuration.

The object should implement the following functions. Note that all of these functions can optionally return a Promise or a static value.

| Signature                          | Return type               | Description                                                                                   |
| ---------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------- |
| `get(key)`                         | Promise<string> or string or null | Returns the item from the cache with the specified key, or `null` if it was not found    |
| `save(key: string, value: string)` | Promise<void> or void     | Sets an item into the cache                                                                   |
| `remove(key)`                      | Promise<void> or void     | Removes a single item from the cache at the specified key, or no-op if the item was not found |

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

const issuanceClient = new VeridIssuanceClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_ISSUANCE_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: CustomMemoryCache // use custom store for caching
  }
})
```

### Issuance Flow

**Important:** Issuance flows **require** intent creation. The intent must contain the credential issuance payload with mapping or data information.

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
        // Map credential attributes to your data fields
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
  { client_secret: '<YOUR_CLIENT_SECRET>' }, // Client authentication required for Node.js
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
        credentialUuid: '<CREDENTIAL_UUID>', // UUID of the credential type
        issuerUuid: '<ISSUER_UUID>', // UUID of the issuer
        schemeUuid: '<SCHEME_UUID>', // UUID of the credential scheme
        providerUuid: '<PROVIDER_UUID>', // UUID of the provider
        value: 'John',
      }],
    },
    challenge: '<OPTIONAL_CHALLENGE_STRING>', // Optional
    brandUuid: '<OPTIONAL_BRAND_UUID>', // Optional
    requireExplicitConsent: true, // Optional: default is false
  },
  codeChallenge,
  { client_secret: '<YOUR_CLIENT_SECRET>' }, // Client authentication required for Node.js
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
  - `payload.data.credentialUuid` - UUID of the credential type
  - `payload.data.issuerUuid` - Your issuer UUID
  - `payload.data.schemeUuid` - UUID of the credential scheme
  - `payload.data.providerUuid` - UUID of the provider
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
  pkceOptions: {
    state: '<UNIQUE_STATE>',
  },
});
```

**Important:** State is mandatory if `pkceOptions` are being provided.

##### Using External Code Challenge

You can provide an externally generated code challenge. This is useful when the code challenge is generated elsewhere (e.g., via a backend service):

```ts
const { issuanceUrl, state } = await issuanceClient.generateIssuanceUrl({
  intent_id: intentId,
  pkceOptions: {
    state: '<UNIQUE_STATE>',
    codeChallenge: '<UNIQUE_CODE_CHALLENGE>',
  },
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

To initiate the issuance process, redirect the user to the generated issuance URL. In a server-side context, you can send this URL to your frontend:

```ts
// Return URL to frontend
res.json({ issuanceUrl, state });

// Or redirect directly
res.redirect(issuanceUrl);
```

Your frontend can then redirect the user to the issuance flow:

```ts
// Frontend code
window.location.href = issuanceUrl; // Redirects the user to the Ver.iD issuance flow
```

Alternatively, you can open the issuance flow in a new tab or window:

```ts
window.open(issuanceUrl, '_blank'); // Opens the issuance flow in a new browser tab
```

### Finalize Issuance

After the user completes the issuance flow, Ver.iD will redirect back to your registered `redirectUri` with query parameters such as `code` and `state`. You need to finalize the issuance to exchange the authorization code for tokens:

```ts
const issuanceResponse = await issuanceClient.finalize({
  clientAuth: {
    client_secret: '<YOUR_CLIENT_SECRET>', // Client secret from Ver.iD Studio
  },
  callbackParams: callbackUrl, // The complete callback URL with code and state parameters
});
```

The `finalize` method returns a Promise that resolves to the issuance response. The response includes the `access_token` (JWT) containing the issued credential information, along with token metadata.

**Important:** The Node.js client requires explicit `clientAuth` with a `client_secret` parameter. This enables secure server-side issuance flows where the client secret is never exposed to the frontend. The `client_secret` can be obtained from Ver.iD Studio when you register your issuance flow.

#### Understanding the finalize flow

In a typical server-side OAuth flow:

1. **Generate Code Challenge**: Backend generates PKCE code challenge
2. **Create Intent**: Backend creates issuance intent with credential payload
3. **Generate URL**: Backend generates the issuance URL and sends it to frontend
4. **User Issuance**: Frontend redirects user to Ver.iD issuance flow
5. **Callback**: Ver.iD redirects user back to your `redirectUri` (usually a frontend route)
6. **Backend Finalize**: Frontend sends the callback URL/params to your backend
7. **Token Exchange**: Backend calls `finalize()` with client secret to exchange code for tokens

Example backend endpoint for finalization:

```ts
app.post('/api/issuance/finalize', async (req, res) => {
  try {
    const { callbackUrl } = req.body;
    
    const issuanceResponse = await issuanceClient.finalize({
      clientAuth: {
        client_secret: process.env.VERID_CLIENT_SECRET,
      },
      callbackParams: callbackUrl,
    });
    
    res.json(issuanceResponse);
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

Once you have the issuance response, you can verify and decode the token to get the JWT headers and payload.

You have to pass `typeAssert` function based on the output type configured in your flow.

If your flow is configured for `ver-id/ssi/output/attested/v1+JWT` token type:

```ts
import { assertAttestedJwtPayload } from '@ver-id/node-client';

const issuanceDecodedToken = await issuanceClient.decode(
  issuanceResponse,
  assertAttestedJwtPayload,
);
```

If your flow is configured for `ver-id/ssi/output/plain/v1+JWT` token type:

```ts
import { assertPlainJwtPayload } from '@ver-id/node-client';

const issuanceDecodedToken = await issuanceClient.decode(
  issuanceResponse,
  assertPlainJwtPayload,
);
```

**Note:** The token verification happens on the server side, ensuring that the token has not been tampered with and was issued by Ver.iD. The decoded token contains the issued credential information based on your issuance flow configuration.
