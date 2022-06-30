const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  projectId: 'm2iqty',
  e2e: {
    baseUrl : 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

