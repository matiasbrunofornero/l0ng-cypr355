# Twitt3r End-2-End Automation Framework

## Project Description:
* Project setup with Cypress version 7.3.0.
* Makes use of Custom Commands instead Page Objects.
* Behaviour-Driven Development with Cypress Cucumber Preprocessor.
* CI with GitHub Pages config in the `.github/workflows` directory. 
* Locators are in the `./fixtures` directory.
* Modals locators are in the `./fixtures/modals` directory.
* Tests are in the `./integration` directory, grouped into directory by functionality and with respective Cucumber feature.
* Custom Commands are in the `./support` directory, grouped into directory by functionality.
* Modals custom commands are in the `./support/modals` directory.
* Utility functions are in `./utils` directory. 
* Cypress configuration are in `./cypress.json` file.

## Run tests:
* `npm run open` - Open Cypress UI to select tests to run.
* `npm run headless` - Run tests in headless mode.
* `npm run dashboard` - Run tests making use to the Cypress Dashboard.
* `npm test:firefox` - Run tests throught Mozilla Firefox.
* `npm test:chrome` - Run tests throught Google Chrome.