import "dotenv/config";
import { chromium } from "@playwright/test";
import fs from "fs";
import { config } from "../config/env";
import { getExtensionPath } from "../config/extensions";
import { getWallet } from "../src/data/wallets";
import {runExtensionSetup} from "../src/utils/extension-registry";

const walletName = process.argv[2];
const walletType = process.argv[3]; // phantom | metamask

if (!walletName || !walletType) {
    console.error("Usage: setup-wallet <wallet-name> <wallet-type>");
    process.exit(1);
}

async function run() {
    const wallet = getWallet(walletName);

    const profileDir = config.getProfileDir(walletType, walletName);
    const extPath = getExtensionPath(walletType);

    console.log(`Setting up ${walletType} wallet "${walletName}"`);

    fs.rmSync(profileDir, { recursive: true, force: true });

    const context = await chromium.launchPersistentContext(profileDir, {
        headless: false,
        locale: "en-US",
        args: [
            `--disable-extensions-except=${extPath}`,
            `--load-extension=${extPath}`,
        ],
    });

    await runExtensionSetup(walletType, context, wallet);

    await context.close();

    console.log(`Profile saved to ${profileDir}`);
}

run().catch((err) => {
    console.error("Setup failed:", err);
    process.exit(1);
});