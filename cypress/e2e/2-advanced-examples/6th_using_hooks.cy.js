context('using hooks in Cypress tests', () => {
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  })

  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.log('afterEach hook should appear after each test')
  })

  after(() => {
    cy.log('after hook should appear after the last test')
  })

  it('asserts h1 exists on the page', () => {
    cy.get('h1').should('exist');
  })

  it('asserts h1 text is correct', () => {
    cy.get('h1').should('contain.text', 'Kitchen Sink');
  })
})