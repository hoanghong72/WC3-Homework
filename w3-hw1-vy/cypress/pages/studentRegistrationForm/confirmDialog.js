export const confirmDialog = {
    TXT_NAME: "table >tbody >tr:nth-child(1) td:nth-child(2)",
    TXT_EMAIL: "table >tbody >tr:nth-child(2) td:nth-child(2)",
    TXT_GENDER: "table >tbody >tr:nth-child(3) td:nth-child(2)",
    TXT_MOBILE: "table >tbody >tr:nth-child(4) td:nth-child(2)",
    TXT_DOB: "table >tbody >tr:nth-child(5) td:nth-child(2)",
    TXT_SUBJECT: "table >tbody >tr:nth-child(6) td:nth-child(2)",
    TXT_HOBBIES: "table >tbody >tr:nth-child(7) td:nth-child(2)",
    TXT_PICTURE: "table >tbody >tr:nth-child(8) td:nth-child(2)",
    TXT_ADDRESS: "table >tbody >tr:nth-child(9) td:nth-child(2)",
    TXT_STATE_AND_CITY: "table >tbody >tr:nth-child(10) td:nth-child(2)",

    isInformationCorrect(account){
        cy.get(this.TXT_NAME).should("have.text",account.firstName+" "+account.lastName);
        cy.get(this.TXT_EMAIL).should("have.text",account.email);
        cy.get(this.TXT_GENDER).should("have.text",account.gender);
        cy.get(this.TXT_MOBILE).should("have.text",account.mobile);
        cy.get(this.TXT_DOB).should("have.text",account.dateOfBirth);
        cy.get(this.TXT_SUBJECT).should("have.text",account.subjects);
        cy.get(this.TXT_HOBBIES).should("have.text",account.hobbies);
        cy.get(this.TXT_PICTURE).should("have.text",account.picture);
        cy.get(this.TXT_ADDRESS).should("have.text",account.currentAddress);
        cy.get(this.TXT_STATE_AND_CITY).should("have.text",account.state+" "+account.city);

    }
}