import { bulidCreate, buildUpdate } from "../../support/generate.js";
// const create = bulidCreate();

it("user could be able to Create blog post successfully", () => {
  const update = buildUpdate();

  //Given
  cy.visit("http://localhost:3000/login").viewport(1500, 660);
  cy.get("#username").type("asdf");
  cy.get("#password").type("asdf");
  cy.get("button").click();
  //   cy.get(".app-wrapper > :nth-child(2)").click();
  //   cy.createPost(create.title, create.content, create.selectstatus);

  cy.get(":nth-child(2) > .post-actions > .edit-button").click();

  //When
  cy.updatePost(update.title, update.content, update.selectstatus);
  //Then
  cy.url().should("eq", "http://localhost:3000/");
});
