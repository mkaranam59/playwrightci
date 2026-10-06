import {test,expect} from '@playwright/test';
const PAGE = 'https://demo.playwright.dev/api-mocking';
const FRUITS = '*/**/api/v1/fruits';

test('1.Fulfill , replace the whole response',async({page}) => {

     await page.route(FRUITS, route =>{
        console.log(`${FRUITS}`);
        route.fulfill({json:[{name:'Strawberry',id:21},{name:'Grapes',id:30}]})
     });
     await page.goto(PAGE);
     console.log(PAGE)
     await expect(page.getByText('Strawberry')).toBeVisible();
     await expect(page.getByText('Banana')).toHaveCount(0);

})

test('2.Fetch and edit the real response', async ({page})=>{
    await page.route(FRUITS, async route=>{
        const response = await route.fetch();
        const json = await response.json()
        json.push({name:'Loquat',id:100});
        
        await route.fulfill({response,json});
        


    })
     await page.goto(PAGE);
     await expect(page.getByText('Loquat')).toBeVisible();
     await expect(page.getByText('Banana')).toBeVisible(); 

})

test('3. spy: assert on the real traffic', async ({ page }) => {

    const responsePromise = page.waitForResponse(FRUITS);
    await page.goto(PAGE)
    const response = await responsePromise;
    expect (response.status()).toBe(200);
    const friuts:{name:string,id:string}[] = await response.json();
    expect(friuts.map(fruit => fruit.name)).toContain('Banana');


})
test('4.Abort page', async({page})=>{
    
    await page.route(FRUITS, route =>
    route.fulfill({ status: 500, json: { error: 'down' } })   // page receives: 500 {"error":"down"}
  );
    /* await page.route(FRUITS, async route => {
        console.log('Aborting the route');
        await route.abort('Error code:500');
    })
 */
    //await page.goto(PAGE);
   // const response = await responsePromise;

 const responsePromise = page.waitForResponse(FRUITS);    // start listening first
  // page loads: GET https://demo.playwright.dev/api-mocking
  // the page then calls: GET https://demo.playwright.dev/api/v1/fruits  (this is what the route catches)
  await page.goto(PAGE);
  const response = await responsePromise;

  expect(response.status()).toBe(500);                     // the page really got the fake failure
  expect(await response.json()).toEqual({ error: 'down' });
  await expect(page.getByText('Banana')).toHaveCount(0); 
})