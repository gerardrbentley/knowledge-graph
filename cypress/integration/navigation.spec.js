/// <reference types="cypress" />

context('Navigation', () => {
    beforeEach(() => {
      cy.visit('http://localhost/tags')
      cy.get('[data-testid=index-link]').click()
      cy.wait(600)
    })

    it('Visits Blog Links', () => {
      cy.get('.blog-link').each(($el) => {
        let dest = $el.attr('href')
        // cy.wrap($el).click()
        cy.visit(dest)
        cy.location('pathname').should('eq', `${dest}`)
        cy.go('back')
        cy.location('pathname').should('eq', '/')
      })
    })

    it('Visits Tag Links from Tags', () => {
      cy.visit('/tags')
      cy.location('pathname').should('eq', `/tags`)
      cy.get('.tag-link').each(($el) => {
        let dest = $el.attr('href')
        // cy.wrap($el).click()
        cy.visit(dest)
        cy.location('pathname').should('eq', `${dest}`)
        cy.go('back')
        cy.location('pathname').should('eq', '/tags')
      })
      cy.go('back')
      cy.location('pathname').should('eq', '/')
    })

    if('Visits Tag from Blog Post', () => {
      cy.get('.blog-link').first().then(($el) => {
        let blogDest = $el.attr('href')
        // cy.wrap($el).click()
        cy.visit(blogDest)
        cy.location('pathname').should('eq', `${blogDest}`)
        cy.get('.tag-link').first().then(($el) => {
          let dest = $el.attr('href')
          // cy.wrap($el).click()
          cy.visit(dest)
          cy.location('pathname').should('eq', `${dest}`)
          cy.go('back')
          cy.location('pathname').should('eq', `${blogDest}`)
        })
        cy.go('back')
        cy.location('pathname').should('eq', '/')
      })
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
      // https://on.cypress.io/go
  
      cy.location('pathname').should('eq', '/')
  
      cy.go('back')
      cy.location('pathname').should('include', 'tags')
  
      cy.go('forward')
      cy.location('pathname').should('eq', '/')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('include', 'tags')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('eq', '/')
    })
  
    it('cy.reload() - reload the page', () => {
      // https://on.cypress.io/reload
      cy.reload().location('pathname').should('eq', '/')

      // reload the page without using the cache
      cy.reload(true).location('pathname').should('eq', '/')
    })

  })