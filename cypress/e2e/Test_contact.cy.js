/// <reference types="cypress" />

describe('Mensaje al contacto', () => {
  it('Enviar mensaje | Formulario Completo', () => {
    const mensaje = `Consulta enviada a las ${Date.now()}`;   //datos dinámicos.
    cy.visit('/contact_us');
    cy.get('[name="name"]').type('Test BoasPracticas');
    cy.get('[name="email"]').type('BoasPracticas@test.com');
    cy.get('[name="subject"]').type('Consulta');
    cy.get('[name="message"]').type(mensaje);
    cy.get('[name="submit"]').click();

    cy.get('.status').should('contain.text', 'Success');

  });

  it('No envia mensaje | Formulario sin email', () => {
    const mensaje = `Consulta enviada a las ${Date.now()}`;     //datos dinámicos.
    cy.visit('/contact_us');
    cy.get('[name="name"]').type('Test BoasPracticas');
   // cy.get('[name="email"]').type('BoasPracticas@test.com');      Intencionalmente omitido
    cy.get('[name="subject"]').type('Consulta');
    cy.get('[name="message"]').type(mensaje);
    cy.get('[name="submit"]').click();
    
// Verificamos que no se muestre el mensaje de éxito
    cy.get('.status').should('not.contain.text', 'Success');

  });
});
