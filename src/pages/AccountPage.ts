import {Page} from "@playwright/test";
import {BasePage} from "../core/BasePage";

export class AccountPage extends BasePage {
    private static readonly S = {
        username: 'div:text-matches("^@")',
        logOutButton: 'button:has-text("Log Out")',
    };

    constructor(page: Page, private readonly url: string) {
        super(page);
    }

    async open() {
        await this.navigate(this.url);
    }

    async getUsername(): Promise<string> {
        const el = this.page.locator(AccountPage.S.username).first();
        await el.waitFor({ state: "visible" });
        const text = await el.textContent();

        if (!text) {
            throw new Error("Username not found");
        }

        return text.replace("@", "").trim();
    }

    async logout() {
        await this.page.locator(AccountPage.S.logOutButton).first().click();
    }
}