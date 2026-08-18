import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  readonly subscriptionField: Locator;
  readonly successfulSubscribeAlert: Locator;
  readonly subscribeButton: Locator;
  
  
  
  constructor(page: Page) {
    this.page = page;

    this.subscriptionField = page.locator("//input[@id='susbscribe_email']");
    this.successfulSubscribeAlert = page.locator("//div[@class='alert-success alert']");
    this.subscribeButton = page.locator("//button[@id='subscribe']");
  }
};