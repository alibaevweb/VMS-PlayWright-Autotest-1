import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/client-home-page';
import { LoginPage } from '../pages/client-login-page';
import { ArchivePage } from '../pages/client-archive-page';
import { CameraPage } from '../pages/client-camera-page';

 // test.beforeAll(async ({ page }) => {
   // const homepage = new HomePage(page);
    //await homepage.open();
   // await new LoginPage(page).login(user.email, user.password)
 // });

  test('Click FullScreen', async ({ page }) => {
      const homepage = new HomePage(page);
      await homepage.open();
      const locator = page.locator('//button[@title="Свернуть"]'); 
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).clickFullScreen()
      await expect(locator).toBeVisible();
    });

  test('Check Camera Icon', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiSvgIcon-fontSizeLarge'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await expect(locator).toBeVisible();
    });   

  test('Check VMS Main Icon', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('//div[@class="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"]/div[1]'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await expect(locator).toBeVisible();
    });     

  test('Check Create Grid', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).createGrid(user.testCamera);
      await expect(locator).toHaveText(['Сетка успешно добавлена!']);
    });    

  test('Check Delete Grid', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).deleteGrid()
      await expect(locator).toHaveText(['Сетка успешно добавлена!']);
    });    

  test('Check Saved Grid', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)

      await new CameraPage(page).savedGrid()

      await expect(locator).toHaveText(['Сетка успешно добавлена!']);
    });    

  test('Check Change Camera', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)

      await new CameraPage(page).changeCamera()
      await new CameraPage(page).openCurrentGrid()

      await expect(locator).toHaveText(['Сетка успешно добавлена!']);
      
    });   
