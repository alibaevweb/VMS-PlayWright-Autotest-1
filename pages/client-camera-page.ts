import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';
export class CameraPage {
  
    readonly page: Page;
    
    constructor(page: Page) {
        
        this.page = page;
        
    }

    async clickFullScreen() {

        await this.page.click('//button[@title="Полноэкранный режим"]');
        
    }

    async checkCameraIcon() {

        await this.page.click('.MuiSvgIcon-fontSizeLarge');
        
    }
   
    async createGrid(testCamera:string) {

        await this.page.click('div:nth-child(2) div div:nth-child(2) .MuiButtonBase-root');
        await this.page.type('.MuiDialogContent-root .MuiOutlinedInput-input', testCamera);
        await this.page.click('//span[contains(text(),"Сохранить")]');
        
    }
 
    async deleteGrid() {

        
        await this.page.click('div:nth-child(2) div div .MuiButtonBase-root');
        await this.page.click('li:nth-child(2) .MuiTreeItem-content .MuiTypography-root.MuiTreeItem-label div div:nth-child(4) .MuiSvgIcon-root path');
        await this.page.click('button:has-text("Удалить")');
        
    }

    async savedGrid() {

        await this.page.click('div:nth-child(2) div div .MuiButtonBase-root');
                
        await this.page.click('input[type="radio"]');
        // Click li:nth-child(2) .MuiTreeItem-content .MuiTypography-root.MuiTreeItem-label div div:nth-child(4) .MuiSvgIcon-root path
        await this.page.click('li:nth-child(2) .MuiTreeItem-content .MuiTypography-root.MuiTreeItem-label div div:nth-child(4) .MuiSvgIcon-root path');
        // Click button:has-text("Удалить")
        await this.page.click('button:has-text("Удалить")');
    }

    async changeCamera() {

        await this.page.click('aside div div div >> :nth-match(button, 3)');
        await this.page.check('input[type="checkbox"]');        
    }
   
    //Кнопка "Открыть в текущей сетке"
    async openCurrentGrid() {

        await this.page.click('button:has-text("Открыть в текущей сетке")');
        
    }

    //Кнопка "Открыть в оптимальной сетке"
    async openOptimalGrid() {



        await this.page.click('button:has-text("Открыть в оптимальной сетке")');
        
    }

    //Кнопка очистки списка камер
    async clearChosedCamera() {

        await this.page.click('.MuiGrid-justify-xs-space-between .MuiButton-label');
        
    }

    
    //Кнопка очистки списка камер
    async clearChosedCam() {

        await this.page.click('.MuiGrid-justify-xs-space-between .MuiButton-label');
        
    }



}
