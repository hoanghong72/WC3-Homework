export const bookstore ={
    LB_USERNAME: "#userName-value",
    BTN_OK: "#closeSmallModal-ok",
    TB_BOOK: '.ReactTable a',

    addBook(book){
        cy.get(this.TB_BOOK).contains(book).click();
        cy.get('button').contains('Add to your collection').click();
        cy.on("window:alert", (s)=>{
            expect(s).to.contains('Book added to your collection');
        });
        return this
    },
    toProfile(){
        cy.get('.menu-list li').contains.click()
        return this
    }
};