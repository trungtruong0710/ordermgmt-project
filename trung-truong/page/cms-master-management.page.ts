import {expect, Page} from '@playwright/test';

export default class cmsMasterManagement {

    private page:Page;
    
    constructor(page: Page) {
        this.page = page;
    }

/**
 * ==================================================== DEFINE CSV FILE ====================================================
 */

    public get importPath() {
        const discountFilePath = [
                '../upload-files/0-accounting-category-OK.csv',
                '../upload-files/1-grade-OK.csv',
                '../upload-files/2-discount-OK.csv',
                '../upload-files/3-billing-schedule-OK.csv',
                '../upload-files/4-billing-schedule-period-OK.csv',
                '../upload-files/5-tax-OK.csv',
                '../upload-files/6-billing-ratio-OK.csv',
                '../upload-files/7-package-OK.csv',
                '../upload-files/8-material-OK.csv',
                '../upload-files/9-fee-OK.csv',
                '../upload-files/10-product-grade-OK.csv',
                '../upload-files/11-product-course-OK.csv',
                '../upload-files/12-product-accounting-OK.csv',
                '../upload-files/13-product-location-OK.csv',
                '../upload-files/14-product-price-OK.csv',
                '../upload-files/15-leaving-reason-OK.csv'
            ]
        return discountFilePath
    }

    public get failAccountingCategoryImportPath() {
        const failAccountingCategoryImportPath = [
                '../upload-files-fail/0-accounting-category/01-accounting-category-blank-archived.csv',
                '../upload-files-fail/0-accounting-category/02-accounting-category-blank-name.csv',
                '../upload-files-fail/0-accounting-category/03-accounting-category-incorrect-template.csv',
                '../upload-files-fail/0-accounting-category/04-accounting-category-wrong-accounting-category-id.csv',
                '../upload-files-fail/0-accounting-category/05-accounting-category-wrong-value-archived.csv'
        ]
        return failAccountingCategoryImportPath
    }

    public get failGradeImportPath() {
        const failGradeImportPath = [
                '../upload-files-fail/1-grade/01-grade-blank-archived.csv',
                '../upload-files-fail/1-grade/02-grade-blank-name.csv',
                '../upload-files-fail/1-grade/03-grade-incorrect-template.csv',
                '../upload-files-fail/1-grade/04-grade-wrong-grade-id.csv',
                '../upload-files-fail/1-grade/05-grade-wrong-value-archived.csv'
        ]
        return failGradeImportPath
    }

    public get failDiscountImportPath() {
        const failDiscountImportPath = [
                '../upload-files-fail/2-discount/01-discount-blank-name.csv',
                '../upload-files-fail/2-discount/02-discount-blank-discount-type.csv',
                '../upload-files-fail/2-discount/03-discount-blank-discount-amount-type.csv',
                '../upload-files-fail/2-discount/04-discount-blank-discount-amount-value.csv',
                '../upload-files-fail/2-discount/05-discount-blank-available-from.csv',
                '../upload-files-fail/2-discount/06-discount-blank-available-until.csv',
                '../upload-files-fail/2-discount/07-discount-blank-archived.csv',
                '../upload-files-fail/2-discount/08-discount-incorrect-template.csv',
                '../upload-files-fail/2-discount/09-discount-wrong-discount-id.csv',
                '../upload-files-fail/2-discount/10-discount-wrong-value-archived.csv'
        ]
        return failDiscountImportPath
    }

    public get failBillingScheduleImportPath() {
        const failBillingScheduleImportPath = [
                '../upload-files-fail/3-billing-schedule/01-billing-schedule-blank-name.csv',
                '../upload-files-fail/3-billing-schedule/02-billing-schedule-blank-archived.csv',
                '../upload-files-fail/3-billing-schedule/03-billing-schedule-incorrect-template.csv',
                '../upload-files-fail/3-billing-schedule/04-billing-schedule-wong-billing-schedule-id.csv',
                '../upload-files-fail/3-billing-schedule/05-billing-schedule-wong-value-archived.csv'
        ]
        return failBillingScheduleImportPath
    }

