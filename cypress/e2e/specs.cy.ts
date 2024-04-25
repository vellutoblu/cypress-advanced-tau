it('playing with typescript', () =>{
    cy.visit('/')

    cy.contains('Get started!')
        .should('be.visible')
})