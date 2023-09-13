context('1st test', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('asserts h1 exists on the page', () => {
        cy.get('h1').should('exist');
    })

    it('asserts h1 text is correct', () => {
        cy.get('h1').should('contain.text', 'Actions');
    })

    it('finds single element in a specific class', () => {
        cy.get('.container').eq(1).find('p').should('exist');
    })

    it('finds multiple elements in a specific class', () => {
        cy.get('.container').eq(2).within(() => {
            cy.get('h4').should('exist');
            cy.get('p').should('exist');
        });
    })
})