    public get failBillingSchedulePeriodImportPath() {
        const failBillingSchedulePeriodImportPath = [
            '../upload-files-fail/4-billing-schedule-period/01-billing-schedule-period-blank-name.csv',
            '../upload-files-fail/4-billing-schedule-period/02-billing-schedule-period-blank-billing-schedule-id.csv',
            '../upload-files-fail/4-billing-schedule-period/03-billing-schedule-period-blank-start-date.csv',
            '../upload-files-fail/4-billing-schedule-period/04-billing-schedule-period-blank-end-date.csv',
            '../upload-files-fail/4-billing-schedule-period/05-billing-schedule-period-blank-billing-date.csv',
            '../upload-files-fail/4-billing-schedule-period/06-billing-schedule-period-blank-archived.csv',
            '../upload-files-fail/4-billing-schedule-period/07-billing-schedule-period-incorrect-template.csv',
            '../upload-files-fail/4-billing-schedule-period/08-billing-schedule-period-wrong-billing-schedule-period-id.csv',
            '../upload-files-fail/4-billing-schedule-period/09-billing-schedule-period-wrong-billing-schedule-id.csv',
            '../upload-files-fail/4-billing-schedule-period/10-billing-schedule-period-wrong-value-archived.csv'
        ]
        return failBillingSchedulePeriodImportPath
    }

    public get failTaxImportPath() {
        const failTaxImportPath = [
            '../upload-files-fail/5-tax/01-tax-blank-name.csv',
            '../upload-files-fail/5-tax/02-tax-blank-tax-percentage.csv',
            '../upload-files-fail/5-tax/03-tax-blank-tax-category.csv',
            '../upload-files-fail/5-tax/04-tax-blank-default-flag.csv',
            '../upload-files-fail/5-tax/05-tax-blank-archived.csv',
            '../upload-files-fail/5-tax/06-tax-incorrect-template.csv',
            '../upload-files-fail/5-tax/07-tax-wrong-tax-id.csv',
            '../upload-files-fail/5-tax/08-tax-wrong-tax-category-value.csv',
            '../upload-files-fail/5-tax/09-tax-wrong-default-flag-value.csv',
            '../upload-files-fail/5-tax/10-tax-wrong-value-archived.csv',
            '../upload-files-fail/5-tax/11-tax-duplicate-default-flag.csv'
        ]
        return failTaxImportPath
    }

    public get failBillingRatioImportPath() {
        const failBillingRatioImportPath = [
            '../upload-files-fail/6-billing-ratio/01-billing-ratio-blank-start-date.csv',
            '../upload-files-fail/6-billing-ratio/02-billing-ratio-blank-end-date.csv',
            '../upload-files-fail/6-billing-ratio/03-billing-ratio-blank-billing-schedule-period-id.csv',
            '../upload-files-fail/6-billing-ratio/04-billing-ratio-blank-billing-ratio-numerator.csv',
            '../upload-files-fail/6-billing-ratio/05-billing-ratio-blank-billing-ratio-denominator.csv',
            '../upload-files-fail/6-billing-ratio/06-billing-ratio-blank-archived.csv',
            '../upload-files-fail/6-billing-ratio/07-billing-ratio-wrong-billing-schedule-period-id-value.csv',
            '../upload-files-fail/6-billing-ratio/08-billing-ratio-wrong-billing-ratio-numerator-value.csv',
            '../upload-files-fail/6-billing-ratio/09-billing-ratio-wrong-billing-ratio-denominator-value.csv',
            '../upload-files-fail/6-billing-ratio/10-billing-ratio-wrong-archived-value.csv',
            '../upload-files-fail/6-billing-ratio/11-billing-ratio-incorrect-template.csv',
            '../upload-files-fail/6-billing-ratio/12-billing-ratio-wrong-billing-ratio-id.csv'
        ]
        return failBillingRatioImportPath
    }

    public get failPackageImportPath() {
        const failPackageImportPath = [
            '../upload-files-fail/7-package/01-package-blank-name.csv',
            '../upload-files-fail/7-package/02-package-blank-package-type.csv',
            '../upload-files-fail/7-package/03-package-blank-available-from.csv',
            '../upload-files-fail/7-package/04-package-blank-available-until.csv',
            '../upload-files-fail/7-package/05-package-blank-archived.csv',
            '../upload-files-fail/7-package/06-package-wrong-package-id.csv',
            '../upload-files-fail/7-package/07-package-wrong-package-type-value.csv',
            '../upload-files-fail/7-package/08-package-wrong-archived-value.csv',
            '../upload-files-fail/7-package/09-package-wrong-tax-id-value.csv',
            '../upload-files-fail/7-package/10-package-wrong-billing-schedule-id-value.csv',
            '../upload-files-fail/7-package/11-package-wrong-disable-pro-rating-flag-value.csv',
            '../upload-files-fail/7-package/12-package-incorrect-template.csv'
        ]
        return failPackageImportPath
    }

