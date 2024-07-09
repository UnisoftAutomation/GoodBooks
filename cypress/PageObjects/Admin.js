import sharedFunction from "../support/SharedFunctions";

export class Admin {

    AddcompanyBtn() {
        cy.customPath(sharedFunction.getCssValue('newCompayAddBtn')).should('be.visible').click()
    }
    AddCompanyCodeBtn(companyCode) {
        this.addCodeBtn(companyCode)
        // const companyCode = 'm15'
        // cy.contains('Enter Code').click()
        // cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible')
        //     .clear().type(companyCode)
        // cy.wrap(companyCode).as('NewCompanyCode')
        // cy.customPath(sharedFunction.getCssValue('firstFilterValue'))
        //     //    cy.customPath('.ag-center-cols-viewport')
        //     //   .find('.ag-row')
        //     //   .first()
        //     //   .find('.ag-cell')
        //     //   .first()
        //     //   .then(($cell)=>{
        //     //     const cellText=$cell.text()
        //     //     if(cellText.includes( CompanyCode + "(NEW)")){
        //     //         cy.wrap($cell).click()
        //     //     }else if(cellText.includes(CompanyCode))
        //     //     cy.wrap($cell).click()

        //     //   })
        //     .should('contain.text', companyCode + "(NEW)").click()
    }
    AddComapanyNameBtn(comapanyName) {
        this.addNameBtn(comapanyName)
    }
    AddCompanyShortNameBtn(comapanyShortName) {
        cy.contains('Enter Short Name').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(comapanyShortName)
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click({ multiple: true })
    }
    EnterNewCompanyBasicDetails() {
        cy.customPath(sharedFunction.getXpathValue('importExportCode')).type('m2')
        cy.customPath(sharedFunction.getXpathValue('CINnumber')).type('m3')
        cy.customPath(sharedFunction.getXpathValue('MSMEnumber')).type('m4')
        cy.customPath(sharedFunction.getXpathValue('SaveBtn')).click()
        cy.customPath(sharedFunction.getCssValue('companyDetailsSavedMessage')).should('have.text', 'Details Saved Successfully')
        cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
    }
    retrieveNewCompanyDetails() {
        cy.contains('Enter Code').click()
        cy.get('@NewCode').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data)
            cy.customPath(sharedFunction.getXpathValue('select2viewpoint')).click({ multiple: true })

        })
        cy.contains('Update').click({ force: true })
        // cy.customPath(sharedFunction.getCssValue('companyUpdateBtn')).click({force:true})
        cy.get(sharedFunction.getCssValue('createPopupCloseBtn')).click()

    }
    deleteCompany() {
        cy.contains('Enter Code').click()
        cy.get('@NewCode').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data)
            cy.customPath(sharedFunction.getXpathValue('select2viewpoint')).click()
        })
        cy.wait(1000)
        cy.contains('Delete').click({ force: true })
        cy.customPath(sharedFunction.getCssValue('infoCompanyDeleteYesBtn')).click()
        cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
    }
    clearInputValueUsingAddNewBtn() {
        cy.contains('Enter Code').click()
        cy.get('@NewCode').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data)
            cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
            cy.customPath(sharedFunction.getXpathValue('companyInputfieldClearBtn')).click({ force: true })
            cy.customPath(sharedFunction.getCssValue('infoCompanyDeleteYesBtn')).click()
            cy.contains('Enter Code').should('be.visible')
        })

    }
    VerifyPageHeader() {
        cy.customPath(sharedFunction.getXpathValue('homePageHeader')).should('have.text', 'HRMS')
    }
    clickScreens(dataTable) {
        dataTable.hashes().forEach(element => {
            cy.get('.MenuList').contains(element.screen).click()
        });
    }
    addCodeBtn(Code) {
        cy.contains('Enter Code').should('be.visible').click();
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(Code);
        cy.wrap(Code).as('NewCode');
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('contain.text', `${Code}(NEW)`).click({ multiple: true });
    }
    addNameBtn(name) {
        cy.contains('Enter Name').should('be.visible').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(name)
        cy.wrap(name).as('NewName')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).should('contain.text', name + "(NEW)").click({ multiple: true })
    }
    enterISDandGSTCodes(dataTable) {
        dataTable.hashes().forEach(value => {
            cy.customPath(sharedFunction.getCssValue('isdCode')).should('be.visible').type(value.ISDcode)
            cy.customPath(sharedFunction.getCssValue('gstCountryCode')).should('be.visible').type(value.GSTcountry)
            cy.customPath(sharedFunction.getXpathValue('SaveBtn')).click()
        })

    }
} 
