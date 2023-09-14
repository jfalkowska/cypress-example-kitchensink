context('assertions', () => {
  it('assert a class is active', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  })

  it('assert an attribute exists', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(0).find('a').should('have.attr', 'href', '/commands/querying')
  })

  it('assert a class is not active using within command', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').within( () => {
      cy.get('li').eq(0).should('not.have.class', 'active')
      cy.get('li').eq(1).should('not.have.class', 'active')
      cy.get('li').eq(3).should('not.have.class', 'active')
    })
  })

  it('assert a class is not active using a loop', () => {
    cy.visit('/utilities')
    cy.get('#navbar').contains('Utilities').should('exist');
    cy.get('.navbar-nav').eq(0).children('.active').should('contain', 'Utilities');
    cy.get('.dropdown-menu').within( () => {
      for(let i = 0; i < 17; i++) {
        cy.get('li').eq(i).should('not.have.class', 'active');
      }
    })
  })
})
