/// <reference types="cypress" />

context('site', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have the correct meta title', () => {
    cy.title().should('eq', 'clintp.xyz | my bio in two mouse clicks or less')
  })

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

  it('should have a working link to my resume', () => {
    cy.get('a').contains('Resume').should('have.attr', 'href', '/Resume_ClintPlummer_ENMR.pdf').then(($anchor) => {
      cy.request($anchor.attr('href')).its('status').should('eq', 200)
    })
  })

  it('should have a working link to my ipynb', () => {
    cy.get('a').contains('ipynb').should('have.attr', 'href', 'https://github.com/yuhonas/clintp.xyz/blob/main/docs/public/Resume_ClintPlummer_ENMR.ipynb').then(($anchor) => {
      cy.request($anchor.attr('href')).its('status').should('eq', 200)
    })
  })
})
