
export class VerifyTextPage{

    navigateToVerifyTextPage(){

        const verifyText = 'a[href="/verifytext"]'
        //Getting the text of 'Verify Text' link
        cy.get(verifyText).then(($value) => {
            const txt = $value.text()
            cy.log('User clicks on the ' + txt + ' link')
        })
        //User clicks on 'Dynamic Id' link
        cy.get(verifyText).click()
    }

    verifyPageAfterButtonClick(){
     
        //Verify page title
        cy.title().then(($value) => {
            const title = $value.toString()
            cy.log('Title of the Page is:' + title)
        })
        const textValue="span[normalize-space(.)='Welcome UserName!']"
        // cy.get(textValue).then(($text) => {
        //     const buttonText = $text.text()
        //     cy.log('Button name in the Dynamic Id Page is: ' + buttonText)
        // })
    }
}