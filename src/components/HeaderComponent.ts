import { Page } from "@playwright/test";

export class HeaderComponent {
  private static readonly S = {
    signInBtn: '[data-testid="sign-in-btn"], button:has-text("Sign In")',
  };

  constructor(private readonly page: Page) {}

  async clickSignIn() {
    await this.page.locator(HeaderComponent.S.signInBtn).click();
  }

  async isSignInButtonDisplayed() {
    return await this.page.locator(HeaderComponent.S.signInBtn).isVisible();
  }
}