// Import commands.js if you have any
import "./commands";

// Enable Allure reporting
import "@shelex/cypress-allure-plugin";

// Optional: add this to automatically label tests
Cypress.AllureReporter = require("@shelex/cypress-allure-plugin");
