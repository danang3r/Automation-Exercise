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
  readonly featuredItems: Locator;
  readonly firstFeaturedItem: Locator;
  readonly viewfirstFeaturedItem: Locator;
  readonly secondFeaturedItem: Locator;
  readonly firstItemAddToCartBtnFromOverlay: Locator;
  readonly secondItemAddToCartBtnFromOverlay: Locator;
  readonly viewCartButtonModalWindow: Locator;
  readonly continueShoppingButton: Locator;
  readonly recommendedItemCarousel: Locator;
  readonly addToCartVisibleRecommendedItemsFromCarousel: Locator;
  readonly subscriptionField: Locator;
  readonly subscribeButton: Locator;
  readonly scrollUpArrowButton: Locator;
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
    this.featuredItems = page.locator("//div[@class='features_items']");
    this.firstFeaturedItem = page.locator("(//div[@class='single-products'])[1]");
    this.viewfirstFeaturedItem = page.locator("a[href='/product_details/1']");
    this.secondFeaturedItem = page.locator("(//div[@class='single-products'])[2]");
    this.firstItemAddToCartBtnFromOverlay = page.locator("(//a[@data-product-id='1'])[2]");
    this.secondItemAddToCartBtnFromOverlay = page.locator("(//a[@data-product-id='2'])[2]");
    this.viewCartButtonModalWindow = page.locator("(//a[@href='/view_cart'])[2]");
    this.continueShoppingButton = page.getByText('Continue Shopping');
    this.recommendedItemCarousel = page.locator("//div[@class='recommended_items']");
    this.addToCartVisibleRecommendedItemsFromCarousel = page.locator("//div[@class='item active']//a[@class='btn btn-default add-to-cart']");
    this.subscriptionField = page.locator("//input[@type='email']");
    this.subscribeButton = page.locator("//button[@id='subscribe']");
    this.scrollUpArrowButton = page.locator("//a[@id='scrollUp']");
    this.successfulSubscribeAlert = page.locator("//div[@class='alert-success alert']");
        
  }

  async open() {
    await this.page.goto('/');
  }

  async logoVisible() {
    await expect(this.logo).toBeVisible();
  }

  async headerVisible() {
    await expect(this.header).toBeVisible();
  }

  async productsCategoryVisible() {
    await expect(this.productsCategory).toBeVisible();
  }

  async testCasesCategoryVisible() {
    await expect(this.testCasesCategory).toBeVisible();
  }

  async sliderCarouselBlockVisible() {
    await expect(this.sliderCarouselBlock).toBeVisible();
  }

  async categoryBlockVisible() {
    await expect(this.categoryBlock).toBeVisible();
  }

  async brandsBlockVisible() {
    await expect(this.brandsBlock).toBeVisible();
  }

  async featuredItemsVisible() {
    await expect(this.featuredItems).toBeVisible();
  }

  async recommendedItemCarouselVisible() {
    await expect(this.recommendedItemCarousel).toBeVisible();
  }

  async subscriptionFieldVisible() {
    await expect(this.subscriptionField).toBeVisible();
  }
}
