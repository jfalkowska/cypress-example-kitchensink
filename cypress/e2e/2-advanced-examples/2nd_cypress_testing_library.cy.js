context('1st test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('finds an element by its text', () => {
    cy.findByText('cypress.io').should('exist');
  })
})