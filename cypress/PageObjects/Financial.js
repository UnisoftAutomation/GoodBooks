import sharedFunction from "../support/SharedFunctions";

export class financial {

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
    enterCostCenterTypeCode() {
        const costCenterCode = Cypress.env("costCentertype1").enterCode;
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterCode)
        cy.wrap(costCenterCode).as('newcostCenterCode')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', `${costCenterCode}(NEW)`).click()
    }
    enterCostCenterTypeName() {
        const costCenterName = Cypress.env("costCentertype1").enterName;
        cy.contains('Enter Name').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterName)
        cy.wrap(costCenterName).as('newCostCenterName')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', costCenterName + "(NEW)").click()
    }

    enterCostCenterTypeBasicDetails() {
        const costOrgUnit = Cypress.env("costCentertype1").OrgUnit;
        cy.get('#mat-select-value-11').click()
        cy.get('#mat-option-22 > .mat-option-text').click()
        cy.contains('Select Organization Unit').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costOrgUnit)
        cy.get('.ag-row > [aria-colindex="2"]').should('have.text', costOrgUnit).click()

    }
    saveForm() {
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
    }
    updateForm() {
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
    }
    deleteForm() {
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
        this.enterCostCenterTypeCode()
        this.enterCostCenterTypeName()
        this.enterCostCenterTypeBasicDetails()
        this.saveForm()
        this.retrieveNewCostCenterDetails()
    }
    enterCostCategoryCode() {
        const costCenterCode = '243'
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterCode)
        cy.wrap(costCenterCode).as('newcostCenterCode')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', costCenterCode + "(NEW)").click()
    }
    enterCostCategoryName() {
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
        })
    }
    EnterBasicInputCostCategory() {
        cy.get('.addrowbutton').click()
        cy.contains('Select Group').click()
        cy.contains('BANK').click().click()
        this.saveForm()
    }
    retrieveCostCategory() {
        const costCenterCode = '243'
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterCode)
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
        this.updateForm()
    }
    deleteCostCategory() {
        const costCenterCode = '243'
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(costCenterCode)
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
        cy.wait(1000)
        this.deleteForm()
    }
    afterDeleteCostCenterType() {  //hold and the cost center type value using 2 screen
        this.deleteCostCenterType()
        this.deleteForm()
    }
    enterTheCostCenterTypeValue() {
        this.grabCostCenterTypeInput()

    }
    clickTheCostCenter() {
        cy.get(':nth-child(2) > .MenuListBox > :nth-child(1) > .captionHead-semibold-12-purple-accent').click()
    }
    enterCostCenterCode() {
        this.enterCostCategoryCode()
    }
    enterTheCostCenterName() {
        this.enterCostCategoryName()
    }
    enterTheCostCenterShortName() {
        cy.get('#mat-input-3').type('test')
    }
    enterBasicFieldForTheCostCenter() {
        cy.contains('Select OU').click()
        cy.get('#ag-1202-input').click()
        //cy.get('#mat-dialog-8').contains('DELTA TEXTILES INDIA PRIVATE LIMITED').click()
        cy.get('.SelectButton').click()
        cy.contains('Select Name').click()
        cy.get('.ag-row-first > [aria-colindex="1"]').click()
        cy.contains('Select Application Department').click()
        cy.get('#mat-dialog-10').contains('ACCOUNTS').click()
        cy.get('.SelectButton').click()
        this.saveForm()
    }
    retrieveCostCenter(){
        this.grabCostCenterTypeInput()
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
        cy.wait(1000)
        this.updateForm()
    }
    deleteCostCenter(){
        this.grabCostCenterTypeInput()
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
        cy.wait(1000)
        this.deleteForm()
    }
    removeInputValuesUsingAddNewBtn(){
        this.enterCostCategoryCode()
        cy.customPath(sharedFunction.getXpathValue('InputfieldValueClearBtn')).click({ force: true })
        cy.customPath(sharedFunction.getCssValue('infoDeleteYesBtn')).click()
        cy.contains('Enter Code').should('be.visible')
    }
}








export default financial;