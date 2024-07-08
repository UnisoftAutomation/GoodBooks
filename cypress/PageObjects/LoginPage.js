import sharedFunction from "../support/SharedFunctions"

export class login {

    visitLoginPage(){
        cy.visit('/')
        cy.clearCookies()
        cy.wait(1000)
    }
    verifySignInPageHeader(){
        return cy.contains('Sign-in to your account').should('be.visible')
    }
    EnterInvalidServerName(){
         cy.customPath(sharedFunction.getXpathValue('serverName')).clear().should('be.visible').type('test')
    }
    EnterInvalidUserName(){
        return cy.customPath(sharedFunction.getXpathValue('userName')).clear().should('be.visible').type('test1234')
    }
    EnterInvalidPassword(){
        return cy.customPath(sharedFunction.getXpathValue('password')).clear().should('be.visible').type('1234')
    }
    ClickSignInBtn(){
        return cy.customPath(sharedFunction.getXpathValue('signInBtn')).should('be.visible').click()
    }
    VerifyLoginFailedPopup(){
        cy.wait(10000)
        cy.customPath(sharedFunction.getXpathValue('loginFailedPopup')).should('be.visible').invoke('text')
        .then((text) => {
          expect(text.trim()).to.eq('Login failed to connect the database');
        });
    }
    EnterValidServerName(serverName){
        return cy.customPath(sharedFunction.getXpathValue('serverName')).should('be.visible').clear().type(serverName)
    }
    EnterValidUserName(userName){
        return cy.customPath(sharedFunction.getXpathValue('userName')).should('be.visible').clear().type(userName)
    }
    EnterValidPassword(password){
        return cy.customPath(sharedFunction.getXpathValue('password')).should('be.visible').clear().type(password)
    }
    HomePageHeader(){
        return cy.customPath(sharedFunction.getXpathValue('homePageHeader')).should('be.visible').should('have.text','DELTA TEXTILES INDIA PRIVATE LIMITED')
    }

}