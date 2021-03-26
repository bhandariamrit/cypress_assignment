// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", () => {
    cy.viewport(1900, 1200);


    cy.visit("https://www.daraz.com.np/", { delay: 100 });
    cy.wait(1000)
    cy.get("#anonLogin").click();
    cy.wait(1000)
    cy.get(".mod-login-input-loginName > input").type(Cypress.env("email"));
    cy.wait(1000)
    cy.get(".mod-input-password > input").type(Cypress.env("password"));
    cy.wait(1000)
    cy.get(".next-btn").click();

});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })