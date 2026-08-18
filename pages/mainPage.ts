import { Page, Locator, expect } from '@playwright/test';

export class MainPage {
  readonly page: Page;

  readonly logo: Locator;
  readonly header: Locator;
  readonly productsCategory: Locator;
  readonly cartCategory: Locator;
  readonly testCasesCategory: Locator;
  readonly contactUsCategory: Locator;
  readonly sliderCarouselBlock: Locator;
  readonly categoryBlock: Locator;
  readonly brandsBlock: Locator;
  readonly featuresItems: Locator;
  readonly recommendedItemCarousel: Locator;
  readonly subscriptionField: Locator;
  readonly subscribeButton: Locator;
  readonly successfulSubscribeAlert: Locator;
  
  

  constructor(page: Page) {
    this.page = page;

    this.logo = page.locator("//img[@src='/static/images/home/logo.png']");
    this.header = page.locator("//div[@class='shop-menu pull-right']");
    this.productsCategory = page.locator("//a[@href='/products']");
    this.cartCategory = page.locator("(//a[@href='/view_cart'])[1]");
    this.testCasesCategory = page.locator("//a[@href='/test_cases']");
    this.contactUsCategory = page.locator("//a[@href='/contact_us']");
    this.sliderCarouselBlock = page.locator("//div[@id='slider-carousel']");
    this.categoryBlock = page.locator("//div[@class='panel-group category-products']");
    this.brandsBlock = page.locator("//div[@class='brands_products']");
    this.featuresItems = page.locator("//div[@class='features_items']");
    this.recommendedItemCarousel = page.locator("//div[@class='recommended_items']");
    this.subscriptionField = page.locator("//input[@type='email']");
    this.subscribeButton = page.locator("//button[@id='subscribe']");
    this.successfulSubscribeAlert = page.locator("//div[@class='alert-success alert']");
        
  }

  async open() {
    await this.page.goto('/');
  }

  async logoDisplayed() {
    await expect(this.logo).toBeVisible();
  }

  async headerDisplayed() {
    await expect(this.header).toBeVisible();
  }

  async productsCategoryDisplayed() {
    await expect(this.productsCategory).toBeVisible();
  }

  async testCasesCategoryDisplayed() {
    await expect(this.testCasesCategory).toBeVisible();
  }

  async sliderCarouselBlockDisplayed() {
    await expect(this.sliderCarouselBlock).toBeVisible();
  }

  async categoryBlockDisplayed() {
    await expect(this.categoryBlock).toBeVisible();
  }

  async brandsBlockDisplayed() {
    await expect(this.brandsBlock).toBeVisible();
  }

  async featuresItemsDisplayed() {
    await expect(this.featuresItems).toBeVisible();
  }

  async recommendedItemCarouselDisplayed() {
    await expect(this.recommendedItemCarousel).toBeVisible();
  }

  async subscriptionFieldDisplayed() {
    await expect(this.subscriptionField).toBeVisible();
  }
}
