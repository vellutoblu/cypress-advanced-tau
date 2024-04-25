it('playing with typescript', () =>{
    cy.visit('/')

    cy.get('[data-cy="board-item"]')
        .realHover()

})