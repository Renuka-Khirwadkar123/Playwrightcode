//const{test,expect}=require('playwright/test')
import {test,expect} from '@playwright/test'

test('login to orange hrm',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.getByText('Login')
await page.close()

}




)