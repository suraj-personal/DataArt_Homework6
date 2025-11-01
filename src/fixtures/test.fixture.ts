import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/login.po";

type Pages = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from "@playwright/test";