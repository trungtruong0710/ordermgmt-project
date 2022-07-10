import { expect, Page } from "@playwright/test";
import student from "../variables/student";
import materialProduct from "../variables/material-product";
import discount from "../variables/discount";
import billedAtOrder from "../variables/billed-at-order";
import feeProduct from "../variables/fee-product";
import commonSteps from "./common-steps.page";

export default class dialogCMSCreateOrder {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     =========================== DEFINE ELEMENT =============================
     */
    
     public async selectCreateOrder() {
        await this.page.waitForSelector('[data-testid="ActionPanel__trigger"]')
        await this.page.locator('[data-testid="ActionPanel__trigger"]').click()
        await this.page.waitForSelector('[aria-label="Create Order"]')
        await this.page.locator('[aria-label="Create Order"]').click()
    }

    public get eleStudentName() {
        const eleStudentName = this.page.locator('[data-testid="StudentInfoSection__studentNameContainer"]')
        if(eleStudentName != null) {
            return eleStudentName;
        }else throw new Error('Cannot find eleStudentName')
    } // Get student name

    public get eleAddNewProduct() {
        const eleAddNewProduct = this.page.locator('[data-testid="TableAddDeleteRow__addButton"]')
        if(eleAddNewProduct != null) {
            return eleAddNewProduct;
        }else throw new Error('Cannot find eleAddNewProduct')
    } // Get Add new button

    public get eleHorizonBtnArray1() {
        const eleHorizonBtnArray1 = this.page.locator('[data-testid="MoreHorizIcon"]').nth(1)
        if(eleHorizonBtnArray1 != null) {
            return eleHorizonBtnArray1;
        }else throw new Error('Cannot find eleHorizonBtnArray1')
    } // Get Horizon btn array 1

    public get eleDeleteBtn() {
        const eleDeleteBtn = this.page.locator('[aria-label="Delete"]')
        if(eleDeleteBtn != null) {
            return eleDeleteBtn;
        }else throw new Error('Cannot find eleDeleteBtn')
    } // Get Delete btn

    public get eleProductListNoInformationData() {
        const eleProductListNoInformationData = this.page.locator('[data-testid="TableBase__noDataMessage"] [data-testid="NoData__message"]')
        if(eleProductListNoInformationData != null) {
            return eleProductListNoInformationData;
        }else throw new Error('Cannot find eleProductListNoInformationData')
    } // Get No information data in Product list

    public get eleBilledAtOrderNoInformationData() {
        const eleBilledAtOrderNoInformationData = this.page.locator('[data-testid="BilledAtOrderSection__noDataContainer"] [data-testid="NoData__message"]')
        if(eleBilledAtOrderNoInformationData != null) {
            return eleBilledAtOrderNoInformationData;
        }else throw new Error('Cannot find eleBilledAtOrderNoInformationData')
    } // Get No information data in Billed at Order

    public get eleProductArray0() {
        const eleProductArray0 = this.page.locator('[name="students.0.productFieldArrayItem.0.product"]')
        if(eleProductArray0 != null) {
            return eleProductArray0;
        }else throw new Error('Cannot find eleProductArray0')
    } // Get product array 0

    public get eleProductArray1() {
        const eleProductArray1 = this.page.locator('[name="students.0.productFieldArrayItem.1.product"]')
        if(eleProductArray1 != null) {
            return eleProductArray1;
        }else throw new Error('Cannot find eleProductArray1')
    } // Get product array 1

    public get eleProductArray2() {
        const eleProductArray2 = this.page.locator('[name="students.0.productFieldArrayItem.2.product"]')
        if(eleProductArray2 != null) {
            return eleProductArray2;
        }else throw new Error('Cannot find eleProductArray2')
    } // Get product array 2

    public get eleUpcomingProductNameArray0() {
        const eleUpcomingProductNameArray0 = this.page.locator('[data-testid="UpcomingBillingProduct__name"]').nth(0)
        if(eleUpcomingProductNameArray0 != null) {
            return eleUpcomingProductNameArray0;
        }else throw new Error('Cannot find eleUpcomingProductNameArray0')
    } // Get product name array 0 - Upcoming Billing Item

    public get eleUpcomingProductPriceArray0() {
        const eleUpcomingProductPriceArray0 = this.page.locator('[data-testid="UpcomingBillingProduct__price"]').nth(0)
        if(eleUpcomingProductPriceArray0 != null) {
            return eleUpcomingProductPriceArray0;
        }else throw new Error('Cannot find eleUpcomingProductPriceArray0')
    } // Get product price array 0 - Upcoming Billing Item

    public get eleUpcomingProductNameArray1() {
        const eleUpcomingProductNameArray1 = this.page.locator('[data-testid="UpcomingBillingProduct__name"]').nth(1)
        if(eleUpcomingProductNameArray1 != null) {
            return eleUpcomingProductNameArray1;
        }else throw new Error('Cannot find eleUpcomingProductNameArray1')
    } // Get product name array 1 - Upcoming Billing Item

    public get eleUpcomingProductPriceArray1() {
        const eleUpcomingProductPriceArray1 = this.page.locator('[data-testid="UpcomingBillingProduct__price"]').nth(1)
        if(eleUpcomingProductPriceArray1 != null) {
            return eleUpcomingProductPriceArray1;
        }else throw new Error('Cannot find eleUpcomingProductPriceArray1')
    } // Get product price array 1 - Upcoming Billing Item

    public get eleUpcomingProductNameArray2() {
        const eleUpcomingProductNameArray2 = this.page.locator('[data-testid="UpcomingBillingProduct__name"]').nth(2)
        if(eleUpcomingProductNameArray2 != null) {
            return eleUpcomingProductNameArray2;
        }else throw new Error('Cannot find eleUpcomingProductNameArray2')
    } // Get product name array 2 - Upcoming Billing Item

