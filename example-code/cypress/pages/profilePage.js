export const profilePage = {
  LBL_USERNAME_VALUE: "#userName-value",

  isUsernameCorrect(username) {
    cy.get(this.LBL_USERNAME_VALUE).should("have.text", username);
  },
};
