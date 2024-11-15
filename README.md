# Ideku-cypress

## Install cypress from node js
```shell

$ cd <project path>
$ npm install cypress --save-dev
$ npm install typescript --save-dev # Enable typescript
```

## Open cypress
```shell
# GUI
$ npx cypress open

# CUL
$ npx cypress run
```

## How to test in GUI
1. Click `E2E Testing` then choose chrome, after that you can start test by `Start E2E Testing in Chrome`.
2. In specs choose a `.ts` file to execute test (e.g., `login.cy.ts`).