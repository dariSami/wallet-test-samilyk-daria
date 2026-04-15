import { BrowserContext, Page } from "@playwright/test";
import { WalletCredentials } from "../data/wallets";

export async function setupPhantom(
    context: BrowserContext,
    credentials: WalletCredentials,
) {
  const page = await waitForExtensionPage(context);
  await importWallet(page, credentials);
}

async function waitForExtensionPage(
    context: BrowserContext,
): Promise<Page> {
  const page = await context.waitForEvent(
      "page",
      (p) =>
          p.url().includes("chrome-extension") ||
          p.url().includes("onboarding"),
  );

  await page.waitForLoadState("domcontentloaded");

  return page;
}

async function importWallet(
    page: Page,
    credentials: WalletCredentials,
) {

  await page.click('button:has-text("I Already Have a Wallet")');
  await page.click('button:has-text("Import Recovery Phrase")');

  const words = credentials.seed.split(" ");
  const inputs = page.locator("input");

  for (let i = 0; i < words.length; i++) {
    await inputs.nth(i).fill(words[i]);
  }

  await page.click('button:has-text("Import wallet")');
  await page.click('button:has-text("Continue")');

  await page.fill('input[name="password"]', credentials.password);
  await page.fill('input[name="confirmPassword"]', credentials.password);

  await page.click(
      '[data-testid="onboarding-form-terms-of-service-checkbox"]',
  );

  await page.click('button:has-text("Continue")');
  await page.click('button:has-text("Continue")');
  await page.click('button:has-text("Get started")');
}