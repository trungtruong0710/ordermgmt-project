import { expect, Page } from "@playwright/test";
import student from "../variables/student";
import orderType from "../variables/order-type";
import materialProduct from "../variables/material-product";
import discount from "../variables/discount";

export default class cmsOrderDetail{
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     ======================================================= DEFINE GENERAL ELEMENT =========================================================
     */

    public get eleGeneral__OrderNo() {
        const eleGeneral__OrderNo = this.page.locator('[data-testid="OrderManagementGeneralInfo__orderNumberValue"]')
        if(eleGeneral__OrderNo != null) {
            return eleGeneral__OrderNo;
        }else throw new Error('Cannot find eleGeneral__OrderNo')
    } // Get Order No

    public get eleGeneral__StudentName() {
        const eleGeneral__StudentName = this.page.locator('[data-testid="OrderManagementGeneralInfo__studentNameValue"]')
        if(eleGeneral__StudentName != null) {
            return eleGeneral__StudentName;
        }else throw new Error('Cannot find eleGeneral__StudentName')
    } // Get Student Name

    public get eleGeneral__CreatedDate() {
        const eleGeneral__CreatedDate = this.page.locator('[data-testid="OrderManagementGeneralInfo__createdDateValue"]')
        if(eleGeneral__CreatedDate != null) {
            return eleGeneral__CreatedDate;
        }else throw new Error('Cannot find eleGeneral__CreatedDate')
    } // Get Created date

    public get eleGeneral__OrderType() {
        const eleGeneral__OrderType = this.page.locator('[data-testid="OrderManagementGeneralInfo__orderTypeValue"]')
        if(eleGeneral__OrderType != null) {
            return eleGeneral__OrderType;
        }else throw new Error('Cannot find eleGeneral__OrderType')
    } // Get Order Type

    public get eleGeneral__Location() {
        const eleGeneral__Location = this.page.locator('[data-testid="OrderManagementGeneralInfo__locationNameValue"]')
        if(eleGeneral__Location != null) {
            return eleGeneral__Location;
        }else throw new Error('Cannot find eleGeneral__Location')
    } // Get Location

    /**
     ======================================================= DEFINE PRODUCT LIST ELEMENT =========================================================
     */

    public get eleProductList__ProductIndexArray0() {
        const eleProductList__ProductIndexArray0 = this.page.locator('[data-testid="OrderDetailProductListTable__root"] >> [data-testid="TableBase__row"] >> [data-testid="TableIndexCell__index"]').nth(0)
        if(eleProductList__ProductIndexArray0 != null) {
            return eleProductList__ProductIndexArray0;
        }else throw new Error('Cannot find eleProductList__ProductIndexArray0')
    } // Get Product Index array 0

    public get eleProductList__ProductNameArray0() {
        const eleProductList__ProductNameArray0 = this.page.locator('[data-testid="ProductListCell__productName"]').nth(0)
        if(eleProductList__ProductNameArray0 != null) {
            return eleProductList__ProductNameArray0;
        }else throw new Error('Cannot find eleProductList__ProductNameArray0')
    } // Get Product name array 0

    public get eleProductList__ProductDiscountNameArray0() {
        const eleProductList__DiscountNameArray0 = this.page.locator('[data-testid="ProductListCell__discountRow"]').nth(0)
        if(eleProductList__DiscountNameArray0 != null) {
            return eleProductList__DiscountNameArray0;
        }else throw new Error('Cannot find eleProductList__DiscountNameArray0')
    } // Get Discount Name array 0

    public get eleProductList__ProductAmountArray0() {
        const eleProductList__ProductAmountArray0 = this.page.locator('[data-testid="OrderDetailProductListTable__amount"]').nth(0)
        if(eleProductList__ProductAmountArray0 != null) {
            return eleProductList__ProductAmountArray0;
        }else throw new Error('Cannot find eleProductList__ProductAmountArray0')
    } // Get Product Amount array 0

    /**
     ======================================================= DEFINE BILLING ITEM ELEMENT =========================================================
     */

    public get eleBillingItem__BillingIndexArray0() {
        const eleProductList__ProductIndexArray0 = this.page.locator('[data-testid="OrderDetailBillingItemTable__root"] >> [data-testid="TableBase__row"] >> [data-testid="TableIndexCell__index"]').nth(0)
        if(eleProductList__ProductIndexArray0 != null) {
            return eleProductList__ProductIndexArray0;
        }else throw new Error('Cannot find eleProductList__ProductIndexArray0')
    } // Get Billing Index array 0

    public get eleBillingItem__BillingNumberArray0() {
        const eleBillingItem__BillingNumberArray0 = this.page.locator('[data-testid="OrderDetailBillingItemTable__billingNumber"]').nth(0)
        if(eleBillingItem__BillingNumberArray0 != null) {
            return eleBillingItem__BillingNumberArray0;
        }else throw new Error('Cannot find eleBillingItem__BillingNumberArray0')
    } // Get Billing number array 0

