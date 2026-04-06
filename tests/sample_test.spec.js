import { test, expect } from '@playwright/test';

test('launch page', async ({ page }) => {
  await page.goto('https://www.amazon.in');
});

