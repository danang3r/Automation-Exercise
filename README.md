# Automation Exercise — Playwright Test Automation

A test automation project for [Automation Exercise](https://automationexercise.com), built with **Playwright Test** and **TypeScript**.

The project includes UI and API automated tests, Page Object Model architecture, reusable fixtures, test data utilities, and cross-browser execution.

## Tech Stack

- **Language:** TypeScript
- **Test framework:** Playwright Test
- **Runtime:** Node.js
- **Package manager:** npm
- **UI automation:** Playwright
- **API testing:** Playwright APIRequestContext
- **Design pattern:** Page Object Model (POM)
- **Test reports:** Playwright HTML Reporter, Allure
- **CI/CD:** GitHub Actions

## Project Architecture

```text
.
├── data/                 # Test data and image fixtures
├── fixtures/             # Custom Playwright fixtures
├── pages/                # Page Object Model classes and locators
├── tests/
│   ├── API/              # API test specifications
│   └── UI/               # UI test specifications
├── utils/                # Test data factories and shared utilities
├── .github/
│   └── workflows/        # GitHub Actions workflows
├── playwright.config.ts  # Playwright configuration
├── package.json          # Dependencies and npm scripts
├── package-lock.json     # Dependency lockfile
└── tsconfig.json         # TypeScript configuration
```

## Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/) (LTS version)
- npm
- [Git](https://git-scm.com/)

## Installation

Clone the repository:

```bash
git clone https://github.com/danang3r/Automation-Exercise.git
cd Automation-Exercise
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

To install all required browser dependencies on Linux:

```bash
npx playwright install --with-deps
```

## Running Tests

### Run the complete test suite

```bash
npm test
```

### Run UI tests

Run UI tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run UI tests in all configured browsers:

```bash
npx playwright test tests/UI
```

### Run API tests

```bash
npx playwright test --project=api
```

### Run a specific test file

```bash
npx playwright test tests/UI/login.spec.ts
```

### Run tests by title

```bash
npx playwright test -g "test title"
```

### Playwright UI mode

```bash
npm run test:ui
```

### Headed mode

```bash
npm run test:headed
```

### Debug mode

```bash
npm run test:debug
```

## Type Checking

Run TypeScript type checking without generating output files:

```bash
npm run typecheck
```

## Playwright Configuration

The project uses separate Playwright projects to organize UI and API test execution.

| Project | Test scope | Execution |
|---|---|---|
| `chromium` | UI tests | Chromium |
| `firefox` | UI tests | Firefox |
| `webkit` | UI tests | WebKit |
| `api` | API tests | Single execution, without browser-specific repetition |

### Test matching

UI tests are selected using:

```typescript
'**/UI/**/*.@(spec|test).ts'
```

API tests are selected using:

```typescript
'**/API/**/*.spec.ts'
```

This separation ensures that UI tests run across the configured browsers, while API tests execute only once.

### Execution settings

- Fully parallel test execution locally.
- A single worker in CI to reduce potential test data conflicts.
- Two retries in CI for failed tests.
- `test.only` is prohibited in CI.
- Test timeout: 30 seconds.
- Assertion timeout: 5 seconds.
- Headless browser execution.
- Desktop viewport: 1920 × 1080.

### Debugging artifacts

The following artifacts are collected when tests fail:

- **Trace:** `retain-on-failure`
- **Video:** `retain-on-failure`
- **Screenshot:** `only-on-failure`

## Reports

The project uses two reporting tools.

### Playwright HTML Report

After test execution, open the HTML report:

```bash
npx playwright show-report
```

### Allure Report

Allure test results are generated in the `allure-results` directory.

To generate and open the report, install the Allure CLI and run:

```bash
allure generate ./allure-results -o ./allure-report
allure open ./allure-report
```

## Continuous Integration — GitHub Actions

The project uses GitHub Actions to automate test execution in a CI environment.

The CI workflow is intended to:

1. Trigger on pushes and pull requests targeting `main`.
2. Set up the Node.js environment.
3. Install dependencies using `npm ci`.
4. Install Playwright browsers and their system dependencies.
5. Run TypeScript type checking.
6. Execute the automated test suite.
7. Upload test reports and debugging artifacts.

The workflow runs on a GitHub-hosted Ubuntu runner.

Test reports and artifacts can be downloaded from the corresponding GitHub Actions workflow run.

## Test Coverage

### UI Tests

The UI test suite covers the main scenarios available on the [Automation Exercise Test Cases](https://automationexercise.com/test_cases) page:

- User registration and login
- Home page element verification
- Product search and product details
- Adding products to the shopping cart
- Product reviews
- Contact form submission
- Subscription functionality
- Test Cases page verification

### API Tests

The API test suite covers scenarios from the [Automation Exercise API List](https://automationexercise.com/api_list):

- Retrieving all products and brands
- Validating unsupported requests to products and brands endpoints
- Product search and missing parameter validation
- Login with valid, invalid, and incomplete credentials
- Unsupported `DELETE /api/verifyLogin` request
- Creating, updating, retrieving, and deleting user accounts

Account-related tests generate unique email addresses and clean up temporary accounts after execution.

## NPM Scripts

| Script | Description |
|---|---|
| `npm test` | Run the complete test suite |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run test:headed` | Run tests in headed mode |
| `npm run test:debug` | Run tests in debug mode |
| `npm run typecheck` | Run TypeScript type checking |

---

**Target application:** [Automation Exercise](https://automationexercise.com)  
**Test framework:** Playwright Test  
**Language:** TypeScript  
**Repository:** [danang3r/Automation-Exercise](https://github.com/danang3r/Automation-Exercise)