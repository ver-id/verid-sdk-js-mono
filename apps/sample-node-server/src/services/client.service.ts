import { VeridAuthenticationClient, VeridDisclosureClient, VeridIssuanceClient, AuthenticationResponse, DisclosureResponse, IssuanceResponse } from '@ver-id/node-client';
import {
  EmbeddedAuthenticationClient,
  EmbeddedDisclosureClient,
  EmbeddedIssuanceClient,
} from '@ver-id/embedded-node-client';

/**
 * Simple global client storage
 */
class ClientService {
  private authClient: VeridAuthenticationClient | null = null;
  private disclosureClient: VeridDisclosureClient | null = null;
  private issuanceClient: VeridIssuanceClient | null = null;

  // Embedded clients are kept separately from the redirect-based clients above:
  // embedded flows have no redirect and no callback URL, so they must never
  // clear `callbackUrl` out from under an in-flight redirect flow.
  private embeddedAuthClient: EmbeddedAuthenticationClient | null = null;
  private embeddedDisclosureClient: EmbeddedDisclosureClient | null = null;
  private embeddedIssuanceClient: EmbeddedIssuanceClient | null = null;
  private authResponse: AuthenticationResponse | null = null;
  private disclosureResponse: DisclosureResponse | null = null;
  private issuanceResponse: IssuanceResponse | null = null;
  private callbackUrl: string | null = null;
  
  // Intent-related storage
  private authIntentId: string | null = null;
  private authCodeChallenge: string | null = null;
  private authState: string | null = null;
  private disclosureIntentId: string | null = null;
  private disclosureCodeChallenge: string | null = null;
  private disclosureState: string | null = null;
  private issuanceIntentId: string | null = null;
  private issuanceCodeChallenge: string | null = null;
  private issuanceState: string | null = null;

  /**
   * Set the authentication client
   */
  setAuthClient(client: VeridAuthenticationClient): void {
    this.authClient = client;
    this.authResponse = null; // Reset auth response when setting new client
    this.callbackUrl = null; // Reset callback URL when setting new client
    this.authIntentId = null; // Reset intent data
    this.authCodeChallenge = null;
    this.authState = null;
  }

  /**
   * Get the authentication client
   */
  getAuthClient(): VeridAuthenticationClient | null {
    return this.authClient;
  }

  /**
   * Set the disclosure client
   */
  setDisclosureClient(client: VeridDisclosureClient): void {
    this.disclosureClient = client;
    this.disclosureResponse = null; // Reset disclosure response when setting new client
    this.callbackUrl = null; // Reset callback URL when setting new client
    this.disclosureIntentId = null; // Reset intent data
    this.disclosureCodeChallenge = null;
    this.disclosureState = null;
  }

  /**
   * Get the disclosure client
   */
  getDisclosureClient(): VeridDisclosureClient | null {
    return this.disclosureClient;
  }

  /**
   * Store auth response after finalize
   */
  setAuthResponse(response: AuthenticationResponse): void {
    this.authResponse = response;
  }

  /**
   * Get stored auth response
   */
  getAuthResponse(): AuthenticationResponse | null {
    return this.authResponse;
  }

  /**
   * Store disclosure response after finalize
   */
  setDisclosureResponse(response: DisclosureResponse): void {
    this.disclosureResponse = response;
  }

  /**
   * Get stored disclosure response
   */
  getDisclosureResponse(): DisclosureResponse | null {
    return this.disclosureResponse;
  }

  /**
   * Store the backend callback URL
   */
  setCallbackUrl(url: string): void {
    this.callbackUrl = url;
  }

  /**
   * Get stored callback URL
   */
  getCallbackUrl(): string | null {
    return this.callbackUrl;
  }

  // Authentication Intent methods
  setAuthIntentId(intentId: string): void {
    this.authIntentId = intentId;
  }

  getAuthIntentId(): string | null {
    return this.authIntentId;
  }

  setAuthCodeChallenge(codeChallenge: string): void {
    this.authCodeChallenge = codeChallenge;
  }

  getAuthCodeChallenge(): string | null {
    return this.authCodeChallenge;
  }

  setAuthState(state: string): void {
    this.authState = state;
  }

  getAuthState(): string | null {
    return this.authState;
  }

  // Disclosure Intent methods
  setDisclosureIntentId(intentId: string): void {
    this.disclosureIntentId = intentId;
  }

  getDisclosureIntentId(): string | null {
    return this.disclosureIntentId;
  }

  setDisclosureCodeChallenge(codeChallenge: string): void {
    this.disclosureCodeChallenge = codeChallenge;
  }

  getDisclosureCodeChallenge(): string | null {
    return this.disclosureCodeChallenge;
  }

  setDisclosureState(state: string): void {
    this.disclosureState = state;
  }

  getDisclosureState(): string | null {
    return this.disclosureState;
  }

  // Issuance client methods
  setIssuanceClient(client: VeridIssuanceClient): void {
    this.issuanceClient = client;
    this.issuanceResponse = null;
    this.callbackUrl = null;
    this.issuanceIntentId = null;
    this.issuanceCodeChallenge = null;
    this.issuanceState = null;
  }

  getIssuanceClient(): VeridIssuanceClient | null {
    return this.issuanceClient;
  }

  setIssuanceResponse(response: IssuanceResponse): void {
    this.issuanceResponse = response;
  }

  getIssuanceResponse(): IssuanceResponse | null {
    return this.issuanceResponse;
  }

  // Issuance Intent methods
  setIssuanceIntentId(intentId: string): void {
    this.issuanceIntentId = intentId;
  }

  getIssuanceIntentId(): string | null {
    return this.issuanceIntentId;
  }

  setIssuanceCodeChallenge(codeChallenge: string): void {
    this.issuanceCodeChallenge = codeChallenge;
  }

  getIssuanceCodeChallenge(): string | null {
    return this.issuanceCodeChallenge;
  }

  setIssuanceState(state: string): void {
    this.issuanceState = state;
  }

  getIssuanceState(): string | null {
    return this.issuanceState;
  }

  // Embedded client methods
  //
  // Unlike their redirect counterparts, these setters intentionally reset no
  // other state. Per-session data for an embedded flow lives in
  // `embeddedResultStore`, keyed by `state`, so re-initializing a client does
  // not disturb a session that is already running in the browser.

  setEmbeddedAuthClient(client: EmbeddedAuthenticationClient): void {
    this.embeddedAuthClient = client;
  }

  getEmbeddedAuthClient(): EmbeddedAuthenticationClient | null {
    return this.embeddedAuthClient;
  }

  setEmbeddedDisclosureClient(client: EmbeddedDisclosureClient): void {
    this.embeddedDisclosureClient = client;
  }

  getEmbeddedDisclosureClient(): EmbeddedDisclosureClient | null {
    return this.embeddedDisclosureClient;
  }

  setEmbeddedIssuanceClient(client: EmbeddedIssuanceClient): void {
    this.embeddedIssuanceClient = client;
  }

  getEmbeddedIssuanceClient(): EmbeddedIssuanceClient | null {
    return this.embeddedIssuanceClient;
  }
}

// Export singleton instance
export const clientService = new ClientService();
