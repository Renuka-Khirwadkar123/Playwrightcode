const{test,expect}=require('@playwright/test')

test('Home Page',async({page})=>{

   await page.goto('https://www.demoblaze.com/');
   const pageTitle=await page.title();
   console.log('Page Title:',pageTitle);

   await expect(page).toHaveTitle('STORE');
   const pageUrl=page.url();
   console.log('Page URL',pageUrl);
   await expect(page).toHaveURL('https://www.demoblaze.com/');

   await page.click('id=login2')
   await page.fill("//*[@id='loginusername']",'renuka')
   await page.type("//*[@id='loginpassword']",'renuka')
   await page.click("//button[text()='Log in']")
   await page.isVisible('id=logout2')
   await page.waitForSelector('a')
  const links= await page.$$('a')

  for(const link of links){

   
   const linktext=await link.textContent()
   console.log(linktext)
  }
   await page.close();

})