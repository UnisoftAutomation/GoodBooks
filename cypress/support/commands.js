// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('customPath',(selector)=>{
    if(selector.startsWith('//')){
        return cy.xpath(selector)
    }else{
        cy.get(selector)
    }
})

// Cypress.Commands.add('login', (servername,username, password) => {
//     cy.visit('/')
//     cy.xpath("//input[@id='mat-input-0']").clear().should('be.visible').type(servername)
//     cy.xpath("//input[@id='mat-input-1']").clear().should('be.visible').type(username)
//     cy.xpath("//input[@id='mat-input-2']").clear().should('be.visible').type(password)
//     cy.xpath("//b[@class='title2-med-22-white']").should('be.visible').click() 
// })