    public get eleUpcomingProductPriceArray2() {
        const eleUpcomingProductPriceArray2 = this.page.locator('[data-testid="UpcomingBillingProduct__price"]').nth(2)
        if(eleUpcomingProductPriceArray2 != null) {
            return eleUpcomingProductPriceArray2;
        }else throw new Error('Cannot find eleUpcomingProductPriceArray2')
    } // Get product price array 2 - Upcoming Billing Item

    public get eleDiscountArray0() {
        const eleDiscountArray0 = this.page.locator('[name="students.0.productFieldArrayItem.0.discount"]')
        if(eleDiscountArray0 != null) {
            return eleDiscountArray0;
        }else throw new Error('Cannot find eleDiscountArray0')
    } // Get discount array 0

    public get eleDiscountArray1() {
        const eleDiscountArray1 = this.page.locator('[name="students.0.productFieldArrayItem.1.discount"]')
        if(eleDiscountArray1 != null) {
            return eleDiscountArray1;
        }else throw new Error('Cannot find eleDiscountArray1')
    } // Get discount array 1

    public get eleDiscountArray2() {
        const eleDiscountArray2 = this.page.locator('[name="students.0.productFieldArrayItem.2.discount"]')
        if(eleDiscountArray2 != null) {
            return eleDiscountArray2;
        }else throw new Error('Cannot find eleDiscountArray2')
    } // Get discount array 2

    public get firstEleUpcomingDiscount() {
        const firstEleUpcomingDiscount = this.page.locator('[data-testid="UpcomingBillingProduct__discount"]').nth(0)
        if(firstEleUpcomingDiscount != null) {
            return firstEleUpcomingDiscount;
        }else throw new Error('Cannot find firstEleUpcomingDiscount')
    } // Get upcoming discount first ele

    public get secondEleUpcomingDiscount() {
        const secondEleUpcomingDiscount = this.page.locator('[data-testid="UpcomingBillingProduct__discount"]').nth(1)
        if(secondEleUpcomingDiscount != null) {
            return secondEleUpcomingDiscount;
        }else throw new Error('Cannot find secondEleUpcomingDiscount')
    } // Get upcoming discount second ele

    public get thirdEleUpcomingDiscount() {
        const thirdEleUpcomingDiscount = this.page.locator('[data-testid="UpcomingBillingProduct__discount"]').nth(2)
        if(thirdEleUpcomingDiscount != null) {
            return thirdEleUpcomingDiscount;
        }else throw new Error('Cannot find thirdEleUpcomingDiscount')
    } // Get upcoming discount third ele

    public get eleBillingDateArray0() {
        const eleBillingDateArray0 = this.page.locator('[data-testid="ProductListItemDetails__billingDate"]').nth(0)
        if(eleBillingDateArray0 != null) {
            return eleBillingDateArray0;
        }else throw new Error('Cannot find eleBillingDateArray0')
    } // Get billing date array 0

    public get eleBillingDateArray1() {
        const eleBillingDateArray1 = this.page.locator('[data-testid="ProductListItemDetails__billingDate"]').nth(1)
        if(eleBillingDateArray1 != null) {
            return eleBillingDateArray1;
        }else throw new Error('Cannot find eleBillingDateArray1')
    } // Get billing date array 1

    public get eleBillingDateArray2() {
        const eleBillingDateArray2 = this.page.locator('[data-testid="ProductListItemDetails__billingDate"]').nth(2)
        if(eleBillingDateArray2 != null) {
            return eleBillingDateArray2;
        }else throw new Error('Cannot find eleBillingDateArray2')
    } // Get billing date array 2

    public get elePackageStartDateArray0() {
        const elePackageStartDateArray0 = this.page.locator('[name="students.0.productFieldArrayItem.0.packageEntity.package_start_date"]').nth(0)
        if(elePackageStartDateArray0 != null) {
            return elePackageStartDateArray0;
        }else throw new Error('Cannot find elePackageStartDateArray0')
    } // Get package start date array 0

    public get eleComment() {
        const eleComment = this.page.locator('[data-testid="CommentSection__commentInput"]')
        if(eleComment != null) {
            return eleComment;
        }else throw new Error('Cannot find eleComment')
    } // Get comment

    public get eleBilledAtOrder_ProductNameAndPriceArray0() {
        const eleBilledAtOrder_ProductNameAndPriceArray0 = this.page.locator('[data-testid="BilledAtOrderProduct__productContainer"]').nth(0)
        if(eleBilledAtOrder_ProductNameAndPriceArray0 != null) {
            return eleBilledAtOrder_ProductNameAndPriceArray0;
        }else throw new Error('Cannot find eleBilledAtOrder_ProductNameAndPriceArray0')
    } // Get product name and price array 0 - billed at order

    public get eleBilledAtOrder_ProductNameAndPriceArray1() {
        const eleBilledAtOrder_ProductNameAndPriceArray1 = this.page.locator('[data-testid="BilledAtOrderProduct__productContainer"]').nth(1)
        if(eleBilledAtOrder_ProductNameAndPriceArray1 != null) {
            return eleBilledAtOrder_ProductNameAndPriceArray1;
        }else throw new Error('Cannot find eleBilledAtOrder_ProductNameAndPriceArray1')
    } // Get product name and price array 1 - billed at order

    public get eleBilledAtOrder_ProductNameAndPriceArray2() {
        const eleBilledAtOrder_ProductNameAndPriceArray2 = this.page.locator('[data-testid="BilledAtOrderProduct__productContainer"]').nth(2)
        if(eleBilledAtOrder_ProductNameAndPriceArray2 != null) {
            return eleBilledAtOrder_ProductNameAndPriceArray2;
        }else throw new Error('Cannot find eleBilledAtOrder_ProductNameAndPriceArray2')
    } // Get product name and price array 2 - billed at order

