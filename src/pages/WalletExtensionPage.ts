import { Page } from "@playwright/test";
import {IWalletExtension} from "../core/types";

const S = {
  passwordInput: 'input[data-testid="unlock-form-password-input"]',
  unlockBtn: 'button:has-text("Unlock")',
  connectBtn: 'button:has-text("Connect")',
  confirmBtn: 'button:has-text("Confirm")',
};

type WaitForPopup = () => Promise<Page>;

export class WalletExtensionPage implements IWalletExtension {

  constructor(
      private popup: Page,
      private readonly password: string,
      private readonly waitForPopup: WaitForPopup,
  ) {}

  async approve() {
    await this.popup.waitForLoadState("domcontentloaded");
    await this.unlockIfNeeded();

    const firstAction = this.popup
        .locator(`${S.connectBtn}, ${S.confirmBtn}`)
        .first();
    await firstAction.waitFor({ state: "visible", timeout: 10_000 });

    let hasMore = await this.clickAndCatchNextPopup(firstAction);

    while (hasMore) {
      const confirmBtn = this.popup.locator(S.confirmBtn).first();
      hasMore = await this.clickAndCatchNextPopup(confirmBtn);
    }
  }

  private async clickAndCatchNextPopup(locator: import("@playwright/test").Locator): Promise<boolean> {
    const nextPopup = this.waitForPopup();
    await locator.click();
    await this.waitForClose();

    try {
      const timeout = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("no popup")), 5_000),
      );
      this.popup = await Promise.race([nextPopup, timeout]);
      await this.popup.waitForLoadState("domcontentloaded");
      return true;
    } catch {
      return false;
    }
  }

  private async unlockIfNeeded() {
    const passwordField = this.popup.locator(S.passwordInput);
    await passwordField.fill(this.password);
    await this.clickInPopup(S.unlockBtn);
  }

  private async clickInPopup(selector: string) {
    const locator = this.popup.locator(selector);
    await locator.waitFor({ state: "visible", timeout: 10_000 });
    await locator.click();
  }

  private async waitForClose(timeout = 10_000) {
    if (this.popup.isClosed()) return;

    await this.popup
        .waitForEvent("close", { timeout })
        .catch(() => {
          throw new Error(
              "Wallet popup did not close within timeout. "
          );
        });
  }
}
