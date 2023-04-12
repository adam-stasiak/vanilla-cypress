import { Results } from "./components/results"
import { TODO_ITEM_ONE, TODO_ITEM_TWO } from "./constants"
const results = new Results()

export function verifyAddingItems(expected = [TODO_ITEM_ONE, TODO_ITEM_TWO]) {
    expected.forEach((entry) => {
        cy.searchItem(entry)
        results.elements.listElement().last().should('have.text', entry)
    })

    results.elements.listElement().should('have.length', expect.length)
}