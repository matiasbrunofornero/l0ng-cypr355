Cypress.Commands.add('setAddress', (address) => {
    cy.fixture('modals/address').then((addressModal) => {
        cy.get(addressModal.addressInput).type(address);
        cy.get(addressModal.addressSuggestions).first().click();
    });
});

Cypress.Commands.add('setUnit', (unit) => {
    cy.fixture('modals/address').then((addressModal) => {
        cy.get(addressModal.unitInput).type(unit);
    });
});