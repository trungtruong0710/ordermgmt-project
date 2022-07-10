import { expect, Page } from "@playwright/test";
import student from "../variables/student";
import orderType from "../variables/order-type";
import materialProduct from "../variables/material-product";
import discount from "../variables/discount";
import cmsOrderDetail from "./cms-order-detail.page";

export default class cmsOrderDetailOneTimeMaterial{
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     ======================================================= GENERAL ASSERTION =========================================================
     */

    public async assertGeneral__OrderNo() {
        const ele = new cmsOrderDetail(this.page)
        const eleString = await ele?.innerText()
        expect(eleString).toContain('OD-')
        console.log('Order No: ' + eleString)
    } //Assert Order No contain "OD-"

    public async assertGeneral__StudentName() {
        const ele = this.eleGeneral__StudentName
        const eleString = await ele?.innerText()
        expect(eleString).toContain(student.studentName)
        console.log('Student Name: ' + eleString +  ' - ' + student.studentName)
    } // Assert Student Name

    public async assertGeneral__CreatedDate() {
        const ele = this.eleGeneral__CreatedDate
        const eleString = await ele?.innerText()
        expect(eleString).toContain(this.getCurrentDate())
        console.log('Created Date: ' + eleString +  ' - ' + this.getCurrentDate())
    } // Assert Created Date is current date

    public async assertGeneral__OrderType() {
        const ele = this.eleGeneral__OrderType
        const eleString = await ele?.innerText()
        expect(eleString).toContain(orderType.orderType__New)
        console.log('Order Status: ' + eleString +  ' - ' + orderType.orderType__New)
    } // Assert Order Type is New

    public async assertGeneral__Location() {
        const ele = this.eleGeneral__Location
        const eleString = await ele?.innerText()
        expect(eleString).toContain(student.studentLocation)
        console.log('Location: ' + eleString +  ' - ' + student.studentLocation)
    } // Assert Location is Payment Center 1

    /**
     ======================================================= PRODUCT LIST ASSERTION =========================================================
     */

    public async assertProductList__ProductIndexArray0() {
        const ele = this.eleProductList__ProductIndexArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('1')
        console.log('Product Index Array 0: ' + eleString + ' - 1')
    } //Assert Product Index is "1"

    public async assertProductList__ProductNameArray0__IsMaterialFee100ApplyDiscountAmount10() {
        const ele = this.eleProductList__ProductNameArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain(materialProduct.productMaterialFee100Tax5)
        console.log('Product Name Array 0: ' + eleString + ' - ' + materialProduct.productMaterialFee100Tax5)
    } //Assert Product Name = Material Fee 100 Tax 5

    public async assertProductList__ProductNameArray0__Is20230101MaterialFee100Tax5() {
        const ele = this.eleProductList__ProductNameArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain(materialProduct.product20230101MaterialFee100Tax5)
        console.log('Product Name Array 0: ' + eleString + ' - ' + materialProduct.product20230101MaterialFee100Tax5)
    } //Assert Product Name = 20230101 Material Fee 100 Tax 5

    public async assertProductList__ProductDiscountNameArray0__IsNull() {
        const ele = this.eleProductList__ProductDiscountNameArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('--')
        console.log('Product Discount Name Array 0: ' + eleString + ' - --')
    } //Assert Product Discount Name is NULL

    public async assertProductList__ProductDiscountNameArray0__IsAmount10() {
        const ele = this.eleProductList__ProductDiscountNameArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain(discount.discountAmount10Name)
        console.log('Product Discount Name Array 0: ' + eleString + ' - ' + discount.discountAmount10Name)
    } //Assert Product Discount Name = Amount Discount 10

    public async assertProductList__ProductAmountArray0Is90() {
        const ele = this.eleProductList__ProductAmountArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('￥90')
        console.log('Product Amount Array 0: ' + eleString + ' - ￥90')
    } //Assert Product Amount array 0 = 90

    public async assertProductList__ProductAmountArray0Is100() {
        const ele = this.eleProductList__ProductAmountArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('￥100')
        console.log('Product Amount Array 0: ' + eleString + ' - ￥100')
    } //Assert Product Amount array 0 = 100

    /**
     ======================================================= BILLING ITEM ASSERTION =========================================================
     */

