import {Before, After, BeforeAll, Status, setDefaultTimeout} from "@cucumber/cucumber";
import fs from "fs";
import path from "path";
import { TestWorld } from "./world";
import { parseScenarioTags } from "./tag-parser";

setDefaultTimeout(20_000);

const SCREENSHOTS_DIR = path.resolve(
  __dirname, "..", "..", "reports", "screenshots",
);

BeforeAll(() => {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
});

/**
 * Reads @ext: and @wallet: tags from the scenario/feature
 * and launches the browser with the right extension and wallet.
 * No need for "Given the browser is launched..." steps anymore.
 */
Before<TestWorld>(async function (scenario) {
  this.scenarioName = scenario.pickle.name;

  const { extension, walletName } = parseScenarioTags(scenario.pickle);
  await this.init(extension, walletName);
});

After<TestWorld>(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const safeName = this.scenarioName.replace(/\W+/g, "_").slice(0, 80);
    const filepath = path.join(
      SCREENSHOTS_DIR,
      `${safeName}_${Date.now()}.png`,
    );

    try {
      const buffer = await this.page.screenshot({ fullPage: true });
      fs.writeFileSync(filepath, buffer);
      this.attach(buffer, "image/png");
    } catch (err) {
      console.warn("screenshot failed:", err);
    }
  }

  await this.cleanup();
});