    public get failMaterialImportPath() {
        const failMaterialImportPath = [
            '../upload-files-fail/8-material/01-material-blank-name.csv',
            '../upload-files-fail/8-material/02-material-blank-material-type.csv',
            '../upload-files-fail/8-material/03-material-blank-available-from.csv',
            '../upload-files-fail/8-material/04-material-blank-available-until.csv',
            '../upload-files-fail/8-material/05-material-blank-archived.csv',
            '../upload-files-fail/8-material/06-material-wrong-material-id.csv',
            '../upload-files-fail/8-material/07-material-wrong-material-type-value.csv',
            '../upload-files-fail/8-material/08-material-wrong-archived-value.csv',
            '../upload-files-fail/8-material/09-material-wrong-tax-id-value.csv',
            '../upload-files-fail/8-material/10-material-wrong-billing-schedule-id-value.csv',
            '../upload-files-fail/8-material/11-material-wrong-disable-pro-rating-flag-value.csv',
            '../upload-files-fail/8-material/12-material-incorrect-template.csv'
        ]
        return failMaterialImportPath
    }

    public get failFeeImportPath() {
        const failFeeImportPath = [
            '../upload-files-fail/9-fee/01-fee-blank-name.csv',
            '../upload-files-fail/9-fee/02-fee-blank-fee-type.csv',
            '../upload-files-fail/9-fee/03-fee-blank-available-from.csv',
            '../upload-files-fail/9-fee/04-fee-blank-available-until.csv',
            '../upload-files-fail/9-fee/05-fee-blank-archived.csv',
            '../upload-files-fail/9-fee/06-fee-wrong-fee-id.csv',
            '../upload-files-fail/9-fee/07-fee-wrong-fee-type-value.csv',
            '../upload-files-fail/9-fee/08-fee-wrong-archived-value.csv',
            '../upload-files-fail/9-fee/09-fee-wrong-tax-id-value.csv',
            '../upload-files-fail/9-fee/10-fee-wrong-billing-schedule-id-value.csv',
            '../upload-files-fail/9-fee/11-fee-wrong-disable-pro-rating-flag-value.csv',
            '../upload-files-fail/9-fee/12-fee-incorrect-template.csv'
        ]
        return failFeeImportPath
    }

    public get failProductGradeImportPath() {
        const failProductGradeImportPath = [
            '../upload-files-fail/10-product-grade/01-product-grade-blank-product-id.csv',
            '../upload-files-fail/10-product-grade/02-product-grade-blank-grade-id.csv',
            '../upload-files-fail/10-product-grade/03-product-grade-wrong-product-id.csv',
            '../upload-files-fail/10-product-grade/04-product-grade-wrong-grade-id.csv',
            '../upload-files-fail/10-product-grade/05-product-grade-incorrect-template.csv'
        ]
        return failProductGradeImportPath
    }

    public get failProductCourseImportPath() {
        const failProductCourseImportPath = [
            '../upload-files-fail/11-product-course/01-product-course-blank-package-id.csv',
            '../upload-files-fail/11-product-course/02-product-course-blank-course-id.csv',
            '../upload-files-fail/11-product-course/03-product-course-blank-mandatory-flag.csv',
            '../upload-files-fail/11-product-course/04-product-course-blank-max-slot-per-course.csv',
            '../upload-files-fail/11-product-course/05-product-course-blank-course-weight.csv',
            '../upload-files-fail/11-product-course/06-product-course-wrong-package-id.csv',
            '../upload-files-fail/11-product-course/07-product-course-wrong-course-id-value.csv',
            '../upload-files-fail/11-product-course/08-product-course-wrong-mandatory-flag-value.csv',
            '../upload-files-fail/11-product-course/09-product-course-wrong-max-slot-per-course-value.csv',
            '../upload-files-fail/11-product-course/10-product-course-wrong-archived-value.csv',
            '../upload-files-fail/11-product-course/11-product-course-incorrect-template.csv'
        ]
        return failProductCourseImportPath
    }

