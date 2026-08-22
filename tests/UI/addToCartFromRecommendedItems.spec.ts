import { test, expect } from '../../fixtures/fixture.js';
import { MainPage } from '../../pages/mainPage.js';
import { CartPage } from '../../pages/cartPage.js';

test.describe('Add To Cart From Recommended Items', () => {

  let mainPage: MainPage;   
  let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
      mainPage = new MainPage(page);
      cartPage = new CartPage(page);
    });

    test('Add to cart from recommended items', async ({}) => {
        await mainPage.open();
        await mainPage.recommendedItemCarousel.scrollIntoViewIfNeeded();
        await mainPage.recommendedItemCarouselVisible();
        await mainPage.addToCartVisibleRecommendedItemsFromCarousel.first().click();
        await mainPage.viewCartButtonModalWindow.click();
        await expect(mainPage.page).toHaveURL(/.*view_cart/);
        await expect(cartPage.randomAddedProduct).toBeVisible();
        await expect(cartPage.randomAddedProduct).toHaveCount(1);
    });
});