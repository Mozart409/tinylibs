describe('Fetch all Packages', () => {
  it('successfully fetches n+1 package/s', () => {
    cy.visit('/')
    cy.contains('Browse all packages')
    cy.get('.AllPackages').find('.SinglePackage').its('length').should('be.gte', 1)
    cy.get('.AllPackages').should('have.length', 1)
  })
})