    public get failProductAccountingImportPath() {
        const failProductAccountingImportPath = [
            '../upload-files-fail/12-product-accounting/01-product-accounting-blank-product-id.csv',
            '../upload-files-fail/12-product-accounting/02-product-accounting-blank-accounting-category-id.csv',
            '../upload-files-fail/12-product-accounting/03-product-accounting-wrong-product-id.csv',
            '../upload-files-fail/12-product-accounting/04-product-accounting-wrong-accounting-category-id-value.csv',
            '../upload-files-fail/12-product-accounting/05-product-accounting-incorrect-template.csv'
        ]
        return failProductAccountingImportPath
    }

    public get failProductLocationImportPath() {
        const failProductLocationImportPath = [
            '../upload-files-fail/13-product-location/01-product-location-blank-product-id.csv',
            '../upload-files-fail/13-product-location/02-product-location-blank-location-id.csv',
            '../upload-files-fail/13-product-location/03-product-location-wrong-product-id-value.csv',
            '../upload-files-fail/13-product-location/04-product-location-wrong-location-id-value.csv',
            '../upload-files-fail/13-product-location/05-product-location-incorrect-template.csv'
        ]
        return failProductLocationImportPath
    }

    public get failProductPriceImportPath() {
        const failProductPriceImportPath = [
            '../upload-files-fail/14-product-price/01-product-price-blank-product-id.csv',
            '../upload-files-fail/14-product-price/02-product-price-blank-price.csv',
            '../upload-files-fail/14-product-price/03-product-price-wrong-product-id.csv',
            '../upload-files-fail/14-product-price/04-product-price-wrong-billing-schedule-period-id-value.csv',
            '../upload-files-fail/14-product-price/05-product-price-wrong-quantity-value.csv',
            '../upload-files-fail/14-product-price/06-product-price-wrong-price-value.csv',
            '../upload-files-fail/14-product-price/07-product-price-incorrect-template.csv'
        ]
        return failProductPriceImportPath
    }

    public get failLeavingReasonImportPath() {
        const failLeavingReasonImportPath = [
            '../upload-files-fail/15-leaving-reason/01-leaving-reason-blank-name.csv',
            '../upload-files-fail/15-leaving-reason/02-leaving-reason-blank-leaving-reason-type.csv',
            '../upload-files-fail/15-leaving-reason/03-leaving-reason-blank-archived.csv',
            '../upload-files-fail/15-leaving-reason/04-leaving-reason-wrong-leaving-reason-id.csv',
            '../upload-files-fail/15-leaving-reason/05-leaving-reason-wrong-leaving-reason-type-value.csv',
            '../upload-files-fail/15-leaving-reason/06-leaving-reason-wrong-archived-value.csv',
            '../upload-files-fail/15-leaving-reason/07-leaving-reason-incorrect-template.csv'
        ]
        return failLeavingReasonImportPath
    }

/**
 * ==================================================== DEFINE ELE AND COMMON STEP IN MASTER MANAGEMENT SCREEN ====================================================
 */

    public async selectMasterManagement() {
        await this.page.waitForSelector('[aria-label="Master Management"]');
        await this.page.locator('[aria-label="Master Management"]').click()
    }

    public get eleImportBtn() {
        const eleImportBtn = this.page.locator('button[data-testid="MasterView__importButton"]')
        if(eleImportBtn != null) {
            return eleImportBtn;
        }else throw new Error('Cannot find eleImportBtn')
    } //Get ele Import Btn to reuse

    public get eleDropdownList() {
        const eleDropdownList = this.page.locator('[data-testid="MasterView__typeSelect"]')
        if(eleDropdownList != null) {
            return eleDropdownList;
        }else throw new Error('Cannot find eleDropdownList')
    } //Get ele Dropdown list to reuse

    public get eleChipFile() {
        const eleChipFile = this.page.locator('[data-testid="ChipFileDescription__name"]')
        if(eleChipFile != null) {
            return eleChipFile;
        }else throw new Error('Cannot find eleChipFile')
    } //Get ele Chip info to reuse

    public get eleSaveBtn() {
        const eleSaveBtn = this.page.locator('button[data-testid="FooterDialogConfirm__buttonSave"]')
        if(eleSaveBtn != null) {
            return eleSaveBtn;
        }else throw new Error('Cannot find eleSaveBtn')
    } //Get ele Save to reuse

