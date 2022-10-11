
export class DynamicIdPage {

    navigateToDynamicIdPage() {
        const dynamicIdText = 'a[href="/dynamicid"]'

        //Getting the text of 'Dynamic Id' link
        cy.get(dynamicIdText).then(($value) => {
            const txt = $value.text()
            cy.log('User clicks on the ' + txt + ' link')
        })
        //User clicks on 'Dynamic Id' link
        cy.get(dynamicIdText).click()
    }

    verifyPageAfterButtonClick() {

        const buttonName = 'button[class="btn btn-primary"]'
        //Verify page title
        cy.title().then(($value) => {
            const title = $value.toString()
            cy.log('Title of the Page is:' + title)
        })
        cy.get(buttonName).then(($text) => {
            const buttonText = $text.text()
            cy.log('Button name in the Dynamic Id Page is: ' + buttonText)
        })

    }
}