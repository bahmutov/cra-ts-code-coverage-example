# cra-ts-code-coverage-example
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

The application should have `window.__coverage__` object. Let's generate coverage reports

```shell
$ yarn add -D nyc istanbul-lib-coverage
info Direct dependencies
├─ istanbul-lib-coverage@3.0.0
└─ nyc@15.0.0
```

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
