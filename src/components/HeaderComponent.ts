import { Page } from "@playwright/test";

export class HeaderComponent {
  private static readonly S = {
    signInBtn: '[data-testid="sign-in-btn"], button:has-text("Sign In")',
    walletAddress: '[data-testid="wallet-address"], .wallet-address',
    profileInfo: '[data-testid="user-profile"], .profile-avatar',
  };

  constructor(private readonly page: Page) {}

  async clickSignIn() {
    await this.page.locator(HeaderComponent.S.signInBtn).first().click();
  }
}