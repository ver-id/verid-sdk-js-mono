import { VeridAuthenticationClient, VeridDisclosureClient, AuthenticationResponse, DisclosureResponse } from '@ver-id/node-client';

/**
 * Simple global client storage
 */
class ClientService {
  private authClient: VeridAuthenticationClient | null = null;
  private disclosureClient: VeridDisclosureClient | null = null;
  private authResponse: AuthenticationResponse | null = null;
  private disclosureResponse: DisclosureResponse | null = null;
  private callbackUrl: string | null = null;

  /**
   * Set the authentication client
   */
  setAuthClient(client: VeridAuthenticationClient): void {
    this.authClient = client;
    this.authResponse = null; // Reset auth response when setting new client
    this.callbackUrl = null; // Reset callback URL when setting new client
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
}

// Export singleton instance
export const clientService = new ClientService();
