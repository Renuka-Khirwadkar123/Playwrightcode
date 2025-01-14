const {expect}=require("@playwright/test")

class homepage{

constructor(page){

this.page=page
this.manageButton="//span[text()='Manage']"
this.othermenu="//img[@alt='menu']"
this.logoutButton="//*[text()='Sign out']"
this.signInButton="//*[text()='Sign In']"


}

async viewHomepage(){

await expect(this.page.locator(this.manageButton)).toBeVisible()
await this.page.click(this.othermenu)
await this.page.click(this.logoutButton)
}

async verifyLogout(){

    await expect(this.page.locator(this.signInButton)).toBeVisible()
}





}

module.exports=homepage