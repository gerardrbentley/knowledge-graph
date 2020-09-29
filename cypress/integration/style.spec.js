/// <reference types="cypress" />

context('Style', () => {
    beforeEach(() => {
        cy.clearLocalStorage('use-dark-mode')
        cy.visit('http://localhost/')
    })

    // https://on.cypress.io/interacting-with-elements
    it('Focus link emphasizes it', () => {
        // https://on.cypress.io/focus
        cy.get('[data-testid=index-link]').focus()
            .should('have.css', 'font-weight', '600')
    })
})
