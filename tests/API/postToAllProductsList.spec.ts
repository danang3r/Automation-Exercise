import {test, expect} from '@playwright/test';

test('Verify that user cannot POST to all products list', async ({ request }) => {
  const response = await request.post('/api/productsList', {
    data: {id: 1, name: 'Product 1', price: '10.00', brand: 'Brand A', category: {category: 'Category 1', usertype: {usertype: 'User Type 1'}}}
  });

  expect(await response.json()).toMatchObject({
    responseCode: 405,
    message: 'This request method is not supported.',
  });
});