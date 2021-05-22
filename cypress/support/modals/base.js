Cypress.Commands.add('clickYes', () => {
    cy.fixture('modals/base').then((baseModal) => {
        cy.get(baseModal.yesButton).click();
    });
});

Cypress.Commands.add('clickNo', () => {
    cy.fixture('modals/base').then((baseModal) => {
        cy.get(baseModal.noButton).click();
    });
});

Cypress.Commands.add('clickPrevious', () => {
    cy.fixture('modals/base').then((baseModal) => {
        cy.get(baseModal.previousButton).click();
    });
});

Cypress.Commands.add('clickNext', () => {
    cy.fixture('modals/base').then((baseModal) => {
        cy.get(baseModal.nextButton).click();
    });
});