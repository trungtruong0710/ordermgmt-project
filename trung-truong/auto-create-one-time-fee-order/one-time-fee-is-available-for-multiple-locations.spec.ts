import { test, chromium } from "@playwright/test";
import cmsLoginPage from "../page/cms-login.page";
import cmsStudent from "../page/cms-student.page";
import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
import commonSteps from "../page/common-steps.page"
import environment from "../utils/environment";

test.describe('One-time fee is available for multiple location', () => {

    let login: cmsLoginPage;
    let student: cmsStudent;
    let createOrder: dialogCMSCreateOrder;
    let common: commonSteps;

    test.beforeEach(async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext({ignoreHTTPSErrors: true });
        const page = await context.newPage();
        await page.goto(environment.cmsURL);
        login = new cmsLoginPage(page);
        student = new cmsStudent(page);
        createOrder = new dialogCMSCreateOrder(page);
        common = new commonSteps(page);
    })

    test.afterEach(async () => {
        const browser = await chromium.launch();
        await browser.close();
    })

    test('One-time fee is available for multiple location', async () => {
        test.setTimeout(60000)
        await login.adminSignIn();
        await student.waitForSearchBox();
        await student.selectStudentCenter1Grade1();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectFeeMultipleLocationsArray0();
        await createOrder.assertFeeMultipleLocationsArray0();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
        await student.selectStudentCenter2Grade1();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation2();
        await createOrder.clickAddNewProduct();
        await createOrder.selectFeeMultipleLocationsArray0();
        await createOrder.assertFeeMultipleLocationsArray0();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('One-time fee is available for multiple grade', async () => {
        test.setTimeout(60000)
        await login.adminSignIn();
        await student.waitForSearchBox();
        await student.selectStudentCenter1Grade1();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectFeeMultipleGradesArray0();
        await createOrder.assertFeeMultipleGradesArray0();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
        await student.selectStudentCenter1Grade2();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectFeeMultipleGradesArray0();
        await createOrder.assertFeeMultipleGradesArray0();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('One-time fee is available for multiple location and grade', async () => {
        test.setTimeout(60000)
        await login.adminSignIn();
        await student.waitForSearchBox();
        await student.selectStudentCenter1Grade1();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectFeeMultipleLocationsAndGradesArray0();
        await createOrder.assertFeeMultipleLocationsAndGradesArray0();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
        await student.selectStudentCenter2Grade2();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation2();
        await createOrder.clickAddNewProduct();
        await createOrder.selectFeeMultipleLocationsAndGradesArray0();
        await createOrder.assertFeeMultipleLocationsAndGradesArray0();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })
})