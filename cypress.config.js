const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      targetDir: 'allure-results'
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
