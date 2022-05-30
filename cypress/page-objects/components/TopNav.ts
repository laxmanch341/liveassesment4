export default class NavBar{
clickOnHome()
{
    return cy.contains('Home').first();
}
clickOnContact()
{
    return cy.get('[data-target="#exampleModal"]')
    
}
clickOnCart()
{
    return cy.contains('Cart').first();
}
clickOnLogIn()
{
    return cy.get('#login2').first();
}
clickOnSignUp()
{
    return cy.get('Sign up').first();
}
}