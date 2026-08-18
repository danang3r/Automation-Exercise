import { Page, Locator } from '@playwright/test';
import { CreateTestUser, LoginTestUser, ExistingTestUser } from '../utils/userFactory.js';

export class SignupLoginPage {
    readonly page: Page;

    //Login to your account block
    readonly loginEmailField: Locator;
    readonly loginPasswordField: Locator;
    readonly loginButton: Locator;

    //New User Signup block
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signUpButton: Locator;
    readonly titleMrRadioButton: Locator;
    readonly titleMrsRadioButton: Locator;
    readonly passwordField: Locator;
    readonly dayOfBirthDropdown: Locator;
    readonly monthOfBirthDropdown: Locator;
    readonly yearOfBirthDropdown: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly address1Field: Locator;
    readonly countryDropdown: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly zipcodeField: Locator;
    readonly mobileNumberField: Locator;
    readonly createAccButton: Locator;

    constructor(page: Page) {
        this.page = page;

        //Login
        this.loginEmailField = page.locator("//input[@data-qa='login-email']");
        this.loginPasswordField = page.locator("//input[@data-qa='login-password']");
        this.loginButton = page.locator("//button[@data-qa='login-button']");

        //Sign Up
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.locator("//input[@data-qa='signup-email']");
        this.signUpButton = page.getByRole('button', { name: 'Signup'});
        this.titleMrRadioButton = page.locator('#id_gender1'); 
        this.titleMrsRadioButton = page.locator('#id_gender2'); 
        this.passwordField = page.locator('#password.form-control');
        this.dayOfBirthDropdown = page.locator('#days');
        this.monthOfBirthDropdown = page.locator("//select[@id='months']");
        this.yearOfBirthDropdown = page.locator("//select[@id='years']");
        this.firstNameField = page.locator('#first_name');
        this.lastNameField = page.locator('#last_name');
        this.address1Field = page.locator('#address1');
        this.countryDropdown = page.locator('#country');
        this.stateField = page.locator('#state');
        this.cityField = page.locator('#city');
        this.zipcodeField = page.locator('#zipcode');
        this.mobileNumberField = page.locator('#mobile_number');
        this.createAccButton = page.getByRole('button', { name: 'Create Account'});
    }

    async openSignUpLoginPage() {
    await this.page.goto('/login');
  }

    async fillRegistrationFields(user: CreateTestUser) {
        await this.nameInput.fill(user.male_first_name);
        await this.emailInput.fill(user.email);
        await this.signUpButton.click();
    }

    // "Mr" Radio Button Option Selected, titleMrRadioButton
    async enterMaleAccountInfo(user: CreateTestUser) {
        await this.titleMrRadioButton.check();
        await this.passwordField.fill(user.password);
        await this.dayOfBirthDropdown.selectOption('10');
        await this.monthOfBirthDropdown.selectOption('1');
        await this.yearOfBirthDropdown.selectOption('2000');
        await this.firstNameField.fill(user.male_first_name);
        await this.lastNameField.fill(user.last_name);
        await this.address1Field.fill(user.address1);
        await this.countryDropdown.selectOption('United States');
        await this.stateField.fill(user.state);
        await this.cityField.fill(user.city);
        await this.zipcodeField.fill(user.zipcode);
        await this.mobileNumberField.fill(user.mobile_number);
    }

    // "Mrs" Radio Button Option Selected, titleMrsRadioButton
    async enterFemaleAccountInfo(user: CreateTestUser) {
        await this.titleMrsRadioButton.check();
        await this.passwordField.fill(user.password);
        await this.dayOfBirthDropdown.selectOption('10');
        await this.monthOfBirthDropdown.selectOption('1');
        await this.yearOfBirthDropdown.selectOption('2000');
        await this.firstNameField.fill(user.female_first_name);
        await this.lastNameField.fill(user.last_name);
        await this.address1Field.fill(user.address1);
        await this.countryDropdown.selectOption('United States');
        await this.stateField.fill(user.state);
        await this.cityField.fill(user.city);
        await this.zipcodeField.fill(user.zipcode);
        await this.mobileNumberField.fill(user.mobile_number);
    }

    async submitRegistrationForm() {
        await this.createAccButton.click();
    }

    async enterLoginValidCredentials(user: LoginTestUser) {
        await this.loginEmailField.fill(user.email);
        await this.loginPasswordField.fill(user.password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async registerExistingUser(user: ExistingTestUser) {
        await this.nameInput.fill(user.name);
        await this.emailInput.fill(user.email);
        await this.signUpButton.click();
    }
}