    public get eleBillingItem__BillingNameArray0() {
        const eleBillingItem__BillingNameArray0 = this.page.locator('[data-testid="BillingItemCell__productName"]').nth(0)
        if(eleBillingItem__BillingNameArray0 != null) {
            return eleBillingItem__BillingNameArray0;
        }else throw new Error('Cannot find eleBillingItem__BillingNameArray0')
    } // Get Billing name array 0

    public get eleBillingItem__BillingStatusArray0() {
        const eleBillingItem__BillingStatusArray0 = this.page.locator('[data-testid="OrderDetailBillingItemTable__status"]').nth(0)
        if(eleBillingItem__BillingStatusArray0 != null) {
            return eleBillingItem__BillingStatusArray0;
        }else throw new Error('Cannot find eleBillingItem__BillingStatusArray0')
    } // Get Billing status array 0

    public get eleBillingItem__BillingDateArray0() {
        const eleBillingItem__BillingDateArray0 = this.page.locator('[data-testid="OrderDetailBillingItemTable__billingDate"]').nth(0)
        if(eleBillingItem__BillingDateArray0 != null) {
            return eleBillingItem__BillingDateArray0;
        }else throw new Error('Cannot find eleBillingItem__BillingDateArray0')
    } // Get Billing date array 0

    public get eleBillingItem__BillingAmountArray0() {
        const eleProductList__ProductAmountArray0 = this.page.locator('[data-testid="OrderDetailBillingItemTable__amount"]').nth(0)
        if(eleProductList__ProductAmountArray0 != null) {
            return eleProductList__ProductAmountArray0;
        }else throw new Error('Cannot find eleProductList__ProductAmountArray0')
    } // Get Product Amount array 0

    /**
     ======================================================= DEFINE ACTION LOG ELEMENT =========================================================
     */

    public get eleActionLog__ActionLogIndexArray0() {
        const eleActionLog__ActionLogIndexArray0 = this.page.locator('[data-testid="OrderDetailActionLogTable__root"] >> [data-testid="TableBaseBody__root"] >> [data-testid="TableIndexCell__index"]').nth(0)
        if(eleActionLog__ActionLogIndexArray0 != null) {
            return eleActionLog__ActionLogIndexArray0;
        }else throw new Error('Cannot find eleActionLog__ActionLogIndexArray0')
    } // Get Action Log Index array 0

    public get eleActionLog__UserNameArray0() {
        const eleActionLog__UserNameArray0 = this.page.locator('[data-testid="OrderDetailActionLogTable__username"]').nth(0)
        if(eleActionLog__UserNameArray0 != null) {
            return eleActionLog__UserNameArray0;
        }else throw new Error('Cannot find eleActionLog__UserNameArray0')
    } // Get User name array 0

    public get eleActionLog__ActionArray0() {
        const eleActionLog__ActionArray0 = this.page.locator('[data-testid="OrderDetailActionLogTable__action"]').nth(0)
        if(eleActionLog__ActionArray0 != null) {
            return eleActionLog__ActionArray0;
        }else throw new Error('Cannot find eleActionLog__ActionArray0')
    } // Get Action array 0

    public get eleActionLog__EnableCommentBtnArray0() {
        const eleActionLog__EnableCommentBtnArray0 = this.page.locator('[data-testid="OrderDetailActionLogTable__viewCommentButton"]').nth(0)
        if(eleActionLog__EnableCommentBtnArray0 != null) {
            return eleActionLog__EnableCommentBtnArray0;
        }else throw new Error('Cannot find eleActionLog__EnableCommentBtnArray0')
    } // Get Enable comment btn array 0

    public get eleComment() {
        const eleComment = this.page.locator('[data-testid="OrderDetailCommentDialog__comment"]')
        if(eleComment != null) {
            return eleComment;
        }else throw new Error('Cannot find eleComment')
    } // Get Enable comment btn array 0

    public get eleActionLog__UpdatedAtArray0() {
        const eleActionLog__UpdatedAtArray0 = this.page.locator('[data-testid="OrderDetailActionLogTable__updatedTime"]').nth(0)
        if(eleActionLog__UpdatedAtArray0 != null) {
            return eleActionLog__UpdatedAtArray0;
        }else throw new Error('Cannot find eleActionLog__UpdatedAtArray0')
    } // Get Updated at array 0

    /**
     ======================================================= COMMON STEPS =========================================================
     */

    public getCurrentDate() {
        const date = new Date().toISOString().slice(0,10)
        let re = /-/gi
        const convertDate = date.replace(re,"/")
        return convertDate
    }

    public async viewComment() {
        const ele = this.eleActionLog__EnableCommentBtnArray0
        await ele?.click()
    }

    /**
     ======================================================= GENERAL ASSERTION =========================================================
     */

    public async assertGeneral__OrderNo() {
        const ele = this.eleGeneral__OrderNo
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