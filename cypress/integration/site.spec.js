/// <reference types="cypress" />

context('site', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have the correct title', () => {
    cy.get('h1').contains('clintp.xyz')
  })

  it('should have my email address somewhere', () => {
    cy.contains('hello@clintp.xyz')
  })
})
