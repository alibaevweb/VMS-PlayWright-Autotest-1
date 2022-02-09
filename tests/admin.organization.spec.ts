import { test, expect } from '@playwright/test';
import { orgparent, organization, user, object, camera } from './testdata';
import { HomePage } from '../pages/admin-home-page';
import { LoginPage } from '../pages/admin-login-page';
import { OrganizationPage } from "../pages/admin-organization-page";

// //Проверить открытья окна создания головной организации
//   test('Open create parent organization', async ({ page }) => {
//     const homepage = new HomePage(page);
//     await homepage.open();
//     await new LoginPage(page).login(user.email, user.password)
//     await new OrganizationPage(page).openCreateparentOrganization()
//     await expect(page).toHaveURL('http://admin.qazvms.local/organizations-objects/organizations/*');
//   });

//Проверить создания головной организации
  test('Create parent organization', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.notification-message'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createParentOrganization(orgparent.title, orgparent.bin)
    await expect(locator).toHaveText(['Данные сохранены']);
  });

//Проверить на валидацию поля "наименования"
test('Create parent organization name', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createParentOrganizationname(orgparent.noValuetitle, orgparent.bin)
  await expect(locator).toHaveText(['Обязательно для заполнения','Обязательно для заполнения']);
});

//Проверить на валидацию поля "наименования"
test('Create parent organization bin', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createParentOrganizationbin(orgparent.title, orgparent.bin11)
  await expect(locator).toHaveText(['Обязательно для заполнения','Обязательно для заполнения']);
});

  
  // //Проверить создания организация
  // test('Create organization', async ({ page }) => {
  //   const homepage = new HomePage(page);
  //   const locator = page.locator('.notification-message'); 
  //   await homepage.open();
  //   await new LoginPage(page).login(user.email, user.password)
  //   await new OrganizationPage(page).createOrganization(organization.title, organization.bin)
  //   await expect(locator).toHaveText(['Данные сохранены']);
  // });

  //  //Проверить создания объекта
  //  test('Create object', async ({ page }) => {
  //   const homepage = new HomePage(page);
  //   const locator = page.locator('.notification-message'); 
  //   await homepage.open();
  //   await new LoginPage(page).login(user.email, user.password)
  //   await new OrganizationPage(page).createObject(object.title)
  //   await expect(locator).toHaveText(['Данные сохранены']);
  // });

//   //Удалить объект
  //   test('Delete object', async ({ page }) => {
  //     const homepage = new HomePage(page);
  //     const locator = page.locator('.notification-message'); 
  //     await homepage.open();
  //     await new LoginPage(page).login(user.email, user.password)
  //     await new OrganizationPage(page).deleteObject();
  //     await expect(locator).toHaveText(['Данные сохранены']);
  //   });

//  //Удалить организацию 
//  test('Delete parent organization', async ({ page }) => {
//       const homepage = new HomePage(page);
//       const locator = page.locator('.notification-message'); 
//       await homepage.open();
//       await new LoginPage(page).login(user.email, user.password)
//       await new OrganizationPage(page).deleteparentorganization()
//       await expect(locator).toHaveText(['Данные сохранены']);
// });


  //Удалить головную организацию 
    test('Delete parent organization', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.notification-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new OrganizationPage(page).deleteparentorganization()
      await expect(locator).toHaveText(['Данные сохранены']);
    });
  
  


  