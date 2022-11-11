describe("Enter Navigation Bar Desktop view", () => {
  const desktopView = "macbook-11";
  const path = "http://localhost:3000/";

  it("Check item about", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="about-link"]').click();
    cy.get('[data-cy="about-page"]').should("exist");
  });
  it("Check item projects", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="projects-link"]').click();
    cy.get('[data-cy="projects-page"]').should("exist");
  });
  it("Check item techstack", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="techstack-link"]').click();
    cy.get('[data-cy="tech-stack-page"]').should("exist");
  });
  it("Check item contact", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="contact-link"]').click();
    cy.get('[data-cy="contact-page"]').should("exist");
  });
  it("Select German language", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="select-language"]').select(1).should("have.value", "de");
    cy.get('[data-cy="select-language"]').should("contain", "DEUTSCH");
  });
  it("Select English language", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="select-language"]').select(2).should("have.value", "en");
    cy.get('[data-cy="select-language"]').should("contain", "ENGLISH");
  });
});
