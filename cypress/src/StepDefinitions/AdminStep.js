import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import sharedFunction from "../../support/SharedFunctions";
import { Admin } from "../../PageObjects/Admin";

const admin= new Admin

before(()=>{
    sharedFunction.loadXpathValue()
    sharedFunction.loadIdValue()
    sharedFunction.loadCssValue()
})

Given("Click loyout Admin master",()=>{
admin.ClickAdminMaster()
}) 
When("Click menu Master- oraganization",()=>{
admin.ClickMasterOrganization()
})
Then("Click menu Oraganization- company",()=>{
    admin.ClickOrganizationCompany()
})
Then("Click the add company button",()=>{
admin.AddcompanyBtn()
})
Then("Add new company code",()=>{
   admin.AddCompanyCodeBtn()
})
Then("Add new company name",()=>{
    admin.AddComapanyNameBtn()
})
Then("Add new company short name",()=>{
    admin.AddCompanyShortNameBtn()
})
Then("Enter new company basic details",()=>{
    admin.EnterNewCompanyBasicDetails()
})    
Then("Retrieve the company details",()=>{
    admin.retrieveNewCompanyDetails()
})
Then("Delete new company",()=>{
    admin.deleteCompany()
})
Then("Remove the new company input field values",()=>{
    admin.clearInputValueUsingAddNewBtn()
})
Given("Sign in to the goodboods ERP site 1 user gb5qc",()=>{
    cy.visit("http://192.168.0.112/4.5/")
})
Then("Verify home page Header 1 user gb5qc",()=>{
    admin.VerifyPageHeader()
})



