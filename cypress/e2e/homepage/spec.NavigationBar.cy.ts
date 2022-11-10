describe("Enter Navigation Bar Desktop view", () => {
  it("Check item about", () => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="about-link"]').click();
    cy.get('[data-cy="about-page"]').should("exist");
  });
  it("Check item projects", () => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="projects-link"]').click();
    cy.get('[data-cy="projects-page"]').should("exist");
  });
  it("Check item techstack", () => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="techstack-link"]').click();
    cy.get('[data-cy="tech-stack-page"]').should("exist");
  });
  it("Check item resume", () => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="resume-link"]')
      .children()
      .should(
        "have.attr",
        "href",
        "https://www.dropbox.com/s/x3m4bop3tn2pxjm/CV-Gerbig.pdf?dl=0"
      );
  });
  it("Check item contact", () => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="contact-link"]').click();
    cy.get('[data-cy="contact-page"]').should("exist");
  });
  it("Select German language", () => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="select-language"]').select(1).should("have.value", "de");
    cy.get('[data-cy="select-language"]').should("contain", "DEUTSCH");
  });
  it("Select English language", () => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="select-language"]').select(2).should("have.value", "en");
    cy.get('[data-cy="select-language"]').should("contain", "ENGLISH");
  });
});
