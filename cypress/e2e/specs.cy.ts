import * as lists from '@fixtures/lists.json'

it('delete a board test', () =>{

    
   cy.addBoard('new board')
 
   cy.editBoard({
    id:1,
    name: 'my board',
    starred: false
   })        
})