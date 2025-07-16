import { test } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = this.page.locator("#username");
    this.password = this.page.locator("#password");
    this.loginButton = this.page.locator("#Login");
    this.rememberMe = this.page.locator('input[name = "rememberUn"]');
  }

  async fillUsername(userName) {
    await this.userName.fill(userName);
  }
  async fillPassword(password) {
    await this.password.fill(password);
  }
  async clickLogin() {
    await this.loginButton.click();
  }
  async checkRememberMe() {
    await this.rememberMe.check();
  }

  async loginWithUser(userName, password) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
