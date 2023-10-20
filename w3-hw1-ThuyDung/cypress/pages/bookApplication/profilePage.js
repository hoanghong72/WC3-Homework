export const profilePage ={
    LBL_USERNAME_VALUE : "#userName-value",
    HEADER: ".main-header",
    BTN_GOTOSTORE: "#gotoStore",
    BTN_BOOK_NAME: ".action-buttons",

    isNavigateToProfile(){
        cy.get(this.HEADER).should('have.text', "Profile");
        return this;
    },
    isUserNameCorrect(username){
        cy.get(this.LBL_USERNAME_VALUE).should('have.text', username);
        return this;
    },
    goToBookStore(){
        cy.get(this.BTN_GOTOSTORE).click({force: true});
        return this;
    },
    isBookAdd(name){
        cy.get(this.BTN_BOOK_NAME).contains(name).should('be.visible');
    }
}