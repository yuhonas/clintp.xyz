/// <reference types="cypress" />

context("schema markup", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("opengraph", () => {
    it("should have the correct og:type", () => {
      cy.get('head meta[property="og:type"]').should(
        "have.attr",
        "content",
        "profile",
      );
    });

    it("should have the correct og:url", () => {
      cy.get('head meta[property="og:url"]').should(
        "have.attr",
        "content",
        "https://clintp.xyz",
      );
    });

    it("should have the correct og:title", () => {
      cy.get('head meta[property="og:title"]')
        .should("exist")
        .and("have.attr", "content")
        .and("not.be.empty");
    });

    it("should have the correct og:description", () => {
      cy.get('head meta[property="og:description"]')
        .should("exist")
        .and("have.attr", "content")
        .and("not.be.empty");
    });

    it("should have the correct og:image", () => {
      cy.get('head meta[property="og:image"]').should(
        "have.attr",
        "content",
        "/og_image.jpg",
      );
    });

    it("should have the correct og:image:alt", () => {
      cy.get('head meta[property="og:image:alt"]').should(
        "have.attr",
        "content",
        "Clint Plummer — Engineering Leader",
      );
    });

    it("should have the correct profile:first_name and profile:last_name", () => {
      cy.get('head meta[property="profile:first_name"]').should(
        "have.attr",
        "content",
        "Clint",
      );
      cy.get('head meta[property="profile:last_name"]').should(
        "have.attr",
        "content",
        "Plummer",
      );
    });
  });

  it("should have valid schema.org structured data for the entire site", () => {
    cy.get('script[type="application/ld+json"]')
      .should("exist")
      .then(($script) => {
        const json = JSON.parse($script.text());

        // 1. Verify Page Schema
        expect(json["@context"]).to.eq("https://schema.org");
        expect(json["@type"]).to.eq("ProfilePage");
        expect(json.url).to.eq("https://clintp.xyz");
        expect(json.name).to.eq("Clint Plummer - Engineering Leader");
        expect(json.description).to.include("Software engineering leader");

        // 2. Verify Person Schema
        const person = json.mainEntity;
        expect(person).to.exist;
        expect(person["@type"]).to.eq("Person");
        expect(person["@id"]).to.eq("https://clintp.xyz/#person");
        expect(person.name).to.eq("Clint Plummer");
        expect(person.jobTitle).to.eq("Engineering Leader");

        // Check social/profile links
        expect(person.sameAs).to.be.an("array");
        expect(person.sameAs).to.include("https://github.com/yuhonas");
        expect(person.sameAs).to.include("https://www.linkedin.com/in/clint-plummer/");

        // Check alumniOf
        expect(person.alumniOf).to.be.an("array");
        const swinburne = person.alumniOf.find((edu) => edu.name.includes("Swinburne"));
        expect(swinburne).to.exist;
        expect(swinburne["@type"]).to.eq("EducationalOrganization");

        // Check skills (knowsAbout)
        expect(person.knowsAbout).to.be.an("array").that.is.not.empty;
        expect(person.knowsAbout).to.include("Full Stack Developer");

        // 3. Verify SoftwareSourceCode (Projects) Schema
        expect(json.hasPart).to.be.an("array").and.have.lengthOf(4);

        const expectedProjects = [
          { name: "Free exercise DB", repo: "https://github.com/yuhonas/free-exercise-db" },
          { name: "zsh ansimotd", repo: "https://github.com/yuhonas/zsh-ansimotd" },
          { name: "osx-colors", repo: "https://github.com/yuhonas/osx-colors" },
          { name: "clintp.xyz", repo: "https://github.com/yuhonas/clintp.xyz" },
        ];

        expectedProjects.forEach((expected, index) => {
          const project = json.hasPart[index];
          expect(project["@type"]).to.eq("SoftwareSourceCode");
          expect(project.name).to.eq(expected.name);
          expect(project.codeRepository).to.eq(expected.repo);
          expect(project.url).to.eq(expected.repo);
          expect(project.dateCreated).to.exist;
          expect(project.keywords).to.be.a("string");

          // Verify link to author (Person)
          expect(project.author["@type"]).to.eq("Person");
          expect(project.author["@id"]).to.eq(person["@id"]);
          expect(project.author.name).to.eq(person.name);
        });
      });
  });
});
