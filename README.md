# TradeGenius Wallet Auth — E2E Tests

BDD test suite for wallet-based authentication on the TradeGenius platform.

Stack: Playwright · Cucumber.js · TypeScript · Page Object Model

**Stack:** Playwright · Cucumber.js · TypeScript · Page Object Model

### Tag-driven setup

Browser and wallet configuration is controlled by feature-level tags, not step definitions:

```gherkin
@ext:phantom @wallet:main           # Phantom extension + main wallet
Feature: Wallet Authentication

@ext:phantom @wallet:low_balance     # Phantom + low balance wallet
Feature: Insufficient balance flows

@ext:metamask @wallet:main           # MetaMask extension + main wallet
Feature: MetaMask Authentication

@ext:none                            # No extension (edge cases)
Feature: Missing extension
```

The `Before` hook in `hooks.ts` parses these tags and calls `world.init()` with the right extension and wallet. Steps never deal with browser setup.


## Setup

```bash
npm install
npx playwright install chromium


### Extensions

Place unpacked extensions in `extensions/{name}/` so that `manifest.json` is at the root:

```
extensions/
  phantom/manifest.json
  metamask/manifest.json     # when needed
```

### Wallet pre-setup

Before running tests, each wallet must be initialized into a persistent browser profile. This imports the seed phrase, sets the password, and saves the browser state so tests don't repeat onboarding on every run.

```bash
# npm run setup:wallet:<extension>:<wallet-name>

npm run setup:wallet:phantom:main            # Phantom + main wallet
npm run setup:wallet:phantom:low_balance     # Phantom + low balance wallet
npm run setup:wallet:metamask:main           # MetaMask + main wallet (when supported)
```

Each command creates a profile in `.tmp/<extension>-<wallet>` (e.g. `.tmp/phantom-main`). Tests reuse these profiles automatically based on `@ext:` and `@wallet:` tags in feature files.

Re-run the setup script if you need to reset a wallet profile (e.g. after changing credentials in `.env`).

## Running

```bash
npm test                    # all scenarios
npm run test:dev            # all on dev environment
npm run test:prod           # all on prod environment
npm run test:smoke          # @smoke only

```

## Reports

HTML report: `reports/cucumber-report.html`

Failed scenarios get a full-page screenshot saved to `reports/screenshots/`.
