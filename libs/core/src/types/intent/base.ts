export interface BaseIntent {
  type: 'authentication' | 'disclosure' | 'issuance'; 
  codeChallenge: string;
  clientId: string;
}
