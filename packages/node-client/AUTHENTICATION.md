## Authentication

Execute an authentication flow to use decentralized identity apps for shifting from traditional, password-based methods to a secure, password-less system utilizing QR codes. This modern approach enhances security, simplifies the login process, and significantly improves user experience by leveraging user-controlled, decentralized authentication.

### Create an Authentication client

```ts
import { VeridAuthenticationClient } from '@ver-id/node-client';

const authenticationClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  client_id: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});
```

#### Caching options

The authentication client can be configured to cache flow context (state and code verifiers) using file storage. The default is `FileStorageCacheManager`, which writes one JSON file per entry under `~/.verid-cache/`. Every read and write goes to disk, so all processes on the same host share the cache. This setting can be controlled using the `cacheManager` option when creating the authentication client.

To use the default file storage, no additional options are required. To configure the client to use a custom cache directory:

```ts
import { VeridAuthenticationClient, FileStorageCacheManager } from '@ver-id/node-client';

const authenticationClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_AUTHENTICATION_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: new FileStorageCacheManager('/path/to/custom/cache'), // Use custom directory for file storage
  },
});
```

`FileStorageCacheManager` takes the same `options` as every other Ver.iD cache manager: `prefix` (default `'verid:'`) namespaces the keys, and `ttlSeconds` (default `3600`) expires them. Pass `0` to disable expiry.

```ts
new FileStorageCacheManager('/path/to/custom/cache', { prefix: 'myapp:', ttlSeconds: 600 });
```

**Important:** This feature allows the caching of flow context **such as state and code verifier** to be stored in the specified cache store.

**File Storage Benefits:**

- **Persistence**: Data survives server restarts and process terminations
- **Security**: Files are created with restrictive permissions (0o600)
- **Atomicity**: Each entry is written atomically to its own file, so concurrent writers never corrupt or overwrite each other's entries
- **Multi-process**: A flow started by one worker can be finalized by another worker on the same host
- **Expiry**: Entries expire after `ttlSeconds` (default: 1 hour), so abandoned flows do not accumulate
- **Cross-session**: Enables authentication flows that span multiple HTTP requests

Choosing file storage is ideal for server-side applications where data needs to persist across requests and server restarts.

Processes spread over multiple hosts or containers do not share a filesystem. Use `RedisCacheManager` or `DynamoDBCacheManager` for those deployments.

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

const authenticationClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  client_id: '<VERID_AUTHENTICATION_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: CustomMemoryCache // use custom store for caching
  }
})
```

### Authentication Flow Options

There are two ways to initiate an authentication flow:

1. **Direct URL Generation** - Generate authentication URL directly (simpler approach)
2. **Intent-based Flow** - Create an intent first, then generate URL (more control)

#### Option 1: Direct URL Generation (Recommended)

To start the authentication flow, you need to first generate an authentication URL. This URL is used to redirect the user to the Ver.iD authentication experience.

You can provide multiple scopes separated by spaces (e.g., `'profile email'`). Each scope defines the permissions and information your application is requesting from the user during authentication. Requested scopes should be registered in the authentication flow.

```ts
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  scope: '<SCOPES_TO_REQUEST>',
});
```

**Note:** The `generateAuthenticationUrl` method returns a Promise that resolves to the authentication URL and state.

#### Option 2: Intent-based Flow (Advanced)

For more control over the authentication flow, you can create an intent first and then generate the authentication URL. This is useful when you need to customize the authentication experience with challenges or brand-specific settings.

##### Step 1: Generate Code Challenge

First, generate a PKCE code challenge:

```ts
const { codeChallenge, state } = await authenticationClient.generateCodeChallenge();
```

##### Step 2: Create Authentication Intent

Create an authentication intent with optional customization:

```ts
const intentId = await authenticationClient.createAuthenticationIntent(
  {
    challenge: '<OPTIONAL_CHALLENGE_STRING>', // Optional: Custom challenge for the authentication
    brandUuid: '<OPTIONAL_BRAND_UUID>', // Optional: Brand-specific customization
  },
  codeChallenge,
  { client_secret: '<YOUR_CLIENT_SECRET>' }, // Client authentication required for Node.js
);
```

**Note:** Both `challenge` and `brandUuid` are optional parameters. If not provided, the default authentication experience will be used. The `client_secret` is required for server-side intent creation.

##### Step 3: Generate Authentication URL with Intent

Generate the authentication URL using the created intent:

```ts
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  scope: '<SCOPES_TO_REQUEST>',
  state: state, // Use the state from Step 1
  codeChallenge: codeChallenge, // Use the code challenge from Step 1
  intent_id: intentId, // Pass the intent ID from Step 2
});
```

#### Advanced PKCE Configuration

Authentication flows are compliant with OAuth 2.1 and use PKCE (Proof Key for Code Exchange) for security. By default, PKCE options (code challenge and state) are automatically generated by `generateAuthenticationUrl`. However, you can provide your own PKCE configuration for advanced use cases.

##### Using Custom State

You can provide your own unique state identifier:

```ts
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  scope: '<SCOPES_TO_REQUEST>',
  state: '<UNIQUE_STATE>',
});
```

**Important:** State is mandatory if code challenge is being provided.

##### Using External Code Challenge

You can provide an externally generated code challenge. This is useful when the code challenge is generated elsewhere (e.g., via a backend service):

```ts
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  scope: '<SCOPES_TO_REQUEST>',
  state: '<UNIQUE_STATE>',
  codeChallenge: '<UNIQUE_CODE_CHALLENGE>',
});
```

##### Generating Code Challenge Separately

You can generate a code challenge independently for use in other contexts:

```ts
const { codeChallenge, state } = await authenticationClient.generateCodeChallenge();
// Use codeChallenge and state for intent creation or other purposes
```

You can also provide a custom state when generating the code challenge:

```ts
const { codeChallenge, state } = await authenticationClient.generateCodeChallenge('<CUSTOM_STATE>');
```

**Security Note:** As per PKCE standards ([RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636#section-4.1)), a code verifier is created when generating a code challenge. The code verifier is stored in the cache manager against the state and is used to complete the OAuth flow. **Never expose the code verifier or transmit it over the network**, as this could compromise security.

### Initiate Authentication

To initiate the authentication process, redirect the user to the generated authentication URL. In a server-side context, you can send this URL to your frontend:

```ts
// Return URL to frontend
res.json({ authenticationUrl, state });

// Or redirect directly
res.redirect(authenticationUrl);
```

Your frontend can then redirect the user to the authentication flow:

```ts
// Frontend code
window.location.href = authenticationUrl; // Redirects the user to the Ver.iD authentication flow
```

Alternatively, you can open the authentication flow in a new tab or window:

```ts
window.open(authenticationUrl, '_blank'); // Opens the authentication flow in a new browser tab
```

### Finalize Authentication

After the user completes the authentication flow, Ver.iD will redirect back to your registered `redirectUri` with query parameters such as `code` and `state`. You need to finalize the authentication to exchange the authorization code for tokens:

```ts
const authenticationResponse = await authenticationClient.finalize({
  clientAuth: {
    client_secret: '<YOUR_CLIENT_SECRET>', // Client secret from Ver.iD Studio
  },
  callbackParams: callbackUrl, // The complete callback URL with code and state parameters
});
```

The `finalize` method returns a Promise that resolves to the authentication response. The response includes the `id_token` (JWT) containing user identity information, `access_token`, and token metadata.

**Important:** The Node.js client requires explicit `clientAuth` with a `client_secret` parameter. This enables secure server-side authentication where the client secret is never exposed to the frontend. The `client_secret` can be obtained from Ver.iD Studio when you register your authentication flow.

#### Understanding the finalize flow

In a typical server-side OAuth flow:

1. **Generate URL**: Backend generates the authentication URL and sends it to frontend
2. **User Authentication**: Frontend redirects user to Ver.iD authentication
3. **Callback**: Ver.iD redirects user back to your `redirectUri` (usually a frontend route)
4. **Backend Finalize**: Frontend sends the callback URL/params to your backend
5. **Token Exchange**: Backend calls `finalize()` with client secret to exchange code for tokens

Example backend endpoint for finalization:

```ts
app.post('/api/authentication/finalize', async (req, res) => {
  try {
    const { callbackUrl } = req.body;
    
    const authenticationResponse = await authenticationClient.finalize({
      clientAuth: {
        client_secret: process.env.VERID_CLIENT_SECRET,
      },
      callbackParams: callbackUrl,
    });
    
    res.json(authenticationResponse);
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

Once you have the authentication response, you can verify and decode the token to get the JWT headers and typed payload:

```ts
const authenticationDecodedToken = await authenticationClient.decode(authenticationResponse);
```
