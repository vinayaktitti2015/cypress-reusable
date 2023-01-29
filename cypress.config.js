import { defineConfig } from "cypress";
const wp = require("@cypress/webpack-preprocessor");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const options = {
        webpackOptions: require("./webpack.config.js"),
      };
      on("file:preprocessor", wp(options));
    },
  },
});
