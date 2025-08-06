import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('3');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('2');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('1');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
});