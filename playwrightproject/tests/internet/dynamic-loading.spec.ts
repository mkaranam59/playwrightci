import { test, expect } from '@playwright/test';

test('waits for the element that is rendered after loading', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');

  await page.getByRole('button', { name: 'Start' }).click();

  // no sleep: the assertion retries until the text appears (or 5 s pass)
  await expect(page.locator('#finish')).toHaveText('Hello World!', { timeout: 15_000 });
});