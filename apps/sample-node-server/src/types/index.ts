export interface InitializeRequest {
  issuerUri?: string;
  client_id?: string;
  redirectUri?: string;
}

export interface GenerateUrlRequest {
  scope?: string;
}
