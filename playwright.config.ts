
import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

const uiTestMatch = '**/UI/**/*.@(spec|test).ts';
const apiTestMatch = '**/API/**/*.spec.ts';

export default defineConfig({
  testDir: './tests',

  // Test execution
  timeout: 30_000,

  expect: {
    timeout: 5_000,
  },

  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,

  // Test reports
  reporter: [
    ['html', { open: isCI ? 'never' : 'on-failure' }],
    ['allure-playwright'],
  ],

  // Shared settings
  use: {
    baseURL: 'https://automationexercise.com',
    headless: true,

    // Collect debugging information only when needed
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  // Separate test suites by type
  projects: [
    {
      name: 'chromium',
      testMatch: uiTestMatch,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },

    {
      name: 'firefox',
      testMatch: uiTestMatch,
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
      },
    },

    {
      name: 'webkit',
      testMatch: uiTestMatch,
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
    },

    {
      name: 'api',
      testMatch: apiTestMatch,
      use: {
        trace: 'off',
        video: 'off',
        screenshot: 'off',
      },
    },
  ],
});
