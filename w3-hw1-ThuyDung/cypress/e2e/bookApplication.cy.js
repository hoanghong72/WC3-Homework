import { loginPage } from "../pages/bookApplication/loginPage";
import { profilePage } from "../pages/bookApplication/profilePage";
import { bookPage } from "../pages/bookApplication/bookPage";

describe('Add a book', () =>{
    beforeEach(() => {
        cy.fixture("user").as("user");
        cy.visit(Cypress.env("login"));
        loginPage
        .typeUserName(user.profile.username)
        .typePassword(user.profile.password)
        .clickLogin();
    });
    it("Verify that user can add a book into their collection when typing book name on search textbox", ()=>{
        cy.get('@user').then((user) => {
            profilePage
                .goToBookStore();
            bookPage
                .findBookByTyping(user.book.name)
                .addBookToCollection()
                .isBookAdd()
                .clickProfile()
            profilePage
                .isBookAdd(user.book.name);
                
        })
    })
})