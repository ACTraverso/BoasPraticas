/// <reference types="cypress" />

describe('Pruebas de navegación', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', 'automationexercise');
  });

  const acceso = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Cart', href: '/view_cart' },
    { name: 'Login', href: '/login' }
  ];

  acceso.forEach(({ name, href }) => {
    it(`Verificar: ${name}`, () => {      //sin duplicar codigo de prueba
      cy.navLink(name, href);             // usando commands
    });
  });
});
