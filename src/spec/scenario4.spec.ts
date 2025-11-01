import { test, expect } from "../fixtures/test.fixture";
import { visualUser } from "../data/credentials.data";

test("Scenario 4 - Print product names with price", async ({ page, loginPage }) => {
  await loginPage.goto();
  await loginPage.logIn(visualUser);
  await loginPage.isHomePageVisible();

  const names = await page.locator(".inventory_item_name").allTextContents();
  const prices = await page.locator(".inventory_item_price").allTextContents();

  for (let i = 0; i < names.length; i++) {
     const cleanPrice = prices[i].trim().replace(/^\$/, '');
    console.log(`${names[i]} costs ${cleanPrice}$`);
  }
  });