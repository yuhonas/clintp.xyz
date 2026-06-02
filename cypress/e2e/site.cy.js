/// <reference types="cypress" />

context("site", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("navigation", () => {
    // this is just a catch all for other links on the page that i dont want to test individually
    it("should have all working links", () => {
      cy.get("a[href^='http']").each(($anchor) => {
        // NOTE: skip testing these as they can sometimes fail eg. 429
        if (
          !$anchor.attr("href").includes("linkedin") &&
          !$anchor.attr("href").includes("github")
        ) {
          cy.request($anchor.attr("href")).its("status").should("eq", 200);
        }
      });
    });

    it("should have a working link to my resume", () => {
      cy.get("a[href$='/resume.clintp.docx']")
        .should("exist")
        .then(($anchor) => {
          cy.request($anchor.attr("href")).its("status").should("eq", 200);
        });
    });

    it("should have a working link to my python notebook", () => {
      cy.get(
        "a[href='https://github.com/yuhonas/clintp.xyz/blob/main/resume/resume.clintp.ipynb']",
      )
        .should("exist")
        .then(($anchor) => {
          cy.request({
            url: $anchor.attr("href"),
            failOnStatusCode: false,
          }).then((response) => {
            if (response.status === 429) {
              cy.log(
                "Warning: GitHub returned 429 (rate limited); skipping status check",
              );
              return;
            }
            expect(response.status).to.eq(200);
          });
        });
    });

    it("should have a link to my linkedin", () => {
      cy.get("a[href='https://www.linkedin.com/in/clint-plummer/']").should(
        "exist",
      );
    });
  });

  it("should have the correct meta title", () => {
    cy.title().should("eq", "clintp.xyz | my bio in two mouse clicks or less");
  });

  it("should have the correct meta description", () => {
    cy.document()
      .get('head meta[name="description"]')
      .should("have.attr", "content", "my bio in two mouse clicks or less");
  });

  it("should have the correct opening page title", () => {
    cy.get("h1").contains("clintp.xyz");
  });

  it("should have my email address somewhere so I can be contacted", () => {
    cy.contains("hello@clintp.xyz");
  });
});
