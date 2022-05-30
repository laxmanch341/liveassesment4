import BasePage from "./basepage";

export default class Login{
    static loginAcc(username,password)
    {
    cy.login(username,password)
    }
    static clickLogIn()
    {
        cy.get('Log in').click();
    }
    static clickClose()
    {
        cy.get('Close').click();
    }
}