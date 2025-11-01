import { Page } from "@playwright/test";

export async function getProductSelectorByName(productName: string): Promise<string> {
  return `text=${productName}`;
}