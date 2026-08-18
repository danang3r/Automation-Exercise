import { ProductsPage } from "../pages/productsPage.js";
import { MainPage } from "../pages/mainPage.js";
import { test, expect } from '../fixtures/fixture.js';


test.describe('Verify Search Functionality', () => {

        let mainPage: MainPage;
        let productsPage: ProductsPage;

        test.beforeEach(async ({ page }) => {
            mainPage = new MainPage(page);
            productsPage = new ProductsPage(page);
        });

        test('Verify products search functionality', async ({}) => {
        await mainPage.open();
        await mainPage.productsCategory.click();
        await productsPage.searchProductField.fill('Top');
        await productsPage.searchSubmitButton.click();
        await expect(productsPage.searchedProductsHeader).toBeVisible();
        await expect(productsPage.allProductsList).toBeVisible();
    });
});