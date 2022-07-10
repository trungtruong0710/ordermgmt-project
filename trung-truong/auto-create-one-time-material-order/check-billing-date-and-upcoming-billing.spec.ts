import { test, chromium } from "@playwright/test";
import cmsLoginPage from "../page/cms-login.page";
import cmsStudent from "../page/cms-student.page";
import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
import commonSteps from "../page/common-steps.page"
import environment from "../utils/environment";

test.describe('Check billing date and upcoming billing', () => {

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

    test('Apply custom_billing_date and not show upcoming billing for one-time material order', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100Tax5Array0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountAmount10Array0();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee100Tax5Array0();
        await createOrder.assertDiscountAmount10Array0();
        await createOrder.assertInclusiveTax5OneProductTaxAmount4Array0();
        await createOrder.assertSubTotal90();
        await createOrder.assertTotal90();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('Apply custom_billing_date and show upcoming billing for one-time material order', async () => {
        test.setTimeout(120000);
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.select20230101MaterialFee100Tax5Array0();
        await createOrder.selectDropDownList();
        await common.wait200ms();
        await createOrder.clickAddNewProduct();
        await createOrder.select20230102MaterialFee100Tax5Array1();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountAmount10Array1();
        await createOrder.selectDropDownList();
        await common.wait200ms();
        await createOrder.clickAddNewProduct();
        await createOrder.select20230103MaterialFee100Tax5Array2();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountPercentage10Array2();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0Is20230101();
        await createOrder.assertBillingDateArray1Is20230102();
        await createOrder.assertBillingDateArray2Is20230103();
        await createOrder.checkBilledAtOrderIsNull();
        await createOrder.assert20230101MaterialNameAndPriceFee100Tax5NoDiscountArray0();
        await createOrder.assert20230102MaterialNameAndPriceFee100Tax5ApplyDiscountArray1();
        await createOrder.assert20230103MaterialNameAndPriceFee100Tax5ApplyDiscountArray2();
        await createOrder.assertUpcomingDiscountAmount10FirstEleName();
        await createOrder.assertUpcomingDiscountPercentage10SecondEleName();
        await createOrder.assertUpcomingDiscountThirdEleNameIsNotVisible();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })
})