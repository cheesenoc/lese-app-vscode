const { test, expect } = require('@playwright/test');

test('timers: pre-wait then auto-show then auto-next', async ({ page }) => {
  // use fast mode so tests run quickly
  await page.goto('/?fast=1');

  // pre-wait should display 'Warte 1s' (or similar)
  await expect(page.locator('#countdown')).toHaveText(/Warte 1s/);

  // after fast pre-wait, image should appear automatically
  await page.waitForSelector('#imageWrap img', { timeout: 5000 });
  await expect(page.locator('#imageWrap img')).toBeVisible();

  // after image shown, countdown shows 'Weiter in 1s' then new word is loaded
  await expect(page.locator('#countdown')).toHaveText(/Weiter in 1s/);

  // wait for the next word to appear (word text should change)
  const firstWord = await page.locator('#word').textContent();
  await page.waitForFunction((selector, old) => document.querySelector(selector).textContent !== old, {}, '#word', firstWord);
});