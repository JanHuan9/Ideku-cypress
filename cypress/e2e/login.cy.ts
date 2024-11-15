describe('Test Login Page', () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login')
      })

      it('No insert login info', () => {
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-input-field-error-message').should('have.text', 'RequiredRequired');
    })
    
      it('Wrong login info', () => {
        cy.get('input[name="username"]').focus().type('tester')
        cy.get('input[name="password"]').focus().type('HelloWorld@2024')
        cy.get('button[type="submit"]').focus().click()
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
      })

      it('Login successfully', () => {
        cy.get('input[name="username"]').focus().type('Admin')
        cy.get('input[name="password"]').focus().type('admin123')
        cy.get('button[type="submit"]').click().then(() => {
          cy.get('[class="oxd-userdropdown-name"]').should('exist'); // Assert login successfully
        })
      })
    })