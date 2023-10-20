export const profilePage = {
    LBL_USERNAME_VALUE: "#userName-value",
    BTN_DELETE_ALL_BOOKS: ".buttonWrap button",
    BTN_OK: "#closeSmallModal-ok",
    TXT_BOOKNAME: '.rt-table > .rt-tbody .rt-td:nth-child(2) a',
    TB_BOOK: ".rt-table > .rt-tbody .rt-td",
    BTN_DELETE_BOOK: ".rt-table > .rt-tbody .rt-td:nth-child(5) #delete-record-undefined",
    LBL_BOOK : ".rt-noData",

    isUsernameCorrect(username) {
        cy.get(this.LBL_USERNAME_VALUE).should("have.text", username);
        return this
    },

    deleteAllBooks() {
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
        // cy.get(this.TXT_BOOKNAME).each(($el, index, $list) => {
        //     let text = $el.text()
        //     if (text.includes(book)) {
        //         cy.get(this.BTN_DELETE_BOOK).eq(index).click();
        //         cy.get(this.BTN_OK).click({ force: true }).then(() => {
        //             cy.on("window:confirm", (s) => {
        //                 expect(s).to.contains('Book deleted.');
        //                 done()    
        //                 // cy.contains('OK').click()
        //                 // return false
        //             });
        //         })
        //     }
        // })
        cy.get(this.TB_BOOK).then((body) => {
            if (body.find(this.TXT_BOOKNAME).length > 0) {
                cy.get(this.TXT_BOOKNAME).each(($el, index, $list) => {
                    let text = $el.text()
                    if (text.includes(book)) {
                        cy.get(this.BTN_DELETE_BOOK).eq(index).click();
                        cy.get(this.BTN_OK).click({ force: true }).then(() => {
                            cy.on("window:confirm", (s) => {
                                expect(s).to.contains('Book deleted.');
                                return true
                                // cy.contains('OK').click()
                                // return false
                            });
                        })
                    }
                })
            }
        });

        // }
        return this
    }
};