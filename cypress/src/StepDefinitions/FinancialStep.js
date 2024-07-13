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
    Financial.enterCostCenterTypeBasicDetails()
})
Then("Eneter cost center type code", () => {
    Financial.enterCostCenterTypeCode()
})
Then("Eneter cost center type name", () => {
    Financial.enterCostCenterTypeName()
})
Then("Save the form", () => {
    Financial.saveForm()
})
Then("Update the form", () => {
    Financial.updateForm()
})
Then("Delete the form", () => {
    Financial.deleteForm()
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
Then("Create cost center type", () => {
    Financial.createCostCenterType()
})
Then("Enter the cost Category code value", () => {
    Financial.enterCostCategoryCode()
})
Then("Enter the cost Category name value", () => {
    Financial.enterCostCategoryName()
})
Then("Enter the Category short name", () => {
    Financial.enterShortName()
})
Then("grab and reuse the cost center type", () => {
    Financial.grabCostCenterTypeInput()
})
Then("Enter basic cost category input values", () => {
    Financial.EnterBasicInputCostCategory()
})
Then("Retrieve the new cost Category", () => {
    Financial.retrieveCostCategory()
})
Then("Delete newly created cost Category", () => {
    Financial.deleteCostCategory()
})
Then("After cost category created Delete cost center type", () => {
    Financial.afterDeleteCostCenterType()
})
Then("grab the cost center type and input the cost center page",()=>{
    Financial.enterTheCostCenterTypeValue()
})
Then("Enter the cost center code value", () => {
    Financial.enterCostCenterCode()
})
Then("Enter the cost center name value", () => {
    Financial.enterTheCostCenterName()
})
Then("Enter the cost center short name", () => {
    Financial.enterTheCostCenterShortName()
})
Then("Click the cost center",()=>{
    Financial.clickTheCostCenter()
})
Then("Enter basic field for the cost center",()=>{
    Financial.enterBasicFieldForTheCostCenter()
})
Then("Retrieve the new cost center",()=>{
    Financial.retrieveCostCenter()
})
Then("Delete newly created cost center",()=>{
    Financial.deleteCostCenter()
})
Then("Remove the input field values using Add New button",()=>{
    Financial.removeInputValuesUsingAddNewBtn()
})