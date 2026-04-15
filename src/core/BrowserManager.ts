import { chromium, BrowserContext, Page } from "@playwright/test";
import { config } from "../../config/env";
import { getBrowserOptions } from "../../config/browser.config";

export class BrowserManager {
  context!: BrowserContext;
  page!: Page;

  async launch(
      extensionName: string | null,
      walletName: string,
  ): Promise<Page> {
    const options = getBrowserOptions(extensionName);

    const profileDir = extensionName
        ? config.getProfileDir(extensionName, walletName)
        : config.getProfileDir("no-ext", "default");

    this.context = await chromium.launchPersistentContext(
        profileDir,
        options,
    );

    this.page = await this.getMainPage();

    return this.page;
  }

  private async getMainPage(): Promise<Page> {
    const pages = this.context.pages();

    if (pages.length > 0) {
      const page = pages[0];
      await page.waitForLoadState("domcontentloaded");
      return page;
    }

    return await this.context.waitForEvent("page");
  }

  async waitForPopup(): Promise<Page> {
    const page = await this.context.waitForEvent("page");
    await page.waitForLoadState("domcontentloaded");
    return page;
  }

  async close() {
    await this.context.close().catch(() => {});
  }
}