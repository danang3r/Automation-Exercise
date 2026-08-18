import { test as base, expect } from '@playwright/test';
import { generateUser, CreateTestUser } from '../utils/userFactory.js';

type Fixtures = {
  user: CreateTestUser;
  blockAds: void;
};

export const test = base.extend<Fixtures>({
  user: async ({}, use) => {
    const user = generateUser();
    await use(user);
  },

  blockAds: [
    async ({ context }, use) => {
      const blockedDomains = [
        'googlesyndication.com',
        'doubleclick.net',
        'googleadservices.com',
        'adtrafficquality.google',
        'fundingchoicesmessages.google.com',
        'csp.withgoogle.com',
      ];

      await context.route('**/*', async route => {
        const hostname = new URL(route.request().url()).hostname;

        const isAd = blockedDomains.some(
          domain =>
            hostname === domain ||
            hostname.endsWith(`.${domain}`)
        );

        if (isAd) {
          await route.abort();
          return;
        }

        await route.continue();
      });

      await use();
    },
    { auto: true },
  ],
});

export { expect };
