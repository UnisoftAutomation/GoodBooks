const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
  //projectId: 'zx98ef',
	e2e: {
		async setupNodeEvents(on, config) {
			const bundler = createBundler({
				plugins: [createEsbuildPlugin(config)],
			});
			on("file:preprocessor", bundler);
			await addCucumberPreprocessorPlugin(on, config);
			return config;
		},
		// retries: {
		// 	experimentalStrategy: 'detect-flake-and-pass-on-threshold',
		// 	experimentalOptions: {
		// 		maxRetries: 2,
		// 		passesRequired: 2,
		// 	},
		// 	openMode: true,
		// 	runMode: true,
		// },
    specPattern: "cypress/src/Features/*.feature",
		baseUrl:"http://183.82.250.223:92/4.5/",
		fixturesFolder:"cypress/src/fixtures",
		redirectionLimit: 50,
		chromeWebSecurity: true,
		defaultCommandTimeout: 70000,
		execTimeout: 60000,
		pageLoadTimeout: 60000,
		viewportHeight: 720,
		viewportWidth: 1280,
	},
	
});
