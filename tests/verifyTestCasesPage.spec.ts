import { test, expect } from '../fixtures/fixture.js';
import { MainPage } from '../pages/mainPage.js';

test.describe('Main Page Tests', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
  });

  test('Verify Test Cases Page', async ({ page }) => {
    await mainPage.open();
    await mainPage.testCasesCategory.click();
    await expect(page).toHaveTitle('Automation Practice Website for UI Testing - Test Cases');
  });
});