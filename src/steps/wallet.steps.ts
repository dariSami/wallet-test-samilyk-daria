import { When } from "../support/steps";
import {WalletProvider} from "../core/types";

When("I click Connect with Wallet", async function () {
  await this.ui.signInModal().clickConnectWithWallet();
});

When("I select {string} from the wallet provider modal", async function (wallet: WalletProvider) {
      await this.ui.walletProviderModal().selectWallet(wallet);
    },
);

When("I approve the connection in the Phantom popup", async function () {
    const walletPopup = await this.waitForWalletPopup();
    await walletPopup.approve();
});