class LoginPage {
  usernameInput = 'input[name="username"]';
  passwordInput = 'input[name="password"]';
  loginButton = "button[type=submit]";
  invalidMessage = ".alert.alert-danger.text-center";

  launchApplication() {
    cy.visit("http://localhost:8080/ui/login");
  }

  enterUsername(username) {
    cy.get(this.usernameInput).type(username);
  }
  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLoginButtopn() {
    cy.get(this.loginButton).click();
  }

  verifyInvalidMessage(message) {
    cy.get(this.invalidMessage).should("contain", message);
  }
}
export default new LoginPage();
