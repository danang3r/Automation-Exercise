import { test, expect } from '../fixtures/fixture.js';
import { MainPage } from '../pages/mainPage.js';
import { ProductsPage } from '../pages/productsPage.js';


test.describe('Add Review On Products', () => {

  let mainPage: MainPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    productsPage = new ProductsPage(page);
  });

test('Add review on a product', async ({ page }) => {
    await page.goto('/');
    await mainPage.productsCategory.click();
    await expect(page.url()).toContain('/products');   
    await productsPage.viewFirstProduct.click();
    await expect(page.getByText('Write Your Review')).toBeVisible();
    await page.getByPlaceholder('Your Name').fill('Some Name');
    await page.locator("//input[@id='email']").fill('blablamail@gmail.com');
    await page.getByPlaceholder('Add Review Here!').fill('My Review');
    await page.locator("//button[@id='button-review']").click();
    await expect(page.getByText('Thank you for your review.')).toBeVisible();
    });
});
