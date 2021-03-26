///<reference types="cypress" />
describe('TC003_sortFilterAndRemoveItemFromCart', () => {
    beforeEach(() => {
        cy.login()
    })

    it('sortFilterLowToHigh', () => {
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
        })
        // sort by Hight to low

    it('sortFilterHighToLow', () => {
        cy.get('input[type="search"]').click({ force: true })
        cy.wait(2000)
        cy.get('#q').type('Mobile')
        cy.wait(2000)
        cy.get('.search-box__button--1oH7').click()
        cy.wait(2000)
        cy.get('.c1DXz4').should('be.visible')
        cy.wait(2000)
            // sort by low to high
        cy.get('.ant-select-selection__rendered').contains('Best Match').click()
        cy.wait(2000)
        cy.get('.ant-select-arrow').click()
        cy.wait(100)

        cy.contains('Price high to low').click({ force: true })

        // select mobile
        cy.get(
            '[data-item-id="105428288"] > .c3e8SH > .c5TXIP > .c3KeDq > .c16H9d > a',
        ).click()
        cy.get('.pdp-product-brand__brand-link').should('be.be.visible')
        cy.wait(2000)
            // Add Item to cart
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