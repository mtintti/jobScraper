describe('Register Tests', () => {
  beforeEach(() => {
      cy.visit('https://job-tracker-omega.vercel.app');
  });

  it('register user', () => {
      cy.intercept('POST', '/api/serverAuth').as('postRequest');

      cy.get('div')
          .find('p').contains('Login') 
          .click();

          cy.get('Span')
          .contains('Create an account')
          .click();

          cy.get('Input') 
          cy.get('[placeholder="Email"]').type("tesing@gmail.com");
          cy.get('[placeholder="Username"]').type("ABC");
          cy.get('[placeholder="Password"]').type("Abc123");

          cy.get('div.flex.flex-col.gap-2.p-6')
          .find('button').contains('Register')
          .click();

          cy.wait('@postRequest').its('response.statusCode').should('eq', 200);
    
  });

});