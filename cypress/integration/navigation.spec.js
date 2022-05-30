const { url, username, passwod } = require("../../config")
const { default: NavBar } = require("../page-objects/components/TopNav");
const { default: Login } = require("../page-objects/pages/loginpage");
const search = new NavBar();
describe('navigate',()=>{
  before(function(){
    cy.visitHomePage()
  })
  it('should navigate to Home',()=>{
search.clickOnHome().click()
cy.wait(1000)
  })
  it('should navigate to Contact',()=>{
    search.clickOnContact().click({force: true})
    cy.wait(1000)
    cy.go('back')
  })
  
  it('should navigate to Cart',()=>{
    search.clickOnCart()
    cy.wait(1000)
  })


})

describe('login',()=>{
    before(function(){
        cy.visitHomePage()
        search.clickOnLogIn().click()
        Login.loginAcc(username,passwod)
        
    })
    it('Should welcome User',()=>{
      cy.get('#nameofuser').should('have.text',`Welcome ${username}`)
    })
})
