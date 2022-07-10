import {expect, Page} from '@playwright/test';
import student from '../variables/student';

export default class cmsStudent {

    private page:Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Search and assert student name
    public async searchStudentName() {
        await this.page.waitForSelector('[data-testid="FormFilterAdvanced__textField"]')
        await this.page.fill('input[placeholder="Enter your keyword"]', student.studentName);
        await this.page.waitForTimeout(200)
        await this.page.keyboard.press('Enter');
    }

    public async waitForSearchBox() {
        await this.page.waitForSelector('[data-testid="FormFilterAdvanced__textField"]')
    }

    // Select student
    public async selectStudent() {
        await this.page.waitForSelector('[data-testid="TableColumnName__content"]')
        await this.page.locator('[href="/user/students_erp/01G45PTVN5JTPMYW74B5CHE2DV/show"]').click()
    }

    public async selectStudentCenter1Grade1() {
        await this.page.goto('url.com')
    }

    public async selectStudentCenter2Grade2() {
        await this.page.goto('url.com')
    }

    public async selectStudentCenter1Grade2() {
        await this.page.goto('url.com')
    }

    public async selectStudentCenter2Grade1() {
        await this.page.goto('url.com')
    }
}