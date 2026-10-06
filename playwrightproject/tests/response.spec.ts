import { test, expect } from '@playwright/test';

test('waits for the API response triggered by a click', async ({ page }) => {
  await page.setContent(`
    <button id="load">Load todo</button>
    <pre id="out"></pre>
    <script>
      document.getElementById('load').onclick = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        document.getElementById('out').textContent = JSON.stringify(await res.json());
      };
    </script>`);

    await page.pause();
  // 1. listen first
  const responsePromise = page.waitForResponse(
    r => r.url().endsWith('/todos/1') && r.status() === 200,
  );
  // 2. trigger
  await page.getByRole('button', { name: 'Load todo' }).click();
  // 3. await and assert on the body
  const response = await responsePromise;
  expect(await response.json()).toMatchObject({ id: 1, userId: 1 });

  // the UI got the same data
  await expect(page.locator('#out')).toContainText('"id":1');
});