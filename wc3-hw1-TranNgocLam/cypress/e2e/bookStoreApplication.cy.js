

import { loginPage } from "../pages/loginPage";
import { profilePage } from "../pages/profilePage";
import { booksPage } from "../pages/booksPage";
describe('Book Store', { testIsolation: false }, () => {

    before(() => {
        cy.visit('/login')
        cy.fixture("account").then((account) => {
            loginPage
                .typeUsername(account.username)
                .typePassword(account.password)
                .clickLogin();
        })
        profilePage
            .deleteAllBooks()
            .navigateToBookStore()

    });

    it('Add book to collection', () => {
        booksPage
            .addBookToCollection("Git Pocket Guide")
            .navigateToProfile()

        profilePage.isCorrectBook("Git Pocket Guide")
    });

    after(() => {
        cy.get('#submit').contains('Log out').click()

    });
});