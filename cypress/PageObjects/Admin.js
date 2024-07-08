import sharedFunction from "../support/SharedFunctions";

export class Admin{
    ClickAdminMaster(){
        cy.wait(3000)
        cy.customPath(sharedFunction.getCssValue('adminMaster')).should('be.visible').click()
    }
    ClickMasterOrganization(){
        cy.customPath(sharedFunction.getCssValue('masterOrganization')).should('be.visible').click()
    }
    ClickOrganizationCompany(){
        cy.customPath(sharedFunction.getCssValue('organizationCompany')).should('be.visible').click()
    }
    AddcompanyBtn(){
        cy.customPath(sharedFunction.getCssValue('newCompayAddBtn')).should('be.visible').click()
    }
    AddCompanyCodeBtn(){
        const companyCode ='0987'
        cy.contains('Enter Code').click()
        cy.customPath(sharedFunction.getXpathValue('companyInputNewCode')).should('be.visible')
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
    AddComapanyNameBtn(){
       const CompanyName ='m9876'
       cy.contains('Enter Name').click()
       cy.customPath(sharedFunction.getXpathValue('companyInputNewCode')).should('be.visible').type(CompanyName)
       cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
    }
    AddCompanyShortNameBtn(){
        const AddCompanyShortName = 'm753'
        cy.contains('Enter Short Name').click()
        cy.customPath(sharedFunction.getXpathValue('companyInputNewCode')).should('be.visible').clear().type(AddCompanyShortName)
        cy.customPath(sharedFunction.getCssValue('firstFilterValue')).click()
    }
    EnterNewCompanyBasicDetails(){
        cy.customPath(sharedFunction.getXpathValue('importExportCode')).type('m1')
        cy.customPath(sharedFunction.getXpathValue('CINnumber')).type('m2')
        cy.customPath(sharedFunction.getXpathValue('MSMEnumber')).type('m3')
        cy.customPath(sharedFunction.getXpathValue('companySaveBtn')).click()
        cy.customPath(sharedFunction.getCssValue('companyDetailsSavedMessage')).should('have.text','Details Saved Successfully')
        cy.customPath(sharedFunction.getCssValue('companyCreatePopupCancelBtn')).click()
    }
    retrieveNewCompanyDetails(){
        cy.contains('Enter Code').click()
        cy.get('@NewCompanyCode').then((data)=>{
        cy.customPath(sharedFunction.getXpathValue('companyInputNewCode')).should('be.visible').clear().type(data)
        cy.customPath(sharedFunction.getXpathValue('select2viewpoint')).click()
      
       })
       cy.contains('Update').click({force:true})
      // cy.customPath(sharedFunction.getCssValue('companyUpdateBtn')).click({force:true})
      cy.get(sharedFunction.getCssValue('companyCreatePopupCancelBtn')).click()
       
    }
    deleteCompany(){
        cy.contains('Enter Code').click()
        cy.get('@NewCompanyCode').then((data)=>{
        cy.customPath(sharedFunction.getXpathValue('companyInputNewCode')).should('be.visible').clear().type(data)
       cy.customPath(sharedFunction.getXpathValue('select2viewpoint')).click()
       })
       cy.wait(1000)
        cy.contains('Delete').click({force:true})
        cy.customPath(sharedFunction.getCssValue('infoCompanyDeleteYesBtn')).click()
        cy.customPath(sharedFunction.getCssValue('companyCreatePopupCancelBtn')).click()
    }
    clearInputValueUsingAddNewBtn(){
        this.AddCompanyCodeBtn()
        cy.customPath(sharedFunction.getXpathValue('companyInputfieldClearBtn')).click({force:true})
        cy.customPath(sharedFunction.getCssValue('infoCompanyDeleteYesBtn')).click()
        cy.contains('Enter Code').should('be.visible')
    }
    VerifyPageHeader(){
        cy.customPath(sharedFunction.getXpathValue('homePageHeader')).should('have.text','HRMS')
    }
    clickScreens(dataTable){
        dataTable.hashes().forEach(element => {
            
        });
        cy.get('.MenuList').contains(dataTable)
    }
} 
