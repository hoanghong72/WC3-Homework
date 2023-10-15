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

    isConfirmationFormCorrect(firstName, lastName, email = "", gender, mobile,
        day,month,year, picture = "", subjects = "", hobbies = "", currentAddress = "", state = "", city = "") {
        cy.get(this.TXT_NAME).should("have.text", firstName + " " + lastName);
        cy.get(this.TXT_EMAIL).should("have.text", email);
        cy.get(this.TXT_GENDER).should("have.text", gender);
        cy.get(this.TXT_MOBILE).should("have.text", mobile);
        cy.get(this.TXT_DOB).should("have.text", day+" "+month+","+year);
        cy.get(this.TXT_PICTURE).should("have.text", picture);
        cy.get(this.TXT_SUBJECT).should("have.text", subjects);
        cy.get(this.TXT_HOBBIES).should("have.text", hobbies);
        cy.get(this.TXT_ADDRESS).should("have.text", currentAddress);
        if (state!="" && city!=""){
            cy.get(this.TXT_STATE_AND_CITY).should("have.text", state + " " + city);
        }
        else{
            cy.get(this.TXT_STATE_AND_CITY).should("have.text", state + city);
        }
        
    },

}