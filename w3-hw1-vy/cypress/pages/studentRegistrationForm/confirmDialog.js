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

    isNameCorrect(firstName, lastName) {
        firstName = firstName.trimStart().trimEnd();
        lastName = lastName.trimStart().trimEnd();
        cy.get(this.TXT_NAME).should("have.text", firstName + " " + lastName);
        return this;
    },

    isEmailCorrect(email) {
        cy.get(this.TXT_EMAIL).should("have.text", email);
        return this;
    },

    isGenderCorrect(gender) {
        cy.get(this.TXT_GENDER).should("have.text", gender);
        return this;
    },

    isMobileCorrect(mobile) {
        cy.get(this.TXT_MOBILE).should("have.text", mobile);
        return this;
    },

    isDOBCorrect(day, month, year) {
        cy.get(this.TXT_DOB).should("have.text", day + " " + month + "," + year);
        return this;
    },

    isPictureCorrect(picture) {
        cy.get(this.TXT_PICTURE).should("have.text", picture);
        return this;
    },

    isSubjectsCorrect(subjects) {
        let subjects_a = ""
        for (let i = 0; i < subjects.length; i++) {
            subjects_a = subjects_a + ", " + subjects[i];
        };
        subjects_a = subjects_a.slice(2);
        cy.get(this.TXT_SUBJECT).should("have.text", subjects_a);
        return this;
    },

    isHobbiesCorrect(hobbies) {
        let hobbies_a = ""
        for (let i = 0; i < hobbies.length; i++) {
            hobbies_a = hobbies_a + ", " + hobbies[i];
        };
        hobbies_a = hobbies_a.slice(2);
        cy.get(this.TXT_HOBBIES).should("have.text", hobbies_a);
        return this;
    },

    isAddressCorrect(currentAddress) {
        cy.get(this.TXT_ADDRESS).should("have.text", currentAddress);
        return this;
    },

    isStateCorrect(state, city) {
        if (state != "" && city != "") {
            cy.get(this.TXT_STATE_AND_CITY).should("have.text", state + " " + city);
        }
        else {
            cy.get(this.TXT_STATE_AND_CITY).should("have.text", state + city);
        };
        return this;
    },

}