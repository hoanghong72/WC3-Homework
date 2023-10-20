import { loginPage } from "../pages/bookApplication/loginPage";
import { profilePage } from "../pages/bookApplication/profilePage";
import { bookPage } from "../pages/bookApplication/bookPage";

describe('Add a book', () =>{
    beforeEach(() => {
        cy.fixture("user").as("user");
        cy.visit(Cypress.env("login"));
    });
    it("Verify that user can add a book into their collection when typing book name on search textbox", ()=>{
        cy.get('@user').then((user) => {
            loginPage
                .typeUserName(user.profile.username)
                .typePassword(user.profile.password)
                .clickLogin();
            profilePage
                .isNavigateToProfile()
                .isUserNameCorrect(user.profile.username)
                .goToBookStore();
            bookPage
                .isNavigateToBookStore()
                .findBookByTyping(user.book.name)
                .isBookCorrect(user.book.name)
                .addBookToCollection()
                .isBookAdd()
                .clickProfile()
                .isNavigateToProfile();
            profilePage
                .isBookAdd(user.book.name);
                
        })
    })
})