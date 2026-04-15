import { World, setWorldConstructor, IWorldOptions } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import { BrowserManager } from "../core/BrowserManager";
import { WalletExtensionPage } from "../pages/WalletExtensionPage";
import {getWallet, WalletCredentials} from "../data/wallets";
import {UIFactory} from "../ui/ui-factory";

export class TestWorld extends World {
  browser = new BrowserManager();
  page!: Page;
  ui!: UIFactory;

  walletCredentials: WalletCredentials | null = null;

  scenarioName = "";

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(extensionName: string | null, walletName: string) {
    this.walletCredentials = extensionName ? getWallet(walletName) : null;

    this.page = await this.browser.launch(extensionName, walletName);

    this.ui = new UIFactory(this.page);
  }

  async waitForWalletPopup(): Promise<WalletExtensionPage> {
    if (!this.walletCredentials) {
      throw new Error("No wallet credentials available");
    }

    const popupPage = await this.browser.waitForPopup();

    return new WalletExtensionPage(
        popupPage,
        this.walletCredentials.password,
        () => this.browser.waitForPopup(),
    );
  }

  async cleanup() {
    await this.browser.close();
  }
}

setWorldConstructor(TestWorld);