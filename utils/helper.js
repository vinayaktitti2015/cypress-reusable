export function eleClick(loc) {
  cy.get(loc).click();
}

export function eleForceClick(loc) {
  cy.get(loc).click({ force: true });
}

export function eleSelect(loc, args) {
  cy.get(loc).select(args);
}

export function eleType(loc, args) {
  cy.get(loc).type(args).should("have.value", args);
}

export function eleCheck(loc) {
  cy.get(loc).should("not.be.checked").check();
}

export function eleUnCheck(loc) {
  cy.get(loc).should("be.checked").uncheck();
}

export function eleScrollIntoView(loc) {
  cy.get(loc).scrollIntoView();
}

export function eleVisible(loc) {
  cy.get(loc).should("be.visible");
}

export function eleNotVisible(loc) {
  cy.get(loc).should("not.be.visible");
}

export function eleContainsText(args) {
  cy.contains(args).should("be.visible");
}

export function eleNotContainsText(args) {
  cy.contains(args).should("not.be.visible");
}
