import type { OAuthAuthorizationRequest } from "@/lib/auth/types";

const DISCORD_AUTHORIZE_ENDPOINT = "https://discord.com/oauth2/authorize";

export const DEFAULT_DISCORD_SCOPES = ["identify", "email"] as const;

export interface DiscordOAuthPublicConfig {
  clientId: string;
  redirectUri: string;
}

export interface DiscordOAuthServerConfig extends DiscordOAuthPublicConfig {
  clientSecret: string;
}

export interface DiscordAuthorizationOptions {
  state: string;
  scopes?: readonly string[];
  prompt?: "none" | "consent";
}

export class OAuthConfigurationError extends Error {
  constructor(variableName: string) {
    super(`${variableName} must be configured before Discord OAuth can be used.`);
    this.name = "OAuthConfigurationError";
  }
}

function requiredEnvironmentValue(name: string, environment: NodeJS.ProcessEnv): string {
  const value = environment[name];

  if (!value) {
    throw new OAuthConfigurationError(name);
  }

  return value;
}

/**
 * Call these only from a server route or server action. The application never
 * needs to expose `DISCORD_CLIENT_SECRET` to a browser bundle.
 */
export function getDiscordOAuthPublicConfig(
  environment: NodeJS.ProcessEnv = process.env,
): DiscordOAuthPublicConfig {
  return {
    clientId: requiredEnvironmentValue("DISCORD_CLIENT_ID", environment),
    redirectUri: requiredEnvironmentValue("DISCORD_REDIRECT_URI", environment),
  };
}

export function getDiscordOAuthServerConfig(
  environment: NodeJS.ProcessEnv = process.env,
): DiscordOAuthServerConfig {
  return {
    ...getDiscordOAuthPublicConfig(environment),
    clientSecret: requiredEnvironmentValue("DISCORD_CLIENT_SECRET", environment),
  };
}

/**
 * Generates Discord's genuine authorization URL. Token exchange, state
 * verification, identity lookup, and session persistence remain deliberately
 * unimplemented until a secure backend is introduced.
 */
export function createDiscordAuthorizationRequest(
  options: DiscordAuthorizationOptions,
  config: DiscordOAuthPublicConfig = getDiscordOAuthPublicConfig(),
): OAuthAuthorizationRequest {
  const url = new URL(DISCORD_AUTHORIZE_ENDPOINT);
  url.searchParams.set("client_id", config.clientId);
  url.searchParams.set("redirect_uri", config.redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", (options.scopes ?? DEFAULT_DISCORD_SCOPES).join(" "));
  url.searchParams.set("state", options.state);

  if (options.prompt) {
    url.searchParams.set("prompt", options.prompt);
  }

  return {
    provider: "discord",
    authorizationUrl: url.toString(),
    state: options.state,
  };
}
