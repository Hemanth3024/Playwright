import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.js";
import { loginDetails } from "../data/loginData.js";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page); // Make a new POM
    await use(loginPage); // Provide it to the test
  },
});

export { expect };
