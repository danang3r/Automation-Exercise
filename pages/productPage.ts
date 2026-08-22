import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly quantityField: Locator;
  readonly addToCart: Locator;
  readonly viewCart: Locator;
  readonly productName: Locator;
  readonly category: Locator;
  readonly price: Locator;
  readonly availability: Locator;
  readonly condition: Locator;
  readonly brand: Locator;

  constructor(page: Page) {
    this.page = page;

    this.quantityField = page.locator("//input[@name='quantity']");
    this.addToCart = page.locator("//button[@class='btn btn-default cart']");
    this.viewCart = page.locator("(//a[@href='/view_cart'])[2]");
    this.productName = page.locator("//div[@class='product-information']/h2");
    this.category = page.locator("(//div[@class='product-information']/p)[1]");
    this.price = page.locator("//div[@class='product-information']/span/span");
    this.availability = page.locator("(//div[@class='product-information']/p)[2]");
    this.condition = page.locator("(//div[@class='product-information']/p)[3]");
    this.brand = page.locator("(//div[@class='product-information']/p)[4]");
  }
}
