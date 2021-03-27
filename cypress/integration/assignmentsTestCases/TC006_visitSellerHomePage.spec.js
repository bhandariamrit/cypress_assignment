/// <reference types="cypress" />
describe('TC006_vistSellerHomePageOlizInDaraz', () => {
    let myQuestion
    beforeEach(() => {
        cy.fixture('myQuestion').then((questions) => {
            myQuestion = questions
        })
        cy.login()
        cy.visit('/shop/oliz-store/')
    })
    it('TC006-i | Verify that user should be able to visit oliz store and verify URL.', () => {
        cy.url().should('include', '/shop/oliz-store/')
    })
    it('TC006-ii | verify that user should able to search .', () => {
            cy.wait(2000)
            cy.get('#q').type('Oliz Store')
            cy.wait(2000)
            cy.get('.search-box__button--1oH7').click()
        })
        // Click for Free delivery
    it('TC006-ii | Verify that user should be able to search for Oliz Store in the Daraz Search Box..', () => {
        /// Request Stubbing
        cy.intercept(
            'post',
            'https://my.daraz.com.np/pdp/item/addItemSkuQA', [],
        ).as('addItemComment')
        cy.contains('Free Delivery').click()
            ///Search for any item
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
    it('TC006-iii | Verify Save More On App Click Action and verify App download link', () => {
        cy.wait(2000)
        cy.get('#topActionDownload').should('be.visible').click()
        cy.get('.get-the-app').should('be.visible')
        cy.get('.app-stores > a')
            .should('have.attr', 'href')
            .and('include', 'itunes.apple.com/app/id978058048')
        cy.get('.app-stores > a')
            .eq(1)
            .should('have.attr', 'href')
            .and('include', 'play.google.com/store/apps/details?id=com.daraz.android')
    })
})