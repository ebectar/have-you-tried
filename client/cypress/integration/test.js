describe('Landing page has all elements', function () {
it('can visit friends page', () => {
  cy.visit('localhost:3000')
  cy.get('h1').should('have.text', 'Have You Tried __?')
  cy.get('[href="/friends"]').click()
  cy.url().should('eq', 'http://localhost:3000/friends')
})
it('can visit restaurants page', () => {
  cy.visit('localhost:3000')
  cy.get('[href="/restaurants"]').click()
  cy.url().should('eq', 'http://localhost:3000/restaurants')
})
})