## Authentication

Execute an authentication flow to use decentralized identity apps for shifting from traditional, password-based methods to a secure, password-less system utilizing QR codes. This modern approach enhances security, simplifies the login process, and significantly improves user experience by leveraging user-controlled, decentralized authentication.

### Create a Authentication client

```ts
import { VeridAuthenticationClient } from '@ver-id/browser-client';

const authenticationClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>', // Ver.iD OAuth Issuer URI
  authenticationFlowId: '<VERID_AUTHENTICATION_FLOW_ID>', // Authentication flow id registered in Ver.iD Studio
  redirectUri: 'REGISTERED_REDIRECT_URI', // One of the registered redirect uri in the flow
});
```

#### Caching options

The authentication client can be configured to cache flow context in session storage, local storage or custom storage implementation. The default is in session storage. This setting can be controlled using the cacheManager option when creating the authentication client.

To use the session storage, no additional options are required as this is the default setting. To configure the client to cache data using local storage, set `cacheManager` as follows:

```ts
import { VeridAuthenticationClient } from '@ver-id/browser-client';
import { LocalStorageCacheManager } from '@ver-id/browser-client';

const authenticationClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  authenticationFlowId: '<VERID_AUTHENTICATION_FLOW_ID>',
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

const authenticationClient = new VeridAuthenticationClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  authenticationFlowId: '<VERID_AUTHENTICATION_FLOW_ID>',
  redirectUri: 'REGISTERED_REDIRECT_URI',
  options: {
    cacheManager: new CustomSessionStorageCache() // use custom store for caching
  }
})
```

### Generate Authentication url

To start the authentication flow, you need to first generate an authentication URL. This URL is used to redirect the user to the Ver.iD authentication experience.

You can provide multiple scopes separated by spaces (e.g., `'profile email'`). Each scope defines the permissions and information your application is requesting from the user during authentication. Requested scopes should be registered in the authentication flow.

```ts
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  scope: '<SCOPES_TO_REQUEST>',
});
```

**Note:** The `generateAuthenticationUrl` method returns a Promise that resolves to the authentication URL and state.

#### PKCE options

Authentication flow are compliant OAuth 2.1 flow which uses PKCE for security. By default, PKCE options (code challenge and state) will be generated by `generateAuthenticationUrl` function. However, if you want to use your own PKCE configuration, it can be done by passing configuration options while calling `generateAuthenticationUrl`:

##### State

You can provide your own unique state identifier based on your use case.

```ts
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  pkceOptions: {
    state: '<UNIQUE_STATE>',
  },
});
```

**Important:** State is mandatory if `pkceOptions` are being provided.

##### Code Challenge

###### External code challenge

You can provide external code challenge. This is useful when code challenge is generated elsewhere (mostly via some backend service) and flow needs to be initiated from the client side:

```ts
const { authenticationUrl, state } = await authenticationClient.generateAuthenticationUrl({
  pkceOptions: {
    state: '<UNIQUE_STATE>'
    codeChallenge: '<UNIQUE_CODE_CHALLENGE>'
  }
});
```

You can also generate a code challenge with an external defined state. If no state is provided, a random state will be generated. This is useful when you want to initiate the flow somewhere else with the generated code challenge and state.

```ts
const { codeChallenge, state } = await authenticationClient.generateCodeChallenge();
```

**Important:** As per PKCE standards (https://datatracker.ietf.org/doc/html/rfc7636#section-4.1), there is always a code verifier created in order to generate a code challenge and it gets stored in the cache manager against the provided or generated state. It happens internally when `generateAuthenticationUrl` or `generateCodeChallenge` is called. We strongly recommend that code verifier should not be exposed or travel over the network as it might be prone to attacks.

### Initiate Authentication

To initiate the authentication process, redirect the user to the generated authentication URL. This can be done using a client-side navigation method such as `window.location.href`:

```ts
window.location.href = authenticationUrl; // Redirects the user to the Ver.iD authentication flow
```

Alternatively, you can open the authentication flow in a new tab or window:

```ts
window.open(authenticationUrl, '_blank'); // Opens the authentication flow in a new browser tab
```

### Finalize Authentication

After the user completes the authentication flow, Ver.iD will redirect back to your registered `redirectUri` with query parameters such as `code`, `state` and any additional parameters you attached to the original authentication url. You need to finalize the authentication to get the authentication response:

```ts
const authenticationResponse = await authenticationClient.finalize();
```

The `finalize` method returns a Promise that resolves to the authentication response. Response includes output JWT token as `access_token` of type depending on your settings in the authentication. By default it is configured as an `attested` token.

**Note:** Call `finalize` on the page specified as your `redirectUri`.

#### Finalize at different page

It is possible to finalize authentication flow at different location then the redirect page. But you need to pass complete redirect url to the finalize method. This can be done using a client-side location method such as `window.location.href`

```ts
const redirectUrl = window.location.href; // Get the url from the redirect page

// Can be called on any page as long as you can access value of `redirectUrl'
const authenticationResponse = await authenticationClient.finalize({
  redirectUrl: redirectUrl,
});
```

### Get decoded Token

Once you have the authentication response, you can verify and decode the token to get the JWT headers and typed payload:

```ts
const authenticationDecodedToken = await authenticationClient.decode(authenticationResponse);
```
