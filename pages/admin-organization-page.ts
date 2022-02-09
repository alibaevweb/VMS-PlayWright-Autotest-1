import type { Page } from 'playwright';

export class OrganizationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    // }
    // async openCreateparentOrganization() {
    //     await this.page.click('button[title="Добавить головную организацию"]');
    //     await this.page.click('button:has-text("Отмена")');
    }
    async createParentOrganization(title: string, bin: string) {
        await this.page.click('button[title="Добавить головную организацию"]');
        await this.page.type('input[placeholder="Название\\ организации"]', title);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
        await this.page.type('input[placeholder="БИН"]', bin);
        await this.page.click('button:has-text("Сохранить изменения")');
    }
    async createParentOrganizationname(noValuetitle: string, bin: string) {
        await this.page.click('text=Тест1БИН 123456789011 >> button');
        await this.page.click('text=Редактировать головную организацию >> nth=-1');
        await this.page.click('text=Название организации - на казахскомНазвание организации - на казахском >> button');
        await this.page.click('text=Название организации - на русскомНазвание организации - на русском >> button');
        await this.page.click('text=БИНБИН >> button');
        await this.page.type('input[placeholder="БИН"]', bin);
        await this.page.click('button:has-text("Сохранить изменения")');
     }
     //в работе
    async createParentOrganizationbin(title: string, bin: bin11) {
        await this.page.click('button[title="Добавить головную организацию"]');
        await this.page.type('input[placeholder="Название\\ организации"]', title);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
        await this.page.type('input[placeholder="БИН"]', bin11);
        await this.page.click('button:has-text("Сохранить изменения")');

    // async createOrganization(title: string, bin: string) {
    //     await this.page.click('text="БИН 123456789011"');
    //     await this.page.click('button[title="Добавить организацию"]');
    //     await this.page.type('input[placeholder="Название\\ организации"]', title);
    //     await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
    //     await this.page.type('input[placeholder="БИН"]', bin);
    //     await this.page.click('button:has-text("Сохранить изменения")');
    // }
    //  async createObject(title: string) {
    //     await this.page.click('text="БИН 123456789012"');
    //     await this.page.click('button[title="Добавить объект"]');
    //     await this.page.type('input[placeholder="Название\\ организации"]', title);
    //     await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
    //     await this.page.click('input[name="object_type_id"]');
    //     await this.page.click('button:has-text("Сохранить изменения")');

    // async deleteorganization() {
    //     await this.page.click('text=Тест1БИН 123456789011 >> button');
    //     await this.page.click('text=Удалить организацию >> nth=-1');
    //     await this.page.click('button:has-text("Удалить")');
    
    async deleteparentorganization() {
        await this.page.click('text=Тест1БИН 123456789011 >> button');
        await this.page.click('text=Удалить головную организацию >> nth=-1');
        await this.page.click('button:has-text("Удалить")');
    
    }
    
}

    //     async deleteObject() {
    //         await this.page.click('text="БИН 123456789011"');
    //         await this.page.click('button[title="Добавить объект"]');
    //         await this.page.type('input[placeholder="Название\\ организации"]', title);
    //         await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
    //         await this.page.click('input[name="object_type_id"]');
    //         await this.page.click('button:has-text("Сохранить изменения")');
    
            







