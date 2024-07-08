import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import sharedFunction from "../../support/SharedFunctions";
import { financial } from "../../PageObjects/Financial";

const Financial =new financial
before(()=>{
    sharedFunction.loadXpathValue()
    sharedFunction.loadIdValue()
    sharedFunction.loadCssValue()
})

Given("Click the following module",(dataTable)=>{
Financial.ClickFollwingModules(dataTable)
})


