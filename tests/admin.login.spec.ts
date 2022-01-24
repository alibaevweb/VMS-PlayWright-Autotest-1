import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/admin-home-page';
import { LoginPage } from '../pages/admin-login-page';

test('User can login correct data', async ({ page }) => {
    const homepage = new HomePage(page);
    
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await expect(page).toHaveURL('http://admin.qazvms.local/dashboard');

  });

test('User can login incorrect email', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiTypography-colorError'); 
    await homepage.open();
    await new LoginPage(page).login(user.incorrectemail, user.incorrectpassword)
    await expect(locator).toHaveText(['Введите правильный e-mail']);

  });

test('User can login incorrect password', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiTypography-colorError'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.incorrectpassword)
    await expect(locator).toHaveText(['Логин или пароль введен неверно, пожалуйста, проверьте данные или обратитесь к администратору']);

  });  
test('Restore password', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiTypography-h6'); 
    await homepage.open();
    await new LoginPage(page).restorePassword(user.testemail)
    await expect(locator).toHaveText(['xwkogypfnfztqalfyz@bvhrk.com']);

  });  
  

  
  
  
