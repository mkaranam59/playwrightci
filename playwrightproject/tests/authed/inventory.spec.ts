import {test,expect }from '@playwright/test'

test('starts logged in and has six products', async({page})=>{
    await page.goto('/inventory.html');
    await expect(page.getByTestId('inventory-item')).toHaveCount(6);


})

test('can add an item without logging in again', async ({ page }) => {
    await page.goto('/inventory.html');
    //await page.getByRole('img',{name:'Sauce Labs Backpack'}).click();

    await page.getByRole('button',{name:'Add to cart'}).first().click()
   // await expect ( page.getByRole('button',{name:"Cart, " +"\'"+ /[0-9]+/ +"\'"+ "items"})).toHaveText('1');
   await expect(page.locator('span.shopping_cart_badge')).toHaveText('1');
})
