import {Page,expect,Locator} from '@playwright/test';


export class HomePage{
    //locators
    private readonly page:Page;

    private readonly linkMyAccount : Locator;
    private readonly linkRegister : Locator;
    private readonly linkLogin : Locator;
    private readonly txtSearch : Locator;
    private readonly btnSearch : Locator;


    //constructor
    constructor (page:Page){
        this.page=page;
        this.linkMyAccount = page.locator('span:has-text("My Account")')
        this.linkRegister = page.locator('a:has-text("Register")')
        this.linkLogin = page.locator('a:has-text("Login")')
        this.txtSearch = page.locator("input[placeholder='Search']")
        this.btnSearch = page.locator(".fa-search")
    }



    //action methods
    async isHomePageExists(){
        let title:string=await this.page.title()

        if(title){
            return true;
        }
        return false;
    }

        //click "My Account" link

        async clickMyAccount(){

            try {
                await this.linkMyAccount.click();
            } catch (error) {
                console.log(`Exception occured while clicking 'My Account': ${error}`)
                throw error;
            }
        }

    async clickRegister(){
        try{
            await this.linkRegister.click();
        } catch(error) {
            console.log(`Exception occured while clicking 'Register':${error}`)
            throw error
        }
    }

    async clickLogin(){
        try{
            await this.linkLogin.click();
        }catch(error){
            console.log(`Execption occured while clicking 'Login':${error}`)
            throw error

        }
    }


     async enterProductName(pName:string){
        try{
            await this.txtSearch.fill(pName);
        }catch(error){
            console.log(`Execption occured while entering 'Prodcut Name':${error}`)
            throw error

        }
    }


       async clickSearch(){
        try{
            await this.btnSearch.click();
        }catch(error){
            console.log(`Execption occured while clicking 'Search':${error}`)
            throw error

        }
    }
}






