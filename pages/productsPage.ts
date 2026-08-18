import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly specialOfferLogo: Locator;
  readonly searchProductField: Locator;
  readonly searchSubmitButton: Locator;
  readonly searchedProductsHeader: Locator;
  readonly viewFirstProduct: Locator;
  readonly allProductsList: Locator;


  constructor(page: Page) {
    this.page = page;

    this.specialOfferLogo = page.locator("//img[@id='sale_image']");
    this.searchProductField = page.getByPlaceholder('Search Product');
    this.searchSubmitButton = page.locator("//button[@id='submit_search']");
    this.searchedProductsHeader = page.locator("//h2[@class='title text-center']");
    this.viewFirstProduct = page.locator("//a[@href='/product_details/1']");
    this.allProductsList = page.locator("//div[@class='features_items']");
  }
}
