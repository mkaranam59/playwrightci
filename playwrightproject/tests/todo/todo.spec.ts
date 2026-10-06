import { test, expect } from '@playwright/test'
test('adds three todos', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const input = await page.getByPlaceholder('What needs to be done?');
    for (const item of ['Buy milk', 'Read chapter P', 'Write Config from memory']){
        await input.fill(item);
        await input.press('Enter');
    }
     await expect(page.getByTestId('todo-title')).toHaveCount(3);
     await expect(page.getByTestId('todo-title')).toHaveText(['Buy milk', 'Read chapter P', 'Write Config from memory']);


});