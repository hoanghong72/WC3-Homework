import { bookstore } from "../pages/bookstore/bookstorePage";
import { loginPage } from "../pages/bookstore/loginPage";
import { profilePage } from "../pages/bookstore/profilePage";


describe("Add book", () =>{
    beforeEach(() => {
        cy.fixture("book").as("book");
        cy.visit(Cypress.env("login"));
    });

    it("As a user, I want to add a book name Git Pocket Guide into my collection", () => {
        cy.get("@book").then((book) => {
            loginPage
                .typeUsername(book.user.username)
                .typePassword(book.user.password)
                .clickLogin();
            
            profilePage
                .isUserNameCorrect(book.user.username)
                .clickDeleteAllBooks()
                .clickGoToStore();

            bookstore
                .findBook('Git Pocket Guide')
                .clickAddBookToCollection();

            
        });
    });
});