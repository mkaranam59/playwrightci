import { test,expect } from './customfixtures/pages/fixtures';

test.use({ baseURL: 'https://www.saucedemo.com' });

test('standard user can log in', async ({ loginPage, inventoryPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.expectLoaded();
});
test('locked user sees an error', async ({ loginPage, page }) => {
  await loginPage.login('locked_out_user', 'secret_sauce');
  await expect(page.getByText('locked out')).toBeVisible();
});
test('user can add a backpack to the cart', async ({ loginPage, inventoryPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addToCart('Backpack');
  await expect(inventoryPage.cartBadge).toHaveText('1');
});