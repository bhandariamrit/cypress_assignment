/// <reference types="cypress" />

describe('TC002_searchMobileinDarkBoxAndMultipleFilter', () => {
    beforeEach(() => {
        cy.login()
    })

    it('TC002_searchMobileinDarkBoxAndMultipleFilter', () => {
        cy.get('input[type="search"]').click({ force: true })
        cy.wait(2000)
        cy.get('#q').type('Mobile')
        cy.wait(2000)
        cy.get('.search-box__button--1oH7').click()
        cy.wait(2000)
        cy.get('.c1DXz4').should('be.visible')
        cy.wait(2000)
            //Brand Filter
        cy.get(':nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(3) > :nth-child(2)', ).click()

        // Price Filter

        cy.get(':nth-child(5) > .cnHBqi').should('be.visible')
        cy.wait(2000)
        cy.get('[placeholder="Min"]').type('40000')
        cy.wait(2000)
        cy.get('[placeholder="Max"]').type('100000')
        cy.wait(2000)
        cy.get('.ant-btn').click()

        // Rating Filter
        cy.get(':nth-child(1) > .ant-rate').click()

        // Validating Filter By
        cy.get('.cM5DKB').should('be.visible')
    })
})