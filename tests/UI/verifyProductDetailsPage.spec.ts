import {ProductsPage} from '../../pages/productsPage.js';
import { test, expect } from '../../fixtures/fixture.js';
import { ProductPage } from '../../pages/productPage.js';
import { MainPage } from '../../pages/mainPage.js';


test.describe('Verify product details page', () => {
    let mainPage: MainPage;
    let productsPage: ProductsPage;
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
        productsPage = new ProductsPage(page);
        productPage = new ProductPage(page);
        mainPage = new MainPage(page);
      });

    test('Verify all products and product details page structure', async ({ page }) => {

        await mainPage.open();
        await mainPage.productsCategory.click();
        await expect(productsPage.specialOfferLogo).toBeVisible();
        await expect(page).toHaveTitle('Automation Exercise - All Products');
        await expect(productsPage.allProductsList).toBeVisible();
        await productsPage.viewFirstProduct.click();
        await expect(page).toHaveTitle('Automation Exercise - Product Details');
        await expect(productPage.productName).toHaveText(/\S+/);
        await expect(productPage.category).toHaveText(/\S+/);
        await expect(productPage.price).toHaveText(/\S+/);
        await expect(productPage.availability).toHaveText(/\S+/);
        await expect(productPage.condition).toHaveText(/\S+/);
        await expect(productPage.brand).toHaveText(/\S+/);
    });
});