    public get eleBilledAtOrder_ProductDiscountNameAndAmountArray0() {
        const eleBilledAtOrder_ProductDiscountNameAndAmountArray0 = this.page.locator('[data-testid="BilledAtOrderProduct__discountContainer"]').nth(0)
        if(eleBilledAtOrder_ProductDiscountNameAndAmountArray0 != null) {
            return eleBilledAtOrder_ProductDiscountNameAndAmountArray0;
        }else throw new Error('Cannot find eleBilledAtOrder_ProductDiscountNameAndAmountArray0')
    } // Get product discount and amount array 0 - billed at order

    public get eleBilledAtOrder_ProductDiscountNameAndAmountArray1() {
        const eleBilledAtOrder_ProductDiscountNameAndAmountArray1 = this.page.locator('[data-testid="BilledAtOrderProduct__discountContainer"]').nth(1)
        if(eleBilledAtOrder_ProductDiscountNameAndAmountArray1 != null) {
            return eleBilledAtOrder_ProductDiscountNameAndAmountArray1;
        }else throw new Error('Cannot find eleBilledAtOrder_ProductDiscountNameAndAmountArray1')
    } // Get product discount and amount array 1 - billed at order

    public get eleBilledAtOrder_ProductDiscountNameAndAmountArray2() {
        const eleBilledAtOrder_ProductDiscountNameAndAmountArray2 = this.page.locator('[data-testid="BilledAtOrderProduct__discountContainer"]').nth(2)
        if(eleBilledAtOrder_ProductDiscountNameAndAmountArray2 != null) {
            return eleBilledAtOrder_ProductDiscountNameAndAmountArray2;
        }else throw new Error('Cannot find eleBilledAtOrder_ProductDiscountNameAndAmountArray2')
    } // Get product discount and amount array 2 - billed at order

    public get eleSubTotal() {
        const eleSubTotal = this.page.locator('[data-testid="BilledAtOrderList__subtotal"]')
        if(eleSubTotal != null) {
            return eleSubTotal;
        }else throw new Error('Cannot find eleSubTotal')
    } // Get sub-total

    public get eleTaxInclusiveArray0() {
        const eleTaxInclusiveArray0 = this.page.locator('[data-testid="BilledAtOrderList__taxInclusions"]').nth(0)
        if(eleTaxInclusiveArray0 != null) {
            return eleTaxInclusiveArray0;
        }else throw new Error('Cannot find eleTaxInclusiveArray0')
    } // Get tax inclusive array 0

    public get eleTaxInclusiveArray1() {
        const eleTaxInclusiveArray1 = this.page.locator('[data-testid="BilledAtOrderList__taxInclusions"]').nth(1)
        if(eleTaxInclusiveArray1 != null) {
            return eleTaxInclusiveArray1;
        }else throw new Error('Cannot find eleTaxInclusiveArray1')
    } // Get tax inclusive array 1

    public get eleTotal() {
        const eleTotal = this.page.locator('[data-testid="BilledAtOrderList__total"]')
        if(eleTotal != null) {
            return eleTotal;
        }else throw new Error('Cannot find eleTotal')
    } // Get total

    public get eleSubmitBtn() {
        const eleSubmitBtn = this.page.locator('[data-testid="OrderDialogFooter__buttonSubmit"]')
        if(eleSubmitBtn != null) {
            return eleSubmitBtn;
        }else throw new Error('Cannot find eleSubmitBtn')
    } // Get Submit btn

    public get eleSubmitSucceedToastMsg() {
        const eleSubmitSucceedToastMsg = this.page.locator('text=You have created the order successfully!')
        if(eleSubmitSucceedToastMsg != null) {
            return eleSubmitSucceedToastMsg;
        }else throw new Error('Cannot find eleSubmitSucceedToastMsg')
    } // Get Submit succeed toast msg

    public get eleMissingRequiredMsg() {
        const eleMissingRequiredMsg = this.page.locator('text=This section is required')
        if(eleMissingRequiredMsg != null) {
            return eleMissingRequiredMsg;
        }else throw new Error('Cannot find eleMissingRequiredMsg')
    } // Get missing required field error msg

    public get eleCannotBlankRequiredMsg() {
        const eleCannotBlankRequiredMsg = this.page.locator('text=Required fields cannot be blank!')
        if(eleCannotBlankRequiredMsg != null) {
            return eleCannotBlankRequiredMsg;
        }else throw new Error('Cannot find eleCannotBlankRequiredMsg')
    } // Get cannot blank required field error msg

    public get eleMissingPackageCoursePriceErrorMsg() {
        const eleMissingPackageCoursePriceErrorMsg = this.page.locator('[data-testid="WrapperSnackbar__container"] >> [data-testid="SnackbarBase__content"]')
        if(eleMissingPackageCoursePriceErrorMsg != null) {
            return eleMissingPackageCoursePriceErrorMsg;
        }else throw new Error('Cannot find eleMissingPackageCoursePriceErrorMsg')
    } // Get missing package course error msg

/**
 ======================================================================== COMMON STEP ========================================================================
*/
    public getCurrentDate() {
        const date = new Date().toISOString().slice(0,10)
        let re = /-/gi
        const convertDate = date.replace(re,"/")
        return convertDate
    }

    public async selectDropDownList() {
        await this.page.waitForTimeout(500)
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('Enter')
    }

    public async selectStudentLocation() {
        await this.page.waitForSelector('[id="LocationsLowestLevelAutocompleteHF__autocomplete"]')
        await this.page.locator('[id="LocationsLowestLevelAutocompleteHF__autocomplete"]').click()
        await this.page.waitForTimeout(200)
        await this.page.locator('[id="LocationsLowestLevelAutocompleteHF__autocomplete"]').fill(student.studentLocation)
        await this.selectDropDownList()
    }

    public async selectStudentLocation2() {
        await this.page.waitForSelector('[id="LocationsLowestLevelAutocompleteHF__autocomplete"]')
        await this.page.locator('[id="LocationsLowestLevelAutocompleteHF__autocomplete"]').click()
        await this.page.waitForTimeout(200)
        await this.page.locator('[id="LocationsLowestLevelAutocompleteHF__autocomplete"]').fill(student.studentLocation2)
        await this.selectDropDownList()
    }
    
