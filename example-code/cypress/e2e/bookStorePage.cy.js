import { bookstore } from "../bookstore/bookstore";
import { login} from "../bookstore/login";
import { profile } from "../bookstore/profile";

describe('Book ',()=>{
    beforeEach(()=>{
        cy.visit('/login')
        cy.fixture("acc").then((acc)=>{
            login
            .inputUsername(acc.username)
            .inputPassword(acc.password)
            .clickLogin();
        })
        profile.deleteBook("Git Pocket Guide").toBookStore()
    });
    it('Add book',()=> {
        bookstore.addBook("Git Pocket Guide").toProfile()
        profile.isTrueBook("Git Pocket Guide")
    });
   
}
);