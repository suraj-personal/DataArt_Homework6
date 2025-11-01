import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/spec',
  fullyParallel: true,
  retries: 1,
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com',
    headless: false
  },
  reporter: [['html', { open: 'never' }]],
});