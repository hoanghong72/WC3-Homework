const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseURL: "https://demoqa.com",
    env: {
      regist: "/automation-practice-form",
    },
  },


});
