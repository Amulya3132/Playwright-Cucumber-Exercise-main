import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

import { When } from '@cucumber/cucumber';

When('I sort the products by {string}', async (sortType) => {
  const page = getPage();
  // Select the sort dropdown and choose the option
  await page.selectOption('.product_sort_container', { label: sortType });
});

Then('all product tiles should be sorted by price low to high', async () => {
  const page = getPage();
  // Get all product prices as numbers
  const prices = await page.$$eval('.inventory_item_price', els => els.map(e => parseFloat(e.textContent.replace('$', ''))));
  // Check if sorted ascending
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] > prices[i + 1]) {
      throw new Error(`Prices are not sorted: ${prices}`);
    }
  }
});
