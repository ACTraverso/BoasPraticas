Cypress.Commands.add('search', term=>{
 cy.get('input[type="test"]').should('be.visible')
    .clear()
    .type(`${term}{enter}`)

})