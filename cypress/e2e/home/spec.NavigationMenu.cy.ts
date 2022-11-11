describe("Enter Navigation Menu Mobile view", () => {
  const mobileView = "iphone-8";
  const path = "http://localhost:3000/";

  it("Check menu item about", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-about-link"]').click();
    cy.get('[data-cy="about-page"]').should("exist");
  });
  it("Check menu item projects", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-projects-link"]').click();
    cy.get('[data-cy="projects-page"]').should("exist");
  });
  it("Check menu item techstack", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-techstack-link"]').click();
    cy.get('[data-cy="tech-stack-page"]').should("exist");
  });
  it("Check menu item contact", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-contact-link"]').click();
    cy.get('[data-cy="contact-page"]').should("exist");
  });
  it("Select German language", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="select-language"]').select(1).should("have.value", "de");
    cy.get('[data-cy="select-language"]').should("contain", "DEUTSCH");
  });
  it("Select English language", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="select-language"]').select(2).should("have.value", "en");
    cy.get('[data-cy="select-language"]').should("contain", "ENGLISH");
  });
});
