import {test} from '@playwright/test'
test('Log all environment variables as a table', async () => {
 // console.table((globalThis as any).process.env);
  console.log(JSON.stringify((globalThis as any).process.env, null, 2));
});

test('Log filtered entries',async()=>{
    const filteredEnv = Object.fromEntries(
        Object.entries((globalThis as any).process.env).filter(([key]) => 
            key.startsWith('BASE_') || key.startsWith('PLAYWRIGHT_')
        )

    )
    console.table(filteredEnv);

});

test('very home page loads', async({page}) =>{
    await page.goto('/');
    console.log(`Running test with API_KEY ${process.env.API_KEY}`)
    
})