import { Page } from "@playwright/test";
import {WalletProvider} from "../core/types";

export class WalletProviderModal {
    private static readonly S = {
        modal: 'text="Connect Wallet"',
        walletOption: (wallet: WalletProvider) => `button:has-text("${wallet}")`,
    };

    constructor(private readonly page: Page) {}

    async waitForOpen() {
        await this.page.locator(WalletProviderModal.S.modal).first().waitFor({ state: "visible" });
    }

    async selectWallet(wallet: WalletProvider) {
        await this.waitForOpen();

        const option = this.page.locator(WalletProviderModal.S.walletOption(wallet)).first();
        await option.waitFor({ state: "visible" });
        await option.click();
    }
}