import {Page} from "@playwright/test";
import {BasePage} from "../core/BasePage";

export class PortfolioPage extends BasePage {
    private static readonly S = {
        solRow: 'a[href*="So11111111111111111111111111111111111111112"]',
        solBalance: 'div.text-xs',
    };

    constructor(page: Page, private readonly url: string) {
        super(page);
    }

    async open() {
        await this.navigate(this.url);
    }

    async getSolBalance(): Promise<number> {
        const row = this.page.locator(PortfolioPage.S.solRow);
        await row.waitFor({ state: "visible" });
        const text = await row.locator(PortfolioPage.S.solBalance).textContent();

        if (!text) {
            throw new Error("SOL balance not found");
        }

        return Number(text.replace(" SOL", "").trim());
    }
}