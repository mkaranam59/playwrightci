import { test, expect } from '@playwright/test';
test.use({baseURL:'https://www.saucedemo.com/',testIdAttribute:'data-test'});

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();


});
test('adds backpack to the cart',async({page})=>{
    const backpack = page.getByTestId('inventory-item').filter({ hasText: 'Sauce Labs Backpack' });
    await backpack.getByRole('button',{name:'Add to cart'}).click();
    expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
    expect(backpack.getByRole('button',{name:'Remove'})).toBeVisible();
});