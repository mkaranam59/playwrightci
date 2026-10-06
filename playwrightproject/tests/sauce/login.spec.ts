import {test,expect } from '@playwright/test'
test.use({baseURL:'https://www.saucedemo.com',testIdAttribute:'data-test'});

test('standard user can log in', async({page})=>{

    await page.goto('/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');

    //await page.getByPlaceholder('username').fill('standard_user');
    //await page.getByPlaceholder('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page).toHaveURL(/inventory/,{timeout:15000});
    await expect(page.getByRole('button', { name: 'Add to cart' })).toHaveCount(6);
    




});