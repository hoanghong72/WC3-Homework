export const profile ={
    LB_USERNAME: "#userName-value",
    BTN_DELETE_BOOKS: ".buttonWrap button",
    BTN_OK: "#closeSmallModal-ok",
    TXT_BOOKNAME: '.rt-table > .rt-tbody .rt-td:nth-child(2) a',
    BTN_DELETE_BOOK: ".rt-table > .rt-tbody .rt-td:nth-child(5) #delete-record-undefined",

isTrueUserName(username) {
    cy.get(this.LB_USERNAME).should("have.text", username);
    return this
},
deleteBooks() {
    cy.get(this.BTN_DELETE_BOOKS).contains('Delete All Books').click({ force: true })
    cy.get(this.BTN_OK).click({ force: true })
    return this
},
toBookStore() {
    cy.get('.menu-list li')
        .contains('Book Store')
        .click()
    return this
},
isTrueBook(book) {
    cy.get(this.TXT_BOOKNAME)
        .should('have.text', book)
    return this
},
deleteABook(book) {
    cy.get(this.TXT_BOOKNAME).each(($el, index, $list) => {
        let text = $el.text()
        if (text.includes(book)) {
            cy.get(this.BTN_DELETE_BOOKS).eq(index).click();
            cy.get(this.BTN_OK).click({ force: true })
            cy.on("window:alert", (s) => {
                expect(s).to.contains('Book deleted.');
            });
        }
    })
    return this
}
};
