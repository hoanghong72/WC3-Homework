
import { Login } from "../pages/BookStore";
import { Profile } from "../pages/Profile";

describe('Adding Book', () => {
    beforeEach (() => {
    cy.fixture("account-bookpage").as("account");
    cy.visit('https://demoqa.com/books');

});
it("Add Book Sucessfully", () => {
    cy.get('@account').then((account) => {
    Login
    .loginBookStore()
    .typeUserName(account.username)
    .typePassword(account.password)
    .clickLogin()
    .clickToSeeBookInfor()
    .clickAddBook()
    Profile
    .clickToProfile ()
    .checkUserNamevalue(account.username)
    .checkBookName()

    })
})
});
