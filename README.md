This repository contains test scenarios and automation scripts for the website `www.saucedemo.com`. The tests are written using WebdriverIO and Cucumber frameworks.

# Setup Instructions

## Prerequisites

Make sure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org

## Installation
1. Clone this repository to your local machine:

    ```shell
    git clone https://github.com/your-username/your-repo.git
    ```

2. Navigate to the cloned directory:

    ```shell
    cd your-repo
    ```

3. Install the dependencies:

    ```shell
    npm install
    ```

## Running the Tests
To execute the test scenarios, follow these steps:

1. Open a terminal window and navigate to the project directory.

2. Run the following command to execute the tests:

    ```shell
    npm run <YOUR_SCRIPT_KEY_IN_PACKAGE.JSON>
    ```

For run with `tag` in Cucumber:

```gherkin
Feature: Login to Swag Labs

  @TC-LOGIN-1
  Scenario Outline: Successful login

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see Products title

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
```

In your `package.json` file, add the following code to specify the tag expressions you want to use:

```json
{
  "scripts": {
    "tag": "wdio run ./wdio.conf.js --cucumberOpts.tagExpression='@TC-LOGIN-1'"
  }
}
```

In this example, the `tag` is set to `@TC-LOGIN-1`, which means that only scenarios tagged with `@TC-LOGIN-1` will be executed.

![screenshot](https://raw.githubusercontent.com/namnh663/WebdriverIO/main/data/img/tcs.png)

Test case: https://docs.google.com/spreadsheets/d/1HE1bMMztXkqoShD0vNOh_FE6va96WYkIiDsquOLHhCY/edit?usp=sharing

## Configuration

The wdio.conf.js file contains the configuration settings for WebdriverIO. You can modify this file to customize the behavior of the test execution. Some important configuration options include:

- `specs`: The file(s) containing the cucumber feature files (set to features/*.feature).

- `capabilities`: The browser capabilities for running the tests (e.g., Chrome, Firefox).

- `reporters`: The reporters to generate test reports (e.g., spec, allure).

## Folder Structure
The project follows a specific folder structure to organize the test scenarios and automation scripts. Here's an overview:

- `features`: Contains the feature files written in Gherkin syntax.

- `steps`: Contains the step definition files that define the mapping between steps and automation scripts.

- `pageobjects`: Contains the page objects. Each page object represents a specific page or component within the web application. It encapsulates the locators and methods related to that page/component.

## Extending the Tests
To add new test scenarios or modify existing ones, you can follow these steps:

1. Implement page elements, page methods in the `pageobjects` directory

2. Create a new feature file in the `features` directory or update an existing one.

3. Implement the corresponding step definitions in the `steps` directory.

Reporting
By default, the tests generate console output for each scenario. Additionally, you can generate detailed HTML reports using different reporters. To enable a specific reporter, update the reporters array in the wdio.conf.js file.

## Reporter

### Slack Reporter

#### Slack notification screenshot

![screenshot](https://raw.githubusercontent.com/namnh663/WebdriverIO/main/data/img/slack.png)

#### wdio.conf.js
```js
export.config = {
    reporters: [
        'spec',
        [
            SlackReporter, {
              // Set the Slack Options used webhook.
              slackOptions: {
                type: 'webhook',
                webhook: 'SLACK_WEBHOOK_URL',
                slackName: 'WebdriverIO Reporter',
                slackIconUrl: 'https://webdriver.io/img/webdriverio.png',
              },
              // Set the Title of Test.
              title: 'Slack Reporter',
              // Set the notification of Test Finished
              notifyTestFinishMessage: true,
              // Set the scenario-based state count (Only Cucumber)
              useScenarioBasedStateCounts: true,
              // Customize Slack Emoji Symbols.
              emojiSymbols: {
                passed: ':white_check_mark:',
                failed: ':x:',
                skipped: ':double_vertical_bar:',
                pending: ':grey_question:',
                start: ':rocket:',
                finished: ':checkered_flag:',
                watch: ':stopwatch:'
              }
            }
          ],
    ],
};
```

## Troubleshooting
If you encounter any issues or errors while running the tests, make sure you have followed the setup instructions correctly. Verify that all dependencies are installed, and the configuration settings are accurate.

Happy testing!




