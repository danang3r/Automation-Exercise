import { existingUser } from '../../data/users.js';
import { test, expect } from '../../fixtures/fixture.js';
import { SignupLoginPage } from '../../pages/signupLoginPage.js';


test.describe('Sign Up And Login Tests', () => {

  let signupPage: SignupLoginPage;
  
  test.beforeEach(async ({ page }) => {
    signupPage = new SignupLoginPage(page);
  });

    test('Sign Up with valid data (Male)', async ({ page, user }) => {
    await signupPage.openSignUpLoginPage();
    await signupPage.fillRegistrationFields(user);
    await signupPage.enterMaleAccountInfo(user);
    await signupPage.submitRegistrationForm();
    await expect(page.getByText('Account Created!')).toBeVisible();
  });

    test('Sign Up with valid data (Female)', async ({ page, user }) => {
    await signupPage.openSignUpLoginPage();
    await signupPage.fillRegistrationFields(user);
    await signupPage.enterFemaleAccountInfo(user);
    await signupPage.submitRegistrationForm();
    await expect(page.getByText('Account Created!')).toBeVisible();
  });

    test('Register user with existing email', async ({ page }) => {
    await signupPage.openSignUpLoginPage();
    await signupPage.registerExistingUser(existingUser);
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
  });
});

