import { MainPage } from '../../pages/mainPage.js';
import {test, expect} from '../../fixtures/fixture.js';
import { CartPage } from '../../pages/cartPage.js';
import { ProductPage } from '../../pages/productPage.js';
import { SignupLoginPage } from '../../pages/signupLoginPage.js';
import { paymentData, validUser } from '../../data/users.js';

test.describe('Check out items', () => {

    let mainPage: MainPage;
    let cartPage: CartPage;
    let productPage: ProductPage;
    let signupLoginPage: SignupLoginPage;

    test.beforeEach(async ({page}) => {
            mainPage = new MainPage(page);
            cartPage = new CartPage(page);
            productPage = new ProductPage(page);
            signupLoginPage = new SignupLoginPage(page);
      
    });

    test('Verify login when checking out', async ({page}) => {
        await mainPage.open();
        await mainPage.firstFeaturedItem.hover();
        await mainPage.firstItemAddToCartBtnFromOverlay.click();
        await mainPage.viewCartButtonModalWindow.click();
        await expect(page).toHaveTitle('Automation Exercise - Checkout');
        await cartPage.proceedToCheckoutButton.click();
        await expect(page.getByText('Register / Login account to proceed on checkout.')).toBeVisible();
        await cartPage.registerOrLoginCheckoutButton.click();
        await signupLoginPage.loginEmailField.fill(validUser.email);
        await signupLoginPage.loginPasswordField.fill(validUser.password);
        await signupLoginPage.loginButton.click();
        await mainPage.cartCategory.click();
        await cartPage.proceedToCheckoutButton.click();
        await expect(page.getByText('Review Your Order')).toBeVisible();
        await page.locator("//a[@class='btn btn-default check_out']").click();
        await page.locator("//input[@data-qa='name-on-card']").fill(paymentData.name);
        await page.locator("//input[@data-qa='card-number']").fill(paymentData.cardNumber);
        await page.locator("//input[@data-qa='cvc']").fill(paymentData.cvc);
        await page.locator("//input[@data-qa='expiry-month']").fill(paymentData.expiryMM);
        await page.locator("//input[@data-qa='expiry-year']").fill(paymentData.expiryYYYY);
        await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();
    });

    test('Verify register when checking out', async ({page, user}) => {
        await mainPage.open();
        await mainPage.firstFeaturedItem.hover();
        await mainPage.firstItemAddToCartBtnFromOverlay.click();
        await mainPage.viewCartButtonModalWindow.click();
        await expect(page).toHaveTitle('Automation Exercise - Checkout');
        await cartPage.proceedToCheckoutButton.click();
        await expect(page.getByText('Register / Login account to proceed on checkout.')).toBeVisible();
        await cartPage.registerOrLoginCheckoutButton.click();
        await signupLoginPage.fillRegistrationFields(user);
        await signupLoginPage.enterMaleAccountInfo(user);
        await signupLoginPage.submitRegistrationForm();
        await expect(page.getByText('Account Created!')).toBeVisible();
        await mainPage.cartCategory.click();
        await cartPage.proceedToCheckoutButton.click();
        await expect(page.getByText('Review Your Order')).toBeVisible();
        await page.locator("//a[@class='btn btn-default check_out']").click();
        await page.locator("//input[@data-qa='name-on-card']").fill(paymentData.name);
        await page.locator("//input[@data-qa='card-number']").fill(paymentData.cardNumber);
        await page.locator("//input[@data-qa='cvc']").fill(paymentData.cvc);
        await page.locator("//input[@data-qa='expiry-month']").fill(paymentData.expiryMM);
        await page.locator("//input[@data-qa='expiry-year']").fill(paymentData.expiryYYYY);
        await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();
        await mainPage.deleteAccountButton.click();
        await expect(page.getByText('Account Deleted!')).toBeVisible();
    });
});