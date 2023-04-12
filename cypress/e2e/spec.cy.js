const { Results } = require("../support/components/results")
const { verifyAddingItems } = require("../support/helpers")

let results = new Results()


describe(`To-do list tests`, () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it("Test 1", () => {
        verifyAddingItems()
    })

    it('Test 2', () => {
        verifyAddingItems()
        results.elements.listElement().first().toggleElement().verifyElementIsToggled()
    })


})