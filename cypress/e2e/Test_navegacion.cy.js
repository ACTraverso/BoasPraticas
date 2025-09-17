/// <reference types='cypress' />

describe('Practica ruim da teste de navegacion', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/') 
  });
  
  it('Direciona para a pagina de login', () => {
    cy.contains('.nav a','Login').click()
    cy.url().should('be.equal','https://www.automationexercise.com/login')
  });

  // Clase Browsing Test
  it('Verificar Home', () => {
      cy.contains('.nav a','Home').should('have.attr','href','/').and('not.have.attr','target')

  });
  it('Verificar Products', () => {
      cy.contains('.nav a','Products').should('have.attr','href','/products').and('not.have.attr','target')

  });
  it('Verificar Cart', () => {
      cy.contains('.nav a','Cart').should('have.attr','href','/view_cart').and('not.have.attr','target')

  });
  it('Verificar Login', () => {
      cy.contains('.nav a','Login').should('have.attr','href','/login').and('not.have.attr','target')

  });
});

