export interface Session {
  id?: string;
  expiration?: Date;
  expirationTimeMilliseconds?: number;
  token?: string;
  authenticated?: boolean;
  userId?: string;
  lang?: string;
  refreshToken?: string;
}
