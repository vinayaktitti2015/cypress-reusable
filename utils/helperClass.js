class Helper {
  static eleClick(loc) {
    return cy.get(loc).click();
  }

  static eleForceClick(loc) {
    return cy.get(loc).click({ force: true });
  }

  static eleSelect(loc, args) {
    return cy.get(loc).select(args);
  }

  static eleType(loc, args) {
    return cy.get(loc).type(args).should("have.value", args);
  }

  static eleCheck(loc) {
    return cy.get(loc).should("not.be.checked").check();
  }

  static eleUnCheck(loc) {
    return cy.get(loc).should("be.checked").uncheck();
  }

  static eleScrollIntoView(loc) {
    return cy.get(loc).scrollIntoView();
  }

  static eleVisible(loc) {
    return cy.get(loc).should("be.visible");
  }

  static eleNotVisible(loc) {
    return cy.get(loc).should("not.be.visible");
  }

  static eleContainsText(args) {
    return cy.contains(args).should("be.visible");
  }

  static eleNotContainsText(args) {
    return cy.contains(args).should("not.be.visible");
  }
}