    public get eleSucceedToastMessage() {
        const eleSucceedToastMessage = this.page.locator('text=The records are imported successfully!')
        if(eleSucceedToastMessage != null) {
            return eleSucceedToastMessage;
        }else throw new Error('Cannot find eleSucceedToastMessage')
    } //Get ele Successfully Toast message to reuse

    public async clickImportBtn() {
        const importEle = await this.eleImportBtn;
        await importEle?.click()
    } // Click Import btn

    // Open import dropdown list
    public async openImportDropdownList() {
        const ele = await this.eleDropdownList;
        ele?.click();
    }

    // Confirm Save
    public async confirmSave() {
        const ele = await this.eleSaveBtn;
        ele?.click();
    }

/**
 * ==================================================== SELECT AND UPLOAD CSV FILE ====================================================
 */

    // Select and upload Accounting Category csv file
    public async uploadAccountingCategoryFile() {

        // Select Accounting Category option
        await this.page.waitForSelector('[data-value="accountingCategory"]');
        await this.page.locator('[data-value="accountingCategory"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Accounting Category csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[0]);
    }

    // Select and upload Grade csv file
    public async uploadGradeFile() {

        // Select Grade option
        await this.page.waitForSelector('[data-value="grades"]');
        await this.page.locator('[data-value="grades"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Grade csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[1]);
    }

    // Select and upload Discount csv file
    public async uploadDiscountFile() {

        // Select Discount option
        await this.page.waitForSelector('[data-value="discount"]');
        await this.page.locator('[data-value="discount"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Discount csv file
        // await this.page.waitForSelector('input[data-testid="UploadInput__inputFile"]');
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[2]);
    }

    // Select and upload Billing Schedule csv file
    public async uploadBillingScheduleFile() {

        // Select Billing Schedule option
        await this.page.waitForSelector('[data-value="billingSchedule"]');
        await this.page.locator('[data-value="billingSchedule"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Billing Schedule csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[3]);
    }

    // Select and upload Billing Schedule Period csv file
    public async uploadBillingSchedulePeriodFile() {

        // Select Billing Schedule Period option
        await this.page.waitForSelector('[data-value="billingSchedulePeriod"]');
        await this.page.locator('[data-value="billingSchedulePeriod"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Billing Schedule Period csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[4]);
    }

    // Select and upload Tax csv file
    public async uploadTaxFile() {

        // Select Tax option
        await this.page.waitForSelector('[data-value="tax"]');
        await this.page.locator('[data-value="tax"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Tax csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[5]);
    }

    // Select and upload Billing Ratio csv file
    public async uploadBillingRatioFile() {

        // Select Billing Ratio option
        await this.page.waitForSelector('[data-value="billingRatio"]');
        await this.page.locator('[data-value="billingRatio"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Billing Ratio csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[6]);
    }

    // Select and upload Package csv file
    public async uploadPackageFile() {

        // Select Package option
        await this.page.waitForSelector('[data-value="package"]');
        await this.page.locator('[data-value="package"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Package csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[7]);
    }

    // Select and upload Material csv file
    public async uploadMaterialFile() {

        // Select Material option
        await this.page.waitForSelector('[data-value="material"]');
        await this.page.locator('[data-value="material"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Material csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[8]);
    }

    // Select and upload Fee csv file
    public async uploadFeeFile() {

        // Select Fee option
        await this.page.waitForSelector('[data-value="fee"]');
        await this.page.locator('[data-value="fee"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Fee csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[9]);
    }

    // Select and upload Product Grade csv file
    public async uploadProductGradeFile() {

        // Select Product Grade option
        await this.page.waitForSelector('[data-value="productGrade"]');
        await this.page.locator('[data-value="productGrade"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Product Grade csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[10]);
    }

    // Select and upload Product Course csv file
    public async uploadProductCourseFile() {

        // Select Product Course option
        await this.page.waitForSelector('[data-value="productCourse"]');
        await this.page.locator('[data-value="productCourse"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Product Course csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[11]);
    }

    // Select and upload Product Accounting Category csv file
    public async uploadProductAccountingCategoryFile() {

        // Select Product Accounting Category option
        await this.page.waitForSelector('[data-value="productAccountingCategory"]');
        await this.page.locator('[data-value="productAccountingCategory"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Product Accounting Category csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[12]);
    }

    // Select and upload Product Location csv file
    public async uploadProductLocationFile() {

        // Select Product Location option
        await this.page.waitForSelector('[data-value="productLocation"]');
        await this.page.locator('[data-value="productLocation"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Product Location csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[13]);
    }

    // Select and upload Product Price csv file
    public async uploadProductPriceFile() {

        // Select Product Price option
        await this.page.waitForSelector('[data-value="productPrice"]');
        await this.page.locator('[data-value="productPrice"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Product Price csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[14]);
    }

    // Select and upload Leaving Reason csv file
    public async uploadLeavingReasonFile() {

        // Select Leaving Reason option
        await this.page.waitForSelector('[data-value="leavingReason"]');
        await this.page.locator('[data-value="leavingReason"]').click();
        
        // Select import file button
        await this.clickImportBtn();

        // Upload Leaving Reason csv file
        await this.page.waitForTimeout(1000)
        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.importPath[15]);
    }

/**
 * ==================================================== ASSERT CSV FILE ====================================================
 */

    // Assert Accounting Category CSV
    public async assertAccountingCategoryCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('0-accounting-categor...')
    }

    // Assert Grade CSV
    public async assertGradeCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('1-grade-OK.csv')
    }

    // Assert Discount CSV
    public async assertDiscountCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('2-discount-OK.csv')
    }

    // Assert Billing Schedule CSV
    public async assertBillingScheduleCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('3-billing-schedule-O...')
    }

    // Assert Billing Schedule Period CSV
    public async assertBillingSchedulePeriodCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('4-billing-schedule-p...')
    }

    // Assert Tax CSV
    public async assertTaxCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('5-tax-OK.csv')
    }

    // Assert Billing Ratio CSV
    public async assertBillingRatioCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('6-billing-ratio-OK.c...')
    }

    // Assert Package CSV
    public async assertPackageCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('7-package-OK.csv')
    }

    // Assert Material CSV
    public async assertMaterialCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('8-material-OK.csv')
    }

    // Assert Fee CSV
    public async assertFeeCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('9-fee-OK.csv')
    }

    // Assert Product Grade CSV
    public async assertProductGradeCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('10-product-grade-OK....')
    }

    // Assert Product Course CSV
    public async assertProductCourseCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('11-product-course-OK...')
    }

    // Assert Product Accounting Category CSV
    public async assertProductAccountingCategoryCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('12-product-accountin...')
    }

