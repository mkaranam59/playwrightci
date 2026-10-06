import {Page,expect} from '@playwright/test';

export interface TodoOptions{
    url?:string;

}

export async function 
openTodoApp(page:Page, {url = 'https://demo.playwright.dev/todomvc' }:TodoOptions={}):Promise<void>{

    await page.goto(url);
}

export async function addTodos(page:Page,titles:string[]):Promise<void>{
    const input= page.getByPlaceholder("What needs to be done?");
    for (const title of titles){
        await input.fill(title);
        await input.press("Enter");

    }

}
export async function expectTodos(page: Page, titles: string[]): Promise<void> {
  await expect(page.getByTestId('todo-title')).toHaveText(titles);
}