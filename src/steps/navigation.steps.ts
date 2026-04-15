import { Given, When } from "../support/steps";

Given("I navigate to the Discover page", async function () {
  await this.ui.discoverPage().open();
});

Given("I navigate to the Account page", async function () {
  await this.ui.accountPage().open();
});

When("I click Sign In button", async function () {
  await this.ui.header().clickSignIn();
});

When("I complete the onboarding profile", async function () {
  if (!this.walletCredentials) {
    throw new Error("No wallet credentials available");
  }

  await this.ui
      .usernameModal()
      .completeIfVisible(this.walletCredentials.walletName);

  await this.ui.twoFactorModal().skip();
});

When("I log out", async function () {
  await this.ui.accountPage().logout();
});