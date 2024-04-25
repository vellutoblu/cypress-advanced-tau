it('playing with typescript', () =>{
    cy.visit('/')

    cy.get('.mb-8')
    .invoke('text')
})