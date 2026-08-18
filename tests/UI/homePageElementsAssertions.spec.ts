import { test, expect } from '../../fixtures/fixture.js';
import { MainPage } from '../../pages/mainPage.js';

test.describe('Main Page Tests', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
  });

  test('Title Assertion', async ({ page }) => {
    await mainPage.open();
    await expect(page).toHaveTitle('Automation Exercise');
  });

  test('Is logo displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.logoDisplayed();
  });

  test('Is header displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.headerDisplayed();
  });

  test('Is slider carousel block displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.sliderCarouselBlockDisplayed();
  });

  test('Is category block displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.categoryBlockDisplayed();
  });   

  test('Is brands block displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.brandsBlockDisplayed();
  });

  test('Is featured items displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.featuredItemsDisplayed();
  });

  test('Is recommended item carousel displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.recommendedItemCarouselDisplayed();
  });

  test('Is subscription field displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.subscriptionFieldDisplayed();
  });

  test('Is products category displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.productsCategoryDisplayed();
  });

  test('Is test cases category displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.testCasesCategoryDisplayed();
  }); 
});
