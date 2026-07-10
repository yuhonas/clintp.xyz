/// <reference types="cypress" />

context("schema markup", () => {
  beforeEach(() => {
    cy.visit("/");
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
