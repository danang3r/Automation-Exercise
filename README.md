# WIP Automation Exercise - Playwright Tests

End-to-end UI test automation project for
[Automation Exercise](https://automationexercise.com), built with Playwright and
TypeScript.

## Tech stack

- Playwright Test
- TypeScript
- Node.js and npm
- Allure and Playwright HTML reports

## Prerequisites

- [Node.js](https://nodejs.org/) with npm
- Git

## Installation

Clone the repository:

```bash
git clone git@github.com:danang3r/Automation-Exercise.git
cd Automation-Exercise
```

Install the project dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

## Running tests

Run the entire test suite:

```bash
npm test || npx playwright test
```

Run tests in Playwright UI mode:

```bash
npm run test:ui
```

Run tests in headed mode:

```bash
npm run test:headed || npx playwright test --headed
```

Run tests in debug mode:

```bash
npm run test:debug
```

Run a specific test file:

```bash
npx playwright test tests/UI/login.spec.ts
```

Run tests whose title contains a specific value:

```bash
npx playwright test -g "test title"
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Type checking

Check the TypeScript code without generating output files:

```bash
npm run typecheck
```

## Reports and test artifacts

The project uses the Playwright HTML reporter and Allure reporter. To open the
latest Playwright HTML report, run:

```bash
npx playwright show-report
```

If the Allure command-line tool is installed, generate and open an Allure report
with:

```bash
allure generate ./allure-results -o ./allure-report
allure open ./allure-report
```

Traces, videos, and screenshots are enabled in the Playwright configuration.
Generated artifacts are stored in ignored report and result directories.

## Project structure

```text
.
|-- data/                 # Test data and image fixtures
|-- fixtures/             # Custom Playwright fixtures
|-- pages/                # Page Object Model classes and locators
|-- tests/
|   |-- API/              # API test directory
|   `-- UI/               # UI test specifications
|-- utils/                # Test data factories and shared utilities
|-- playwright.config.ts  # Playwright projects and global configuration
|-- package.json          # Dependencies and npm scripts
`-- tsconfig.json         # TypeScript configuration
```

## Playwright configuration

Tests run against `https://automationexercise.com` with a 1920 x 1080 viewport
in the following desktop browsers:

- Chromium
- Firefox
- WebKit

Tests run fully in parallel. In CI, the configuration uses one worker, retries
failed tests twice, and prevents committed focused tests (`test.only`). Custom
fixtures generate user data and block known advertising domains during test
execution.

## Main test coverage

The current UI suite covers:

- Login and sign-up
- Home page element checks
- Product search and product details
- Adding products to the cart
- Product reviews
- Contact form submission
- Subscription
- Test Cases page verification
