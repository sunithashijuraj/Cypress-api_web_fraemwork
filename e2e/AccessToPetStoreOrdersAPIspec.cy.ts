///<reference types="cypress"/>

describe('Access to Petstore Orders', () => {

    let url = Cypress.env('baseUrl')
    let requestBody: any;

    before(() => {
        cy.fixture('requestBody').then((val: any) => {
            requestBody = val;
        })
    });

    it('POST Request - Place an order for a pet', () => {

        cy.log(url)
        let urlPlacePetOrder = url + 'store/order'
        cy.request({
            method: 'POST',
            url: urlPlacePetOrder,
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        })
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body).not.null
                expect(response.body.status).to.equal('placed')
                cy.task('setOrderId', response.body.id)
                cy.log('Post Request response body is:' + JSON.stringify(response.body))
            })
    })

    it('GET Request - Find Purchase Order by ID', () => {

        let urlGetOrderDtls = url + 'store/order/120'
        cy.request({

            method: 'GET',
            url: urlGetOrderDtls,
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        })
            .then(response => {
                expect(response.status).to.equal(404)
                expect(response.body).not.null                
                expect(response.body.message).to.equal('Order not found')
                cy.log('Order Summary Details is:' + JSON.stringify(response.body))
            })
    })

    it('DELETE Request -DELETE Purchase Order by ID', () => {
        cy.task('getOrderId').then((orderId) => {
            let urlDeleteRequest = url + 'store/order' + orderId
            cy.request({
                method: 'GET',
                url: urlDeleteRequest,
                headers: {
                    'Content-Type': 'application/json'
                },
                failOnStatusCode: false
            })
                .then(response => {
                    expect(response.status).to.equal(404)
                    expect(response.body.code)
                })
        })
    })

    it('GET Request - Returns pet Inventories by Status', () => {

        let urlGetInventory = url + 'store/inventory'
        cy.request({
            method: 'GET',
            url: urlGetInventory,
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body).not.null
                cy.log('Inventory details:' + JSON.stringify(response.body))
            })
    })

})