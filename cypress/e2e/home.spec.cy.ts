describe('Visit website', () => {
  const hitListClass = '.ais-InfiniteHits-list';

  it('Load more button', () => {
    cy.visit('/');
    const showMoreBtn = cy.contains('Show more results');
    cy.get(hitListClass).find('li').should('have.length', 12);
    showMoreBtn.click();
    cy.get(hitListClass).find('li').should('have.length', 24);
  });

  it('Display no result when search "noResultTestSuffixes"', () => {
    cy.visit('/');
    cy.get('[placeholder="Search suffixes..."]').type('noResultTestSuffixes');
    cy.contains('No results.');
  });
});
