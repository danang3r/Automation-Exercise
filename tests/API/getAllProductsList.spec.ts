import {test, expect} from '@playwright/test';

test('GET all products list', async ({ request }) => {
  const response = await request.get('/api/productsList');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toMatchObject({
    responseCode: 200,
  });
  
  expect(body.products).toBeInstanceOf(Array);
  expect(body.products.length).toBeGreaterThan(0);

  expect(body.products[0]).toEqual(
  expect.objectContaining({
    id: expect.any(Number),
    name: expect.any(String),
    price: expect.any(String),
    brand: expect.any(String),
    category: expect.objectContaining({
      category: expect.any(String),
      usertype: expect.objectContaining({
        usertype: expect.any(String),
      }),
    }),
  })
)});