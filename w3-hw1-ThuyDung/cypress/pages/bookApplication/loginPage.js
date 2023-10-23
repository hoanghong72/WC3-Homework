export const loginPage ={
    TXT_USERNAME: "#userName",
    TXT_PASSWORD: "#password",
    BTN_LOGIN: "#login",

    typeUserName(username) {
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
}