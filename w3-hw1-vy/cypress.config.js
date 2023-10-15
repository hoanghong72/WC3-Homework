const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demoqa.com',
    env: {
      registrationForm: '/automation-practice-form',

      login: '/login',
      bookstore: '/books',
      profile: '/profile',
    },
  },
});