describe('Tracker Tests', () => {
    beforeEach(() => {
        cy.visit('https://job-tracker-omega.vercel.app/jobtracker');
    });

    it('Enter address and press button', () => {
        cy.intercept('POST', '/api/scraper/getData').as('postRequest');

        cy.get('div.mx-auto.grid').should('be.visible');

        cy.get('div.col-start-1.row-start-2').within(() => {
            cy.get('input[type="text"]').should('exist').type('https://www.jobly.fi/tyopaikka/senior-devops-engineer-devops-engineer-2112517');
        });

        cy.get('div.col-start-2.row-start-2').within(() => {
            cy.get('button').contains('Scrape').should('be.visible').click();
        });

        cy.wait('@postRequest').its('response.statusCode').should('eq', 200);

    });

    it('Check that card components are visible', () => {
        cy.get('div[data-rbd-droppable-id="Applied"]').within(() => {
            cy.get('div.bg-white.rounded-md.space-y-2.drop-shadow-md').each(($card) => {
                cy.wrap($card).should('be.visible');
            });
        });
    });



});