export const Login = {
    BTN_LOGINBOOKSTORE: "#login",
    TXT_USERNAME: "#userName",
    TXT_PASSWORD: "#password",
    BTN_LOGIN: "#login",
    BTN_GOTOSTORE: "#gotoStore",
    TXT_BOOKNAME: "#see-book-Git\ Pocket\ Guide > a",
    BTN_ADDBOOK: "#addNewRecordButton",

    loginBookStore() {
        cy.get(this.BTN_LOGINBOOKSTORE).click();
        return this;
    },
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
    clickToSeeBookInfor () {
        cy.get(this.TXT_BOOKNAME).should('be.visible').click();
        return this;
    },
    clickAddBook () {
        cy.get(this.BTN_ADDBOOK).click();
        return this;
    },
}