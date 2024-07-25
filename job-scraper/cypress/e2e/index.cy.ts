describe('Index Tests', () => {
    beforeEach(() => {
        cy.visit('https://job-tracker-omega.vercel.app/');
    });

    it('Show landing component', () => {
        cy.get('h1').contains('Simplify keeping track of your applications online');
    });

    it('Show info grid', () => {

        cy.get('div').first().within(() => {
            cy.get('div').each(($div) => {
                cy.get('div.flex.flex-col.items-start.gap-1').each(($div) => {
                    cy.wrap($div).find('p').should('not.have.text', '');
                });
            });
        });
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

    it('Shows footer', () => {
        cy.get('div').first().within(() => {
            cy.get('div').within(() => {
                cy.get('h1').should('exist');
                cy.get('p').should('contain.text', 'Whether you are applying for internships or full-time position');
            });
        });
    });

});