describe('Test Login Page', () => {
    beforeEach(() => {
      cy.login('Admin', 'admin123')
      cy.visit('/web/index.php/pim/viewEmployeeList')
    })
  
    it('Add Employee', () => {
        // Test add employee
        cy.contains('button', 'Add').click();
        cy.url().should('include', '/addEmployee')
        cy.get('input[name="firstName"]').focus().type('QA_firstName')
        cy.get('input[name="lastName"]').focus().type('QA_lastName')
        cy.contains('button', 'Save').click()
        cy.contains('Personal Details').should('be.visible') // Assert add employee successfully
    })
  })