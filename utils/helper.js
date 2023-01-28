export const eleClick = (loc) => {
  cy.get(loc).click();
};

export const eleForceClick = (loc) => {
  cy.get(loc).click({ force: true });
};

export const eleSelect = (loc, args) => {
  cy.get(loc).select(args);
};

export const eleType = (loc, args) => {
  cy.get(loc).type(args).should("have.value", args);
};

export const eleCheck = (loc) => {
  cy.get(loc).should("not.be.checked").check();
};

export const eleUnCheck = (loc) => {
  cy.get(loc).should('be.checked').uncheck();
};

export const eleScrollIntoView = (loc) => {
  cy.get(loc).scrollIntoView();
};

export const eleVisible = (loc) => {
  cy.get(loc).should("be.visible");
};

export const eleNotVisible = (loc) => {
  cy.get(loc).should("not.be.visible");
};

export const eleContainsText = (args) => {
  cy.contains(args).should("be.visible");
};

export const eleNotContainsText = (args) => {
  cy.contains(args).should("not.be.visible");
};
