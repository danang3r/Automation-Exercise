import { Page, Locator, expect } from '@playwright/test';

export class ContactUsPage {
  readonly page: Page;

  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly subjectField: Locator;
  readonly msgField: Locator;
  readonly selectFileButton: Locator;
  readonly submitButton: Locator;
  readonly successContactUsMessage: Locator;
  
  
  constructor(page: Page) {
    this.page = page;

    this.nameField = page.getByPlaceholder("Name");
    this.emailField = page.locator("//input[@data-qa='email']");
    this.subjectField = page.getByPlaceholder("Subject");
    this.msgField = page.getByPlaceholder("Your Message Here");
    this.selectFileButton = page.locator("//input[@type='file']");
    this.submitButton = page.locator("//input[@type='submit']");  
    this.successContactUsMessage = page.locator("//div[@class='status alert alert-success']");  
  }

  async isSuccessfullyContacted() {
      await expect(this.successContactUsMessage).toBeVisible();
    }
}