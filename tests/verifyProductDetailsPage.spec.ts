import {ProductsPage} from '../pages/productsPage.js';
import { test, expect } from '../fixtures/fixture.js';
import { ProductItemPage } from '../pages/productItemPage.js';
import { MainPage } from '../pages/mainPage.js';


test.describe('Verify product details page', () => {
    let mainPage: MainPage;
    let productsPage: ProductsPage;
    let productItemPage: ProductItemPage;

    test.beforeEach(async ({ page }) => {
        productsPage = new ProductsPage(page);
        productItemPage = new ProductItemPage(page);
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
        await expect(productItemPage.productName).toHaveText(/\S+/);
        await expect(productItemPage.category).toHaveText(/\S+/);
        await expect(productItemPage.price).toHaveText(/\S+/);
        await expect(productItemPage.availability).toHaveText(/\S+/);
        await expect(productItemPage.condition).toHaveText(/\S+/);
        await expect(productItemPage.brand).toHaveText(/\S+/);
    });
});