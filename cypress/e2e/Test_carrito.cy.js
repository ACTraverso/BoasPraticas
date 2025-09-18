/// <reference types="cypress" />

describe('Agregar producto al carrito', () => {
  it('Suma un producto', () => {
    cy.addToCart();                                      // usando commands
    cy.get('.modal-body').should('contain.text', 'Your product has been added to cart');
    cy.get('.modal-body').should('contain.text', 'View Cart');

  });
});
