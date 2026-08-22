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
    await mainPage.logoVisible();
  });

  test('Is header displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.headerVisible();
  });

  test('Is slider carousel block displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.sliderCarouselBlockVisible();
  });

  test('Is category block displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.categoryBlockVisible();
  });   

  test('Is brands block displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.brandsBlockVisible();
  });

  test('Is featured items displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.featuredItemsVisible();
  });

  test('Is recommended item carousel displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.recommendedItemCarouselVisible();
  });

  test('Is subscription field displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.subscriptionFieldVisible();
  });

  test('Is products category displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.productsCategoryVisible();
  });

  test('Is test cases category displayed?', async ({}) => {
    await mainPage.open();
    await mainPage.testCasesCategoryVisible();
  }); 
});
