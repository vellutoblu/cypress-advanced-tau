Cypress.Commands.add('getByPlaceholder', (input: string)=>{
    return cy.get(`[placeholder=${input}]`)
} )