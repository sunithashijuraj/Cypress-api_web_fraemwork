# arc-cypess-spritecloud

## Pre-requisite

- Download and install Node.js [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

- Download the repo from the path []

- Run 'npm install' at the root directory of git repo. This will set up the necessary pre-commit hooks.

```sh
cd rsa-gateway-cypress-api
npm install
```

## Create environment specifics

Due to security reasons, added the providersData.json files into .gitignore as we are passing the apikey info in this files.

Please find the fixture file in LastPass with the follow credential name. The credential will provide file location url and QA will provide the access to the file in OneDrive.

- Fixture for RSA-Gateway-autotest Repo

Need to copy the the below files under 'cypress\fixtures', before the execution start.

- providersData.json

To run the tests for invalid scenarios, need to copy this file under 'cypress\fixtures', before the execution start.

- apiKeyforNegativeCases.json

## Environment configuration and running End to End in specific environments

Seperate runner file is created for test, preprod environments.

To run all End to End tests against a specific environment, run

`npx cypress open --config-file test.json` { use the corresponding .json files to run tests in other environment}

The custom domain environment URLs are set in:
`cypress \*{test |}\*.json`

## Cypress Dashboard
Test resultas are reported in Cypress Dashboard. Generic login to access the reports in Cypress Dashboard (https://dashboard.cypress.io/)

- To generate reports in cypress dashboard, use the below commands to run the tests.
    > npx cypress run --record --key 0cff7f51-9f8a-4efa-8808-200d95764f55 --config-file test.json

### Reporting in Cypress

Implemented Mochawesome plugin to generate .json reports.

- To generate mochawesome report, use the below commands *******.json reports will get generated in the folder 'cypress\report\mochawesome-report/' *******
> npx cypress run 
