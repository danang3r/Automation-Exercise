import { test, expect } from '../../fixtures/fixture.js';
import { MainPage } from '../../pages/mainPage.js';


test.describe('Verify Scroll Up Arrow Button', () => {
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
    });

    test('Verify scroll up arrow button', async () => {
        await mainPage.open();
        await mainPage.subscribeButton.scrollIntoViewIfNeeded();
        await expect(mainPage.subscriptionField).toBeInViewport();
        await mainPage.scrollUpArrowButton.click();
        await expect(mainPage.logo).toBeInViewport();
    });
});