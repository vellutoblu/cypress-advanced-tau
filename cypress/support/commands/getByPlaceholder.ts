Cypress.Commands.add('getByPlaceholder', (input: string)=>{

    Cypress.log({
        displayName: 'getByPlaceholder',
        message: input,
        consoleProps(){
            return {
                selector: input
            }
        }
        })
    return cy.get(`[placeholder="${input}"]`)
} )