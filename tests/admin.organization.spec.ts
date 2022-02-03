import { test, expect } from '@playwright/test';
import { org, organization, user, object, camera } from './testdata';
import { HomePage } from '../pages/admin-home-page';
import { LoginPage } from '../pages/admin-login-page';
import { OrganizationPage } from "../pages/admin-organization-page";

//Проверить открытья окна создания головной организации
  test('Open create parent organization', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).openCreateparentOrganization()
    await expect(page).toHaveURL('http://admin.qazvms.local/organizations-objects/organizations/*');
  });

//Проверить создания головной организации
  test('Create parent organization', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.notification-message'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createParentOrganization(org.title, org.bin)
    await expect(locator).toHaveText(['Данные сохранены']);
  });

  
  //Проверить создания организация
  test('Create organization', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.notification-message'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createOrganization(organization.title, organization.bin)
    await expect(locator).toHaveText(['Данные сохранены']);
  });

  