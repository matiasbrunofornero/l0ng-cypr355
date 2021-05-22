import { address, name, lastname, phone, email } from '../../fixtures/data.json';

Given(/^a user who navigates to belong homepage$/, () => {
    cy.visit('/');
});

When(/^user clicks on For Homeowners button$/, () => {
    cy.clickForHomeownersBtn();
});

When(/^user clicks on Do The Math button$/, () => {
    cy.clickDoTheMathBtn();
});

When(/^user types a valid address value$/, () => {
    cy.setAddress(address);
});

When(/^user types a valid unit value$/, () => {
    cy.setUnit(1200);
});

When(/^user clicks on Next button on Address modal$/, () => {
    cy.clickNext();
});

When(/^user sets an estimate value$/, () => {
    cy.setEstimation(5000000);
});

When(/^user clicks on Next button on Estimate modal$/, () => {
    cy.clickNext();
});

When(/^user clicks on No button on Mortgage modal$/, () => {
    cy.clickNo();
});

When(/^user clicks on Next button on Mortgage modal$/, () => {
    cy.clickNext();
});

When(/^user clicks on No button on Homeowner's Association modal$/, () => {
    cy.clickNo();
});

When(/^user clicks on Next button on Homeowner's Association modal$/, () => {
    cy.clickNext();
});

When(/^user sets a valid name on Unlock Price modal$/, () => {
    cy.setName(name);
});

When(/^user sets a valid lastname on Unlock Price modal$/, () => {
    cy.setLastname(lastname);
});

When(/^user sets a valid email on Unlock Price modal$/, () => {
    cy.setEmail(email);
});

When(/^user sets a valid phone number on Unlock Price modal$/, () => {
    cy.setPhone(phone);
});

Then(/^the unlock price button should be enabled$/, () => {
    cy.fixture('modals/unlockPrice').then((unlockPriceModal) => {
        cy.get(unlockPriceModal.unlockPriceButton).should('not.be.disabled')
    });
});