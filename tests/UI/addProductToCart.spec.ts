import { MainPage } from '../../pages/mainPage.js';
import {test, expect} from '../../fixtures/fixture.js';
import { CartPage } from '../../pages/cartPage.js';
import { ProductPage } from '../../pages/productPage.js';
import { SignupLoginPage } from '../../pages/signupLoginPage.js';
import { validUser } from '../../data/users.js';


test.describe('Add Product To Cart', () => {

    let mainPage: MainPage;
    let cartPage: CartPage;
    let productPage: ProductPage;
    let authPage: SignupLoginPage;


    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        cartPage = new CartPage(page);
        productPage = new ProductPage(page);
        authPage = new SignupLoginPage(page);
    });

    test('Verify add product to cart from the main page', async ({page}) => {
        await mainPage.open();
        await mainPage.firstFeaturedItem.hover();
        await mainPage.firstItemAddToCartBtnFromOverlay.click();
        await expect(page.getByText('Your product has been added to cart.')).toBeVisible();
        await mainPage.continueShoppingButton.click();
        await mainPage.secondFeaturedItem.hover();
        await mainPage.secondItemAddToCartBtnFromOverlay.click();
        await mainPage.viewCartButtonModalWindow.click();
        await expect(page).toHaveTitle('Automation Exercise - Checkout');
        await expect(cartPage.product1).toBeVisible();
        await expect(cartPage.product1Quantity).toHaveText('1');
        await expect(cartPage.product2).toBeVisible();

    });

    test('Verify the items and quantities in the cart that were added from the product page', async ({page}) => {
        await mainPage.open();
        await mainPage.firstFeaturedItem.hover();
        await mainPage.viewfirstFeaturedItem.click();
        await productPage.quantityField.fill('4');
        await productPage.addToCart.click();
        await expect(page.getByText('Your product has been added to cart.')).toBeVisible();
        await productPage.viewCart.click();
        await expect(page).toHaveTitle('Automation Exercise - Checkout');
        await expect(cartPage.product1).toBeVisible();
        await expect(cartPage.product1Quantity).toHaveText('4');

    });

    test('Verify cart items and quantities after login', async ({page}) => {
        await mainPage.open();
        await mainPage.firstFeaturedItem.hover();
        await mainPage.viewfirstFeaturedItem.click();
        await productPage.quantityField.fill('5');
        await productPage.addToCart.click();
        await productPage.continueShopping.click();
        await authPage.openSignUpLoginPage();
        await authPage.loginEmailField.fill(validUser.email);
        await authPage.loginPasswordField.fill(validUser.password);
        await authPage.loginButton.click();
        await mainPage.cartCategory.click();
        await expect(page).toHaveTitle('Automation Exercise - Checkout');
        await expect(cartPage.product1).toBeVisible();
        await expect(cartPage.product1Quantity).toHaveText('5');
        await cartPage.deleteCartQuantity.click();
    });

    test('Verify cart items and quantities after sign up', async ({page, user}) => {
        await mainPage.open();
        await mainPage.firstFeaturedItem.hover();
        await mainPage.viewfirstFeaturedItem.click();
        await productPage.quantityField.fill('6');
        await productPage.addToCart.click();
        await productPage.continueShopping.click();
        await authPage.openSignUpLoginPage();
        await authPage.fillRegistrationFields(user);
        await authPage.enterMaleAccountInfo(user);
        await authPage.submitRegistrationForm();
        await expect(page.getByText('Account Created!')).toBeVisible();
        await mainPage.cartCategory.click();
        await expect(page).toHaveTitle('Automation Exercise - Checkout');
        await expect(cartPage.product1).toBeVisible();
        await expect(cartPage.product1Quantity).toHaveText('6');
        await cartPage.deleteCartQuantity.click();
        await mainPage.deleteAccountButton.click();
        await expect(page.getByText('Account Deleted!')).toBeVisible();
    });
});