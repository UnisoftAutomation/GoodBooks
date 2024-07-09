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
Then("test", () => {
    Financial.enterCostCenterTypeDetails()
})
Then("test1",()=>{
    Financial.retrieveNewCostCenterDetails()
})

