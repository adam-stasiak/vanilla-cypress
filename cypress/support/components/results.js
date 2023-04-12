export class Results {
    elements = {
        list: () => cy.get('.todo-list'),
        listElement: () => cy.get('.view').parent(),
        toggle: () => cy.get('.toggle')
    }
}