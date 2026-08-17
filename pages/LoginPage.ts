import {Page, Locator} from '@playwright/test'


export class LoginPage{
    //locators

    private readonly page:Page;

    private readonly txtEmailAddress:Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly txtErrorMessage: Locator;


    constructor(page:Page){
        this.page=page;

        this.txtEmailAddress = page.locator("#input-email")
        this.txtPassword = page.locator("#input-password")
        this.btnLogin = page.locator("input[value='Login']")
        this.txtErrorMessage=page.locator(".alert alert-danger alert-dismissible")
    }

    //action methods of loginpage

    //email
    async setEmail(email:string)
    {
        await this.txtEmailAddress.fill(email);
    }

    //password

    async setPassword(password:string)
    {
        await this.txtPassword.fill(password)
    }

    async clickLogin(){
        await this.btnLogin.click()
    }

    //single function for login

    async login(email:string,password:string){
        await this.setEmail(email);
        await this.setPassword(password)
        await this.clickLogin();
    }

    async getLoginErrorMessage(){
        return(this.txtErrorMessage.textContent())
    }










}