declare namespace Cypress {
    interface Chainable {
      login(account: string, password: string): Chainable<void>
    }
  }