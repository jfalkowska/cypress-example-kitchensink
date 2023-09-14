context ('interact with UI', () => {
    it('clicks on a link and checks resulting URL', () => {
        cy.visit('/')
        cy.findAllByText('Actions').last().click()
        cy.url().should('include', 'commands/actions')
    })

    it('uses force: true on an invisible UI element', () => {
        cy.visit('/')
        cy.findAllByText('Actions').first().click({force: true})
        cy.url().should('include', 'commands/actions')
    })

    it('types in an input field', () => {
        cy.visit('commands/actions')
        cy.findByPlaceholderText('Email').type('test@mail.com').should('have.value', 'test@mail.com')
    })

    it('clears an input field', () => {
        cy.visit('commands/actions')
        cy.findByLabelText('Describe:').type('Test').should('have.value', 'Test')
        .clear().should('have.value', '')
    })

    it('checks a checkbox', () => {
        cy.visit('commands/actions')
        cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
    })
})