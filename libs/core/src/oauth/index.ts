// OAuth client exports
export { VeridOAuthClient } from './client.js';
export type {
  OAuthClientConfig,
  OAuthRequestParams,
  OAuthAuthorizationCodeGrantParams,
  OAuthClientCredentialsGrantParams,
} from './client.js';

// OAuth provider exports
export type { IOAuthProvider } from '../interface/IOAuthProvider.js';
export { OAuth4WebApiProvider } from './provider/oauth4webapi.js';
