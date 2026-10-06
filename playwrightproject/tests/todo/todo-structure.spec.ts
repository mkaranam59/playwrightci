import { test, expect } from '@playwright/test';

test.describe('todo list', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc');
    });
    test('add, complete and clear a todo',{tag:'@smoke'}, async ({ page }) => {
        const input = await page.getByRole('textbox', { name: 'What needs to be done?' });
        await input.fill('buy some cheese');
        const titles = page.getByTestId('todo-title');
        test.step('add a todo item', async () => {
            await input.fill('Buy Milk')
            await input.press('Enter');
            await input.fill('Pay Taxes')
            await input.press('Enter')
            await expect(titles).toHaveText(['Buy Milk', 'Pay Taxes']);
        });

        await test.step('complete the first todo', async () => {
            const first = await page.getByTestId('todo-item').first();
            await first.getByRole('checkbox').check();
            await expect(first).toHaveClass(/completed/);
        });

        await test.step('clear completed', async () => {
            await page.getByRole('button', { name: 'Clear completed' }).click();
            await expect(titles).toHaveText(['Pay Taxes']);

        })
    })


    test('shows remaining count',{tag:'@smoke'}, async ({ page }) => {
        const input = await page.getByRole('textbox', { name: 'What needs to be done?' });
        await input.fill('Buy Milk')
        await input.press('Enter');
        await input.fill('Pay Taxes')
        await input.press('Enter')
        const count = page.getByTestId('todo-count');
        await expect(count).toHaveText('2 items left');
    })
    test('filters active todos',{tag:'@regression'}, async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?');
    for (const t of ['One', 'Two']) {
      await input.fill(t);
      await input.press('Enter');
    }
    await page.getByTestId('todo-item').first().getByRole('checkbox').check();
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(page.getByTestId('todo-title')).toHaveText(['Two']);
  });

})