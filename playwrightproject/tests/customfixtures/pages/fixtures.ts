import {test as base, expect} from '@playwright/test';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';

type POMFixtures={
 loginPage: LoginPage,
 inventoryPage:InventoryPage
}

export const test = base.extend<POMFixtures> ({
    loginPage: async({page},use) => {

        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },
    inventoryPage: async({page},use) => {
        const inventoryPage = new InventoryPage(page)
        await use(inventoryPage);
    }


});

export { expect };

