import { test, expect } from "../fixtures/test.fixture";
import { standardUser } from "../data/credentials.data";

test("Scenario 2 - Add and remove products", async ({ page, loginPage }) => {
  await loginPage.goto();
  await loginPage.isLoginPageVisible();
  await loginPage.logIn(standardUser);
  await loginPage.isHomePageVisible();

  // Add 2 products
  const addButtons = await page.locator('text=Add to cart').all();
  await addButtons[0].click();
  await addButtons[1].click();

  expect(await page.locator(".shopping_cart_badge").innerText()).toBe("2");

  // Remove 1 product
  await page.click('text=Remove');
  expect(await page.locator(".shopping_cart_badge").innerText()).toBe("1");
});
