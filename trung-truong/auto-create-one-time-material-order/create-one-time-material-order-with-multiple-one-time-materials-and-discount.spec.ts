import { test, chromium } from "@playwright/test";
import cmsLoginPage from "../page/cms-login.page";
import cmsStudent from "../page/cms-student.page";
import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
import commonSteps from "../page/common-steps.page"
import environment from "../utils/environment";

test.describe('Create one-time material order with multiple one-time materials and discount', () => {

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

    test('Create order with 2 one-time materials and discount by fixed amount for both', async () => {
        test.setTimeout(60000);
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100NoTaxArray0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountAmount10Array0();
        await createOrder.selectDropDownList();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterial2Fee100NoTaxArray1();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountAmount10Array1();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertBillingDateArray1IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee100NoTaxArray0();
        await createOrder.assertMaterial2NameAndPriceFee100NoTaxArray1();
        await createOrder.assertDiscountAmount10Array0();
        await createOrder.assertDiscountAmount10Array1();
        await createOrder.assertSubTotal180();
        await createOrder.assertTotal180();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('Create order with 2 one-time materials and discount by percent for both', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100NoTaxArray0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountPercentage10Array0();
        await createOrder.selectDropDownList();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterial2Fee100NoTaxArray1();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountPercentage10Array1();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertBillingDateArray1IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee100NoTaxArray0();
        await createOrder.assertMaterial2NameAndPriceFee100NoTaxArray1();
        await createOrder.assertDiscountPercentage10Array0();
        await createOrder.assertDiscountPercentage10Array1();
        await createOrder.assertSubTotal180();
        await createOrder.assertTotal180();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('Create order with 2 one-time materials and discount by percent and fixed amount', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100NoTaxArray0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountPercentage10Array0();
        await createOrder.selectDropDownList();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterial2Fee100NoTaxArray1();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountAmount10Array1();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertBillingDateArray1IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee100NoTaxArray0();
        await createOrder.assertMaterial2NameAndPriceFee100NoTaxArray1();
        await createOrder.assertDiscountPercentage10Array0();
        await createOrder.assertDiscountAmount10Array1();
        await createOrder.assertSubTotal180();
        await createOrder.assertTotal180();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('Create order with 2 one-time materials and only discount by percent for one', async () => {
        test.setTimeout(60000)
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100NoTaxArray0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountPercentage10Array0();
        await createOrder.selectDropDownList();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterial2Fee100NoTaxArray1();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertBillingDateArray1IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee100NoTaxArray0();
        await createOrder.assertMaterial2NameAndPriceFee100NoTaxArray1();
        await createOrder.assertDiscountPercentage10Array0();
        await createOrder.assertSubTotal190();
        await createOrder.assertTotal190();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })

    test('Create order with 2 one-time materials and only discount by fixed amount for one', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterialFee100NoTaxArray0();
        await createOrder.selectDropDownList();
        await createOrder.selectDiscountAmount10Array0();
        await createOrder.selectDropDownList();
        await createOrder.clickAddNewProduct();
        await createOrder.selectMaterial2Fee100NoTaxArray1();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assertBillingDateArray0IsCurrentDate();
        await createOrder.assertBillingDateArray1IsCurrentDate();
        await createOrder.assertMaterialNameAndPriceFee100NoTaxArray0();
        await createOrder.assertMaterial2NameAndPriceFee100NoTaxArray1();
        await createOrder.assertDiscountAmount10Array0();
        await createOrder.assertSubTotal190();
        await createOrder.assertTotal190();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
    })
})