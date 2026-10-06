import { test, expect } from '@playwright/test';
test.use({ baseURL: 'https://www.saucedemo.com/', testIdAttribute: 'data-test' });

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();


});

test('BROKEN:Strict mode voilatin', async ({ page }) => {


    await page.getByRole('button', { name: 'Add to cart' }).click();
})

test('Fix A: pick one on the purpose with First()', async ({ page }) => {

    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
});
//add-to-cart-sauce-labs-bike-light
test('Fix B: pick one on the purpose with First()', async ({ page }) => {

    await page.getByTestId('add-to-cart-sauce-labs-bike-light').click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
});
//Sauce Labs Onesie
test('Fix C: pick one on the purpose with First()', async ({ page }) => {

    await page.getByTestId('inventory-item').filter({ hasText: 'Onesie' }).getByRole('button', { name: 'Add to cart' }).click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
    
});