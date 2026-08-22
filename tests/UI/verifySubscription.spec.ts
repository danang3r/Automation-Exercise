import { MainPage } from '../../pages/mainPage.js';
import {test, expect} from '../../fixtures/fixture.js';
import {existingUser} from '../../data/users.js';
import { CartPage } from '../../pages/cartPage.js';


test.describe('Subscription Verification', () => {

    let mainPage: MainPage;
    let cartPage: CartPage;

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        cartPage = new CartPage(page);
    });

    test('Verify subscription on main page', async ({}) => {
        await mainPage.open();
        await mainPage.subscriptionField.scrollIntoViewIfNeeded();
        await mainPage.subscriptionField.fill(existingUser.email);
        await mainPage.subscribeButton.click();
        await expect(mainPage.successfulSubscribeAlert).toBeVisible();
    });

    test('Verify subscription on cart page', async ({page}) => {
        await mainPage.open();
        await mainPage.cartCategory.click();
        await expect(page).toHaveTitle('Automation Exercise - Checkout');
        await cartPage.subscriptionField.fill(existingUser.email);
        await cartPage.subscribeButton.click();
        await expect(cartPage.successfulSubscribeAlert).toBeVisible();
    });
});
