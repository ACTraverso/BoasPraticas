/// <reference types='cypress' />

describe('Practica ruim da teste de navegador', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/') 
  });
  
  it('Direciona para a pagina de login', () => {
    cy.contains('.nav a','Login').click()
    cy.url().should('be.equal','https://notes-serverless-app.com/login')
  });

  // Clase 1 Browsing Test
  it('Verificar da href', () => {
      cy.contains('.nav a','Login').should('have.attr','href','/login').and('not.have.attr','target')

  });
});

