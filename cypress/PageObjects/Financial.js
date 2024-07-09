import sharedFunction from "../support/SharedFunctions";
import { Admin } from "./Admin";
//export class dataBase extends apiTest{
export class financial extends Admin {

    ClickFollwingModules(dataTable) {
        dataTable.hashes().forEach(row => {
            cy.customPath(`#forseven > .ModuleList > #first > :nth-child(${row.index})`).should('have.text', row.text).click()
            cy.customPath('.gbformtitle').should('have.text', row.text)
        })
    }
    clickFormHeader(dataTable) {
        dataTable.hashes().forEach(header => {
            cy.customPath(sharedFunction.getCssValue('formHeader')).contains(header.form).click()
        })
    }
    clickSubScreen(dataTable) {
        dataTable.hashes().forEach(element => {
            cy.get('.MenuList').contains(element.SubScreen).click()
        })
    }
    enterCostCenterTypeDetails() {
        const costCenterCode = Cypress.env("costCentertype1").enterCode;
        const costCenterName = Cypress.env("costCentertype1").enterName;
        const costOrgUnit = Cypress.env("costCentertype1").OrgUnit;
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterCode)
        cy.wrap(costCenterCode).as('newcostCenterCode')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', `${costCenterCode}(NEW)`).click()
        cy.contains('Enter Name').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterName)
        cy.wrap(costCenterName).as('newCostCenterName')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', costCenterName + "(NEW)").click()
        cy.get('#mat-select-value-11').click()
        cy.get('#mat-option-22 > .mat-option-text').click()
        cy.contains('Select Organization Unit').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costOrgUnit)
        cy.get('.ag-row > [aria-colindex="2"]').should('have.text', costOrgUnit).click()
        cy.customPath(sharedFunction.getXpathValue('SaveBtn')).click()
        cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
    }
    // // retrieveNewCostCenterDetails() {
    // //     cy.contains('Enter Name').should('be.visible').click()
    // //     cy.get('@newCostCenterName').then((value) => {
    // //         cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(value)
    // //         cy.xpath("//*[@id='entityGrid']/div/div[1]/div[2]/div[3]/div[2]/div/div/div[2]/div[1]")
    // //             .invoke('val').as('NewCostCenterId')
    // //         cy.get('.ag-row > [aria-colindex="2"]').should('contain.text', value).click()//issue

    // //     })
    // //     cy.contains('Update').click({ force: true })
    // //     cy.get(sharedFunction.getCssValue('createPopupCloseBtn')).click()

    // // }
    deleteCostCenter() {
        cy.contains('Enter Code').should('be.visible').click()
        cy.get('@NewCostCenterId').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data)
            cy.get('.ag-row-odd > [aria-colindex="1"]').should('contain.text', value).click()
        })
        cy.contains('Delete').click({ force: true })
        cy.customPath(sharedFunction.getCssValue('infoCompanyDeleteYesBtn')).click()
        cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
    }
}