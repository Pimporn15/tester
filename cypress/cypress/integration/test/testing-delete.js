import { bulidCreate } from "../../support/generate.js";

it("user could be able to Create blog post successfully", () => {
  const create = bulidCreate();

  //Given
  cy.visit("http://localhost:3000/login").viewport(1500, 660);
  cy.get("#username").type("asdf");
  cy.get("#password").type("asdf");
  cy.get("button").click();
  //   cy.get(".app-wrapper > :nth-child(2)").click();

  //When
  cy.get(":nth-child(1) > .delete-button").click();
  //Then
  cy.url().should("eq", "http://localhost:3000/");
});
