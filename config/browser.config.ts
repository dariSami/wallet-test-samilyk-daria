import { getExtensionPath } from "./extensions";

export interface BrowserLaunchOptions {
  headless: boolean;
  args: string[];
}

export function getBrowserOptions(extensionName: string | null): BrowserLaunchOptions {
  const args = [
    "--disable-blink-features=AutomationControlled",
    "--no-sandbox",
  ];

  if (extensionName) {
    const extPath = getExtensionPath(extensionName);
    args.push(
      `--disable-extensions-except=${extPath}`,
      `--load-extension=${extPath}`,
    );
  }

  return {
    headless: false,
    args,
  };
}
