describe('Fetch all Packages', () => {
  it('successfully fetches n+1 package/s', () => {
    cy.visit('/')
    cy.get('.SinglePackage')
    cy.get('.AllPackages')
  })
})
