import { test, chromium } from "@playwright/test";
import cmsLoginPage from "../page/cms-login.page";
import cmsStudent from "../page/cms-student.page";
import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
import commonSteps from "../page/common-steps.page"
import environment from "../utils/environment";

test.describe('Update and submit one-time fee order successfully', () => {

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

    test('Update and submit one-time fee order successfully', async () => {
        test.setTimeout(60000)
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectFee100NoTaxArray0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountPercentage10Array0();
        await createOrder.selectDropDownList();
        await createOrder.selectFee100Tax5Array0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountAmount10Array0();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertFeeNameAndPriceFee100Tax5Array0();
        await createOrder.assertDiscountAmount10Array0();
        await createOrder.assertInclusiveTax5OneProductTaxAmount4Array0();
        await createOrder.assertSubTotal90();
        await createOrder.assertTotal90();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })
})