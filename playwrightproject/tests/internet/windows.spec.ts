import { test, expect } from '@playwright/test';

test('opens a new window and reads its heading', async ({ page,context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
  ]);
  await newPage.waitForLoadState();
  await expect(newPage.getByRole('heading', { name: 'New Window' })).toBeVisible();
  await expect(newPage).toHaveTitle('New Window');


  // the original page is still usable
  await expect(page.getByRole('heading', { name: 'Opening a new window' })).toBeVisible();
});

