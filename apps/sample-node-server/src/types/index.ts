export interface InitializeRequest {
  issuerUri?: string;
  flowId?: string;
  redirectUri?: string;
}

export interface GenerateUrlRequest {
  scope?: string;
}
