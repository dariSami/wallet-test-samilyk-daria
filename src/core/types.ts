import { Page } from "@playwright/test";

export type WalletProvider = "Phantom" | "Metamask";

export interface IPage {
  readonly page: Page;
}

export interface IWalletExtension {
  approve(): Promise<void>;
}
