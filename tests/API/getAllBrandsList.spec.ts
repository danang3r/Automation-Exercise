import {test, expect} from '@playwright/test'; 

test('GET all brands list', async ({ request }) => {
  const response = await request.get('/api/brandsList');
  const body = await response.json();
  expect(body.responseCode).toBe(200);
expect(body.brands).toBeInstanceOf(Array);
expect(body.brands[0]).toEqual(
  expect.objectContaining({
    id: expect.any(Number),
    brand: expect.any(String),
    }),
  );
});