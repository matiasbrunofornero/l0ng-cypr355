Cypress.Commands.add('clickForHomeownersBtn', () => {
    cy.fixture('home').then((home) => {
        cy.get(home.forHomeownersButton).click();
    });
});

Cypress.Commands.add('clickForRentersBtn', () => {
    cy.fixture('home').then((home) => {
        cy.get(home.forRentersButton).click();
    });
});