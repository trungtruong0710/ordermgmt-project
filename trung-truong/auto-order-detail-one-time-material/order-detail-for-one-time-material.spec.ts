import { test, chromium } from "@playwright/test";
import cmsLoginPage from "../page/cms-login.page";
import cmsStudent from "../page/cms-student.page";
import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
import cmsOrderDetail from "../page/cms-order-detail.page";
import commonSteps from "../page/common-steps.page"
import environment from "../utils/environment";

test.describe('Order detail for one-time material', () => {

    let login: cmsLoginPage;
    let student: cmsStudent;
    let createOrder: dialogCMSCreateOrder;
    let orderDetail: cmsOrderDetail;
    let common: commonSteps;

    test.beforeEach(async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext({ignoreHTTPSErrors: true });
        const page = await context.newPage();
        await page.goto(environment.cmsURL);
        login = new cmsLoginPage(page);
        student = new cmsStudent(page);
        createOrder = new dialogCMSCreateOrder(page);
        orderDetail = new cmsOrderDetail(page);
        common = new commonSteps(page);
    })

    test.afterEach(async () => {
        const browser = await chromium.launch();
        await browser.close();
    })

    test('General info, product list, billing item, action log, previous button and comment display with correct data || Billing status is "Billed" when created order date > billing date', async () => {
        test.setTimeout(120000)
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
        await createOrder.assertSubTotal90();
        await createOrder.assertTotal90();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
        await orderDetail.assertGeneral__OrderNo()
        await orderDetail.assertGeneral__StudentName()
        await orderDetail.assertGeneral__CreatedDate()
        await orderDetail.assertGeneral__OrderType()
        await orderDetail.assertGeneral__Location()
        await orderDetail.assertProductList__ProductIndexArray0()
        await orderDetail.assertProductList__ProductNameArray0__IsMaterialFee100ApplyDiscountAmount10()
        await orderDetail.assertProductList__ProductDiscountNameArray0__IsAmount10()
        await orderDetail.assertProductList__ProductAmountArray0Is90()
        await orderDetail.assertBillingItem__BillingIndexArray0()
        await orderDetail.assertBillingItem__BillingNumberArray0()
        await orderDetail.assertBillingItem__BillingNameArray0__IsMaterialFee100ApplyDiscountAmount10()
        await orderDetail.assertBillingItem__BillingStatusArray0_IsBilled()
        await orderDetail.assertBillingItem__BillingDateArray0_IsCurrentDate()
        await orderDetail.assertBillingItem__BillingAmountArray0Is90()
        await orderDetail.assertActionLog__ActionLogIndexArray0()
        await orderDetail.assertActionLog__UserNameArray0()
        await orderDetail.assertActionLog__UpdatedAtArray0__IsCurrentDate()
        await orderDetail.assertComment()
    })

    test('Billing status is "Pending" when created order date < billing date || Not display null if user not select discount for Product list', async () => {
        test.setTimeout(120000)
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createOrder.select20230101MaterialFee100Tax5Array0();
        await createOrder.selectDropDownList();
        await createOrder.addComment();
        await createOrder.assert20230101MaterialNameAndPriceFee100Tax5NoDiscountArray0();
        await createOrder.clickSubmit();
        await common.wait200ms();
        await createOrder.assertSubmitSucceed();
        await orderDetail.assertGeneral__OrderNo()
        await orderDetail.assertGeneral__StudentName()
        await orderDetail.assertGeneral__CreatedDate()
        await orderDetail.assertGeneral__OrderType()
        await orderDetail.assertGeneral__Location()
        await orderDetail.assertProductList__ProductIndexArray0()
        await orderDetail.assertProductList__ProductNameArray0__Is20230101MaterialFee100Tax5()
        await orderDetail.assertProductList__ProductDiscountNameArray0__IsNull()
        await orderDetail.assertProductList__ProductAmountArray0Is100()
        await orderDetail.assertBillingItem__BillingIndexArray0()
        await orderDetail.assertBillingItem__BillingNumberArray0()
        await orderDetail.assertBillingItem__BillingNameArray0__Is20230101MaterialFee100Tax5()
        await orderDetail.assertBillingItem__BillingStatusArray0_IsPending()
        await orderDetail.assertBillingItem__BillingDateArray0_Is20230101()
        await orderDetail.assertBillingItem__BillingAmountArray0Is100()
        await orderDetail.assertActionLog__ActionLogIndexArray0()
        await orderDetail.assertActionLog__UserNameArray0()
        await orderDetail.assertActionLog__UpdatedAtArray0__IsCurrentDate()
        await orderDetail.assertComment()
    })
})