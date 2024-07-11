import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import sharedFunction from "../../support/SharedFunctions";
import { financial } from "../../PageObjects/Financial";

const Financial = new financial
before(() => {
    sharedFunction.loadXpathValue()
    sharedFunction.loadIdValue()
    sharedFunction.loadCssValue()
})

Given("Click the following module", (dataTable) => {
    Financial.ClickFollwingModules(dataTable)
})
When("Click the following sub-screen under the screen menu", (dataTable) => {
    Financial.clickSubScreen(dataTable)
})
Then("Click the following Form", (dataTable) => {
    Financial.clickFormHeader(dataTable)
})
Then("Eneter basic input values for the cost center type creation", () => {
    Financial.enterCostCenterTypeDetails()
})
Then("Retrieve the new cost center type", () => {
    Financial.retrieveNewCostCenterDetails()
})
Then("Delete newly created cost center type", () => {
    Financial.deleteCostCenterType()
})
Then("Delete all input values using Add new button", () => {
    Financial.clearCostInputValueUsingAddNewBtn()
})
Then("Create cost center type",()=>{
    Financial.createCostCenterType()
})
Then("Enter the cost Category code value",()=>{
 Financial.enterCostCenterCode()
})
Then("Enter the cost Category name value",()=>{
    Financial.enterCostCenterName()
})
Then("Enter the Category short name",()=>{
    Financial.enterShortName()
})
Then("grab and resue the cost center type",()=>{
    Financial.grabCostCenterTypeInput()
})
Then("Retrieve the new cost Category",()=>{
    Financial.retrieveCostCenter()
}) 
Then("Delete newly created cost Category",()=>{
    Financial.deleteCostCenter()
})
Then("After cost category created Delete cost center type",()=>{
    Financial.afterDeleteCostCenterType()
})
