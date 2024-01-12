describe('Visit website', () => {
  const hitListClass = '.ais-InfiniteHits-list';

  it('Load more button', () => {
    cy.visit('/');
    const showMoreBtn = cy.contains('Show more results');
    cy.get(hitListClass).find('li').should('have.length', 6);
    showMoreBtn.click();
    cy.get(hitListClass).find('li').should('have.length', 12);
  });

  it('Display result when search "C major"', () => {
    cy.visit('/');
    cy.get('[placeholder="Search..."]').type('C major{enter}');
    cy.get(hitListClass).find('li').should('have.length.at.least', 1);
  });
  it('Display no result when search "noResultTest"', () => {
    cy.visit('/');
    cy.get('[placeholder="Search..."]').type('noResultTest{enter}');
    cy.get(hitListClass).find('li').should('have.length', 0);
  });
});