    public async assertBillingItem__BillingIndexArray0() {
        const ele = this.eleBillingItem__BillingIndexArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('1')
        console.log('Billing Index Array 0: ' + eleString + ' - 1')
    } //Assert Billing Index is "1"

    public async assertBillingItem__BillingNumberArray0() {
        const ele = this.eleBillingItem__BillingNumberArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('BL-')
        console.log('Billing No Array 0: ' + eleString)
    } //Assert Billing No is "BL-"

    public async assertBillingItem__BillingNameArray0__IsMaterialFee100ApplyDiscountAmount10() {
        const ele = this.eleBillingItem__BillingNameArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain(materialProduct.productMaterialFee100Tax5)
        console.log('Billing Name Array 0: ' + eleString + ' - ' + materialProduct.productMaterialFee100Tax5)
    } //Assert Billing Name = Material Fee 100 Tax 5

    public async assertBillingItem__BillingNameArray0__Is20230101MaterialFee100Tax5() {
        const ele = this.eleBillingItem__BillingNameArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain(materialProduct.product20230101MaterialFee100Tax5)
        console.log('Billing Name Array 0: ' + eleString + ' - ' + materialProduct.product20230101MaterialFee100Tax5)
    } //Assert Billing Name = 20230101 Material Fee 100 Tax 5

    public async assertBillingItem__BillingStatusArray0_IsBilled() {
        const ele = this.eleBillingItem__BillingStatusArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('Billed')
        console.log('Billing Status Array 0: ' + eleString + ' - Billed')
    } //Assert Billing Status is Billed

    public async assertBillingItem__BillingStatusArray0_IsPending() {
        const ele = this.eleBillingItem__BillingStatusArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('Pending')
        console.log('Billing Status Array 0: ' + eleString + ' - Pending')
    } //Assert Billing Status is Pending

    public async assertBillingItem__BillingDateArray0_IsCurrentDate() {
        const ele = this.eleBillingItem__BillingDateArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain(this.getCurrentDate())
        console.log('Billing Date: ' + eleString +  ' - ' + this.getCurrentDate())
    } //Assert Billing date is current date

    public async assertBillingItem__BillingDateArray0_Is20230101() {
        const ele = this.eleBillingItem__BillingDateArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('2023/01/01')
        console.log('Billing Date: ' + eleString +  ' - 2023/01/01')
    } //Assert Billing date is 2023/01/01

    public async assertBillingItem__BillingAmountArray0Is90() {
        const ele = this.eleBillingItem__BillingAmountArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('￥90')
        console.log('Billing Amount Array 0: ' + eleString + ' - ￥90')
    } //Assert Billing Amount is 90

    public async assertBillingItem__BillingAmountArray0Is100() {
        const ele = this.eleBillingItem__BillingAmountArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('￥100')
        console.log('Billing Amount Array 0: ' + eleString + ' - ￥100')
    } //Assert Billing Amount is 100

    /**
     ======================================================= ACTION LOG ASSERTION =========================================================
     */

    public async assertActionLog__ActionLogIndexArray0() {
        const ele = this.eleActionLog__ActionLogIndexArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('1')
        console.log('Action Log Index Array 0: ' + eleString + ' - 1')
    } //Assert Action Log Index is "1"

    public async assertActionLog__UserNameArray0() {
        const ele = this.eleActionLog__UserNameArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain('thu.vo+uatmanabie@manabie.com')
        console.log('Username Array 0: ' + eleString + ' - thu.vo+uatmanabie@manabie.com')
    } //Assert User name = thu.vo+uatmanabie@manabie.com

    public async assertComment() {
        await this.viewComment()
        const ele = this.eleComment
        const eleString = await ele?.innerText()
        expect(eleString).toContain('Demo comment')
        console.log('Comment: ' + eleString + ' - Demo comment')
    } //Assert Comment = Demo comment

    public async assertActionLog__UpdatedAtArray0__IsCurrentDate() {
        const ele = this.eleActionLog__UpdatedAtArray0
        const eleString = await ele?.innerText()
        const eleStringRemoveTime = eleString.slice(0,10)
        expect(eleStringRemoveTime).toContain(this.getCurrentDate())
        console.log('Updated At: ' + eleStringRemoveTime +  ' - ' + this.getCurrentDate())
    } //Assert Updated At is current date
}