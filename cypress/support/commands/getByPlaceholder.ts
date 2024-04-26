export{}

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Get a DOM element based on placeholder value
             * @param input placeholder text value
             */
            getByPlaceholder(input: string):
            Chainable<any>
        }
    }
}

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