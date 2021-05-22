Cypress.Commands.add('setName', (name) => {
    cy.fixture('modals/unlockPrice').then((unlockPriceModal) => {
        cy.get(unlockPriceModal.nameInput).type(name);
    });
});

Cypress.Commands.add('setLastname', (lastname) => {
    cy.fixture('modals/unlockPrice').then((unlockPriceModal) => {
        cy.get(unlockPriceModal.lastnameInput).type(lastname);
    });
});

Cypress.Commands.add('setEmail', (email) => {
    cy.fixture('modals/unlockPrice').then((unlockPriceModal) => {
        cy.get(unlockPriceModal.emailInput).type(email);
    });
});

Cypress.Commands.add('setPhone', (phone) => {
    cy.fixture('modals/unlockPrice').then((unlockPriceModal) => {
        cy.get(unlockPriceModal.phoneInput).type(phone);
    });
});

Cypress.Commands.add('clickUnlockPrice', () => {
    cy.fixture('modals/unlockPrice').then((unlockPriceModal) => {
        cy.get(unlockPriceModal.unlockPriceButton).click();
    });
});

Cypress.Commands.add('clickSignIn', () => {
    cy.fixture('modals/mortgage').then((mortgageModal) => {
        cy.get(mortgageModal.signInButton).click();
    });
});