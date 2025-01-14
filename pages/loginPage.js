class LoginPage{

constructor(page){

this.page=page
this.enterEmail="#email1"
this.enterPassword="//input[@id='password1']"
this.loginButton="//button[text()='Sign in']"

}

async logintoapplication(){

await this.page.fill(this.enterEmail,"admin@email.com")
await this.page.fill(this.enterPassword,"admin@123")
await this.page.click(this.loginButton)


}


}

module.exports=LoginPage