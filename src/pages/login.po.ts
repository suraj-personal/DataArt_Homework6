import { Page, expect } from "@playwright/test";
import { TCredentials } from "../types/TCredentials";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async logIn(creds: TCredentials): Promise<void> {
    await this.page.fill("#user-name", creds.username);
    await this.page.fill("#password", creds.password);
    await this.page.click("#login-button");
  }

  async isLoginPageVisible(): Promise<void> {
    await expect(this.page.locator("#login-button")).toBeVisible();
  }

  async isHomePageVisible(): Promise<void> {
    await expect(this.page.locator(".inventory_list")).toBeVisible();
  }
}