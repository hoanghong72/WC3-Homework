export const loginPage = {
    TXT_USERNAME: "#userName",
    TXT_PASSWORD: "#password",
    BTN_LOGIN: "#login",
  
    // By adding "return this" at the end of each funtion we can chain them
  
    typeUsername(username) {
      cy.get(this.TXT_USERNAME).type(username);
      return this;
    },
  
    typePassword(password) {
      cy.get(this.TXT_PASSWORD).type(password);
      return this;
    },
  
    clickLogin() {
      cy.get(this.BTN_LOGIN).click();
      return this;
    },
  };