/*Test Case : Account Registration

Steps:
1. Navigate to App url
2.Go to My Account and click Register
3.Fill Registration Details with random data
4.Agree to privacy policy and submit the form
5.validate the confirmation message
*/


import {test, expect} from '@playwright/test'
import {HomePage} from '../pages/HomePage';
import {RegistrationPage} from '../pages/RegistrationPage';
import { RandomDataUtil} from '../utils/randomDataGenerators';
import { TestConfig} from '../test.config';


let homePage: HomePage;
let registrationPage : RegistrationPage;
let testConfig:TestConfig;


test.beforeEach(async({page})=>{

    testConfig=new TestConfig()
    await page.goto(testConfig.appUrl); // navigate to app Url

     homePage=new HomePage(page);

     registrationPage=new RegistrationPage(page)

})

test.afterEach(async({page})=>{

    await page.waitForTimeout(3000);
    await page.close();

})


test('user registration test', async({})=>{


    // Go to 'My Account' and click Register
    
    await homePage.clickMyAccount();
    await homePage.clickRegister();



    //Fill in Registration Details
    
    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setlastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password=RandomDataUtil.getPassword();
    await registrationPage.setPassword(password)
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();

    await registrationPage.clickContinue();

    //validate the confirmation message

    const confirmMessage=await registrationPage.getConfirmationMessage();
    await expect(confirmMessage).toContain("Your Account Has Been Created!");




})