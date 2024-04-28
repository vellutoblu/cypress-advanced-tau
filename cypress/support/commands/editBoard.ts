import Board from 'trelloapp/src/typings/board'
declare global {
    namespace Cypress {
        interface Chainable {

            /**
             * Changes board via API
             * @param body changes you want to make to the board
             * @example
             * cy.editBoard(1)
             */

            editBoard(body: Board) : Chainable<Board>
        }
    }
}

Cypress.Commands.add('editBoard', (body: Board) =>{
    Cypress.log({
        displayName: 'edit board',
        consoleProps() {
            return {
                id: body.id
            }
        }
    })
    return cy.request('POST', '/api/boards' , {name}).its('body')
})

