import { Page } from "@playwright/test";

import { HeaderComponent } from "../components/HeaderComponent";
import { SignInModal } from "../components/SignInModal";
import { WalletProviderModal } from "../components/WalletProviderModal";
import { UsernameModal } from "../components/UsernameModal";
import { TwoFactorModal } from "../components/TwoFactorModal";
import { DiscoverPage } from "../pages/DiscoverPage";
import {routes} from "../data/routes";
import {config} from "../../config/env";
import {PortfolioPage} from "../pages/PortfolioPage";
import {AccountPage} from "../pages/AccountPage";
import {SelectChainModal} from "../components/SelectChainModal";

export class UIFactory {
    constructor(private readonly page: Page) {}

    header() {
        return new HeaderComponent(this.page);
    }

    signInModal() {
        return new SignInModal(this.page);
    }

    walletProviderModal() {
        return new WalletProviderModal(this.page);
    }

    usernameModal() {
        return new UsernameModal(this.page);
    }

    selectChainModal() {
        return new SelectChainModal(this.page);
    }

    twoFactorModal() {
        return new TwoFactorModal(this.page);
    }

    discoverPage() {
        const url = new URL(routes.discover, config.baseUrl).toString();
        return new DiscoverPage(this.page, url);
    }

    portfolioPage() {
        const url = new URL(routes.portfolio, config.baseUrl).toString();
        return new PortfolioPage(this.page, url);
    }

    accountPage() {
        const url = new URL(routes.account, config.baseUrl).toString();
        return new AccountPage(this.page, url);
    }
}