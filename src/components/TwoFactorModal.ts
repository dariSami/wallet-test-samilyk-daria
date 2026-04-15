import {Page} from "@playwright/test";

export class TwoFactorModal {
    private static readonly S = {
        modal: '[data-sentry-component="OnboardingTwoFA"]',
        skipBtn: 'div.text-sm:has-text("Skip")',
    };

    constructor(private readonly page: Page) {}

    async skip() {
        const btn = this.page.locator(TwoFactorModal.S.skipBtn).last();
        await btn.waitFor({ state: "visible" });
        await btn.click();
    }
}