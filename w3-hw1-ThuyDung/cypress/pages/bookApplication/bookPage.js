export const bookPage= {
    TXT_SEARCH : "#searchBox",
    BTN_BOOK :".action-buttons",
    HEADER: ".main-header",
    LBL_BOOK: "#title-wrapper > div.col-md-9.col-sm-12 label",
    BTN_ADDBOOK : "div.text-right.fullButton",

    isNavigateToBookStore(){
        cy.get(this.HEADER).should('have.text', "Book Store");
        return this;
    },
    findBookByTyping(name){
        cy.get(this.TXT_SEARCH).type(name);
        cy.get(this.BTN_BOOK).contains(name).eq(0).click();
        return this;
    },
    isBookCorrect(name){
        cy.get(this.LBL_BOOK).should('have.text', name);
        return this;
    },
    addBookToCollection(){
        cy.get(this.BTN_ADDBOOK).click({force: true});
        return this;
    },
    isBookAdd(){
        cy.on("window:confirm", (message) => {
            expect(message).to.contain("Book added to your collection.");
        });
        return this;
    },
    clickProfile(){
        cy.get('span').contains('Profile').click({force:true});
        return this;
    },
    
}