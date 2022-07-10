import { expect, Page } from "@playwright/test";

export default class cmsLoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Login admin account

  public async adminSignIn() {
    const adminAccount = {
      // stagingAdminEmail: "account",
      // stagingAdminPassword: "password",

      stagingAdminEmail: "account",
      stagingAdminPassword: "password",

      uatAdminEmail: "account",
      uatAdminPassword: "password",
    };

    await this.page.fill(
      'input[data-testid="LoginForm__textFieldUsername"]',
      adminAccount.uatAdminEmail
    );

    await this.page.fill(
      'input[data-testid="LoginForm__textFieldPassword"]',
      adminAccount.uatAdminPassword
    );

    await this.page.locator('button:has-text("Sign in")').click();
  }
}
