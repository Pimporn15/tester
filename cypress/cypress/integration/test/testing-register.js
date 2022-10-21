import { bulidUser } from "../../support/generate.js";

it("user could be able to register successfully", () => {
  const user = bulidUser();

  //Given(เตรียม)

  cy.visit("http://localhost:3000/register").viewport(1500, 660);
  //when(ทำ)
  // cy.get("#username").type(user.username);
  // cy.get("#password").type(user.password);
  // cy.get("#firstname").type(user.firstname);
  // cy.get("#lastname").type(user.lastname);
  // cy.get("button").click();

  cy.register(user.username, user.password, user.firstname, user.lastname);
  //then (เชค)
  cy.url().should("eq", "http://localhost:3000/login");
});
