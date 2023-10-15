export const profilePage = {
    LBL_USERNAME_VALUE: "#userName-value",

    // BTN_SUBMIT: "#submit",
    // BTN_OK_DIALOG: "#closeSmallModal-ok",
    BTN_GO_TO_STORE: "#gotoStore",

    isUserNameCorrect(username) {
        cy.get(this.LBL_USERNAME_VALUE).should("have.text", username);
        return this;
    },

    clickDeleteAllBooks() {
        const stub = cy.stub()
        cy.on('window:alert', stub);
        cy.get('button').contains('Delete All Books').click({ force: true });
        cy.get('button').contains('OK').click({ force: true });
        cy.on("window:confirm", (txt) => {
            expect(["All Books deleted.", "No books available in your's collection!"]).to.include(txt); 
            return true;       
        });

        return this;
    },

    clickGoToStore() {
        cy.get(this.BTN_GO_TO_STORE).click({force:true});
        return this;
    }

}