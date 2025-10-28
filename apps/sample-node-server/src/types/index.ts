export interface InitializeRequest {
  apiUrl?: string;
  flowId?: string;
  redirectUri?: string;
}

export interface GenerateUrlRequest {
  scope?: string;
}
