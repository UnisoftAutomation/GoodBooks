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
Then("Add new company code {string}", (companyCode) => {
    admin.AddCompanyCodeBtn(companyCode)
})
Then("Add new company name {string}", (comapanyName) => {
    admin.AddComapanyNameBtn(comapanyName)
})
Then("Add new company short name {string}", (comapanyShortName) => {
    admin.AddCompanyShortNameBtn(comapanyShortName)
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
Then("Add new country code {string}", (Code) => {
    admin.addCodeBtn(Code)
})
Then("Add new country name {string}", (name) => {
    admin.addNameBtn(name)
})
Then("Enter the ISD code and Gst country code values", (dataTable) => {
    admin.enterISDandGSTCodes(dataTable)
})
Then("Retrieve the new country value", () => {
    admin.retrieveCountryValue()
})
Then("Delete newly created country value", () => {
    admin.deleteCountry()
})
Then("Clear country all input values using Add new button", () => {
    admin.clearTheCountryInputValueUsingAddNewBtn()
})
Then("Add new state code {string}", (code) => {
    admin.enterStateCode(code)
})
Then("Add new state name {string}", (codeName) => {
    admin.enterStateName(codeName)
})
Then("Enter following input values", (dataTable) => {
    admin.stateInputValue(dataTable)
})
Then("Select the country value", () => {
    admin.enterTheCountryInStateScreen()
})
Then("Retrieve the state value", () => {
    admin.retrieveStateValue()
})
Then("Delete the newly created state value", () => {
    admin.deleteStateValue()
})





