export const profilePage = {
    LBL_USERNAME_VALUE: "#userName-value",

    BTN_SUBMIT: "#submit",
    BTN_OK_DIALOG: "#closeSmallModal-ok",
    BTN_GO_TO_STORE: "#gotoStore",

    isUserNameCorrect(username) {
        cy.get(this.LBL_USERNAME_VALUE).should("have.text", username);
    },

    clickDeleteAllBooks() {
        cy.get('button').contains('Delete All Books').click({ force: true });
        cy.get('button').contains('OK').click({ force: true });
        return this;
    },
    isDelete(){
        cy.once("window:alert", (txt) => {
            //expect(txt).to.be.oneOf(["All Books deleted.", "No books available in your's collection!"]);
            //expect(txt).to.contains(/All Books deleted.|No books available in your's collection!/g);
            expect(["All Books deleted.", "No books available in your's collection!"]).to.include(txt)
            // done()
        });
        return this;
    },

    clickGoToStore() {
        cy.get(this.BTN_GO_TO_STORE).click();
        return this;
    }

}