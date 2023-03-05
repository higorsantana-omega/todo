describe('Todo', () => {
  it('Should render input and button success', () => {
    cy.visit('http://localhost:5173/')

    cy.get('input').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('Should add new todo', () => {
    cy.visit('http://localhost:5173/')

    cy.get('#input_todo').type('New Todo')
    cy.get('#button_add_todo').click()

    cy.get('#todo_list')
      .find('div')
      .should('have.length', 2)
  })
})