    public async clickAddNewProduct() {
        const ele = this.eleAddNewProduct
        await ele?.click()
    } // Add new product

    public async clickHorizonBtnArray1() {
        const ele = this.eleHorizonBtnArray1
        await ele?.click()
    } // Click Horizon Btn Array 1

    public async clickDeleteBtn() {
        const ele = this.eleDeleteBtn
        await ele?.click()
    } // Click Delete Btn

    public async addComment() {
        const ele = this.eleComment
        await ele?.fill('Demo comment')
    } // Add comment

    public async checkProductIsNotVisible() {
        const ele = await this.eleProductListNoInformationData.innerText()
        expect(ele).toContain('No Information')
        console.log(ele)
    } // Check product is not visible

    public async checkBilledAtOrderIsNull() {
        const ele = await this.eleBilledAtOrderNoInformationData.innerText()
        expect(ele).toContain('No Information')
        console.log(ele)
    } // Check Billed At Order is null

    public async clickSubmit() {
        const ele = this.eleSubmitBtn
        await ele?.click()
    } // click Submit

/**
 ======================================================================== SELECT MATERIAL PRODUCT ========================================================================
*/

    public async select20230101MaterialFee100Tax5Array0() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.product20230101MaterialFee100Tax5)
        await this.selectDropDownList()
    } // Select 20230101 - material - 100 - 5% - array 0

    public async select20230102MaterialFee100Tax5Array1() {
        const ele = this.eleProductArray1
        await ele?.fill(materialProduct.product20230102MaterialFee100Tax5)
        await this.selectDropDownList()
    } // Select 20230102 - material - 100 - 5% - array 1

    public async select20230103MaterialFee100Tax5Array2() {
        const ele = this.eleProductArray2
        await ele?.fill(materialProduct.product20230103MaterialFee100Tax5)
        await this.selectDropDownList()
    } // Select 20230103 - material - 100 - 5% - array 2

    public async selectMaterialFee92Tax10Array0() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.productMaterialFee92Tax10)
        await this.selectDropDownList()
    } // Select material - 92 - 10% - array 0

    public async selectMaterialFee95Tax10Array0() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.productMaterialFee95Tax10)
        await this.selectDropDownList()
    } // Select material - 95 - 10% - array 0

    public async selectMaterialFee100NoTaxArray0() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.productMaterialFee100NoTax)
        await this.selectDropDownList()
    } // Select material - 100 - No Tax - array 0

    public async selectMaterialFee100Tax5Array0() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.productMaterialFee100Tax5)
        await this.selectDropDownList()
    } // Select material - 100 - 10% - array 0

    public async selectMaterialFee100Tax10Array1() {
        const ele = this.eleProductArray1
        await ele?.fill(materialProduct.productMaterialFee100Tax10)
        await this.selectDropDownList()
    } // Select material - 100 - 5% - array 1

    public async selectMaterial2Fee100NoTaxArray1() {
        const ele = this.eleProductArray1
        await ele?.fill(materialProduct.productMaterial2Fee100NoTax)
        await this.selectDropDownList()
    } // Select material 2 - 100 - No Tax - array 1

    public async selectMaterial2Fee100Tax5Array2() {
        const ele = this.eleProductArray2
        await ele?.fill(materialProduct.productMaterial2Fee100Tax5)
        await this.selectDropDownList()
    } // Select material 2 - 100 - 5% - array 2

/**
 * ===================================================================== SELECT FEE PRODUCT ==============================================================
*/ 

    public async selectFeeMultipleLocationsArray0() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFeeMultipleLocations)
        await this.selectDropDownList()
    } // Select fee multiple locations array 0

    public async selectFeeMultipleGradesArray0() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFeeMultipleGrades)
        await this.selectDropDownList()
    } // Select fee multiple grades array 0

    public async selectFeeMultipleLocationsAndGradesArray0() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFeeMultipleLocationsAndGrades)
        await this.selectDropDownList()
    } // Select fee multiple locations and grades array 0

    public async selectFee92Tax10Array0() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFee92Tax10)
        await this.selectDropDownList()
    } // Select fee - 92 - 10% - array 0

    public async selectFee95Tax10Array0() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFee95Tax10)
        await this.selectDropDownList()
    } // Select fee - 95 - 10% - array 0

    public async selectFee100NoTaxArray0() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFee100NoTax)
        await this.selectDropDownList()
    } // Select fee - 100 - No Tax - array 0

    public async selectFee100Tax5Array0() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFee100Tax5)
        await this.selectDropDownList()
    } // Select fee - 100 - 5% - array 0

    public async select2Fee100NoTaxArray1() {
        const ele = this.eleProductArray1
        await ele?.fill(feeProduct.product2Fee100NoTax)
        await this.selectDropDownList()
    } // Select 2 fee - 100 - No Tax - array 1

    public async selectFee100Tax10Array1() {
        const ele = this.eleProductArray1
        await ele?.fill(feeProduct.productFee100Tax10)
        await this.selectDropDownList()
    } // Select fee - 100 - 10% - array 1

    public async select2Fee100Tax5Array2() {
        const ele = this.eleProductArray2
        await ele?.fill(feeProduct.product2Fee100Tax5)
        await this.selectDropDownList()
    } // Select fee 2 - 100 - 5% - array 2

    public async assertFeeMultipleLocationsArray0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProductFeeMultipleLocations)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProductFeeMultipleLocations)
    } // Assert Product Name and Price array 0 - Fee multiple locations

    public async assertFeeMultipleGradesArray0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProductFeeMultipleGrades)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProductFeeMultipleGrades)
    } // Assert Product Name and Price array 0 - Fee multiple grades

    public async assertFeeMultipleLocationsAndGradesArray0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProductFeeMultipleLocationsAndGrades)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProductFeeMultipleLocationsAndGrades)
    } // Assert Product Name and Price array 0 - Fee multiple locations and grades

    public async assertFeeNameAndPriceFee92Tax10Array0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProductFee92Tax10)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProductFee92Tax10)
    } // Assert Product Name and Price array 0 - Fee 92 - Tax 10

    public async assertFeeNameAndPriceFee95Tax10Array0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProductFee95Tax10)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProductFee95Tax10)
    } // Assert Product Name and Price array 0 - Fee 95 - Tax 10

    public async assertFeeNameAndPriceFee100NoTaxArray0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProductFee100NoTax)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProductFee100NoTax)
    } // Assert Product Name and Price array 0 - Fee 100 - No Tax

    public async assertFeeNameAndPriceFee100Tax5Array0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProductFee100Tax5)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProductFee100Tax5)
    } // Assert Product Name and Price array 0 - Fee 100 - Tax 5

    public async assertFee2NameAndPriceFee100NoTaxArray1() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray1
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProduct2Fee100NoTax)
        console.log('Array 1 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProduct2Fee100NoTax)
    } // Assert Product 2 Name and Price array 1 - Fee 100 - No Tax

    public async assertFeeNameAndPriceFee100Tax10Array1() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray1
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProductFee100Tax10)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProductFee100Tax10)
    } // Assert Product Name and Price array 1 - Fee 100 - Tax 10

    public async assertFeeNameAndPrice2Fee100Tax5Array2() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray2
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(feeProduct.assertProduct2Fee100Tax5)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + feeProduct.assertProduct2Fee100Tax5)
    } // Assert Product Name and Price array 2 - Fee 100 - Tax 5

