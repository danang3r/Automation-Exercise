import { expect, test } from '@playwright/test';
import { randomUUID } from 'crypto';

test('POST verify login with valid details confirms the user exists', async ({ request }) => {
  const email = `qa-${randomUUID()}@example.com`;
  const password = 'password123';
  let accountCreated = false;

  try {
    const createResponse = await request.post('/api/createAccount', {
      form: {
        name: 'John Doe', email, password, title: 'Mr', birth_date: '1', birth_month: '1', birth_year: '1990',
        firstname: 'John', lastname: 'Doe', company: 'Company A', address1: '123 Main St', address2: '',
        country: 'United States', zipcode: '12345', state: 'State A', city: 'City A', mobile_number: '123-456-7890',
      },
    });
    expect(await createResponse.json()).toMatchObject({ responseCode: 201, message: 'User created!' });
    accountCreated = true;

    const response = await request.post('/api/verifyLogin', { form: { email, password } });

    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject({ responseCode: 200, message: 'User exists!' });
  } finally {
    if (accountCreated) {
      const deleteResponse = await request.delete('/api/deleteAccount', { form: { email, password } });
      expect(await deleteResponse.json()).toMatchObject({ responseCode: 200, message: 'Account deleted!' });
    }
  }
});

test('POST verify login with invalid details returns user not found', async ({ request }) => {
  const response = await request.post('/api/verifyLogin', {
    form: {
      email: `missing-${randomUUID()}@example.com`,
      password: 'wrong-password',
    },
  });

  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({
    responseCode: 404,
    message: 'User not found!',
  });
});

test('POST verify login without email returns bad request', async ({ request }) => {
  const response = await request.post('/api/verifyLogin', {
    form: { password: 'password123' },
  });

  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({
    responseCode: 400,
    message: 'Bad request, email or password parameter is missing in POST request.',
  });
});

test('DELETE verify login is not supported', async ({ request }) => {
  const response = await request.delete('/api/verifyLogin');

  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({
    responseCode: 405,
    message: 'This request method is not supported.',
  });
});
