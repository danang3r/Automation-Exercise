import { APIRequestContext, expect, test } from '@playwright/test';
import { randomUUID } from 'crypto';

const password = 'password123';

function accountDetails(email: string, name = 'John Doe') {
  return {
    name,
    email,
    password,
    title: 'Mr',
    birth_date: '1',
    birth_month: '1',
    birth_year: '1990',
    firstname: 'John',
    lastname: 'Doe',
    company: 'Company A',
    address1: '123 Main St',
    address2: '',
    country: 'United States',
    zipcode: '12345',
    state: 'State A',
    city: 'City A',
    mobile_number: '123-456-7890',
  };
}

async function createAccount(request: APIRequestContext, email: string) {
  const response = await request.post('/api/createAccount', { form: accountDetails(email) });
  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({ responseCode: 201, message: 'User created!' });
}

async function deleteAccount(request: APIRequestContext, email: string) {
  const response = await request.delete('/api/deleteAccount', { form: { email, password } });
  expect(response.status()).toBe(200);
  expect(await response.json()).toMatchObject({ responseCode: 200, message: 'Account deleted!' });
}

test('DELETE user account deletes an existing account', async ({ request }) => {
  const email = `qa-${randomUUID()}@example.com`;
  await createAccount(request, email);
  await deleteAccount(request, email);
});

test('PUT update user account updates an existing account', async ({ request }) => {
  const email = `qa-${randomUUID()}@example.com`;
  await createAccount(request, email);

  try {
    const response = await request.put('/api/updateAccount', {
      form: accountDetails(email, 'Jane Doe'),
    });

    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject({ responseCode: 200, message: 'User updated!' });
  } finally {
    await deleteAccount(request, email);
  }
});

test('GET user account detail by email returns account data', async ({ request }) => {
  const email = `qa-${randomUUID()}@example.com`;
  await createAccount(request, email);

  try {
    const response = await request.get('/api/getUserDetailByEmail', { params: { email } });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.user).toMatchObject({
      email,
      name: 'John Doe',
      first_name: 'John',
      last_name: 'Doe',
    });
  } finally {
    await deleteAccount(request, email);
  }
});
