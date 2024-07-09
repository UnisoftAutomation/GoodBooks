import sharedFunction from "../support/SharedFunctions";

export class Admin {

    AddcompanyBtn() {
        cy.customPath(sharedFunction.getCssValue('newCompayAddBtn')).should('be.visible').click()
    }
    AddCompanyCodeBtn() {
        const companyCode = 'm15'
        cy.contains('Enter Code').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible')
            .clear().type(companyCode)
        cy.wrap(companyCode).as('NewCompanyCode')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue'))
            //    cy.customPath('.ag-center-cols-viewport')
            //   .find('.ag-row')
            //   .first()
            //   .find('.ag-cell')
            //   .first()
            //   .then(($cell)=>{
            //     const cellText=$cell.text()
            //     if(cellText.includes( CompanyCode + "(NEW)")){
            //         cy.wrap($cell).click()
            //     }else if(cellText.includes(CompanyCode))
            //     cy.wrap($cell).click()

            //   })
            .should('contain.text', companyCode + "(NEW)").click()
    }
    AddComapanyNameBtn() {
        const CompanyName = '098765'
        cy.contains('Enter Name').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').type(CompanyName)
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
    }
    AddCompanyShortNameBtn() {
        const AddCompanyShortName = 'm74'
        cy.contains('Enter Short Name').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(AddCompanyShortName)
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
    }
    EnterNewCompanyBasicDetails() {
        cy.customPath(sharedFunction.getXpathValue('importExportCode')).type('m2')
        cy.customPath(sharedFunction.getXpathValue('CINnumber')).type('m3')
        cy.customPath(sharedFunction.getXpathValue('MSMEnumber')).type('m4')
        cy.customPath(sharedFunction.getXpathValue('SaveBtn')).click()
        cy.customPath(sharedFunction.getCssValue('companyDetailsSavedMessage')).should('have.text', 'Details Saved Successfully')
        cy.customPath(sharedFunction.getCssValue('companyCreatePopupCancelBtn')).click()
    }
    retrieveNewCompanyDetails() {
        cy.contains('Enter Code').click()
        cy.get('@NewCompanyCode').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data)
            cy.customPath(sharedFunction.getXpathValue('select2viewpoint')).click()

        })
        cy.contains('Update').click({ force: true })
        // cy.customPath(sharedFunction.getCssValue('companyUpdateBtn')).click({force:true})
        cy.get(sharedFunction.getCssValue('companyCreatePopupCancelBtn')).click()

    }
    deleteCompany() {
        cy.contains('Enter Code').click()
        cy.get('@NewCompanyCode').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data)
            cy.customPath(sharedFunction.getXpathValue('select2viewpoint')).click()
        })
        cy.wait(1000)
        cy.contains('Delete').click({ force: true })
        cy.customPath(sharedFunction.getCssValue('infoCompanyDeleteYesBtn')).click()
        cy.customPath(sharedFunction.getCssValue('companyCreatePopupCancelBtn')).click()
    }
    clearInputValueUsingAddNewBtn() {
        this.AddCompanyCodeBtn()
        cy.customPath(sharedFunction.getXpathValue('companyInputfieldClearBtn')).click({ force: true })
        cy.customPath(sharedFunction.getCssValue('infoCompanyDeleteYesBtn')).click()
        cy.contains('Enter Code').should('be.visible')
    }
    VerifyPageHeader() {
        cy.customPath(sharedFunction.getXpathValue('homePageHeader')).should('have.text', 'HRMS')
    }
    clickScreens(dataTable) {
        dataTable.hashes().forEach(element => {
            cy.get('.MenuList').contains(element.screen).click()
        });
    }
    addCountryCodeBtn() {
        const countryCode = '090'
        cy.contains('Enter Code').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(countryCode)
        cy.wrap(countryCode).as('newCountryCode')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', countryCode + "(NEW)").click()
    }
    addCountryNameBtn(){
        const countryName ='test'
        cy.contains('Enter Name').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(countryName)
        cy.wrap(countryName).as('newCountryName')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('have.text', countryName + "(NEW)").click()
    }
    enterISDandGSTCodes(){
        cy.customPath(sharedFunction.getCssValue('isdCode')).should('be.visible').type('165')
        cy.customPath(sharedFunction.getCssValue('gstCountryCode')).should('be.visible').type('134')
        cy.customPath(sharedFunction.getXpathValue('SaveBtn')).click()
    }
} 
