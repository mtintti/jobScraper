describe('JobModal Tests', () => {
    beforeEach(() => {
        cy.visit('https://job-tracker-omega.vercel.app/jobtracker');
    });

    it('Add job posting', () => {
        cy.get('div[data-rbd-draggable-id="Applied"]')
            .find('button.text-green-500') 
            .click();

            cy.get('Input') 
            cy.get('[placeholder="Title"]').type("Job post Test");
            cy.get('[placeholder="Company"]').type("ABC");
            cy.get('[placeholder="Location"]').type("Berlin, Germany");
            cy.get('[placeholder="Date (YYYY-MM-DD)"]').type("2024-07-19");
            cy.get('[placeholder="Status"]').type("Applied");

            cy.get('Span')
            .contains('Job')
            .click();

            cy.get('div.flex.flex-col.gap-2.p-6')
            .find('button').contains('Add')
            .click();
      
    });

    it('Add Internship posting', () => {
        cy.get('div[data-rbd-draggable-id="Applied"]')
            .find('button.text-green-500') 
            .click();

            cy.get('Input') 
            cy.get('[placeholder="Title"]').type("Intern post Test");
            cy.get('[placeholder="Company"]').type("ABC");
            cy.get('[placeholder="Location"]').type("Berlin, Germany");
            cy.get('[placeholder="Date (YYYY-MM-DD)"]').type("2024-07-19");
            cy.get('[placeholder="Status"]').type("Applied");

            cy.get('Span')
            .contains('Internship')
            .click();

            cy.get('div.flex.flex-col.gap-2.p-6')
            .find('button').contains('Add')
            .click();
      
    });


});