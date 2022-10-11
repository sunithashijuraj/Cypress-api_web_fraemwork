
export class SampleAppPage {

    navigateToSampleAppPage() {

        const verifyText = 'a[href="/sampleapp"]'
        //Getting the text of 'Sample App' link
        cy.get(verifyText).then(($value) => {
            const txt = $value.text()
            cy.log('User clicks on the ' + txt + ' link')
        })
        //User clicks on 'Sample App' link
        cy.get(verifyText).click()
    }

    verifyPageAfterButtonClick() {

        const userName = '[name="UserName"]'
        const password = '[name="Password"]'
        const loginButton = '#login'
        const welcomeUser = '#loginstatus'
        //Verify page title
        cy.title().then(($value) => {
            const title = $value.toString()
            cy.log('Title of the Page is:' + title)
        })

        cy.get(userName).type('Sunitha')
        cy.get(password).type('pwd')
        cy.get(loginButton).click()

        cy.get(welcomeUser).then(($text) => {
            const bannerText = $text.text()
            cy.log('Welcome message is: ' + bannerText)

        })


    }
}
