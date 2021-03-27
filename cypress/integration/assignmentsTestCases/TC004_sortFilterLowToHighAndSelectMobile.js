///<reference types="cypress" />
describe('TC004_sortFilterLowToHighAndSelectMobile', () => {
    beforeEach(() => {
        cy.login()
    })

    it('TC003 | Verify that user should able to filter Best Match by "Price low to high" and able to select the mobile.', () => {
        cy.get('input[type="search"]').click({ force: true })
        cy.wait(2000)
        cy.get('#q').type('Mobile')
        cy.wait(2000)
        cy.get('.search-box__button--1oH7').click()
        cy.wait(2000)
        cy.get('.c1DXz4').should('be.visible')
        cy.wait(2000)
            // sort by low to high
        cy.get('.ant-select-selection__rendered')
            .contains('Best Match')
            .should('be.visible')
            .click()
        cy.wait(2000)
        cy.get('.ant-select-arrow').click()
        cy.wait(2000)
        cy.contains('Price low to high').click({ force: true })
            // Selecting the mobile
        cy.get('[data-item-id="103120325"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('.pdp-product-brand__brand-link').should('be.be.visible')
        cy.wait(2000)
    })

})