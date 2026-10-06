import {test,expect } from '@playwright/test'
test.describe('Docs Navigation',() => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://playwright.dev/');
    })

    test('opens the installation page', async({page}) => {
        await page.getByRole('link',{name:'Get Started'}).click();
        await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible();
        await expect(page).toHaveURL(/intro/);

    })

});