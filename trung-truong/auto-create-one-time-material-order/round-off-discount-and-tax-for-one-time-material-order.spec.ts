import { test, chromium } from "@playwright/test";
import cmsLoginPage from "../page/cms-login.page";
import cmsStudent from "../page/cms-student.page";
import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
import commonSteps from "../page/common-steps.page"
import environment from "../utils/environment";

test.describe('Round off discount and tax for one time material order', () => {

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

    test('Round the inclusive tax up in billed at order', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee95Tax10Array0();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee95Tax10Array0();
        await createOrder.assertInclusiveTax10OneProductTaxAmount9Array0();
        await createOrder.assertSubTotal95();
        await createOrder.assertTotal95();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('Round the inclusive tax down in billed at order', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee92Tax10Array0();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee92Tax10Array0();
        await createOrder.assertInclusiveTax10OneProductTaxAmount8Array0();
        await createOrder.assertSubTotal92();
        await createOrder.assertTotal92();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('Round the discount up in billed at order', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee95Tax10Array0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountPercentage10Array0();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee95Tax10Array0();
        await createOrder.assertDiscountPercentage10Array0();
        await createOrder.assertInclusiveTax10OneProductTaxAmount8Array0();
        await createOrder.assertSubTotal85();
        await createOrder.assertTotal85();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('Round the discount down billed at order', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee92Tax10Array0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountPercentage10Array0();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee92Tax10Array0();
        await createOrder.assertDiscountPercentage10DiscountAmount9Array0();
        await createOrder.assertInclusiveTax10OneProductTaxAmount8Array0();
        await createOrder.assertSubTotal83();
        await createOrder.assertTotal83();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })
})