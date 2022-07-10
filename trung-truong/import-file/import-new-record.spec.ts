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

    test('IMPORT001 - Accounting Category import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadAccountingCategoryFile();
        await masterManagement.assertAccountingCategoryCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Accounting Category Import: PASSED')
    })

    test('IMPORT002 - Grade import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadGradeFile();
        await masterManagement.assertGradeCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Grade Import: PASSED');
    })

    test('IMPORT003 - Discount import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadDiscountFile();
        await masterManagement.assertDiscountCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Discount Import: PASSED');
    })

    test('IMPORT004 - Billing Schedule import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadBillingScheduleFile();
        await masterManagement.assertBillingScheduleCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Billing Schedule Import: PASSED');
    })

    test('IMPORT005 - Billing Schedule Period import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadBillingSchedulePeriodFile();
        await masterManagement.assertBillingSchedulePeriodCSV
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Billing Schedule Period Import: PASSED');
    })

    test('IMPORT006 - Tax import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadTaxFile();
        await masterManagement.assertTaxCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Tax Import: PASSED');
    })

    test('IMPORT008 - Package import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadPackageFile();
        await masterManagement.assertPackageCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Package Import: PASSED');
    })

    test('IMPORT009 - Material import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadMaterialFile();
        await masterManagement.assertMaterialCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Material Import: PASSED');
    })

    test('IMPORT010 - Fee import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadFeeFile();
        await masterManagement.assertFeeCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Fee Import: PASSED');
    })

    test('IMPORT015 - Leaving Reason import', async () => {
        await login.adminSignIn();
        await masterManagement.selectMasterManagement();
        await masterManagement.openImportDropdownList();
        await masterManagement.uploadLeavingReasonFile();
        await masterManagement.assertLeavingReasonCSV();
        await masterManagement.confirmSave();
        await masterManagement.assertToastMessageImportSuccessfully();
        console.log('Leaving Reason: PASSED');
    })
})