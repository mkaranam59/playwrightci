import {Page, Locator, expect} from '@playwright/test';
export class InventoryPage{
    readonly items:Locator;
    readonly cartBadge:Locator;

    constructor(private readonly page:Page){
        this.items = page.locator('.inventory_item');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addToCart(name:string){
        await this.items.filter({ hasText: name }).getByRole('button', { name: 'Add to cart' }).click();
    }
    async expectLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}