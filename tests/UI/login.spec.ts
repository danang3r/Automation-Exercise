import { test, expect } from '../../fixtures/fixture.js';
import { SignupLoginPage } from '../../pages/signupLoginPage.js';
import { validUser, invalidPasswordUser } from '../../data/users.js';


test.describe('Login Tests', () => {

  let loginPage: SignupLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new SignupLoginPage(page);
  });

  test('Login with valid credentials', async ({ page }) => {
    await loginPage.openSignUpLoginPage();
    await loginPage.enterLoginValidCredentials(validUser);
    await loginPage.clickLoginButton();
    await expect(page.locator("//a[normalize-space()='Logout']")).toBeVisible();
  });


  test('Login with invalid email format', async ({}) => {
    await loginPage.openSignUpLoginPage();
    const invalidUser = { ...validUser, email: 'invalid-email' };
    await loginPage.enterLoginValidCredentials(invalidUser);
    await loginPage.clickLoginButton();
    const validationMessage = await loginPage.emailInput.evaluate(
    (element: any) => element.validationMessage
  );
    expect(validationMessage).not.toBe('');
  });

  test('Login with invalid password', async ({}) => {
    await loginPage.openSignUpLoginPage();
    const invalidUser = { ...invalidPasswordUser, password: 'WrongPassword123!' };
    await loginPage.enterLoginValidCredentials(invalidUser);
    await loginPage.clickLoginButton();
    
    const validationMessage = await loginPage.emailInput.evaluate(
    (element: any) => element.validationMessage
  );
    expect(validationMessage).not.toBe('');
  });

  test('Logout user', async ({ page }) => {  
    await loginPage.openSignUpLoginPage();
    await loginPage.enterLoginValidCredentials(validUser);
    await loginPage.clickLoginButton();
    await expect(page.locator("//a[normalize-space()='Logout']")).toBeVisible();
    await page.locator("//a[normalize-space()='Logout']").click();
    await expect(page.locator("//button[@data-qa='login-button']")).toBeVisible();
  });
});

