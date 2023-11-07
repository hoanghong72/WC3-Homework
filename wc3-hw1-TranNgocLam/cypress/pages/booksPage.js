export const booksPage = {
    LBL_USERNAME_VALUE: "#userName-value",
    BTN_OK: "#closeSmallModal-ok",
    TB_BOOK: '.ReactTable a',

    addBookToCollection(book) {
        cy.get(this.TB_BOOK).contains(book).click();
        cy.get('button').contains('Add To Your Collection').click({ force: true });
        cy.on("window:confirm", (s) => {
            const runout = ['Book added to your collection']
            const regex = new RegExp(`${runout.join('|')}`, 'g')
            expect(s).to.contains(regex);
            return true
            // done();
        });
        return this
    },



    navigateToProfile() {
        cy.get('.menu-list li')
            // .parent()
            .contains('Profile')
            .click()
        return this
    }
};