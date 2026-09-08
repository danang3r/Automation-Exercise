import { expect, test } from '@playwright/test';

test('PUT to all brands list is not supported', async ({ request }) => {
  const response = await request.put('/api/brandsList');

  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({
    responseCode: 405,
    message: 'This request method is not supported.',
  });
});
