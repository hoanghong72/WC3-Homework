export const profilePage = {
    LBL_USERNAME_VALUE: "#userName-value",
    BTN_DELETE_ALL_BOOKS: ".buttonWrap button",
    BTN_OK: "#closeSmallModal-ok",
    TXT_BOOKNAME: '.rt-table > .rt-tbody .rt-td:nth-child(2) a',
    BTN_DELETE_BOOK: ".rt-table > .rt-tbody .rt-td:nth-child(5) #delete-record-undefined",

    isUsernameCorrect(username) {
        cy.get(this.LBL_USERNAME_VALUE).should("have.text", username);
        return this
    },

    deleteAllBookx() {
        cy.get(this.BTN_DELETE_ALL_BOOKS).contains('Delete All Books').click({ force: true })
        cy.get(this.BTN_OK).click({ force: true })
        return this
    },

    navigateToBookStore() {
        cy.get('.menu-list li')
            // .parent()
            .contains('Book Store')
            .click()
        return this
    },

    isCorrectBook(book) {
        cy.get(this.TXT_BOOKNAME)
            .should('have.text', book)
        return this
    },

    deleteBook(book) {
        cy.get(this.TXT_BOOKNAME).each(($el, index, $list) => {
            let text = $el.text()
            if (text.includes(book)) {
                cy.get(this.BTN_DELETE_BOOK).eq(index).click();
                cy.get(this.BTN_OK).click({ force: true })
                cy.on("window:alert", (s) => {
                    expect(s).to.contains('Book deleted.');
                });
            }
        })
        return this
    }
};