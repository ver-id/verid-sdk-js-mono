import { VeridAuthenticationClient, VeridDisclosureClient, VeridIssuanceClient, AuthenticationResponse, DisclosureResponse, IssuanceResponse } from '@ver-id/node-client';
import {
  VeridEmbeddedAuthenticationClient,
  VeridEmbeddedDisclosureClient,
  VeridEmbeddedIssuanceClient,
} from '@ver-id/embedded-node-client';

/** Global in-memory storage for the SDK clients created by the demo endpoints. */
class ClientService {
  private authClient: VeridAuthenticationClient | null = null;
  private disclosureClient: VeridDisclosureClient | null = null;
  private issuanceClient: VeridIssuanceClient | null = null;

  // Embedded clients are kept separate from the redirect-based clients above:
  // embedded flows have no callback URL, so they must never clear it out from
  // under an in-flight redirect flow.
  private embeddedAuthClient: VeridEmbeddedAuthenticationClient | null = null;
  private embeddedDisclosureClient: VeridEmbeddedDisclosureClient | null = null;
  private embeddedIssuanceClient: VeridEmbeddedIssuanceClient | null = null;
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

  setAuthClient(client: VeridAuthenticationClient): void {
    this.authClient = client;
    this.authResponse = null;
    this.callbackUrl = null;
    this.authIntentId = null;
    this.authCodeChallenge = null;
    this.authState = null;
  }

  getAuthClient(): VeridAuthenticationClient | null {
    return this.authClient;
  }

  setDisclosureClient(client: VeridDisclosureClient): void {
    this.disclosureClient = client;
    this.disclosureResponse = null;
    this.callbackUrl = null;
    this.disclosureIntentId = null;
    this.disclosureCodeChallenge = null;
    this.disclosureState = null;
  }

  getDisclosureClient(): VeridDisclosureClient | null {
    return this.disclosureClient;
  }

  setAuthResponse(response: AuthenticationResponse): void {
    this.authResponse = response;
  }

  getAuthResponse(): AuthenticationResponse | null {
    return this.authResponse;
  }

  setDisclosureResponse(response: DisclosureResponse): void {
    this.disclosureResponse = response;
  }

  getDisclosureResponse(): DisclosureResponse | null {
    return this.disclosureResponse;
  }

  setCallbackUrl(url: string): void {
    this.callbackUrl = url;
  }

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

  // Embedded client setters intentionally reset no other state — per-session
  // data lives in `embeddedResultStore`, keyed by `state`, so re-initializing a
  // client does not disturb a session already running in the browser.

  setEmbeddedAuthClient(client: VeridEmbeddedAuthenticationClient): void {
    this.embeddedAuthClient = client;
  }

  getEmbeddedAuthClient(): VeridEmbeddedAuthenticationClient | null {
    return this.embeddedAuthClient;
  }

  setEmbeddedDisclosureClient(client: VeridEmbeddedDisclosureClient): void {
    this.embeddedDisclosureClient = client;
  }

  getEmbeddedDisclosureClient(): VeridEmbeddedDisclosureClient | null {
    return this.embeddedDisclosureClient;
  }

  setEmbeddedIssuanceClient(client: VeridEmbeddedIssuanceClient): void {
    this.embeddedIssuanceClient = client;
  }

  getEmbeddedIssuanceClient(): VeridEmbeddedIssuanceClient | null {
    return this.embeddedIssuanceClient;
  }
}

export const clientService = new ClientService();
