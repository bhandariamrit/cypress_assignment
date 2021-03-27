///<reference types="cypress" />
describe('TC005_removeItemInTheCart.spec', () => {
    beforeEach(() => {
        cy.login()
    })

    it('TC005 | Verify that user should able to remove item from the cart', () => {
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
        cy.contains('Price low to high').click({ force: true })
        cy.wait(2000)
            // Selecting the mobile
        cy.get(
            '[data-item-id="103120325"] > .c3e8SH > .c5TXIP > .c2iYAv > .cRjKsc > a > .c1ZEkM',
        ).click()
        cy.get('.pdp-product-brand__brand-link').should('be.be.visible')
        cy.wait(2000)
        cy.get('.pdp-cart-concern')
        cy.get('.pdp-button_theme_orange').click()

        cy.get('.cart-message-text').should('be.visible')
            // Go to Cart
        cy.wait(2000)
        cy.get('.next-btn-secondary').click()

        cy.get('.checkbox-wrap > .next-checkbox > input').click()

        // Remove item from cart
        cy.get('.list-header-operation-text').click()
        cy.wait(2000)
        cy.get('.ok').click()
    })
})