import {test, expect, chromium} from '@playwright/test';
import cmsLoginPage from '../page/cms-login.page';
import cmsMasterManagement from '../page/cms-master-management.page';
import commonSteps from '../page/common-steps.page';
import environment from '../utils/environment';

test.describe('Upload file fail', () => {

    let login: cmsLoginPage;
    let masterManagement: cmsMasterManagement;
    let common: commonSteps;

    test.beforeEach(async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            recordVideo: {
                dir: "./import-fail-videos"
            },
            ignoreHTTPSErrors: true 
        });
        const page = await context.newPage();
        await page.goto(environment.cmsURL);
        login = new cmsLoginPage(page);
        masterManagement = new cmsMasterManagement(page);
        common = new commonSteps(page);
    })

    test.afterEach(async () => {
        const browser = await chromium.launch();
        await browser.close();
    })

    test('Import csv file fail', async () => {
        test.setTimeout(240000);
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadFileFail();
    })
})