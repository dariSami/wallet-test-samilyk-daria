import { BrowserContext } from "@playwright/test";
import { WalletCredentials } from "../data/wallets";
import { setupPhantom } from "./setup-phantom";

type SetupFn = (context: BrowserContext, credentials: WalletCredentials) => Promise<void>;

/**
 * Registry of wallet extension setup handlers.
 *
 * Each wallet (Phantom, MetaMask, etc.) should provide its own onboarding logic.
 *
 * Currently only Phantom is implemented.
 * MetaMask setup can be added alongside other wallet integrations when needed
 */

const registry: Record<string, SetupFn> = {
  phantom: setupPhantom,
  // metamask: setupMetamask,
};

export async function runExtensionSetup(
  extensionName: string,
  context: BrowserContext,
  credentials: WalletCredentials,
) {
  const setup = registry[extensionName];

  if (!setup) {
    console.warn(
      `No onboarding handler for "${extensionName}". ` +
      `Skipping setup — make sure the profile is pre-configured.`,
    );
    return;
  }

  await setup(context, credentials);
}
