import {test,expect, Page} from '@playwright/test'

type Role = 'admin' | 'viewer';
interface Credentials { user:string, password:string, Role?:string};

class LoginPage{
    constructor (private readonly page:Page){

    }
    async login({user,password}:Credentials){
        await this.page.getByLabel('Email').fill(user);
        await this.page.getByLabel('password').fill(password);


    }
}
// 4. Optional chaining and nullish coalescing
const text = (await page.locator('.badge').textContent())?.trim() ?? '';

// 5. Array helpers
const symbols = (await page.getByTestId('symbol').allTextContents()).map(s => s.trim());

// 6. Promise.all: start listening, then trigger
const [popup] = await Promise.all([
  page.waitForEvent('popup'),
  page.getByText('Open help').click(),
]);

// 7. import type keeps type-only imports out of the JS output
import type { Page, Locator } from '@playwright/test';
