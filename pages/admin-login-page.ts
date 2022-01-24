import type { Page } from 'playwright';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(email: string, password: string) {
        await this.page.type('', email);
        await this.page.type('', password);
        await this.page.click('');
    }

    async restorePassword(testemail: string) {
        await this.page.click('');
        await this.page.type('', testemail);
        await this.page.click('');
    }
}