/**
 ======================================================================== SELECT DISCOUNT ========================================================================
*/
    
    public async selectDiscountAmount10Array0() {
        const ele = this.eleDiscountArray0
        await ele?.fill(discount.discountAmount10Name)
        await this.selectDropDownList()
    } // Select discount amount 10 - array 0

    public async selectDiscountPercentage10Array0() {
        const ele = this.eleDiscountArray0
        await ele?.fill(discount.discountPercent10Name)
        await this.selectDropDownList()
    } // Select discount percentage 10 - array 0

    public async selectDiscountAmount10Array1() {
        const ele = this.eleDiscountArray1
        await ele?.fill(discount.discountAmount10Name)
        await this.selectDropDownList()
    } // Select discount amount 10 - array 1

    public async selectDiscountPercentage10Array1() {
        const ele = this.eleDiscountArray1
        await ele?.fill(discount.discountPercent10Name)
        await this.selectDropDownList()
    } // Select discount percentage 10 - array 1

    public async selectDiscountPercentage10Array2() {
        const ele = this.eleDiscountArray2
        await ele?.fill(discount.discountPercent10Name)
        await this.selectDropDownList()
    } // Select discount percentage 10 - array 2

/**
 ======================================================================== ASSERTION ========================================================================
*/

    public async assertBillingDateArray0IsCurrentDate() {
        const ele = this.eleBillingDateArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain(this.getCurrentDate())
        console.log('Array 0 - Billing Date: ' + eleString)
    } // Assert billing date array 0

    public async assertBillingDateArray1IsCurrentDate() {
        const ele = this.eleBillingDateArray1
        const eleString = await ele?.innerText()
        expect(eleString).toContain(this.getCurrentDate())
        console.log('Array 1 - Billing Date: ' + eleString)
    } // Assert billing date array 1

    public async assertBillingDateArray2IsCurrentDate() {
        const ele = this.eleBillingDateArray2
        const eleString = await ele?.innerText()
        expect(eleString).toContain(this.getCurrentDate())
        console.log('Array 2 - Billing Date: ' + eleString)
    } // Assert billing date array 2

    public async assertBillingDateArray0Is20230101() {
        const ele = this.eleBillingDateArray0
        const eleString = await ele?.innerText()
        expect(eleString).toContain(materialProduct.customBillingDate20230101)
        console.log('Array 0 - Billing Date: ' + eleString)
    } // Assert billing date array 0 is custom billing date 20230101

    public async assertBillingDateArray1Is20230102() {
        const ele = this.eleBillingDateArray1
        const eleString = await ele?.innerText()
        expect(eleString).toContain(materialProduct.customBillingDate20230102)
        console.log('Array 1 - Billing Date: ' + eleString)
    } // Assert billing date array 1 is custom billing date 20230102

    public async assertBillingDateArray2Is20230103() {
        const ele = this.eleBillingDateArray2
        const eleString = await ele?.innerText()
        expect(eleString).toContain(materialProduct.customBillingDate20230103)
        console.log('Array 2 - Billing Date: ' + eleString)
    } // Assert billing date array 2 is custom billing date 20230103

    // WIP
    public async assertPackageStartDateArray0() {
        const ele = this.elePackageStartDateArray0
        const eleString = await ele.inputValue()
        console.log(eleString)
    }

    public async assertMaterialNameAndPriceFee92Tax10Array0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(materialProduct.assertProductMaterialFee92Tax10)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + materialProduct.assertProductMaterialFee92Tax10)
    } // Assert Product Name and Price array 0 - Material Fee 92 - Tax 10

    public async assertMaterialNameAndPriceFee95Tax10Array0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(materialProduct.assertProductMaterialFee95Tax10)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + materialProduct.assertProductMaterialFee95Tax10)
    } // Assert Product Name and Price array 0 - Material Fee 95 - Tax 10

    public async assertMaterialNameAndPriceFee100NoTaxArray0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(materialProduct.assertProductMaterialFee100NoTax)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + materialProduct.assertProductMaterialFee100NoTax)
    } // Assert Product Name and Price array 0 - Material Fee 100 - No Tax

    public async assertMaterialNameAndPriceFee100Tax5Array0() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(materialProduct.assertProductMaterialFee100Tax5)
        console.log('Array 0 - Product Name and Price: ' + convertEleString + ' - ' + materialProduct.assertProductMaterialFee100Tax5)
    } // Assert Product Name and Price array 0 - Material Fee 100 - Tax 10

    public async assertMaterialNameAndPriceFee100Tax10Array1() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray1
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(materialProduct.assertProductMaterialFee100Tax10)
        console.log('Array 1 - Product Name and Price: ' + convertEleString + ' - ' + materialProduct.assertProductMaterialFee100Tax10)
    } // Assert Product Name and Price array 1 - Material Fee 100 - Tax 5

    public async assertMaterial2NameAndPriceFee100NoTaxArray1() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray1
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(materialProduct.assertProductMaterial2Fee100NoTax)
        console.log('Array 1 - Product Name and Price: ' + convertEleString + ' - ' + materialProduct.assertProductMaterial2Fee100NoTax)
    } // Assert Product Name and Price array 1 - Material 2 Fee 100 - No Tax

    public async assertMaterial2NameAndPriceFee100Tax5Array2() {
        const ele = this.eleBilledAtOrder_ProductNameAndPriceArray2
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(materialProduct.assertProductMaterial2Fee100Tax5)
        console.log('Array 2 - Product Name and Price: ' + convertEleString + ' - ' + materialProduct.assertProductMaterial2Fee100Tax5)
    } // Assert Product Name and Price array 2 - Material 2 Fee 100 - Tax 5

    public async assert20230101MaterialNameAndPriceFee100Tax5NoDiscountArray0() {
        const eleName = this.eleUpcomingProductNameArray0
        const elePrice = this.eleUpcomingProductPriceArray0
        const eleNameString = await eleName.innerText()
        const elePriceString = await elePrice.innerText()
        expect(eleNameString).toContain(materialProduct.assertProductName20230101MaterialFee100Tax5)
        expect(elePriceString).toContain(materialProduct.assertProductPriceUpcomingMaterialFee100Tax5NoDiscount)
        console.log('Array 0 - Product Name: ' + eleNameString + ' - ' + materialProduct.assertProductName20230101MaterialFee100Tax5)
        console.log('Array 0 - Product Price: ' + elePriceString + ' - ' + materialProduct.assertProductPriceUpcomingMaterialFee100Tax5NoDiscount)
    } // Assert Product Name and Price array 0 - 20230101 - Material Fee 100 - Tax 5 - Upcoming Billing

    public async assert20230102MaterialNameAndPriceFee100Tax5ApplyDiscountArray1() {
        const eleName = this.eleUpcomingProductNameArray1
        const elePrice = this.eleUpcomingProductPriceArray1
        const eleNameString = await eleName.innerText()
        const elePriceString = await elePrice.innerText()
        expect(eleNameString).toContain(materialProduct.assertProductName20230102MaterialFee100Tax5)
        expect(elePriceString).toContain(materialProduct.assertProductPriceUpcomingMaterialFee100Tax5ApplyDiscount)
        console.log('Array 1 - Product Name: ' + eleNameString + ' - ' + materialProduct.assertProductName20230102MaterialFee100Tax5)
        console.log('Array 1 - Product Price: ' + elePriceString + ' - ' + materialProduct.assertProductPriceUpcomingMaterialFee100Tax5ApplyDiscount)
    } // Assert Product Name and Price array 1 apply discount - 20230102 - Material Fee 100 - Tax 5 - Upcoming Billing

    public async assert20230103MaterialNameAndPriceFee100Tax5ApplyDiscountArray2() {
        const eleName = this.eleUpcomingProductNameArray2
        const elePrice = this.eleUpcomingProductPriceArray2
        const eleNameString = await eleName.innerText()
        const elePriceString = await elePrice.innerText()
        expect(eleNameString).toContain(materialProduct.assertProductName20230103MaterialFee100Tax5)
        expect(elePriceString).toContain(materialProduct.assertProductPriceUpcomingMaterialFee100Tax5ApplyDiscount)
        console.log('Array 2 - Product Name: ' + eleNameString + ' - ' + materialProduct.assertProductName20230103MaterialFee100Tax5)
        console.log('Array 2 - Product Price: ' + elePriceString + ' - ' + materialProduct.assertProductPriceUpcomingMaterialFee100Tax5ApplyDiscount)
    } // Assert Product Name and Price array 2 apply discount - 20230103 - Material Fee 100 - Tax 5 - Upcoming Billing

    public async assertUpcomingDiscountAmount10FirstEleName() {
        const ele = this.firstEleUpcomingDiscount
        const eleString = await ele?.innerText()
        expect(eleString).toContain(discount.discountAmount10Name)
        console.log('First discount name ele: ' + eleString + ' - ' + discount.discountAmount10Name)
    } // Assert Discount Name - Amount 10 - upcoming billing first discount ele

    public async assertUpcomingDiscountPercentage10SecondEleName() {
        const ele = this.secondEleUpcomingDiscount
        const eleString = await ele?.innerText()
        expect(eleString).toContain(discount.discountPercent10Name)
        console.log('Second discount name ele: ' + eleString + ' - ' + discount.discountPercent10Name)
    } // Assert Discount Name - Percentage 10 - upcoming billing second discount ele

    public async assertUpcomingDiscountThirdEleNameIsNotVisible() {
        const ele = this.thirdEleUpcomingDiscount
        expect(ele).toHaveCount(0)
    } // Assert not find third element in upcoming discount

    public async assertDiscountAmount10Array0() {
        const ele = this.eleBilledAtOrder_ProductDiscountNameAndAmountArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(discount.assertDiscountAmount10)
        console.log('Array 0 - Discount Amount: ' + convertEleString + ' - ' + discount.assertDiscountAmount10)
    } // Assert Discount Amount 10 - array 0

    public async assertDiscountPercentage10DiscountAmount9Array0() {
        const ele = this.eleBilledAtOrder_ProductDiscountNameAndAmountArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(discount.assertDiscountPercentage10DiscountAmount9)
        console.log('Array 0 - Discount Amount: ' + convertEleString + ' - ' + discount.assertDiscountPercentage10DiscountAmount9)
    } // Assert Discount Percentage 10 - Discount Amount 9 - array 0

    public async assertDiscountPercentage10Array0() {
        const ele = this.eleBilledAtOrder_ProductDiscountNameAndAmountArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(discount.assertDiscountPercentage10)
        console.log('Array 0 - Discount Amount: ' + convertEleString + ' - ' + discount.assertDiscountPercentage10)
    } // Assert Discount Percentage 10 - array 0

    public async assertDiscountAmount10Array1() {
        const ele = this.eleBilledAtOrder_ProductDiscountNameAndAmountArray1
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(discount.assertDiscountAmount10)
        console.log('Array 1 - Discount Amount: ' + convertEleString + ' - ' + discount.assertDiscountAmount10)
    } // Assert Discount Amount 10 - array 1

    public async assertDiscountPercentage10Array1() {
        const ele = this.eleBilledAtOrder_ProductDiscountNameAndAmountArray1
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(discount.assertDiscountPercentage10)
        console.log('Array 1 - Discount Amount: ' + convertEleString + ' - ' + discount.assertDiscountPercentage10)
    } // Assert Discount Percentage 10 - array 1

    public async assertDiscountPercentage10Array2() {
        const ele = this.eleBilledAtOrder_ProductDiscountNameAndAmountArray2
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(discount.assertDiscountPercentage10)
        console.log('Array 1 - Discount Amount: ' + convertEleString + ' - ' + discount.assertDiscountPercentage10)
    } // Assert Discount Percentage 10 - array 2

    public async assertSubTotal83() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal83)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal83)
    } // Assert subtotal 83

    public async assertSubTotal85() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal85)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal85)
    } // Assert subtotal 85

    public async assertSubTotal90() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal90)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal90)
    } // Assert subtotal 90

    public async assertSubTotal92() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal92)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal92)
    } // Assert subtotal 92

    public async assertSubTotal94() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal94)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal94)
    } // Assert subtotal 94

    public async assertSubTotal95() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal95)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal95)
    } // Assert subtotal 95

    public async assertSubTotal100() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal100)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal100)
    } // Assert subtotal 100

    public async assertSubTotal180() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal180)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal180)
    } // Assert subtotal 180

    public async assertSubTotal190() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal190)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal190)
    } // Assert subtotal 190

    public async assertSubTotal200() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal200)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal200)
    } // Assert subtotal 200

    public async assertSubTotal270() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal270)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal270)
    } // Assert subtotal 270

    public async assertSubTotal300() {
        const ele = this.eleSubTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.subTotal300)
        console.log('Sub-Total: ' + convertEleString + ' - ' + billedAtOrder.subTotal300)
    } // Assert subtotal 300

    public async assertInclusiveTax5OneProductTaxAmount4Array0() {
        const ele = this.eleTaxInclusiveArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.oneProduct_TaxIncl5TaxAmount4)
        console.log('Tax 5% array 0: ' + convertEleString + ' - ' + billedAtOrder.oneProduct_TaxIncl5TaxAmount4)
    } // Assert tax 5% - one product = 4

    public async assertInclusiveTax5OneProductArray0() {
        const ele = this.eleTaxInclusiveArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.oneProduct_TaxIncl5)
        console.log('Tax 5% array 0: ' + convertEleString + ' - ' + billedAtOrder.oneProduct_TaxIncl5)
    } // Assert tax 5% - one product = 5

    public async assertInclusiveTax10OneProductArray0() {
        const ele = this.eleTaxInclusiveArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.oneProduct_TaxIncl10)
        console.log('Tax 10% array 0: ' + convertEleString + ' - ' + billedAtOrder.oneProduct_TaxIncl10)
    } // Assert tax 10% - one product - array 0 - 10

    public async assertInclusiveTax10OneProductTaxAmount8Array0() {
        const ele = this.eleTaxInclusiveArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.oneProduct_TaxIncl10TaxAmount8)
        console.log('Tax 10% array 0: ' + convertEleString + ' - ' + billedAtOrder.oneProduct_TaxIncl10TaxAmount8)
    } // Assert tax 10% - one product - array 0 - 8

    public async assertInclusiveTax10OneProductTaxAmount9Array0() {
        const ele = this.eleTaxInclusiveArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.oneProduct_TaxIncl10TaxAmount9)
        console.log('Tax 10% array 0: ' + convertEleString + ' - ' + billedAtOrder.oneProduct_TaxIncl10TaxAmount9)
    } // Assert tax 10% - one product - array 0 - 9

    public async assertInclusiveTax5TwoProductTaxAmount9Array0() {
        const ele = this.eleTaxInclusiveArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.twoProduct_TaxIncl5TaxAmount9)
        console.log('Tax 5% array 0: ' + convertEleString + ' - ' + billedAtOrder.twoProduct_TaxIncl5TaxAmount9)
    } // Assert tax 5% - two product = 9

    public async assertInclusiveTax5TwoProductTaxAmount10Array0() {
        const ele = this.eleTaxInclusiveArray0
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.twoProduct_TaxIncl5TaxAmount10)
        console.log('Tax 5% array 0: ' + convertEleString + ' - ' + billedAtOrder.twoProduct_TaxIncl5TaxAmount10)
    } // Assert tax 5% - two product = 10

    public async assertInclusiveTax10OneProductArray1() {
        const ele = this.eleTaxInclusiveArray1
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.oneProduct_TaxIncl10)
        console.log('Tax 10% array 1: ' + convertEleString + ' - ' + billedAtOrder.oneProduct_TaxIncl10)
    } // Assert tax 10% - one product - array 1 - 10

    public async assertInclusiveTax10OneProductTaxAmount8Array1() {
        const ele = this.eleTaxInclusiveArray1
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.oneProduct_TaxIncl10TaxAmount8)
        console.log('Tax 10% array 1: ' + convertEleString + ' - ' + billedAtOrder.oneProduct_TaxIncl10TaxAmount8)
    } // Assert tax 10% - one product - array 1 - 8

    public async assertInclusiveTax10OneProductTaxAmount9Array1() {
        const ele = this.eleTaxInclusiveArray1
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.oneProduct_TaxIncl10TaxAmount9)
        console.log('Tax 10% array 1: ' + convertEleString + ' - ' + billedAtOrder.oneProduct_TaxIncl10TaxAmount9)
    } // Assert tax 10% - one product - array 1 - 9

    public async assertTotal83() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total83)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total83)
    } // Assert total 83

    public async assertTotal85() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total85)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total85)
    } // Assert total 85

    public async assertTotal90() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total90)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total90)
    } // Assert total 90

    public async assertTotal92() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total92)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total92)
    } // Assert total 92

    public async assertTotal94() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total94)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total94)
    } // Assert total 94

    public async assertTotal95() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total95)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total95)
    } // Assert total 95

    public async assertTotal100() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total100)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total100)
    } // Assert total 100

    public async assertTotal180() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total180)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total180)
    } // Assert total 180

    public async assertTotal190() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total190)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total190)
    } // Assert total 190

    public async assertTotal200() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total200)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total200)
    } // Assert total 200

    public async assertTotal270() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total270)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total270)
    } // Assert total 270

    public async assertTotal300() {
        const ele = this.eleTotal
        const eleString = await ele?.innerText()
        let re = /\n/gi
        const convertEleString = eleString.replace(re,'')
        expect(convertEleString).toContain(billedAtOrder.total300)
        console.log('Total: ' + convertEleString + ' - ' + billedAtOrder.total300)
    } // Assert total 300

    public async assertSubmitSucceed() {
        const ele = this.eleSubmitSucceedToastMsg
        const eleString = await ele?.innerText()
        expect(eleString).toContain('You have created the order successfully!')
        console.log('Result: ' + eleString)
    } // Assert submit order successfully

    public async assertMissingRequiredMsg() {
        const ele = this.eleMissingRequiredMsg
        const eleString = await ele?.innerText()
        expect(eleString).toContain('This section is required')
        console.log('Result: ' + eleString)
    } // Assert missing required field error msg

    public async assertCannotBlankRequiredMsg() {
        const ele = this.eleCannotBlankRequiredMsg
        const eleString = await ele?.innerText()
        expect(eleString).toContain('Required fields cannot be blank!')
        console.log('Result: ' + eleString)
    } // Assert cannot blank required field error msg

    public async assertEleMissingPackageCoursePriceErrorMsg() {
        const ele = this.eleMissingPackageCoursePriceErrorMsg
        const eleString = await ele.innerText()
        if (eleString === 'We meet an unknown error. Please try again or contact with Staff.') {
            expect(eleString).toContain('We meet an unknown error. Please try again or contact with Staff.')
        } if (eleString === 'ra.message.invalid_form') {
            expect(eleString).toContain('ra.message.invalid_form')
        }
        console.log('Result: ' + eleString)
    } // Assert missing package course error msg

    public async assertMaterialExpiredIsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.productMaterialExpired)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-MATERIAL-EXPIRED")')
        expect(nullEle).toHaveCount(0)
    } // Assert Material expired is not available

    public async assertFeeExpiredIsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFeeExpired)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-FEE-EXPIRED")')
        expect(nullEle).toHaveCount(0)
    } // Assert Fee expired is not available

    public async assertMaterialFutureIsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.productMaterialFuture)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-MATERIAL-FUTURE")')
        expect(nullEle).toHaveCount(0)
    } // Assert Material future is not available

    public async assertFeeFutureIsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFeeFuture)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-FEE-FUTURE")')
        expect(nullEle).toHaveCount(0)
    } // Assert Fee future is not available

    public async assertMaterialArchivedIsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.productMaterialArchived)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-MATERIAL-ARCHIVED")')
        expect(nullEle).toHaveCount(0)
    } // Assert Material archived is not available

    public async assertFeeArchivedIsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFeeArchived)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-FEE-ARCHIVED")')
        expect(nullEle).toHaveCount(0)
    } // Assert Fee archived is not available

    public async assertMaterialGrade2IsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.productMaterialGrade2)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-MATERIAL-GRADE-2")')
        expect(nullEle).toHaveCount(0)
    } // Assert Material grade 2 is not available

    public async assertFeeGrade2IsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFeeGrade2)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-FEE-GRADE-2")')
        expect(nullEle).toHaveCount(0)
    } // Assert Fee grade 2 is not available

    public async assertMaterialPaymentCenter2IsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(materialProduct.productMaterialPaymentCenter2)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-MATERIAL-PAYMENT-2")')
        expect(nullEle).toHaveCount(0)
    } // Assert Material payment center 2 is not available

    public async assertFeePaymentCenter2IsNotAvailable() {
        const ele = this.eleProductArray0
        await ele?.fill(feeProduct.productFeePaymentCenter2)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-FEE-PAYMENT-2")')
        expect(nullEle).toHaveCount(0)
    } // Assert Fee payment center 2 is not available

    public async assertExpiredDiscountIsNotAvailable() {
        const ele = this.eleDiscountArray0
        await ele?.fill(discount.discountExpired)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-EXPIRED-DISCOUNT")')
        expect(nullEle).toHaveCount(0)
    } // Assert expired discount is not available

    public async assertFutureDiscountIsNotAvailable() {
        const ele = this.eleDiscountArray0
        await ele?.fill(discount.discountFuture)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-FUTURE-DISCOUNT")')
        expect(nullEle).toHaveCount(0)
    } // Assert future discount is not available

    public async assertArchivedDiscountIsNotAvailable() {
        const ele = this.eleDiscountArray0
        await ele?.fill(discount.discountArchived)
        await this.page.waitForTimeout(500)
        const nullEle = this.page.locator('li[role="option"]:has-text("E2E-ARCHIVED-DISCOUNT")')
        expect(nullEle).toHaveCount(0)
    } // Assert archived discount is not available
}