import { test, expect, chromium, Page } from '@playwright/test';

const username: string = 'standard_user';
const password: string = 'secret_sauce';


async function navigateToLoginPage(page: Page) {
  await page.goto('https://www.saucedemo.com/v1/');
  }

async function login(page: Page, uname: string, pwd: string) {
  await page.getByPlaceholder('Username').fill(uname);
  await page.getByPlaceholder('Password').fill(pwd)
  await page.getByRole("button", {name: "LOGIN"}).click();
  }

async function validateSuccessfulLogin(page: Page) {
  await expect(page.url()).toContain('/inventory.html');
  await expect(page.locator('#shopping_cart_container > a > svg')).toBeVisible();
  await page.getByRole('button', {name: 'Open Menu'}).click();
  await expect(page.locator('#logout_sidebar_link')).toBeVisible();
}


test('Check if User is able to Login successfully', async ({ page }) => {
  await navigateToLoginPage(page);
  await login(page, username, password);
  await validateSuccessfulLogin(page);
});