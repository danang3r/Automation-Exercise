import { test, expect } from '../fixtures/fixture.js';
import { MainPage } from '../pages/mainPage.js';
import { ContactUsPage } from '../pages/contactUs.js';

test.describe('Contact Us Form Tests', () => {

  let mainPage: MainPage;
  let contactUsPage: ContactUsPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    contactUsPage = new ContactUsPage(page);
  });

  test('Submit form all required info provided', async ({ page }) => {
    await mainPage.open();
    await mainPage.contactUsCategory.click();
    await contactUsPage.nameField.fill('Name');
    await contactUsPage.emailField.fill('testmail@gmail.com');
    await contactUsPage.subjectField.fill('Some subject');
    await contactUsPage.msgField.fill('Some Message');
    await contactUsPage.selectFileButton.setInputFiles('data/testImage.png');

    const dialogPromise = page.waitForEvent('dialog');
    const submitPromise = contactUsPage.submitButton.click();
    const dialogWindow = await dialogPromise;

    expect(dialogWindow.type()).toBe('confirm');
    expect(dialogWindow.message()).toContain('Press OK to proceed!');
    await dialogWindow.accept();
    await submitPromise;

    await contactUsPage.isSuccessfullyContacted();
  });
});
