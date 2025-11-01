import { test, expect } from "../fixtures/test.fixture";

test("Scenario 5 - Verify redirect for unauthenticated user", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");

  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await expect(page.locator("[data-test='error']")).toBeVisible();
});
