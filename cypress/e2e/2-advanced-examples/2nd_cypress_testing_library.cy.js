const navbarText = Cypress.env('navbarText');

context('cypress-testing-library 1st test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('finds an element by its text', () => {
    cy.findByText(navbarText).should('exist');
  })
})