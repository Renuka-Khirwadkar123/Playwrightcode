const{test,expect}=require("@playwright/test")
const loginPage=require("../pages/loginPage.js")
const HomePage=require("../pages/homePage.js")

test("My login test",async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    const loginApp=new loginPage(page)
    await loginApp.logintoapplication()
    const homepage=new HomePage(page)
    await homepage.viewHomepage()
    
    await homepage.verifyLogout()
  });