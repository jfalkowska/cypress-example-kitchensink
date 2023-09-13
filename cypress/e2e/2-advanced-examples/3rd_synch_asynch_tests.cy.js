/* eslint-disable */

context('handling asynchronous commands', () => {
  
  it('types into a field and uses console.log asynchronously', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(3000)
    //this will print text before waiting time has finished as it is not a cypress command
    console.log('Regular console.log')
    //this command will  print text after waiting time has finished as it is a cypress command
    cy.log('Cypress log')
  })

  it('types into a field and uses a .then command to use console.log synchronously', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(3000).then(() => {
      console.log('Regular console.log but used synchronously')
    })
  })
})