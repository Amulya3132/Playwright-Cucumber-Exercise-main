"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(page) {
        this.addToCart = 'button[id="add-to-cart-sauce-labs-backpack"]';
        this.page = page;
    }
    async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }
}
exports.Product = Product;
