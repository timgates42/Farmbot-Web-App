export interface Token {
  unencoded: UnencodedToken;
  encoded: string;
}

export interface AuthState {
  token: Token;
}

export interface UnencodedToken {
  /** ISSUED AT */
  iat: number;
  /** JSON TOKEN IDENTIFIER - a serial number for the token. */
  jti: string;
  /** ISSUER - Where token came from (API URL). */
  iss: string;
  /** EXPIRATION DATE */
  exp: number;
  /** MQTT server address */
  mqtt: string;
  /** Where to download RPi software */
  os_update_server: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  created_at?: string;
  updated_at?: string;
}
