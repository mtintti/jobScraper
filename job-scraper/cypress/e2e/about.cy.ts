describe('About Tests', () => {
    beforeEach(() => {
        cy.visit('https://job-tracker-omega.vercel.app/about');

        cy.contains('Loading...').should('not.exist');
    });


    it('Links in header', () => {
        cy.get('ul').first().within(() => {
            cy.get('li').each(($li) => {
                cy.wrap($li)
                    .find('a')
                    .should('have.attr', 'href')
                    .and('not.be.empty');

                cy.wrap($li)
                    .find('a')
                    .invoke('text')
                    .should('not.be.empty');
            });
        });
    });

    it('Shows About text', () => {
        cy.get('div.sm\\:max-w-2xl.mx-auto.grid.md\\:grid-cols-2.lg\\:grid-cols-2.gap-8.text-black-300').within(() => {
            cy.get('div.col-start-1.row-start-1')
                .should('exist')
                .invoke('text')
                .should('not.be.empty');

            cy.get('div.col-start-1.row-start-2')
                .should('exist')
                .invoke('text')
                .should('not.be.empty');
        });
    });

    
    it('Click home component', () => {
        it('Click home component', () => {
            cy.get('div').first().within(() => {
                cy.get('div.grid.grid-cols-2.gap-5').within(() => {
                    cy.get('span').within(() => {
                        cy.get('svg.w-6.h-6.text-gray-800.dark\\:text-white').click();
                    });
                });
            });

            cy.url().should('eq', 'https://job-tracker-omega.vercel.app/');
        });
    });
});