describe("Contact page Desktop view", () => {
  const mobileView = "iphone-8";
  const desktopView = "macbook-11";
  const path = "http://localhost:3000/contact";

  it("Missing email, subject and message for send request mobile view", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="form-submit-request"]').click();
    cy.get('[data-cy="error-message"]').should("exist");
  });
  it("Missing subject and message for send request mobile view", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="form-input-email"]').type("test@web.de");
    cy.get('[data-cy="form-submit-request"]').click();
    cy.get('[data-cy="error-message"]').should("exist");
  });
  it("Missing message for send request mobile view", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="form-input-email"]').type("test@web.de");
    cy.get('[data-cy="form-input-subject"]').type("Feedback");
    cy.get('[data-cy="form-submit-request"]').click();
    cy.get('[data-cy="error-message"]').should("exist");
  });
  it("Create and send request mobile view", () => {
    cy.viewport(mobileView);
    cy.visit(path);
    cy.get('[data-cy="form-input-email"]').type("test@web.de");
    cy.get('[data-cy="form-input-subject"]').type("Feedback");
    cy.get('[data-cy="form-input-message"]').type("This is just a test.");
    cy.get('[data-cy="form-submit-request"]').click();
    cy.get('[data-cy="home-page"]').should("exist");
  });

  it("Missing email, subject and message for send request desktop view", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="form-submit-request"]').click();
    cy.get('[data-cy="error-message"]').should("exist");
  });
  it("Missing subject and message for send request mobile view", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="form-input-email"]').type("test@web.de");
    cy.get('[data-cy="form-submit-request"]').click();
    cy.get('[data-cy="error-message"]').should("exist");
  });
  it("Missing message for send request mobile view", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="form-input-email"]').type("test@web.de");
    cy.get('[data-cy="form-input-subject"]').type("Feedback");
    cy.get('[data-cy="form-submit-request"]').click();
    cy.get('[data-cy="error-message"]').should("exist");
  });
  it("Create and send request mobile view", () => {
    cy.viewport(desktopView);
    cy.visit(path);
    cy.get('[data-cy="form-input-email"]').type("test@web.de");
    cy.get('[data-cy="form-input-subject"]').type("Feedback");
    cy.get('[data-cy="form-input-message"]').type("This is just a test.");
    cy.get('[data-cy="form-submit-request"]').click();
    cy.get('[data-cy="home-page"]').should("exist");
  });
});
