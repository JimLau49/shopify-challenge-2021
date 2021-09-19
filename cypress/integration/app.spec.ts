/// <reference types="Cypress" />

describe('Spacetagram page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/shopify-challenge-2021')
    })

    it('should press the like button' , () => {
        cy.get(':nth-child(1) > .event-tile__info > .event-tile__like-container > .like').click().should('have.css', 'background-color', 'rgb(11, 61, 145)')
    })
  })