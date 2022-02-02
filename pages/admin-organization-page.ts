import type { Page } from 'playwright';

export class OrganizationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async openCreateparentOrganization() {
        await this.page.click('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.jss54');
        await this.page.click('button:has-text("Отмена")');
    }

    async createParentOrganization(title: string, bin: string) {
        await this.page.click('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.jss54');
        await this.page.type('input[placeholder="Название\\ организации"]', title);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
        await this.page.type('input[placeholder="БИН"]', bin);
        await this.page.click('button:has-text("Сохранить изменения")');

    }
}