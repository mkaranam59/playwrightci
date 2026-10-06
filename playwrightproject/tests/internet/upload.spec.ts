import { test, expect } from '@playwright/test';
import path from 'path';

test('should upload a file', async ({ page }) => {
    const filePath = 'fixtures/hello.txt';
    const __dirname = path.dirname(__filename);
    const parentFilePath = path.join(__dirname, '../..', filePath);
    console.log(parentFilePath)
    console.log('Fetching file from path:', (parentFilePath) ? 'Exists' : 'Does not exist');
    await page.goto('https://the-internet.herokuapp.com/upload',{ timeout: 50000 });
    await page.locator('#file-upload').setInputFiles(parentFilePath);
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();

    await expect(page.locator('#uploaded-files')).toHaveText('hello.txt');

});

