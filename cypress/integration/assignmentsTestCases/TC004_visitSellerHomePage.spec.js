/// <reference types="cypress" />
describe('TC002_vistSellerHomePageOlizInDaraz', () => {
    let myQuestion
    beforeEach(() => {
        cy.fixture('myQuestion').then((questions) => {
            myQuestion = questions
        })
        cy.login()
        cy.visit('/shop/oliz-store/')
    })
    it('Visit the seller homepage (Oliz Homepage) in Daraz.', () => {
        cy.url().should('include', '/shop/oliz-store/')
    })
    it('Search for Oliz Store in the Daraz Search Box.', () => {
            cy.wait(2000)
            cy.get('#q').type('Oliz Store')
            cy.wait(2000)
            cy.get('.search-box__button--1oH7').click()
        })
        // Click for Free delivery
    it('Click for Free delivery - > Search for any item ', () => {
        cy.intercept(
            'post',
            'https://my.daraz.com.np/pdp/item/addItemSkuQA', [],
        ).as('addItemComment')
        cy.contains('Free Delivery').click()
            //Search for any item
        cy.wait(10000)
        cy.contains('Shop Now').click()

        // Click Shop Now -> Verify Free Delivery in Product page
        cy.get(
            ':nth-child(1) > .delivery-option-item > .delivery-option-item__body > .delivery-option-item__shipping-fee',
        ).should('be.visible')

        // Ask Question
        cy.get('.qna-ask-box > .next-btn').click()
        cy.get('.qna-ask-box > .next-input > input').type(myQuestion.questions)
        cy.wait(2000)

        cy.contains('ASK QUESTIONS').click()
        cy.wait('@addItemComment')
    })
    it('Verify Save More On App Click Action and verify App download link', () => {
        cy.wait(2000)
        cy.get('#topActionDownload').click()

        cy.wait(2000)
            // verify app store
        cy.get('.app-apple').should('be.visible')
            // verify playstore
        cy.get('.app-google').should('be.visible')
    })
})