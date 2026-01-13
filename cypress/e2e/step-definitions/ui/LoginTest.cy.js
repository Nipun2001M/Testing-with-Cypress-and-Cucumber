import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPageCy from "../../pages/LoginPage.cy";
import DashboardPageCy from "../../pages/DashboardPage.cy";

Given("Launch the QA application", () => {
  LoginPageCy.launchApplication();
});

When("enter {string} as username", (username) => {
  LoginPageCy.enterUsername(username);
});

And("enter {string} as password", (password) => {
  LoginPageCy.enterPassword(password);
});

And("click on the login button", () => {
  LoginPageCy.clickLoginButtopn();
});

Then("should see the dashboard page", () => {
  DashboardPageCy.VerifyDashboardPage()
});


Then("verify error message {string}", (message) => {
  LoginPageCy.verifyInvalidMessage(message);
});