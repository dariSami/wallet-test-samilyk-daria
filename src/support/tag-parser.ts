import { Pickle } from "@cucumber/messages";

export interface ScenarioConfig {
  extension: string | null; // "phantom", "metamask", or null (no extension)
  walletName: string;       // "main", "low_balance", etc.
}

/**
 * Parses custom tags from a scenario (inherited from Feature + Scenario level).
 *
 * Supported tags:
 *   @ext:phantom      — load Phantom extension
 *   @ext:metamask     — load MetaMask extension
 *   @ext:none         — explicitly launch without extension
 *   @wallet:main      — use "main" wallet credentials
 *   @wallet:low_balance — use "low_balance" wallet credentials
 */
export function parseScenarioTags(pickle: Pickle): ScenarioConfig {
  const tags = pickle.tags.map((t) => t.name);

  const extTag = tags.find((t) => t.startsWith("@ext:"));
  const walletTag = tags.find((t) => t.startsWith("@wallet:"));

  const extValue = extTag?.replace("@ext:", "") ?? null;

  return {
    extension: extValue === "none" ? null : extValue,
    walletName: walletTag?.replace("@wallet:", "") ?? "main",
  };
}
