export const bookstore = {
    
    // BOOK STORE PAGE
    TXT_BOOK_NAME_COL:".rt-table .rt-tr-group .rt-td:nth-child(2) a",

    findBook(name){
        cy.get(this.TXT_BOOK_NAME_COL).each(($el,index,$list) =>{
            let text = $el.text();
            if (text.includes(name)){
                cy.get(this.TXT_BOOK_NAME_COL).eq(index).click();
            };
        });
        return this;
    },

    // BOOK DETAIL PAGE

    clickAddBookToCollection(){
        cy.get('button').contains('Add To Your Collection').click({force:true});
        cy.once("window:alert", (s) => {
            expect(s).to.contains("Book added to your collection")
            //done()
        });
        return this;
    },
}