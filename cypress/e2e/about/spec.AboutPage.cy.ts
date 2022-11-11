describe("About page Desktop view", () => {
  const mobileView = "iphone-8";
  const desktopView = "macbook-11";
  const path = "http://localhost:3000/about";

  it("Check alternate contact link mobile view", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="alt-contact-link"]').click();
    cy.get('[data-cy="contact-page"]').should("exist");
  });

  it("Check alternate contact link desktop view", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="alt-contact-link"]').click();
    cy.get('[data-cy="contact-page"]').should("exist");
  });
});
