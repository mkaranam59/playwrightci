import {test, expect} from '@playwright/test';

test('file download', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'some-file.txt' }).click()
  ]);
  // Do something with the downloaded file
  await download.saveAs('some-file.txt');
 // await page.selectOption
});