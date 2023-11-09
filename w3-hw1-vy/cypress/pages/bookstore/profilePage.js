export const profilePage = {
    LBL_USERNAME_VALUE: "#userName-value",
    // BTN_SUBMIT: "#submit",
    // BTN_OK_DIALOG: "#closeSmallModal-ok",
    BTN_GO_TO_STORE: "#gotoStore",
    //TXT_BOOK_NAME_COL: ".rt-table .rt-tr-group .rt-td:nth-child(2) a",
    TXT_BOOK_NAME_COL: ".rt-table .rt-tr-group .rt-td+.rt-td a",
    TXT_CURRENT_PAGE: ".-pageJump input",
    TXT_TOTAL_PAGES: ".-totalPages",
    BTN_PAGE: ".-pagination button",

    isUserNameCorrect(username) {
        cy.get(this.LBL_USERNAME_VALUE).should("have.text", username);
        return this;
    },

    clickDeleteAllBooks() {
        const stub = cy.stub()
        cy.on('window:alert', stub);
        cy.get('button').contains('Delete All Books').click({ force: true });
        return this;
    },
    
    clickOkButtonDeleteDialog(){
        cy.get('button').contains('OK').click({ force: true });
        cy.on("window:confirm", (txt) => {
            expect(["All Books deleted.", "No books available in your's collection!"]).to.include(txt);
            return true;
        });
        return this;
    },

    clickGoToStore() {
        cy.get(this.BTN_GO_TO_STORE).click({ force: true });
        return this;
    },

    isBookAdded(name) {
        let currentPage = 1;
        let totalPages = 1;
        cy.get(this.TXT_CURRENT_PAGE).then(($value) => {
            currentPage = $value.val();
            cy.log(currentPage);
        });
        cy.get(this.TXT_TOTAL_PAGES).then(($text) => {
            totalPages = $text.text();
            cy.log(totalPages);
        });

        //let check=1
        while (currentPage <= totalPages) {
            //cy.log(currentPage);
            cy.get(this.TXT_BOOK_NAME_COL).each(($el, index, $list) => {
                let text = $el.text();
                if (text.includes(name)) {
                    //check = 2;
                    cy.log("Find " + name + " in collection");
                };
            });

            if (currentPage == totalPages) {
                break;
            }
            else {
                cy.get('button').contains('Next').click();
            }

            currentPage = currentPage + 1;
        }
        // cy.log(check)
        // if (check == 2) {
        //     cy.log("Cannot find " + name + " in collection");
        //     //throw new Error("Cannot find " + name + " in collection");
        // }

        return this;
    }
}