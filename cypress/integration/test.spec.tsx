describe('test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('render initial', () => {
    cy.get('div').contains('Inicial');
  });
});
