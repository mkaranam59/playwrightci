import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(private readonly page: Page) {
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto(){
        await this.page.goto('/');
    }
    async login(user:string,password:string){
        await this.username.fill(user);
        await this.password.fill(password);
        this.loginButton.click();

    }
}
