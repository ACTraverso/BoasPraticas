/// <reference types='cypress' />

describe('Codigo duplicado', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**'
        ).as('getStories')
        cy.visit('https://hackernews-seven.vercel.app/')
        cy.wait('@getStories')

        cy.get('input[type="text"]').should('be.visible')
        .as('ProcuraCampo')
        .and('have.value','redux')
        .clear()
    });

    const buscar=['vuejs','reactjs'];
    
    buscar.forEach(item=> {
        it(`Buscar por "${item}"`, () => {
            cy.search(item)
            cy.wait('@gestStories').then(({response})=>{
               const quatidade =response.body.hits.length
           
            cy.get('.table-row').should('have.length',quatidade) // div.col-sm-4
            })
    });
})

    it.skip('Busca por "vuejs"', () => {
        cy.get('@SearchField').type('vuejs{enter}')  // vuejs{enter} simula el teclado
        cy.wait('@getStories')

        cy.get('.table-row').should('have.length',100)

    });
    
    it.skip('Busca por "reactjs"', () => {
        cy.get('@SearchField').type('reactjs{enter}')
        cy.wait('@getStories')

        cy.get('.table-row').should('have.length',100)

    });
});