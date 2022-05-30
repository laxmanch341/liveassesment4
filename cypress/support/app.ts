declare namespace Cypress {
  
    interface Chainable {
          /**
         * navigate to home page
         */
        visitHomePage() : Chainable<Element>,
        login(username,password): Chainable<Element>
    
    }
    }
    Cypress.Commands.add('visitHomePage',()=>{
        cy.visit('https://www.demoblaze.com/')
    })
    Cypress.Commands.add('login',(username,password)=>{
        cy.wait(500).get('#loginusername').type(username)
        cy.get('#loginpassword').type(password)
    cy.get('.btn').contains('Log in').click()
    })