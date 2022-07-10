import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  retries: 1,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'on',
    trace: 'on'
  },
};
export default config;