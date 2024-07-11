import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { login } from "../../PageObjects/LoginPage";
import sharedFunction from "../../support/SharedFunctions";

const Login = new login

beforeEach(()=>{
    Login.visitLoginPage() 
})
before(() => {
    sharedFunction.loadXpathValue()
    sharedFunction.loadIdValue()
    sharedFunction.loadCssValue()
})

Given("Sign in to the goodboods ERP site", () => {
    Login.visitLoginPage()
})

When("Verify the Sign in page Header", () => {
    Login.verifySignInPageHeader()
})
Then("Enter the invalid server name", () => {
    Login.EnterInvalidServerName()
})

Then("Enter the invalid user name", () => {
    Login.EnterInvalidUserName()
})

Then("Enter the invalid password", () => {
    Login.EnterInvalidPassword()
})

Then("Click the signIn submit button", () => {
    Login.ClickSignInBtn()
})

Then("Verify the SignIn failed to connect the database popup", () => {
    Login.VerifyLoginFailedPopup()
})

Given("Enter the valid server name {string}", (servername) => {
    Login.EnterValidServerName(servername)
})

Then("Enter the valid user name {string}", (userName) => {
    Login.EnterValidUserName(userName)
})
Then("Enter the valid password {string}", (password) => {
    Login.EnterValidPassword(password)
})
Then("Verify home page Header", () => {
    Login.HomePageHeader()
})
