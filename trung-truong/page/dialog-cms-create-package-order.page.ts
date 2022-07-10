import { expect, Page } from "@playwright/test";
import student from "../variables/student";
import packageProduct from "../variables/package-product";
import discount from "../variables/discount";
import billedAtOrder from "../variables/billed-at-order";
import commonSteps from "./common-steps.page";
import dialogCMSCreateOrder from "./dialog-cms-create-order.page";

export default class dialogCMSCreatePackageOrder {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * ==================================================== SELECT PACKAGE ===========================================================
     */

    public async selectPackage0Course() {
        const createOrder = new dialogCMSCreateOrder(this.page)
        const ele = await createOrder.eleProductArray0
        await ele?.fill(packageProduct.productPackage0Course)
        await createOrder.selectDropDownList()
    }
}