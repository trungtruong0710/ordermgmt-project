import { test, chromium } from "@playwright/test";
import cmsLoginPage from "../page/cms-login.page";
import cmsStudent from "../page/cms-student.page";
import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
import dialogCMSCreatePackageOrder from "../page/dialog-cms-create-package-order.page";
import cmsOrderDetail from "../page/cms-order-detail.page";
import commonSteps from "../page/common-steps.page"
import environment from "../utils/environment";

test.describe('Cannot apply discount to order', () => {

    let login: cmsLoginPage;
    let student: cmsStudent;
    let createOrder: dialogCMSCreateOrder;
    let createPackage: dialogCMSCreatePackageOrder;
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
        createPackage = new dialogCMSCreatePackageOrder(page);
        orderDetail = new cmsOrderDetail(page);
        common = new commonSteps(page);
    })

    test.afterEach(async () => {
        const browser = await chromium.launch();
        await browser.close();
    })

    test.only('Create order with one one-time material and discount by fixed amount', async () => {
        await login.adminSignIn();
        await student.searchStudentName();
        await student.selectStudent();
        await createOrder.selectCreateOrder();
        await createOrder.selectStudentLocation();
        await createOrder.clickAddNewProduct();
        await createPackage.selectPackage0Course();
        await createOrder.checkBilledAtOrderIsNull();
        await createOrder.clickSubmit();
        await createOrder.assertEleMissingPackageCoursePriceErrorMsg();
        await common.wait5000ms()
    })
})