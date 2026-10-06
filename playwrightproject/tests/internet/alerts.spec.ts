import { test, expect } from '@playwright/test';

test.describe('Alerts', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });

    test('should handle alert', async ({ page }) => {
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });
        await page.click('button[onclick="jsAlert()"]');
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    });

    test('should handle confirm', async ({ page }) => {
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
        });
        await page.click('button[onclick="jsConfirm()"]');
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    });
        
    test('should handle prompt', async ({ page }) => {
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('I am a JS prompt');
            await dialog.accept('Playwright');
        });
        await page.click('button[onclick="jsPrompt()"]');
        await expect(page.locator('#result')).toHaveText('You entered: Playwright');
        /* page.on('popup', async popup => {
            await popup.waitForLoadState();
            await expect(popup).toHaveTitle('The Internet');

        } */
    
    });
});