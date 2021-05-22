Cypress.Commands.add('setEstimation', (targetValue) => {
  cy.fixture('modals/estimate').then((estimateModal) => {

    cy.get(estimateModal.slider).invoke('attr', 'aria-valuenow').then((currentValue) => {
      const increment = 10000;
      const steps = (targetValue - currentValue) / increment;
      const arrows = '{rightarrow}'.repeat(steps);

      cy.get(estimateModal.slider)
        .should('have.attr', 'aria-valuenow', 1000000)
        .type(arrows);

      cy.get(estimateModal.slider)
        .should('have.attr', 'aria-valuenow', 5000000);
    });
  });
});