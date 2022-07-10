import {test, expect, chromium} from '@playwright/test';
import cmsLoginPage from '../page/cms-login.page';
import cmsMasterManagement from '../page/cms-master-management.page';
import environment from '../utils/environment';

test.describe('Upload file', () => {

    let login: cmsLoginPage;
    let masterManagement: cmsMasterManagement;

    test.beforeEach(async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext({ignoreHTTPSErrors: true });
        const page = await context.newPage();
        await page.goto(environment.cmsURL);
        login = new cmsLoginPage(page);
        masterManagement = new cmsMasterManagement(page);
    })

    test.afterEach(async () => {
        const browser = await chromium.launch();
        await browser.close();
    })

    test('IMPORT007 - Billing Ratio import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadBillingRatioFile();
        await masterManagement.assertBillingRatioCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Billing Ratio Import: PASSED');
    })

    test('IMPORT011 - Product Grade import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadProductGradeFile();
        await masterManagement.assertProductGradeCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Product Grade: PASSED');
    })

    test('IMPORT012 - Product Course import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadProductCourseFile();
        await masterManagement.assertProductCourseCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Product Course: PASSED');
    })

    test('IMPORT013 - Product Accounting Category import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadProductAccountingCategoryFile();
        await masterManagement.assertProductAccountingCategoryCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Product Accounting Category: PASSED');
    })

    test('IMPORT014 - Product Location import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadProductLocationFile();
        await masterManagement.assertProductLocationCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Product Location: PASSED');
    })

    test('IMPORT015 - Product Price import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadProductPriceFile();
        await masterManagement.assertProductPriceCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Product Price: PASSED');
    })
})