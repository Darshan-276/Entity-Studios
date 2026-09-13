export type AuthProvider = "discord";

export interface AuthUser {
  id: string;
  displayName: string;
  email?: string;
  avatarUrl?: string;
  providerAccounts: readonly AuthProviderAccount[];
}

export interface AuthProviderAccount {
  provider: AuthProvider;
  providerAccountId: string;
  username?: string;
  discriminator?: string;
  connectedAt: string;
}

export interface AuthSession {
  id: string;
  user: AuthUser;
  expiresAt: string;
}

export interface OAuthAuthorizationRequest {
  provider: AuthProvider;
  authorizationUrl: string;
  state: string;
}

export interface OAuthCallbackInput {
  provider: AuthProvider;
  code: string;
  state: string;
}

/**
 * Persistence, encryption, and session cookies belong to the eventual backend.
 * Components should depend on this contract instead of an OAuth provider.
 */
export interface AuthService {
  getSession(): Promise<AuthSession | null>;
  beginOAuthSignIn(provider: AuthProvider): Promise<OAuthAuthorizationRequest>;
  completeOAuthCallback(input: OAuthCallbackInput): Promise<AuthSession>;
  signOut(): Promise<void>;
}

export interface OAuthTokenSet {
  accessToken: string;
  refreshToken?: string;
  tokenType: string;
  scope: readonly string[];
  expiresAt?: string;
}

export interface DiscordIdentity {
  id: string;
  username: string;
  globalName?: string | null;
  email?: string | null;
  avatar?: string | null;
  verified?: boolean;
}

/** Server-side implementation point for a real Discord OAuth adapter. */
export interface DiscordOAuthGateway {
  exchangeCode(code: string): Promise<OAuthTokenSet>;
  getIdentity(accessToken: string): Promise<DiscordIdentity>;
}
