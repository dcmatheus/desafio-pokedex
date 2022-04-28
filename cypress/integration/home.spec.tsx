describe('Home Screen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  describe('Header', () => {
    it('Render header', () => {
      cy.get('[data-testid="header"]').should('be.visible');
    });
    it('Render header icon', () => {
      cy.get('[data-testid="header-icon"]').should('be.visible');
    });
    it('Render correct title', () => {
      cy.get('[data-testid="header-title"]').should('have.text', 'Pokedex');
    });
  });
});

export {};
