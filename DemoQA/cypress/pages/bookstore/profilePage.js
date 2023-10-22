export const profilePage ={
    LBL_USERNAME : "#userName-value",
    BTN_GOTOSTORE: "#gotoStore",
    BTN_BOOKNAME: ".action-buttons",

    goToBookStore(){
        cy.get(this.BTN_GOTOSTORE).click({force: true});
        return this;
    },
    isBookDisplay(bookname){
        cy.get(this.BTN_BOOKNAME).contains(bookname).should('be.visible');
    }
}