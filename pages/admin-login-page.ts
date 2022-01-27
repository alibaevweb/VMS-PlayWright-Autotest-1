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

    async noValue(noValueemail: string, noValuepass: string) {
        await this.page.type('input[type="text"]', noValueemail);
        await this.page.type('input[type="password"]', noValuepass);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async restorePassword(testemail: string) {
        await this.page.click('text=Восстановить пароль');
        await this.page.type('input[type="text"]', testemail);
        await this.page.click('button:has-text("Выслать ссылку")');
    }

    async blockedUser(blockedemail: string, blockedpassword: string) {
        await this.page.type('input[type="text"]', blockedemail);
        await this.page.type('input[type="password"]', blockedpassword);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async remoteUser(remoteemail: string, remotepassword: string) {
        await this.page.type('input[type="text"]', remoteemail);
        await this.page.type('input[type="password"]', remotepassword);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async notRegisteredUser(notreguseremail: string, notreguserpass: string) {
        await this.page.type('input[type="text"]', notreguseremail);
        await this.page.type('input[type="password"]', notreguserpass);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async сyrillicEmail(cyrillicemail: string, password: string) {
        await this.page.type('input[type="text"]', cyrillicemail);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async latinEmail(latinemail: string, password: string) {
        await this.page.type('input[type="text"]', latinemail);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async specialSymbolsemail(specsymbolemail: string, password: string) {
        await this.page.type('input[type="text"]', specsymbolemail);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async symbolsEmail(symbolemail: string, password: string) {
        await this.page.type('input[type="text"]', symbolemail);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async emailwithoutdomain(emailnotdomain: string, password: string) {
        await this.page.type('input[type="text"]', emailnotdomain);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async emailAvailableCharacters(emailAvailableChar: string, adminpassword: string) {
        await this.page.type('input[type="text"]', emailAvailableChar);
        await this.page.type('input[type="password"]', adminpassword);
        await this.page.click('button:has-text("Войти в систему")');
    }



}

