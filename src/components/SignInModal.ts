import { Page } from "@playwright/test";

export class SignInModal {
  private static readonly S = {
    modal: 'text="Sign in or create an account"',
    connectWalletBtn: 'button:has-text("Connect with Wallet")',
  };

  constructor(private readonly page: Page) {}

  async waitForOpen() {
    await this.page.locator(SignInModal.S.modal).first().waitFor({ state: "visible" });
  }

  async clickConnectWithWallet() {
    const btn = this.page.locator(SignInModal.S.connectWalletBtn);

    await this.waitForOpen();
    await btn.waitFor({ state: "visible" });
    await btn.click();
  }
}