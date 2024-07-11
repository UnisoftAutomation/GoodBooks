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
    retrieveNewCostCenterDetails() {
        cy.contains('Enter Name').should('be.visible').click()
        cy.get('@newCostCenterName').then((value) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(value)
            cy.get('.ag-row > [aria-colindex="1"]').then(($el) => {
                const value = $el.text();
                cy.log(`The extracted value is: ${value}`);
                cy.wrap(value).as('NewCostCenterId'); // Store the value with an alias
            });
            cy.get('.ag-row > [aria-colindex="2"]').should('contain.text', value).click()

        })
        cy.contains('Update').click({ force: true })
        cy.get(sharedFunction.getCssValue('createPopupCloseBtn')).click()

    }
    deleteCostCenterType() {
        cy.contains('Enter Code').should('be.visible').click()
        cy.get('@NewCostCenterId').then((value) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(value)
            cy.get('.ag-row-odd > [aria-colindex="1"]').should('contain.text', value).click()
            cy.wait(3000)
        })
        cy.customPath(sharedFunction.getCssValue('deleteBtn')).click({ force: true })
        cy.customPath(sharedFunction.getCssValue('infoDeleteYesBtn')).click()
        cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
    }
    clearCostInputValueUsingAddNewBtn() {
        const costCenterCode = Cypress.env("costCentertype2").enterCode;
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterCode)
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', `${costCenterCode}(NEW)`).click()
        cy.wait(1000)
        cy.customPath(sharedFunction.getXpathValue('InputfieldValueClearBtn')).click({ force: true })
        cy.customPath(sharedFunction.getCssValue('infoDeleteYesBtn')).click()
        cy.contains('Enter Code').should('be.visible')
    }
    createCostCenterType() {
        this.enterCostCenterTypeDetails()
        this.retrieveNewCostCenterDetails()
    }
    enterCostCenterCode() {
        const costCenterCode = '243'
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterCode)
        cy.wrap(costCenterCode).as('newcostCenterCode')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', costCenterCode + "(NEW)").click()
    }
    enterCostCenterName() {
        const costCenterName = '3252'
        cy.contains('Enter Name').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterName)
        cy.wrap(costCenterName).as('newCostCenterName')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', costCenterName + "(NEW)").click()

    }
    enterShortName() {
        cy.get('#mat-input-3').type('test')
    }
    grabCostCenterTypeInput() {
        cy.contains('Select Cost Center Type').should('be.visible').click()
        cy.get('@NewCostCenterId').then((value) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(value)
            cy.wait(1000)
            cy.get('.ag-row > [aria-colindex="1"]').should('contain.text', value).click()
            cy.wait(3000)
            cy.get('.addrowbutton').click()
            cy.contains('Select Group').click()
            cy.contains('BANK').click().click()
            cy.customPath(sharedFunction.getXpathValue('SaveBtn')).click()
            cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()

        })
    }
    retrieveCostCenter() {
        const costCenterCode = '243'
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterCode)
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
        cy.contains('Update').click({ force: true })
        cy.get(sharedFunction.getCssValue('createPopupCloseBtn')).click()
    }
    deleteCostCenter() {
        const costCenterCode = '243'
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterCode)
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
        cy.wait(1000)
        cy.customPath(sharedFunction.getCssValue('deleteBtn')).click({ force: true })
        cy.customPath(sharedFunction.getCssValue('infoDeleteYesBtn')).click()
        cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
    }
    afterDeleteCostCenterType(){
        this.deleteCostCenterType()
    }
}