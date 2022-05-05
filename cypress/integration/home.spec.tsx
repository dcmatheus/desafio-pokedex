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
  describe('PokemonList', () => {
    it('Renders ten pokemons at first', () => {
      cy.get('[data-testid*="pokemon-item"]').should(($el) => {
        expect($el).to.have.lengthOf(10);
      });
    });
    it('Renders ten more pokemons when scrolling to the end', () => {
      cy.scrollTo('bottom');
      cy.get('[data-testid*="pokemon-item"]').should(($el) => {
        expect($el).to.have.lengthOf(20);
      });
      cy.scrollTo('bottom');
      cy.get('[data-testid*="pokemon-item"]').should(($el) => {
        expect($el).to.have.lengthOf(30);
      });
    });
  });
});

export {};
