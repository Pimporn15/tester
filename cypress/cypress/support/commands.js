// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("register", (username, password, firstname, lastname) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#firstname").type(firstname);
  cy.get("#lastname").type(lastname);
  cy.get("button").click();
});

Cypress.Commands.add("createPost", (title, content, selectstatus) => {
  cy.get("#title").type(title);
  cy.get("#content").type(content);
  cy.get("#status").select(selectstatus);
  cy.get(".form-actions > button").click();
});

Cypress.Commands.add("updatePost", (title, content, selectstatus) => {
  cy.get("#title").clear().type(title);
  cy.get("#content").clear().type(content);
  cy.get("#status").select(selectstatus);
  cy.get(".form-actions > button").click();
});
