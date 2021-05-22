Cypress.Commands.add('clickDoTheMathBtn', () => {
    cy.fixture('homeowners').then((homeowners) => {
        cy.get(homeowners.doTheMathButton).click();
    });
});