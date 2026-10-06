import { test, expect } from '@playwright/test';
const page_html = `
  <button id="go">Save</button>
  <div id="msg"></div>
  <script>
    document.getElementById('go').onclick = () => {
      setTimeout(() => { document.getElementById('msg').textContent = 'Saved'; }, 800);
    };
  </script>`;

  test('BROKEN: reads the text once, then compares', async ({ page }) => {
  await page.setContent(page_html);
  await page.getByRole('button', { name: 'Save' }).click();

  expect(await page.locator('#msg').textContent()).toBe('Saved'); // received ""
});

test('FIXED: web-first assertion retries', async ({ page }) => {
  await page.setContent(page_html);
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.locator('#msg')).toHaveText('Saved');
});