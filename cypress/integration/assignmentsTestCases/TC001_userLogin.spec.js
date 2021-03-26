/// <reference types="cypress" />
describe("TC001_userLogin", () => {
    beforeEach(() => {

        cy.login();
    });

    //Login to Daraz with the created credential.

    it("TC001 Verify that User should able to login with valid email and password", () => {
        cy.wait(2000);

        cy.get("#topActionUserAccont").contains("Ammuffy's account").should("be.visible")
    });
});