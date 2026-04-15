import { Page } from "@playwright/test";

export class UsernameModal {
    private static readonly S = {
        usernameInput: 'input[placeholder*="SexyEinstein"]',
        nextBtn: 'button:has-text("Next")',
    };

    constructor(private readonly page: Page) {}

    async isOpen(): Promise<boolean> {
        return this.page.locator(UsernameModal.S.usernameInput)
            .first()
            .isVisible()
            .catch(() => false);
    }

    async fillUsername(username: string) {
        const input = this.page.locator(UsernameModal.S.usernameInput).first();

        await input.waitFor({ state: "visible" });
        await input.fill(username);
    }

    async clickNext() {
        await this.page.locator(UsernameModal.S.nextBtn).first().click();
    }

    async completeIfVisible(username: string) {
        if (!(await this.isOpen())) return;

        await this.fillUsername(username);
        await this.clickNext();
    }
}