const { Search } = require("../support/components/search")
const { Results } = require("./components/results")
const search = new Search()
const results = new Results()

Cypress.Commands.add('searchItem', (itemName) => {
    search.elements.input().clear().type(itemName).type('{enter}')
})

Cypress.Commands.add('toggleElement', {
    prevSubject: 'element',
}, (subject) => {
    cy.wrap(subject).within(() => {
        results.elements.toggle().click()
        return subject
    })

})
Cypress.Commands.add('verifyElementIsToggled', {
    prevSubject: 'element',
}, (subject) => {
    expect(subject).to.have.class('completed')
    return subject
})