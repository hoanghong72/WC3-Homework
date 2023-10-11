import { loginPage } from "../pages/loginPage";
import { profilePage } from "../pages/profilePage";

describe("Login", () => {
  beforeEach(() => {
    cy.fixture("account").as("account");
    cy.visit(Cypress.env("login"));
  });
  it("Login successfully", () => {
    cy.get("@account").then((account) => {
      loginPage
        .typeUsername(account.username)
        .typePassword(account.password)
        .clickLogin();
      profilePage.isUsernameCorrect(account.username);
    });
  });
});
