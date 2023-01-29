export function eleClick(loc: any) {
  cy.get(loc).click();
}

export function eleForceClick(loc: any) {
  cy.get(loc).click({ force: true });
}

export function eleSelect(loc: any, args: any) {
  cy.get(loc).select(args);
}

export function eleType(loc: any, args: any) {
  cy.get(loc).type(args).should("have.value", args);
}

export function eleCheck(loc: any) {
  cy.get(loc).should("not.be.checked").check();
}

export function eleUnCheck(loc: any) {
  cy.get(loc).should("be.checked").uncheck();
}

export function eleScrollIntoView(loc: any) {
  cy.get(loc).scrollIntoView();
}

export function eleVisible(loc: any) {
  cy.get(loc).should("be.visible");
}

export function eleNotVisible(loc: any) {
  cy.get(loc).should("not.be.visible");
}

export function eleContainsText(args: any) {
  cy.contains(args).should("be.visible");
}

export function eleNotContainsText(args: any) {
  cy.contains(args).should("not.be.visible");
}
