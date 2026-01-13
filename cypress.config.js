const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = {
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    stepDefinitions: "cypress/e2e/step-def/**/*.js",
    supportFile: "cypress/support/e2e.js", 

    setupNodeEvents(on, config) {
      // setup Cucumber preprocessor
      on("file:preprocessor", cucumber());

      // setup Allure plugin
      allureWriter(on, config);

      return config;
    },
  },
};
