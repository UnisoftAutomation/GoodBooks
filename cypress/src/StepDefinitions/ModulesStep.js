import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { modules } from "../../PageObjects/Modules";
import sharedFunction from "../../support/SharedFunctions";


const Modules= new modules

before(()=>{
    sharedFunction.loadXpathValue()
    sharedFunction.loadIdValue()
    sharedFunction.loadCssValue()
})
Given("Sign in to the goodboods ERP site with all input values",()=>{
    Modules.User1login()
})

When("I verify the Modules with the following text",(dataTable)=>{
    Modules.verifyModules(dataTable)
 })
 When('I grab all values from the elements', () => {
    Modules.grabval()
   });
 Then('I should log all the values', function() {
    Modules.storevalue()     
   });