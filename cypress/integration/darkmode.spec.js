/// <reference types="cypress" />

context('Darkmode', () => {
    beforeEach(() => {
        cy.clearLocalStorage('use-dark-mode')
        cy.visit('http://localhost/')
        cy.wait(300)
    })

    it('Clicking Dark Mode Label toggles Dark mode On', () => {
        // https://on.cypress.io/click
        cy.get('[data-testid=dark-mode-switch]').click().get('.theme-container').should('have.css', 'background-color', 'rgb(0, 43, 54)').then(() => {
            expect(localStorage.getItem('use-dark-mode')).to.eq('true')
        })
    })

    it('Clicking Dark Mode Label toggles Dark mode Off', () => {
        // https://on.cypress.io/click
        cy.get('[data-testid=dark-mode-switch]').click().click().get('.theme-container').should('have.css', 'background-color', 'rgb(238, 232, 213)').then(() => {
            expect(localStorage.getItem('use-dark-mode')).to.eq('false')
        })
    })

    it('cy.clearLocalStorage() - clear all data in local storage', () => {
        // https://on.cypress.io/clearlocalstorage
        cy.get('[data-testid=dark-mode-switch]').click().then(() => {
            expect(localStorage.getItem('use-dark-mode')).to.be.not.null
          })
  
        cy.clearLocalStorage('use-dark-mode').should((ls) => {
          expect(ls.getItem('use-dark-mode')).to.be.null
        })
      })
})
