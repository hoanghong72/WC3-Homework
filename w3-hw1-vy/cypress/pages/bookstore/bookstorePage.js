export const bookstore = {

    // BOOK STORE PAGE

    //TXT_BOOK_NAME_COL: ".rt-table .rt-tr-group .rt-td:nth-child(2) a",
    TXT_BOOK_NAME_COL: ".rt-table .rt-tr-group .rt-td+.rt-td a",
    TXT_SEARCH_BOX: "#searchBox",
    TXT_CURRENT_PAGE: ".-pageJump input",
    TXT_TOTAL_PAGES: ".-totalPages",
    BTN_PAGE: ".-pagination button",
    BTN_PROFILE: "#item-3 span",

    clickProfile(){
        cy.get('span').contains('Profile').click({force:true});
        return this;
    },
    
    findBook(name) {
        let currentPage = 1;
        let totalPages = 1;
        cy.get(this.TXT_CURRENT_PAGE).then(($value) => {
            currentPage = $value.val();
            cy.log(currentPage);
        });
        cy.get(this.TXT_TOTAL_PAGES).then(($text) => {
            totalPages = $text.text();
            cy.log(totalPages);
        });

        while (currentPage <= totalPages) {
            let check = true;
            cy.get(this.TXT_BOOK_NAME_COL).each(($el, index, $list) => {
                let text = $el.text();
                if (text.includes(name)) {
                    cy.get(this.TXT_BOOK_NAME_COL).eq(index).click();
                    check = false;
                };
            });

            if (currentPage == totalPages || check == false) {
                break;
            }
            else {
                cy.get('button').contains('Next').click();
            }

            currentPage = currentPage + 1;
        }

        return this;
    },

    typeSearchBox(name) {
        cy.get(this.TXT_SEARCH_BOX).type(name).type('{enter}');
        return this;
    },


    // BOOK DETAIL PAGE

    clickAddBookToCollection() {
        cy.get('button').contains('Add To Your Collection').click({ force: true });
        cy.acceptAlert("window:confirm", "Book added to your collection");
        return this;
    },
}