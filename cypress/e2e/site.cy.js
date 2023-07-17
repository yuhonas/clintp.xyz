/// <reference types="cypress" />

context('site', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // it('should have the correct meta title', () => {
  //   cy.title().should('eq', 'clintp.xyz')
  // })

  it('should have the correct meta description', () => {
    cy.document().get('head meta[name="description"]')
      .should('have.attr', 'content', 'my bio in two mouse clicks or less')
  })

  it('should have the correct opening page title', () => {
    cy.get('h1').contains('clintp.xyz')
  })

  it('should have my email address somewhere so I can be contacted', () => {
    cy.contains('hello@clintp.xyz')
  })
})
