import { MainPage } from '../../pages/mainPage.js';
import {test, expect} from '../../fixtures/fixture.js';
import { CartPage } from '../../pages/cart.js';
import { ProductPage } from '../../pages/productPage.js';


test.describe('Add Product To Cart', () => {

    let mainPage: MainPage;
    let cartPage: CartPage;
    let productPage: ProductPage;

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        cartPage = new CartPage(page);
        productPage = new ProductPage(page);
    });

    test('Verify add product to cart', async ({page}) => {
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
        await expect(cartPage.product2).toBeVisible();
    });

    test('Verify Product quantity in Cart', async ({page}) => {
        await mainPage.open();
        await mainPage.firstFeaturedItem.click();
        await productPage.quantityField.clear();
        await productPage.quantityField.fill('4');
        await productPage.addToCart.click();
        await expect(page.getByText('Your product has been added to cart.')).toBeVisible();
        await mainPage.viewCartButtonModalWindow.click();
        await expect(cartPage.product1).toBeVisible();
        await expect(cartPage.product1Quantity).toHaveText('4');
    });
});