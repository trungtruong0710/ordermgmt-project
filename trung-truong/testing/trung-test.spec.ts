import { test, Page, expect, chromium } from "@playwright/test";
// import dialogCMSCreateOrder from "../page/dialog-cms-create-order.page";
// import variable from "../variables/variables";

test('test', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({ignoreHTTPSErrors: true });
    const page = await context.newPage();

    
      const date = new Date().toISOString().slice(0,10)
      let re = /-/gi
      const convertDate = date.replace(re,"/")
      console.log(convertDate)
      
      const newDate = new Date()
      console.log(newDate.toUTCString())
      

//     const a = 'abc\n\ndef'
//     let re = /\n/gi
//     const convertA = a.replace(re,'')
//     console.log(convertA)

//     await page.goto('https://green-school-portal.web.app/login')
//     await page.waitForTimeout(500)
//     await page.fill('input[name=username]', 'thu.vo+jprep@manabie.com')
//     await page.fill('input[name="password"]', 'M@nabie123')
//     await page.waitForTimeout(500)
//     await page.keyboard.press('Enter')
//       // Click text=demoNever logged in >> p
//   await page.locator('text=demoNever logged in >> p').click();
//   await expect(page).toHaveURL('https://green-school-portal.web.app/user/students_erp/01G1HWG6CQA0TQG65EMR46JZ3B/show');
//   // Click [data-testid="ActionPanel__trigger"]
//   await page.locator('[data-testid="ActionPanel__trigger"]').click();
//   // Click [aria-label="Create order"]
//   await page.locator('[aria-label="Create order"]').click();
//   await expect(page).toHaveURL('https://green-school-portal.web.app/payment/orders/create?studentId=01G1HWG6CQA0TQG65EMR46JZ3B&redirectUrl=/user/students_erp/01G1HWG6CQA0TQG65EMR46JZ3B/show');
// //   // Click [data-testid="AutocompleteBase__input"]
// //   await page.locator('[data-testid="AutocompleteBase__input"]').click();
// //   // Fill [data-testid="AutocompleteBase__input"]
// //   await page.waitForTimeout(500)
// //   await page.locator('[data-testid="AutocompleteBase__input"]').fill('Payment');
// //   // Click li[role="option"]:has-text("Payment center 1")
// //   await page.locator('li[role="option"]:has-text("Payment center 1")').click();

//     await page.waitForSelector('[id="LocationsLowestLevelAutocompleteHF__autocomplete"]')
//     await page.locator('[id="LocationsLowestLevelAutocompleteHF__autocomplete"]').click()
//     await page.waitForTimeout(200)
//     await page.locator('[data-testid="AutocompleteBase__input"]').fill(variable.studentLocation)
//     await page.waitForTimeout(500)
//     await page.keyboard.press('ArrowDown')
//     await page.keyboard.press('Enter')
//     await page.waitForTimeout(5000)

//   // Click [data-testid="TableAddDeleteRow__addButton"]
//   await page.locator('[data-testid="TableAddDeleteRow__addButton"]').click();
//   // Click [data-testid="ProductAutocompleteWithIdsHF__autocomplete"] [aria-label="Open"]
//   await page.locator('[data-testid="ProductAutocompleteWithIdsHF__autocomplete"] [aria-label="Open"]').click();
//   // Click li[role="option"]:has-text("E2E-MATERIAL-94-10%")
//   await page.locator('li[role="option"]:has-text("E2E-MATERIAL-94-10%")').click();
//   // Click [data-testid="DiscountsAutocompleteHF__autocomplete"] [aria-label="Open"]
//   await page.locator('[data-testid="DiscountsAutocompleteHF__autocomplete"] [aria-label="Open"]').click();
//   // Click text=Trung test 001
//   await page.locator('text=Trung test 001').click();
//   // Click [data-testid="TableAddDeleteRow__addButton"]
//   await page.locator('[data-testid="TableAddDeleteRow__addButton"]').click();
//   // Click input[name="productFieldArrayItem\.1\.product"]
//   await page.locator('input[name="productFieldArrayItem\\.1\\.product"]').click();
//   // Click text=E2E-MATERIAL-95-10%
//   await page.locator('text=E2E-MATERIAL-95-10%').click();
//   // Click [aria-label="Open"] >> nth=4
//   await page.locator('[aria-label="Open"]').nth(4).click();
//   // Click li[role="option"]:has-text("Trung test 001")
//   await page.locator('li[role="option"]:has-text("Trung test 001")').click();

//   const productDiscount = await page.locator('[data-testid="BilledAtOrderProduct__discountContainer"]').nth(0)
//   const productDiscountString = await productDiscount.innerText()
//   console.log(productDiscountString)

//   const productNamePrice = await page.locator('[data-testid="BilledAtOrderProduct__productContainer"]').nth(0)
//   const productNamePriceString = await productNamePrice.innerText()
//   console.log(productNamePriceString)
//   expect(productNamePriceString).toContain('E2E-MATERIAL-94-10%\n\n￥94')

//   const subTotal = await page.locator('[data-testid="BilledAtOrderList__subtotal"]')
//   const subStr = await subTotal.innerText()
//   console.log(subStr)
})