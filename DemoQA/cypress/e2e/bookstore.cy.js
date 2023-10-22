/// <reference types="cypress" />
import { loginPage } from "../pages//bookstore/loginPage";
import { profilePage } from "../pages//bookstore/profilePage";
import { bookPage } from "../pages/bookstore/bookPage";

describe('Add a book', () =>{
    beforeEach(() => {
        cy.fixture("user.json").as("user");
        cy.visit('https://demoqa.com/login');
        cy.get('@user').then((data) => {
            loginPage
                .typeUserName(data.username)
                .typePassword(data.password)
                .clickLogin();
            profilePage
                .goToBookStore();

        })
    });
    it(" User can add a book", () => {
        cy.get('@user').then((data) => {
            bookPage
                .selectBook(data.bookname)
                .addBook()
                .isBookAdd()
                .navigatetoProfile()
            profilePage
                .isBookDisplay(data.bookname);
        })        
     })
})