    // Assert Product Location CSV
    public async assertProductLocationCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('13-product-location-...')
    }

    // Assert Product Price CSV
    public async assertProductPriceCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('14-product-price-OK....')
    }

    // Assert Leaving Reason CSV
    public async assertLeavingReasonCSV() {
        const chipInfo = await this.eleChipFile.innerText();
        console.log('Chip name: ' + chipInfo)
        expect(chipInfo).toContain('15-leaving-reason-OK...')
    }

/**
 * ==================================================== ASSERT TOAST MESSAGE ====================================================
 */

    // Assert toast message import successfully
    public async assertToastMessageImportSuccessfully() {
        const toastMessage = await this.eleSucceedToastMessage.innerText();
        console.log('Toast message: ' + toastMessage)
        expect(toastMessage).toContain('The records are imported successfully!')
    }
    
/**
 * ==============================================================================================================================
 */
    public async waitFor2MilSec() {
        await this.page.waitForTimeout(200)
    }

    public get nameFileEle() {
        const nameFileEle = [
            'accountingCategory',
            'grades',
            'discount',
            'billingSchedule',
            'billingSchedulePeriod',
            'tax',
            'billingRatio',
            'package',
            'material',
            'fee',
            'productGrade',
            'productCourse',
            'productAccountingCategory',
            'productLocation',
            'productPrice',
            'leavingReason'
        ]
        return nameFileEle
    }

    // Select and upload fail all type csv file    
    public async uploadFileFail() {
        let fileNameIndex = 0

        for(fileNameIndex = 0; fileNameIndex < 16; fileNameIndex++) {

            await this.openImportDropdownList()
            await this.page.waitForSelector('[data-value="' + this.nameFileEle[fileNameIndex] + '"]');
            await this.page.locator('[data-value="' + this.nameFileEle[fileNameIndex] + '"]').click();

            switch (fileNameIndex) {
                case fileNameIndex = 0:
                    for (let index = 0; index < 5; index++) {
                        await this.clickImportBtn();
                        await this.waitFor2MilSec();
                        await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failAccountingCategoryImportPath[index]);
                        await this.waitFor2MilSec();
                        await this.confirmSave();
                        await this.waitFor2MilSec();
                        console.log('Accounting_category fail ' + index + ': ' + this.failAccountingCategoryImportPath[index]);
                    } // Upload fail Accounting Category                   
                    break;

                    case fileNameIndex = 1:
                        for (let index = 0; index < 5; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failGradeImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Grade fail ' + index + ': ' + this.failGradeImportPath[index]);
                        } // Upload fail Grade                   
                        break;

                    case fileNameIndex = 2:
                        for (let index = 0; index < 10; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failDiscountImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Discount fail ' + index + ': ' + this.failDiscountImportPath[index]);
                        } // Upload fail Discount                 
                        break;

                    case fileNameIndex = 3:
                        for (let index = 0; index < 5; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failBillingScheduleImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Billing Schedule fail ' + index + ': ' + this.failBillingScheduleImportPath[index]);
                        } // Upload fail Billing Schedule                  
                        break;

                    case fileNameIndex = 4:
                        for (let index = 0; index < 10; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failBillingSchedulePeriodImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Billing Schedule Period fail ' + index + ': ' + this.failBillingSchedulePeriodImportPath[index]);
                        } // Upload fail Billing Schedule Period                   
                        break;

                    case fileNameIndex = 5:
                        for (let index = 0; index < 11; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failTaxImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Tax fail ' + index + ': ' + this.failTaxImportPath[index]);
                        } // Upload fail Tax               
                        break;

                    case fileNameIndex = 6:
                        for (let index = 0; index < 12; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failBillingRatioImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Billing Ratio fail ' + index + ': ' + this.failBillingRatioImportPath[index]);
                        } // Upload fail Billing Ratio               
                        break;

                    case fileNameIndex = 7:
                        for (let index = 0; index < 12; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failPackageImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Package fail ' + index + ': ' + this.failPackageImportPath[index]);
                        } // Upload fail Package            
                        break;

                    case fileNameIndex = 8:
                        for (let index = 0; index < 12; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failMaterialImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Material fail ' + index + ': ' + this.failMaterialImportPath[index]);
                        } // Upload fail Material            
                        break;

                    case fileNameIndex = 9:
                        for (let index = 0; index < 12; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failFeeImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Fee fail ' + index + ': ' + this.failFeeImportPath[index]);
                        } // Upload fail Fee            
                        break;
                        
                    case fileNameIndex = 10:
                        for (let index = 0; index < 5; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failProductGradeImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Product Grade fail ' + index + ': ' + this.failProductGradeImportPath[index]);
                        } // Upload fail Product Grade            
                        break;

                    case fileNameIndex = 11:
                        for (let index = 0; index < 11; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failProductCourseImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Product Course fail ' + index + ': ' + this.failProductCourseImportPath[index]);
                        } // Upload fail Product Course            
                        break;

                    case fileNameIndex = 12:
                        for (let index = 0; index < 5; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failProductAccountingImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Product Accounting fail ' + index + ': ' + this.failProductAccountingImportPath[index]);
                        } // Upload fail Product Accounting
                        break;

                    case fileNameIndex = 13:
                            for (let index = 0; index < 5; index++) {
                                await this.clickImportBtn();
                                await this.waitFor2MilSec();
                                await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failProductLocationImportPath[index]);
                                await this.waitFor2MilSec();
                                await this.confirmSave();
                                await this.waitFor2MilSec();
                                console.log('Product Location fail ' + index + ': ' + this.failProductLocationImportPath[index]);
                            } // Upload fail Product Location
                            break;

                    case fileNameIndex = 14:
                        for (let index = 0; index < 7; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failProductPriceImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Product Price fail ' + index + ': ' + this.failProductPriceImportPath[index]);
                        } // Upload fail Product Price
                        break;

                    case fileNameIndex = 15:
                        for (let index = 0; index < 7; index++) {
                            await this.clickImportBtn();
                            await this.waitFor2MilSec();
                            await this.page.setInputFiles('input[data-testid="UploadInput__inputFile"]', this.failLeavingReasonImportPath[index]);
                            await this.waitFor2MilSec();
                            await this.confirmSave();
                            await this.waitFor2MilSec();
                            console.log('Leaving Reason fail ' + index + ': ' + this.failLeavingReasonImportPath[index]);
                        } // Upload fail Leaving Reason
                        break;
            
                default:
                    break;
            }
        }
    }
}