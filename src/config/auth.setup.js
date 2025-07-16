import { test as setup } from "../fixtures/base.js";
import { loginDetails } from "../data/loginData.js";

setup("Login into SalesForce application", async ({ page, loginPage }) => {
  page.goto("/");

  await loginPage.loginWithUser(
    loginDetails.validUser.userName,
    loginDetails.validUser.password
  );

  await page.context().storageState({ path: "storageState.json" });
});
