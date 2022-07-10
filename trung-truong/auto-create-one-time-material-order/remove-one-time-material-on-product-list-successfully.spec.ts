import { test, chromium } from "@playwright/test";
import cmsLoginPage from "../page/cms-login.page";
import cmsStudent from "../page/cms-student.page";
import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
import commonSteps from "../page/common-steps.page"
import environment from "../utils/environment";

test.describe('Remove one-time material on product list successfully', () => {

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

    test('Remove one-time material successfully', async () => {
        test.setTimeout(60000)
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100NoTaxArray0();
        await createOrder.selectDropDownList();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterial2Fee100NoTaxArray1();
        await createOrder.selectDropDownList();
        await createOrder.clickHorizonBtnArray1();
        await createOrder.clickDeleteBtn();
        await common.wait200ms();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee100NoTaxArray0();
        await createOrder.assertMaterialNameAndPriceFee100NoTaxArray0();
        await createOrder.assertSubTotal100();
        await createOrder.assertTotal100();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })
})