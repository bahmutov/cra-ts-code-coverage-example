/// <reference types="cypress" />
it('opens the app', () => {
  cy.visit('/')
  cy.get('header.App-header').should('be.visible')
  cy.contains('Learn tcaeR').should('be.visible')
})
