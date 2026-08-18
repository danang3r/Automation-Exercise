import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly quantityField: Locator;
  readonly addToCart: Locator;
 
  constructor(page: Page) {
    this.page = page;

    this.quantityField = page.locator("//input[@name='quantity']");
    this.addToCart = page.locator("//button[@class='btn btn-default cart']");
  }
}
