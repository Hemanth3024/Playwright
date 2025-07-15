import { test } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = this.page.locator("#username");
    this.password = this.page.locator("#password");
    this.loginButton = this.page.locator("#Login");
  }

  async fillUsername(userName) {
    this.userName.fill(userName);
  }
  async fillPassword(password) {
    this.password.fill(password);
  }
  async clickLogin() {
    this.loginButton.click();
  }
}
