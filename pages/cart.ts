import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  readonly proceedToCheckoutButton: Locator;
  readonly product1: Locator;
  readonly product2: Locator;
  readonly product1Quantity: Locator;
  readonly subscriptionField: Locator;
  readonly successfulSubscribeAlert: Locator;
  readonly subscribeButton: Locator;
  
  
  
  constructor(page: Page) {
    this.page = page;

    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
    this.product1 = page.locator("#product-1");
    this.product2 = page.locator("#product-2");
    this.product1Quantity = this.product1.locator('.cart_quantity button');
    this.subscriptionField = page.locator("//input[@id='susbscribe_email']");
    this.successfulSubscribeAlert = page.locator("//div[@class='alert-success alert']");
    this.subscribeButton = page.locator("//button[@id='subscribe']");
  }
};
