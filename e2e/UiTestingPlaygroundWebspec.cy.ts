///<reference types="cypress"/>
import { HomePage } from '../pageObjects/HomePage'
import { DynamicIdPage } from '../pageObjects/DynamicIdPage'
import { VerifyTextPage } from '../pageObjects/VerifyTextPage'
import { SampleAppPage } from '../pageObjects/SampleAppPage'

let homePage: HomePage=new HomePage()
let dynamicIdPage: DynamicIdPage=new DynamicIdPage()
let verifyTextPage: VerifyTextPage=new VerifyTextPage()
let sampleAppPage: SampleAppPage=new SampleAppPage()

describe('UI Test Automation Playground', () => {

    let url='http://www.uitestingplayground.com/'

    beforeEach(() =>{
        homePage.playgroundWebHomePage()
    })

    it('Validate Dynamic ID', () => {
        dynamicIdPage.navigateToDynamicIdPage()
        dynamicIdPage.verifyPageAfterButtonClick()      
    })

it('Validate Verify Text', () => {
    verifyTextPage.navigateToVerifyTextPage()
    verifyTextPage.verifyPageAfterButtonClick()

})

it('Validate Sample App', () => {
    sampleAppPage.navigateToSampleAppPage()
    sampleAppPage.verifyPageAfterButtonClick()
    
    

})
    afterEach(() => {   

       homePage.navigateBackHomePage()       

    })   
    
})