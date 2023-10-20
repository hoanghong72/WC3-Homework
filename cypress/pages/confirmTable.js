export const confirmTable = {
    TXT_NAME: "table >tbody >tr:nth-child(1) td:nth-child(2)",
    TXT_EMAIL: "table >tbody >tr:nth-child(2) td:nth-child(2)",
    TXT_GENDER: "table >tbody >tr:nth-child(3) td:nth-child(2)",
    TXT_NUMBER: "table >tbody >tr:nth-child(4) td:nth-child(2)",
    TXT_DOB: "table >tbody >tr:nth-child(5) td:nth-child(2)",
    TXT_SUBJECTS: "table >tbody >tr:nth-child(6) td:nth-child(2)",
    TXT_HOBBIES: "table >tbody >tr:nth-child(7) td:nth-child(2)",
    TXT_PICTURE: "table >tbody >tr:nth-child(8) td:nth-child(2)",
    TXT_ADDRESS: "table >tbody >tr:nth-child(9) td:nth-child(2)",
    TXT_STATE_CITY: "table >tbody >tr:nth-child(10) td:nth-child(2)",

    validName(firstName, lastName) {
        cy.get(this.TXT_NAME).should("have.text", firstName + " " + lastName);
        return this;
    },

    validEmail(email) {
        cy.get(this.TXT_EMAIL).should("have.text", email);
        return this;
    },

    validGender(gender) {
        cy.get(this.TXT_GENDER).should("have.text", gender);
        return this;
    },

    validPhoneNumber(phoneNumber) {
        cy.get(this.TXT_NUMBER).should("have.text", phoneNumber);
        return this;
    },

    validDOB(dob_day, dob_month, dob_year) {
        cy.get(this.TXT_DOB).should("have.text", dob_day + " " + dob_month + "," + dob_year);
        return this;
    },

    validPicture(picture) {
        cy.get(this.TXT_PICTURE).should("have.text", "leaf.png");
        return this;
    },

    validSubjects(subjects) {
        cy.get(this.TXT_SUBJECTS).should("have.text", subjects);
        return this;
    },

    validHobbies(hobby) {
        cy.get(this.TXT_HOBBIES).should("have.text", hobby);
        return this;
    },

    validAddress(address) {
        cy.get(this.TXT_ADDRESS).should("have.text", address);
        return this;
    },

    validStateCity(state, city) {
        cy.get(this.TXT_STATE_CITY).should("have.text", state + " " + city);
        return this;
    },
    
}