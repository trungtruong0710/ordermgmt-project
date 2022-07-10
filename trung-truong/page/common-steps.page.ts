import { expect, Page } from "@playwright/test";

export default class commonSteps {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async wait5000ms() {
      await this.page.waitForTimeout(5000)
  }

  public async wait200ms() {
    await this.page.waitForTimeout(200)
}
}
