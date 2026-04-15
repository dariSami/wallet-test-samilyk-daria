import { Page } from "@playwright/test";
import { IPage } from "./types";

export class BasePage implements IPage{
  constructor(readonly page: Page) {}

  protected async navigate(url: string) {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }

  protected async click(selector: string) {
    const locator = this.page.locator(selector).first();

    await locator.waitFor({ state: "visible", timeout: 10_000 });
    await locator.click();
  }
}