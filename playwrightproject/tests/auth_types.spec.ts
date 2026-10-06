import { test, expect } from '@playwright/test';

test.use({ baseURL: 'https://httpbin.org' });
//test.use({ httpCredentials: { username: 'admin', password: 'admin' } });

test.describe('Basic Auth with httpCredentials', () => {
    test.use({ httpCredentials: { username: 'admin', password: 'admin' } });

    test('the browser send credentials for you', async ({ page }) => {
        await page.goto('/basic-auth/admin/admin');
        console.log(page.url())
        await expect(page.locator('body')).toContainText('"authenticated": true');
    });
});
test('Basic auth without credentials is 401', async ({ request }) => {
  // sends: GET https://httpbin.org/basic-auth/admin/admin
  // no Authorization header, so the answer is 401
  const res = await request.get('/basic-auth/admin/admin');
  expect(res.status()).toBe(401);
});

test('Basic auth with a header you build yourself', async ({ request }) => {
const encoded = Buffer.from('admin:admin').toString('base64');
const res = await request.get('/basic-auth/admin/admin', {
    headers: { Authorization: 'Basic ' + encoded },
  });
  
  expect(res.status()).toBe(200);
  expect(await res.json()).toEqual({ authenticated: true, user: 'admin' });


});
test('Bearer token is accepted', async ({ request }) => {
  // sends: GET https://httpbin.org/bearer
  // header: Authorization: Bearer my-token
  const res = await request.get('/bearer', {
    headers: { Authorization: 'Bearer my-token' },
  });
  expect(res.status()).toBe(200);
  expect(await res.json()).toEqual({ authenticated: true, token: 'my-token' });
});
test('missing Bearer token is 401', async ({ request }) => {
  // sends: GET https://httpbin.org/bearer
  // no Authorization header, so the answer is 401
  const res = await request.get('/bearer');
  expect(res.status()).toBe(401);
});
