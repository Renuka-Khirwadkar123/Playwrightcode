const{test,expect}=require("@playwright/test")



test("My login test",async function({page}){

//Navigate to orange HRM page
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//Enter Username and Password
await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.locator("//button[@type='submit']").click()
//Verify page title after login
await expect(page).toHaveTitle('OrangeHRM')
//Logout from orange hrm application
await page.getByAltText('profile picture').first().click()
await expect("//a[text()='Logout']").toContain("Logout")
await page.getByText('Logout').click()
//verify successful logout
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//Close browser
await page.close()
})