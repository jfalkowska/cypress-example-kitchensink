context('mouse events', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('trigger a popover on click', () => {
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  it('click on different sections of a canvas', () => {
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(30, 100)
  })

  it('double click', () => {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('right click', () => {
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })

  it('hover', () => {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })
})