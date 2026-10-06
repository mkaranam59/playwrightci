
import { test as base, expect } from '@playwright/test';
// 1. Describe the shape: fixture name -> type it provides
type MyFixtures = {morning_greeting:string;}
export const test = base.extend<MyFixtures>({
    morning_greeting:async({},use) =>{
        await use('Hello, Interview');
    }
});
export { expect };