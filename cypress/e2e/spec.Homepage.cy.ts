describe("Enter Homepage Mobile view", () => {
  it("Check menu item about", () => {
    cy.viewport("iphone-8");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-about-link"]').click();
    cy.get('[data-cy="about-page"]').should("exist");
  });
  it("Check menu item projects", () => {
    cy.viewport("iphone-8");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-projects-link"]').click();
    cy.get('[data-cy="projects-page"]').should("exist");
  });
  it("Check menu item tech stack", () => {
    cy.viewport("iphone-8");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-tech-stack-link"]').click();
    cy.get('[data-cy="tech-stack-page"]').should("exist");
  });
  it("Check menu item contact", () => {
    cy.viewport("iphone-8");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-contact-link"]').click();
    cy.get('[data-cy="contact-page"]').should("exist");
  });
});
