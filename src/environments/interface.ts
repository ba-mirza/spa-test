export interface Environment {
  production: boolean;
  apiKey: string;
}

export interface FBAuthResponse {
  idToken: string;
  expiresIn: string
}
