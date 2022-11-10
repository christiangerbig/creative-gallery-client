describe("About page Desktop view", () => {
  it("Check alternate contact link", () => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/about");
    cy.get('[data-cy="alt-contact-link"]').click();
    cy.get('[data-cy="contact-page"]').should("exist");
  });
});
