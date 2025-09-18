import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';

When('I go to the cart', async () => {
  const page = getPage();
  await page.click('.shopping_cart_link');
});

When('I proceed to checkout', async () => {
  const page = getPage();
  await page.click('button#checkout');
});

When('I fill in the checkout information with {string} {string} {string}', async (firstName, lastName, zip) => {
  const page = getPage();
  await page.fill('input#first-name', firstName);
  await page.fill('input#last-name', lastName);
  await page.fill('input#postal-code', zip);
});

When('I continue to the overview', async () => {
  const page = getPage();
  await page.click('input#continue');
});

When('I finish the purchase', async () => {
  const page = getPage();
  await page.click('button#finish');
});

Then('I should see the text {string}', async (expectedText) => {
  const page = getPage();
  const text = await page.textContent('.complete-header');
  if (!text || !text.includes(expectedText)) {
    throw new Error(`Expected to see text: ${expectedText}, but got: ${text}`);
  }
});
