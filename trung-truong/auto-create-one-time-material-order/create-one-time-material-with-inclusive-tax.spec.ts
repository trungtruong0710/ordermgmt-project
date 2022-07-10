import { test, chromium } from "@playwright/test";
import cmsLoginPage from "../page/cms-login.page";
import cmsStudent from "../page/cms-student.page";
import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
import commonSteps from "../page/common-steps.page"
import environment from "../utils/environment";

test.describe('Create one-time material order with inclusive tax', () => {

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

    test('Create order with 1 one-time material with inclusive tax', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100Tax5Array0();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee100Tax5Array0();
        await createOrder.assertSubTotal100();
        await createOrder.assertInclusiveTax5OneProductArray0();
        await createOrder.assertTotal100();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('Create order with 3 one-time materials with different inclusive tax', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100Tax5Array0();
        await createOrder.selectDropDownList();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100Tax10Array1();
        await createOrder.selectDropDownList();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterial2Fee100Tax5Array2();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertBillingDateArray1IsCurrentDate();
        await createOrder.assertBillingDateArray2IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee100Tax5Array0();
        await createOrder.assertMaterialNameAndPriceFee100Tax10Array1();
        await createOrder.assertMaterial2NameAndPriceFee100Tax5Array2();
        await createOrder.assertSubTotal300();
        await createOrder.assertInclusiveTax5TwoProductTaxAmount10Array0();
        await createOrder.assertInclusiveTax10OneProductTaxAmount9Array1();
        await createOrder.assertTotal300();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })
})