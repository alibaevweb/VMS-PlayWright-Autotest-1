import type { Page } from 'playwright';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(email: string, password: string) {
        await this.page.type('input[name="email"]', email);
        await this.page.type('input[name="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async restorePassword(testemail: string) {
        await this.page.click('.MuiLink-root');
        await this.page.type('input[name="email"]', testemail);
        await this.page.click('button .MuiButton-label');
    }
}

