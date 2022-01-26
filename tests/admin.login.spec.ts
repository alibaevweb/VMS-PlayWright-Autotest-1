import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/admin-home-page';
import { LoginPage } from '../pages/admin-login-page';

//Авторизация с корректным e-mail-ом и паролем
test('User can login correct data', async ({ page }) => {
  const homepage = new HomePage(page);
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await expect(page).toHaveURL('http://admin.qazvms.local/login');

});

//Авторизация существующего пользователя с некорректным email
test('User can login incorrect email', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).login(user.incorrectemail, user.incorrectpassword)
  await expect(locator).toHaveText(['E-mail введен неверно']);

});

//Авторизация существующего пользователя с некорректным паролем
test('User can login incorrect password', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiListItemText-primary'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.incorrectpassword)
  await expect(locator).toHaveText(['Логин или пароль введен неверно, пожалуйста, проверьте данные или обратитесь к администратору']);

});  

//Восстановление пароля
test('Restore password', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-h6'); 
  await homepage.open();
  await new LoginPage(page).restorePassword(user.testemail)
  await expect(locator).toHaveText(['xwkogypfnfztqalfyz@bvhrk.com']);

});  

//Авторизация без данных
  test('No value', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiFormHelperText-contained'); 
    await homepage.open();
    await new LoginPage(page).noValue(user.noValueemail, user.noValuepass)
    await expect(locator).toHaveText(['Обязательно для заполнения','Пароль должен содержать минимум 8 символов']);

});  

//Заблокированный пользователь
test('Blocked User', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-displayBlock'); 
  await homepage.open();
  await new LoginPage(page).blockedUser(user.blockedemail, user.blockedpassword)
  await expect(locator).toHaveText(['Ваша учетная запись заблокирована и не может быть использована, обратитесь к администратору']);

});  

//Удаленный пользователь
test('Remote user', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-displayBlock'); 
  await homepage.open();
  await new LoginPage(page).remoteUser(user.remoteemail, user.remotepassword)
  await expect(locator).toHaveText(['Ваша учетная запись удалена и не может быть использована']);

});  

//Не зарегистрированный пользователь  
test('Not registered user', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-displayBlock'); 
  await homepage.open();
  await new LoginPage(page).notRegisteredUser(user.notreguseremail, user.notreguserpass)
  await expect(locator).toHaveText(['Пользователь не найден']);

});  
    
//Email кириллица  
test('Cyrillic email', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-displayBlock'); 
  await homepage.open();
  await new LoginPage(page).notRegisteredUser(user.notreguseremail, user.notreguserpass)
  await expect(locator).toHaveText(['Пользователь не найден']);

}); 
  