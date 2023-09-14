context('using fixtures', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('THIS: ', this.data)
    })
  })
    
  it('pulls data from a fixture', () => {
    cy.fixture('example').then((data) => {
      cy.log('DATA: ', data)
    })
  })

  it('updates fixture data inline', () => {
    cy.fixture('example').then((data) => {
      data.email = ('updated@mail.com')
      cy.log('UPDATED: ', data.email)
    })
  })

  it('uses fixture data in a network request', function () {
    cy.visit('/commands/network-requests')
    cy.intercept('GET', '**/comments/*', this.data).as('getComments')
    cy.get('.network-btn').click()
    cy.wait('@getComments').then((res) => {
      cy.log('RESPONSE: ', res)
    })
  })
})