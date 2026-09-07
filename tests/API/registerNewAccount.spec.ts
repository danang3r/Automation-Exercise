import {test, expect} from '@playwright/test';
import { randomUUID } from 'crypto';

test('Register new account', async ({request}) => {
  const email = `qa${randomUUID().slice(0, 8)}@example.com`;
  const password = 'password123';

  try {
    const response = await request.post('/api/createAccount', {
      form: {name: 'John Doe', email, password, title: 'Mr', birth_date: '1', birth_month: '1', birth_year: '1990', firstname: 'John', lastname: 'Doe', company: 'Company A', address1: '123 Main St', address2: '', country: 'United States', zipcode: '12345', state: 'State A', city: 'City A', mobile_number: '123-456-7890'}
    });

    expect(await response.json()).toMatchObject({
      responseCode: 201,
      message: 'User created!',
    });
  } finally {
    const deleteResponse = await request.delete('/api/deleteAccount', {
      form: {email, password},
    });

    expect(await deleteResponse.json()).toMatchObject({
      responseCode: 200,
      message: 'Account deleted!',
    });
  }
});
