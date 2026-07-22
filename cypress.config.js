const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {

    reportDir: 'cypress/reports/mochawesome-report',

    overwrite: false,
    autoOpen :false,
    code:true,
    timestamp:'longDate',
    showPassed:true,
    reportPageTitle:'Project Framework Practice',
    html: true,
    video: true,

screenshotOnRunFailure: true,

    //json: true
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "cypress/e2e/**/*.cy.js",

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
