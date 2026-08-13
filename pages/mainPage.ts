import { Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly searchfield: string;
  readonly searchbutton: string;
  readonly aboutus: string;
  readonly login: string;
  readonly logout: string;
  readonly mycart: string;
  readonly checkout: string;
  readonly facebook: string;
  readonly instagram: string;

  constructor(page: Page) {
    this.page = page;
    this.searchfield = "";
    this.searchbutton = "";
    this.aboutus = "";
    this.login = "";
    this.logout = "";
    this.mycart = "";
    this.checkout = "";
    this.facebook = "";
    this.instagram = "";
  }

  async goto() {
    await this.page.goto('');
  }
}
