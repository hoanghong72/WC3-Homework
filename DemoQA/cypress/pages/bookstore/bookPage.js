export const bookPage= {
    TXT_SEARCH : "#searchBox",
    TB_BOOK: '.ReactTable',
    BTN_ADDBOOK: "[type='button']",
    

    selectBook(bookname){
        cy.get(this.TB_BOOK).contains(bookname).click({force: true});
        return this;
    },
    addBook(){
        cy.get(this.BTN_ADDBOOK).contains('Add To Your Collection').click({force: true});
        return this;
    },
    isBookAdd(){
        cy.on("window:confirm", (message) => {
            expect(message).to.contain("Book added to your collection.");
        });
        return this;
    },
    navigatetoProfile(){
        cy.contains('Profile').click();
        return this;
    },
    
}