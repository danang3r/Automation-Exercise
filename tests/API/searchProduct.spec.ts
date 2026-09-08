import { expect, test } from '@playwright/test';

test('POST search product returns matching products', async ({ request }) => {
  const response = await request.post('/api/searchProduct', {
    form: { search_product: 'top' },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.responseCode).toBe(200);
  expect(body.products).toEqual(expect.any(Array));
  expect(body.products.length).toBeGreaterThan(0);
  expect(body.products).toEqual(expect.arrayContaining([
    expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
    }),
  ]));
});

test('POST search product without search_product parameter returns bad request', async ({ request }) => {
  const response = await request.post('/api/searchProduct');

  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({
    responseCode: 400,
    message: 'Bad request, search_product parameter is missing in POST request.',
  });
});
