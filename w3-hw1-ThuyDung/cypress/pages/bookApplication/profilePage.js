export const profilePage ={
    LBL_USERNAME_VALUE : "#userName-value",
    HEADER: ".main-header",
    BTN_GOTOSTORE: "#gotoStore",
    BTN_BOOK_NAME: ".action-buttons",

    goToBookStore(){
        cy.get(this.BTN_GOTOSTORE).click({force: true});
        return this;
    },
    isBookAdd(name){
        cy.get(this.BTN_BOOK_NAME).contains(name).should('be.visible');
    }
}