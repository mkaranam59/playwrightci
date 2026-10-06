import { test as setup, expect } from '@playwright/test';
const authFile = 'playwright/.auth/user.json';
setup('login once and save the session', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox',{name:'Username'}).fill('standard_user')
    // page.getByText('Username').fill('standard_user');
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click()
    await expect(page).toHaveURL(/inventory/);
    await expect(page).toHaveURL(/inventory/);
    await page.context().storageState({path:authFile});
    //context.setStorageState()




})