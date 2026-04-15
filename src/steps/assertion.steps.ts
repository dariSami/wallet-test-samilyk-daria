import { Then } from "../support/steps";
import { expect } from "@playwright/test";

Then("I should see correct wallet balance", async function () {
  const portfolio = this.ui.portfolioPage();

  await portfolio.open();

  const actualBalance = await portfolio.getSolBalance();
  const expectedBalance = Number(this.walletCredentials!.nativeBalance);

  expect(actualBalance).toBe(expectedBalance);
});

Then("I should see correct wallet username", async function () {
  const account = this.ui.accountPage();

  await account.open();

  const actualUsername = await account.getUsername();
  const expectedUsername = this.walletCredentials!.walletName;

  expect(actualUsername).toBe(expectedUsername);
});