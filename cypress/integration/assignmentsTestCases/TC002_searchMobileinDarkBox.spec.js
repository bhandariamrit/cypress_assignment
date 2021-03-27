/// <reference types="cypress" />

describe('TC002_searchMobileinDarkBoxAndMultipleFilter', () => {
    beforeEach(() => {
        cy.login()
    })

    it('TC002 | Verify that user should be able to search the Mobile and filter by Brand, Price, Rating.', () => {
        cy.get('input[type="search"]').click({ force: true })
        cy.wait(2000)
        cy.get('#q').type('Mobile')
        cy.wait(2000)
        cy.get('.search-box__button--1oH7').click()
        cy.wait(2000)
        cy.get('.c1DXz4').should('be.visible')
        cy.wait(2000)
    })
})