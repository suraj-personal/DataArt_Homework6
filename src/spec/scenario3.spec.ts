import { test, expect } from "../fixtures/test.fixture";
import { visualUser } from "../data/credentials.data";

test("Scenario 3 - Print all product names", async ({ page, loginPage }) => {
  await loginPage.goto();
  await loginPage.isLoginPageVisible();
  await loginPage.logIn(visualUser);
  await loginPage.isHomePageVisible();

  const productNames = await page.locator(".inventory_item_name").allTextContents();
  console.log("Products:", productNames);

  expect(productNames.length).toBe(6);
});