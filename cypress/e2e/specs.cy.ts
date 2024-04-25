import * as lists from '@fixtures/lists.json'

it('playing with typescript', () =>{

    cy.intercept('POST', '/api/lists')
        .as('listCreate')

    cy.visit('/board/1')

    lists.forEach(list => {
        cy.get('[data-cy="add-list-input"]')
        .type(`${list.name}{enter}`)

    cy.wait('@listCreate')
        .its('response.body.order')
        .should('eq', list.order)
    })

   

        
})