import {expect, Page} from '@playwright/test';

export default class cmsStudentDetailPage {

    private page:Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // // Click [aria-label="Create order"]
    public async selectCreateOrder() {
        
        // Click [data-testid="ActionPanel__trigger"]
        await this.page.locator('[data-testid="ActionPanel__trigger"]').click();
        await this.page.waitForTimeout(500)
        console.log('before')
        // Click [aria-label="Create order"]
        await this.page.locator('[aria-label="Create Order"]').click();
        console.log('after')
        await expect(this.page).toHaveURL('url.com');

    }

}