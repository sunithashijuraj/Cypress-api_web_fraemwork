///<reference types="cypress"/>

export class HomePage {

   

    playgroundWebHomePage(){
        
        let url='http://www.uitestingplayground.com/'
        cy.visit(url)
        cy.log('User navigate to UI Test Automation Playground Page')

    }

    navigateBackHomePage()
{

    const homePageLink='a[href="/home"]'
    cy.get(homePageLink).click()
}}