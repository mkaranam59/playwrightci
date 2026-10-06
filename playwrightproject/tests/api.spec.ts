import { test, expect } from '@playwright/test';
//import { request } from 'node:http';

const API = 'https://jsonplaceholder.typicode.com';
interface Post {id:number; userId:number, title:string, body:string};

test('get one post', async ({request}) => {
    const response = await request.get(`${API}/posts/1`);
    await expect(response).toBeOK()
    //await expect(response.status).toBe(200);
    const post:Post = await response.json();
    expect(post.id).toBe(1);
    expect(post.userId).toBe(1);

})
test('get with query params', async ({request}) => {
    const response = await request.get(`${API}/posts`,{params:{userId:1}});
    //await expect(response).toBeOK();
    const posts:Post[] = await response.json();
    expect(posts).toHaveLength(10);
    expect(posts.every(post => post.userId === 1)).toBe(true);

})
test('Post creates a post', async({request}) => {
    const res = await request.post(`${API}/posts`,{
        data: {
            title: 'hello', body: 'world', userId: 1
        }
    });
    expect(res.status()).toBe(201);
    const created:Post = await res.json();
    expect(created).toMatchObject({ title: 'hello', body: 'world', userId: 1 });
    expect(created.id).toBe(101);
});

test('Put relaces a post', async({request}) =>{

    const res = await request.put(`${API}/posts/1`,
        {data:{id: 1, title: 'changed', body: 'new body', userId: 1}});

    expect (res.status()).toBe(200);
    expect ((await res.json()).title).toBe('changed');


});
test('DELETE returns 200', async ({ request }) => {
  // sends: DELETE https://jsonplaceholder.typicode.com/posts/1
  // body: none
  const res = await request.delete('${API}/posts/1');
  expect(res.status()).toBe(200);
});
test('missing post is 404', async ({ request }) => {
  // sends: GET https://jsonplaceholder.typicode.com/posts/9999
  // body: none, the server has no post 9999 so it answers 404
  const res = await request.get('${API}/posts/9999');
  expect(res.status()).toBe(404);
  expect(res.ok()).toBe(false);
});
test('failOnStatusCode turns a 404 into a thrown error', async ({ request }) => {
  await expect(
    request.get('${API}/posts/9999', { failOnStatusCode: true })   // sends: GET https://jsonplaceholder.typicode.com/posts/9999, and the 404 now throws
  ).rejects.toThrow();
});