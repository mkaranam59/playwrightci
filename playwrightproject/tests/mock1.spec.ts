import { test, expect } from '@playwright/test';
const PAGE = 'https://demo.playwright.dev/api-mocking';
const FRUITS = '*/**/api/v1/fruits';

test('4.Abort page', async ({ page,browserName }) => {
    await page.route(FRUITS,  route => {
        console.log('Aborting the route');
          route.abort();
        
    });
    const res =  await page.goto(PAGE);
    console.log(res?.status())
    //expect(await response.json()).toEqual({ error: 'down' });
    await expect(page.getByText('Banana')).toHaveCount(0);
    console.log(browserName)
    await page.pause()
    
    
})