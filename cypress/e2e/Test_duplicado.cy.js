/// <reference types='cypress' />

describe('Codigo duplicado', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**'
        ).as('getStories')
        cy.visit('https://hackernews-seven.vercel.app/')
        cy.wait('@getStories')

        cy.get('input[type="text"]').should('be.visible').and('have.value','redux').as('SearchField').clear()
    });
    it('Busca por "vuejs"', () => {
        cy.get('@SearchField').type('vuejs{enter}')  // vuejs{enter} simula el teclado
        cy.wait('@getStories')

        cy.get('.table-now').should('have.length',100)

    });
    
    it('Busca por "reactjs"', () => {
        cy.get('@SearchField').type('reactjs{enter}')
        cy.wait('@getStories')

        cy.get('.table-now').should('have.length',100)

    });
});