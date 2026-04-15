import { Page } from "@playwright/test";
import { BasePage } from "../core/BasePage";

export class DiscoverPage extends BasePage {
  constructor(page: Page, private readonly url: string) {
    super(page);
  }

  async open() {
    await this.navigate(this.url);
  }
}
