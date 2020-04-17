# cra-ts-code-coverage-example [![renovate-app badge][renovate-badge]][renovate-app] [![CI stats](https://github.com/bahmutov/cra-ts-code-coverage-example/workflows/test/badge.svg?branch=master)](.github/workflows/test.yml)
> React App with TypeScript and Cypress code coverage

This project was created using CRA v3

```shell
$ npm i -g create-react-app
+ create-react-app@3.3.1
$ create-react-app cra-ts-code-coverage-example --typescript
```

## Cypress tests with code coverage

```shell
$ yarn add -D cypress @cypress/code-coverage
info Direct dependencies
├─ @cypress/code-coverage@1.12.0
└─ cypress@4.0.1
```

Add library to instrument application code on the fly

```shell
$ yarn add -D @cypress/instrument-cra
info Direct dependencies
└─ @cypress/instrument-cra@1.1.0
```

Change the `start` script in [package.json](package.json) to be `react-scripts -r @cypress/instrument-cra start`. If you start application now, there should be object `window.__coverage__` with code coverage numbers.

![code coverage object](images/coverage-object.png)

Start app and Cypress

```shell
$ yarn add -D start-server-and-test
info Direct dependencies
└─ start-server-and-test@1.10.8
```

In [package.json](package.json)

```json
{
  "scripts": {
    "start": "react-scripts -r @cypress/instrument-cra start",
    "cy:open": "cypress open",
    "dev": "start-test 3000 cy:open"
  }
}
```

Start Cypress with `npm run dev` and run a single end-to-end test [cypress/integration/spec.js](cypress/integration/spec.js)

```js
it('opens the app', () => {
  cy.visit('/')
  cy.get('header.App-header').should('be.visible')
  cy.contains('Learn tcaeR').should('be.visible')
})
```

![test](images/test.png)

The code coverage information is saved automatically in the folder `.nyc_output`. Run `nyc` tool to see summary in the terminal

```shell
$ yarn nyc report
```

![Yarn report](images/yarn-report.png)

Or open generated static code coverage report with `open coverage/lcov-report/index.html`

![Coverage](images/coverage.png)

You can drill into individual files

![Utils coverage](images/utils-coverage.png)

You can see the app has never called `add(a, b)` function, and only has called the `reverse(s)` function once passing a string.

## See also

For more examples, see [cypress-io/code-coverage](https://github.com/cypress-io/code-coverage#examples) and read the Cypress [Code Coverage Guide](http://on.cypress.io/code-coverage). You can also watch [Cypress.io - State of the Art Testing Tool](https://www.youtube.com/watch?v=JL3QKQO80fs) presentation and see its [slides](https://slides.com/bahmutov/state-of-the-art).

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
