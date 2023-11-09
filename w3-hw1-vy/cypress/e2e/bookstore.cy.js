import { bookstore } from "../pages/bookstore/bookstorePage";
import { loginPage } from "../pages/bookstore/loginPage";
import { profilePage } from "../pages/bookstore/profilePage";


describe("Add book", () => {
    beforeEach(() => {
        cy.fixture("book").as("book");
        cy.visit(Cypress.env("login"));
        cy.get("@book").then((book) => {
        loginPage
                .typeUsername(book.user.username)
                .typePassword(book.user.password)
                .clickLogin();

        profilePage
                .isUserNameCorrect(book.user.username)
                .clickDeleteAllBooks()
                .clickOkButtonDeleteDialog()
                .clickGoToStore();
        });

    });

    it("TC-ADD_BOOK-1: Add a book name Git Pocket Guide into my collection", () => {
        cy.get("@book").then((book) => {
            bookstore
                .findBook(book.book.bookName)
                .clickAddBookToCollection();

            bookstore.clickProfile();

            profilePage.isBookAdded(book.book.bookName);

        });
    });

    it("TC-ADD_BOOK-2: Add a book name Git Pocket Guide into my collection by using search", () => {
        cy.get("@book").then((book) => {
            bookstore
                .typeSearchBox(book.book.bookName)
                .findBook(book.book.bookName)
                .clickAddBookToCollection();
            bookstore.clickProfile();

            profilePage.isBookAdded(book.book.bookName);

        });
    });
});