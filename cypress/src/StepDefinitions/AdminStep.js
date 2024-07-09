import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import sharedFunction from "../../support/SharedFunctions";
import { Admin } from "../../PageObjects/Admin";

const admin = new Admin

before(() => {
    sharedFunction.loadXpathValue()
    sharedFunction.loadIdValue()
    sharedFunction.loadCssValue()
})

Then("Click the add company button", () => {
    admin.AddcompanyBtn()
})
Then("Add new company code", () => {
    admin.AddCompanyCodeBtn()
})
Then("Add new company name", () => {
    admin.AddComapanyNameBtn()
})
Then("Add new company short name", () => {
    admin.AddCompanyShortNameBtn()
})
Then("Enter new company basic details", () => {
    admin.EnterNewCompanyBasicDetails()
})
Then("Retrieve the company details", () => {
    admin.retrieveNewCompanyDetails()
})
Then("Delete new company", () => {
    admin.deleteCompany()
})
Then("Remove the new company input field values", () => {
    admin.clearInputValueUsingAddNewBtn()
})
Given("Sign in to the goodboods ERP site 1 user gb5qc", () => {
    cy.visit("http://192.168.0.112/4.5/")
})
Then("Verify home page Header 1 user gb5qc", () => {
    admin.VerifyPageHeader()
})
Then("Click the following screen under the master menu", (dataTable) => {
    admin.clickScreens(dataTable)
})
Then("Add new country code",()=>{
    admin.addCountryCodeBtn()
})
Then("Add new country name",()=>{
    admin.addCountryNameBtn()
})
Then("Enter the ISD code and Gst country code values",()=>{
    admin.enterISDandGSTCodes()
})



