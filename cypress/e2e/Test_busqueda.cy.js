/// <reference types="cypress" />

describe('Búsqueda de productos', () => {
  const productos = ['Dress', 'T-Shirt', 'Jeans'];      //datos dinámicos usando distintos valores

  beforeEach(() => {
    cy.visit('/products');
  //  cy.get('a[href="/products"]').click();
    cy.url().should('include', 'automationexercise');
    cy.get('#search_product').should('be.visible');

  });

  productos.forEach((producto) => {                     //sin duplicar codigo de prueba
    it(`Resultados ${producto}`, () => {
      cy.get('#search_product').clear().type(producto);
      cy.get('#submit_search').click();
      cy.get('.productinfo').should('contain.text', producto);
    });
  });
});
