describe('Navigation Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to home page', () => {
    cy.url().should('include', '/');
    cy.contains('Home Page').should('be.visible');
  });

  it('should have working navigation links', () => {
    cy.get('nav').should('exist');
    cy.get('nav a').should('have.length.at.least', 1);
  });

  it('should maintain layout across navigation', () => {
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });
});