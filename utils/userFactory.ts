import { randomUUID } from 'crypto';

export type CreateTestUser = {
    email: string;
    password: string;
    male_first_name: string;
    female_first_name: string;
    last_name: string;
    address1: string;
    state: string;
    city: string;
    zipcode: string;
    mobile_number: string;
};

export type LoginTestUser = {
    email: string;
    password: string;
};

export function generateUser(): CreateTestUser {

  return {
    email: `qa${randomUUID().slice(0, 8)}@example.com`,
    password: 'Password123!',
    male_first_name: 'John',
    female_first_name: 'Anna',
    last_name: 'Doe',
    address1: '123 Main St',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '97001',
    mobile_number: '0950542202'
  };
}

export type ExistingTestUser = {
  name: string;
  email: string;
};