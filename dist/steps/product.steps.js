"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwrightUtilities_1 = require("../playwrightUtilities");
const product_page_1 = require("../pages/product.page");
(0, cucumber_1.Then)('I will add the backpack to the cart', async () => {
    await new product_page_1.Product((0, playwrightUtilities_1.getPage)()).addBackPackToCart();
});
