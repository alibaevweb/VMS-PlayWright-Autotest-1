import type { Page } from 'playwright';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(email: string, password: string) {
        await this.page.type('input[type="text"]', email);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async noValue(noValueemail: string, noValuepas: string) {
        await this.page.type('input[type="text"]', noValueemail);
        await this.page.type('input[type="password"]', noValuepas);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async restorePassword(testemail: string) {
        await this.page.click('text=Восстановить пароль');
        await this.page.type('input[type="text"]', testemail);
        await this.page.click('button:has-text("Выслать ссылку")');
    }

}

