import {Page,Locator,expect} from '@playwright/test';


export class RegistrationPage{

    //Registration page locators
    private readonly page:Page;
    private readonly txtfirstName : Locator;
    private readonly txtLastName : Locator;
    private readonly txtEmail : Locator;
    private readonly txtTelephone : Locator;
    private readonly txtPassword : Locator;
    private readonly txtConfirmPassword : Locator;
    private readonly chkdPolicy : Locator;
    private readonly btnContinue : Locator;
    private readonly msgConfirmation : Locator;

    //Registration page constructor

    constructor (page:Page){
        this.page=page;

        //initialize locators 

        this.txtfirstName = page.locator("#input-firstname");
        this.txtLastName=page.locator('#input-lastname');
        this.txtEmail = page.locator('#input-email');
        this.txtTelephone = page.locator('#input-telephone');
        this.txtPassword = page.locator('#input-password');
        this.txtConfirmPassword = page.locator('#input-confirm');
        this.chkdPolicy = page.locator('input[name="agree"]');
        this.btnContinue = page.locator('input[value="Continue"]');
        this.msgConfirmation = page.locator("h1:has-text('Your Account Has Been Created!')");
    }


    //Registration page action methods

    //firstname
    async setFirstName(fname:string){
        await this.txtfirstName.fill(fname);
    }

    //lastname

    async setlastName(lname:string){
        await this.txtLastName.fill(lname);
    }


    //Email

    async setEmail(email:string){
        await this.txtEmail.fill(email);
    }


    //Telephone

    async setTelephone(tel:string){
        await this.txtTelephone.fill(tel);

    }


    //Password

    async setPassword(passw:string){
        await this.txtPassword.fill(passw);
    }


    //conformPassword

    async setConfirmPassword(confpass:string){
        await this.txtConfirmPassword.fill(confpass);
    }


    //Privacy policy check box

    async setPrivacyPolicy(){
        await this.chkdPolicy.check()
    }


    //continue button

    async clickContinue(){
        await this.btnContinue.click()
    }

    //confirmation message text

    async getConfirmationMessage(){
        return await this.msgConfirmation.textContent() ?? '';
    }


    //conplete registration within one method

    async completeRegistration(userData:{
        firstName:string;
        lastName :string;
        email:string;
        telephone:string;
        password:string;
    }):Promise<void>{

        await this.setFirstName(userData.firstName);
        await this.setlastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setTelephone(userData.telephone);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        await this.setPrivacyPolicy();
        await this.clickContinue();
        await expect(this.msgConfirmation).toBeVisible();

    }





}