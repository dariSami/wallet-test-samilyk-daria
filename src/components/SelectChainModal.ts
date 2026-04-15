import {Chain} from "../core/types";
import {Page} from "@playwright/test";

export class SelectChainModal {
    private static readonly S = {
        modal: 'text="Select Chain for Phantom"',
        chainOption: (chain: Chain) => `button:has-text("${chain}")`,
    };

    constructor(private readonly page: Page) {}

    async waitForOpen() {
        await this.page.locator(SelectChainModal.S.modal).waitFor({ state: "visible" });
    }

    async selectChain(chain: Chain) {
        await this.waitForOpen();

        const option = this.page.locator(SelectChainModal.S.chainOption(chain));
        await option.waitFor({ state: "visible" });
        await option.click();
    }
}