/// <reference types='cypress' />
import Login from '../support/Pages/Login'           // Page Object

describe('Realizar Login', function() {                

      beforeEach (function(){
          Login.acessarURL()
      })

  it ('Realizar Login com sucesso', function() {
        Login.preenherEmailaddress(Cypress.env('email_valido'))                  // versionamento
        Login.preencherPassword(Cypress.env('password_valido'),{log:false})     // no visualizar contraseña
        Login.clicarEmLogin()
        cy.contains('Logged in as').should('be.visible')
        cy.contains('Logout').should('be.visible')
  })
   
  it ('Realizar Login com Email y Pass com error', function() {
        Login.preenherEmailaddress(Cypress.env('email_invalido'))
        Login.preencherPassword(Cypress.env('password_invalido'))
        Login.clicarEmLogin()
        cy.contains('Your email or password is incorrect!').should('be.visible')
  })

  it ('Realizar Login com Email valido y Pass com error', function() {
        Login.preenherEmailaddress(Cypress.env('email_valido'))
        Login.preencherPassword(Cypress.env('password_invalido'))
        Login.clicarEmLogin()
        cy.contains('Your email or password is incorrect!').should('be.visible')
  })

    it ('Realizar Login com Email com error y Pass com valido', function() {
        Login.preenherEmailaddress(Cypress.env('email_invalido'))
        Login.preencherPassword(Cypress.env('password_valido'))
        Login.clicarEmLogin()
        cy.contains('Your email or password is incorrect!').should('be.visible')
  })

     it ('Realizar Login sin informar Email y Pass', function() { 
        Login.clicarEmLogin()
        cy.contains('Signup / Login').should('be.visible')
        cy.contains('Logout').should('not.exist')
  })

})