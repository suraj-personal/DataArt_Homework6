import { test, expect } from "../fixtures/test.fixture";
import { standardUser } from "../data/credentials.data";

test("Scenario 1 - Add one product to cart", async ({ page, loginPage }) => {
  await loginPage.goto();
  await loginPage.logIn(standardUser);
  await loginPage.isHomePageVisible();

  // Add 1 product
  await page.click('text=Add to cart', { timeout: 5000 });
  const cartCount = await page.locator(".shopping_cart_badge").innerText();

  expect(cartCount).toBe("1");
});