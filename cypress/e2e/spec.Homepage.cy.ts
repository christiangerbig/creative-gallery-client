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
  it("Check menu item techstack", () => {
    cy.viewport("iphone-8");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-techstack-link"]').click();
    cy.get('[data-cy="tech-stack-page"]').should("exist");
  });
  it("Check menu item resume", () => {
    cy.viewport("iphone-8");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-resume-link"]')
      .children()
      .should(
        "have.attr",
        "href",
        "https://www.dropbox.com/s/x3m4bop3tn2pxjm/CV-Gerbig.pdf?dl=0"
      );
  });
  it("Check menu item contact", () => {
    cy.viewport("iphone-8");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-contact-link"]').click();
    cy.get('[data-cy="contact-page"]').should("exist");
  });
  it("Select German language", () => {
    cy.viewport("iphone-8");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-select-language"]')
      .select(1)
      .should("have.value", "de");
    cy.get('[data-cy="menu-select-language"]').contains("DEUTSCH");
  });
  it("Select English language", () => {
    cy.viewport("iphone-8");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="toggler"]').click();
    cy.get('[data-cy="menu-select-language"]')
      .select(2)
      .should("have.value", "en");
    cy.get('[data-cy="menu-select-language"]').contains("ENGLISH");
  });
});
