import { LoginTestUser } from '../utils/userFactory.js';
import type { ExistingTestUser } from '../utils/userFactory.js';

export const validUser: LoginTestUser = {
  email: 'qa11010d1e@example.com',
  password: 'Password123!',

};

export const invalidPasswordUser: LoginTestUser = {
  email: 'qa11010d1e@example.com',
  password: 'Password123!!@$!@$@$!@$',

};

export const existingUser: ExistingTestUser = {
  name: 'John',
  email: 'qa11010d1e@example.com'
  
};