Cypress.Commands.add('navLink', (name, hrefEsp) => {
  cy.contains('.nav a', name)
    .should('have.attr', 'href', hrefEsp)
    .and('not.have.attr', 'target');
});

Cypress.Commands.add('addToCart', () => {
  cy.visit('/products');
  cy.get('.product-overlay').first().invoke('show');
  cy.get('.add-to-cart').first().click();
});
