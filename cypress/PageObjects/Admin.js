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
        cy.customPath(sharedFunction.getCssValue('deleteBtn')).click({ force: true })
        cy.wait(1000)
        cy.customPath(sharedFunction.getCssValue('infoDeleteYesBtn')).click()
        cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
    }
    clearInputValueUsingAddNewBtn() {
        cy.contains('Enter Code').click()
        cy.get('@NewCode').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data)
            cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
            cy.customPath(sharedFunction.getXpathValue('InputfieldValueClearBtn')).click({ force: true })
            cy.customPath(sharedFunction.getCssValue('infoDeleteYesBtn')).click()
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
            cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
        })
    }
    retrieveCountryValue() {
        cy.contains('Enter Code').should('be.visible').click()
        cy.get('@NewCode').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data).type("{enter}")
            cy.wait(1000)
            cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
            cy.wait(1000)
            cy.customPath(sharedFunction.getCssValue('UpdateBtn')).click({ force: true })
            cy.get(sharedFunction.getCssValue('createPopupCloseBtn')).click()
        })
    }
    deleteCountry() {
        cy.contains('Enter Code').should('be.visible').click()
        cy.get('@NewCode').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data).type("{enter}")
            cy.wait(1000)
            cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
            cy.wait(1000)
            cy.customPath(sharedFunction.getCssValue('deleteBtn')).click({ force: true })
            cy.customPath(sharedFunction.getCssValue('infoDeleteYesBtn')).click()
            cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
        })
    }
    clearTheCountryInputValueUsingAddNewBtn() {
        cy.contains('Enter Code').should('be.visible').click()
        cy.get('@NewCode').then((data) => {
            cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type(data)
            cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
            cy.customPath(sharedFunction.getXpathValue('InputfieldValueClearBtn')).click({ force: true })
            cy.wait(1000)
           cy.customPath(sharedFunction.getCssValue('infoDeleteYesBtn')).click()
                  
            // cy.get('mat-dialog-container').then($dialog => {
            //     if ($dialog.find('.alertbutton:contains("Yes")').length) {
            //         // Click the "Yes" button if it exists
            //         cy.get('.alertbutton').contains('Yes').click();
            //     } else {
            //         // Verify the visibility of the "Enter Code" text if the "Yes" button does not exist
            //         cy.contains('Enter Code').should('be.visible');
            //     }
            // });   
        })
    }
    enterStateCode(code) {
        this.addCodeBtn(code)
    }
    enterStateName(codeName) {
        this.addNameBtn(codeName)
    }
    stateInputValue(dataTable) {
        dataTable.hashes().forEach(value => {
            cy.get('#mat-input-3').type(value.GSTStateCode)
            cy.get('#mat-input-4').type(value.TIN)
        })
    }
    enterTheCountryInStateScreen() {
        cy.contains('Select Country').click()
        cy.customPath(sharedFunction.getXpathValue('myInputField')).should('be.visible').clear().type('AFG')
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
        cy.customPath(sharedFunction.getXpathValue('SaveBtn')).click()
        cy.customPath(sharedFunction.getCssValue('createPopupCloseBtn')).click()
    }
    retrieveStateValue() {
        this.retrieveCountryValue()
    }
    deleteStateValue() {
        this.deleteCountry()
        this.clearTheCountryInputValueUsingAddNewBtn()
    }
} 
