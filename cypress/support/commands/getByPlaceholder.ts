
import { Placeholders } from "@support/typings/placeholder"
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Get a DOM element based on placeholder value
             * @param input placeholder text 
             * @example
             * //this command
             * cy.getByPlaceholder('Your email')
             * //will select this element
             * <input placeholder="Your email" />
             * 
             */
            getByPlaceholder(input: Placeholders):
            Chainable<any>
        }
    }
}

Cypress.Commands.add('getByPlaceholder', (input: Placeholders)=>{

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