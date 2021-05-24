import { address, name, lastname, phone, email } from '../../fixtures/data.json';

Given(/^a user who navigates to belong homepage$/, () => {
    cy.viewport('iphone-x');
    cy.visit('/');
});

When(/^user clicks on For Homeowners button$/, () => {
    cy.get('.width-on-mobile-74c3 > .button-flex-3308 [label="For Homeowners"]').click();
});

When(/^user clicks on Do The Math button$/, () => {
    cy.get('.width-on-mobile-74c3 .do-the-math-button-284a').click();
});

When(/^user types a valid address value$/, () => {
    cy.get('.napkin-modal-bd37 .inputText-5e61:not(input[name="unitNumber"]').type(address);
    cy.get('.suggestions-bef5 [role="option"]').first().click();
});

When(/^user types a valid unit value$/, () => {
    cy.get('.napkin-modal-bd37 input[name=\"unitNumber\"]').type(1200);
});

When(/^user clicks on Next button on Address modal$/, () => {
    cy.get('.bottom-bar-mobile-ed4b button[type="submit"]').click();
});

When(/^user sets an estimate value$/, () => {
    cy.get('div[role=\"slider\"]').click().then(() => {
        const arrows = '{rightarrow}'.repeat(200);
        cy.get('div[role=\"slider\"]').type(arrows);
    });
});

When(/^user clicks on Next button on Estimate modal$/, () => {
    cy.get('.bottom-bar-mobile-ed4b button[type="submit"]').click();
});

When(/^user clicks on No button on Mortgage modal$/, () => {
    cy.get('.selector-detail-wrapper .buttonBase:nth-of-type(2)').click();
});

When(/^user clicks on Next button on Mortgage modal$/, () => {
    cy.get('.bottom-bar-mobile-ed4b button[type="submit"]').click();
});

When(/^user clicks on No button on Homeowner's Association modal$/, () => {
    cy.get('.selector-detail-wrapper .buttonBase:nth-of-type(2)').click();
});

When(/^user clicks on Next button on Homeowner's Association modal$/, () => {
    cy.get('.bottom-bar-mobile-ed4b button[type="submit"]').click();
});

When(/^user sets a valid name on Unlock Price modal$/, () => {
    cy.get('input[name="firstName"]').type(name);
});

When(/^user sets a valid lastname on Unlock Price modal$/, () => {
    cy.get('input[name="lastName"]').type(lastname);
});

When(/^user sets a valid email on Unlock Price modal$/, () => {
    cy.get('input[name="email"]').type(email);
});

When(/^user sets a valid phone number on Unlock Price modal$/, () => {
    cy.get('input[name="phone"]').type(phone);
});

Then(/^the unlock price button should be enabled$/, () => {
    cy.fixture('modals/unlockPrice').then((unlockPriceModal) => {
        cy.get(unlockPriceModal.unlockPriceButton).should('not.be.disabled')
    });
});