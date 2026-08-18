import { Page, Locator } from '@playwright/test';

export class ProductItemPage {
  readonly page: Page;
  readonly specialOfferLogo: Locator;
  readonly searchProductField: Locator;
  readonly productName: Locator;
  readonly category: Locator;
  readonly price: Locator;
  readonly availability: Locator;
  readonly condition: Locator;
  readonly brand: Locator;
  
   
  constructor(page: Page) {
    this.page = page;

    this.specialOfferLogo = page.locator("//img[@id='sale_image']");
    this.searchProductField = page.getByPlaceholder('Search Product');
    this.productName = page.locator("//div[@class='product-information']/h2");
    this.category = page.locator("(//div[@class='product-information']/p)[1]");
    this.price = page.locator("//div[@class='product-information']/span/span");
    this.availability = page.locator("(//div[@class='product-information']/p)[2]");
    this.condition = page.locator("(//div[@class='product-information']/p)[3]");
    this.brand = page.locator("(//div[@class='product-information']/p)[4]");
  }
}
