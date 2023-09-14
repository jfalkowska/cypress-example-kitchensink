const token = 'abcd1234'

context('using custom commands', () => {
  it('set and retrieve a token in local storage', () => {
    cy.setLocalStorage('token', token)
    cy.getLocalStorage('token').should('eq', token)
  })

  it('overwrites the type command by using sensitive characters', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
        .clear().should('have.value', '')
    cy.findByPlaceholderText('Email').type('test@email.com', { sensitive: true })
  })
})