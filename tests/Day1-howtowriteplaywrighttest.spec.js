const{test,expect}=require("@playwright/test")

test("My first test",async function({page})
{
expect('12').toBe('12')

})

test.skip('My second test',async function({page}){

    expect('100').toBe('101')

})


test.only('My third test',async function({page}){

    expect('2.0').toBe('2.0')
})
