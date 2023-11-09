export const confirmDialog = {
    TXT_VALUE: "table tbody tr td+td",

    isNameCorrect(firstName, lastName) {
        firstName = firstName.trimStart().trimEnd();
        lastName = lastName.trimStart().trimEnd();
        let value = firstName + " " + lastName;
        cy.get(this.TXT_VALUE).contains(value).should("be.visible");
        return this;
    },

    isEmailCorrect(email) {
        cy.get(this.TXT_VALUE).contains(email).should("be.visible");
        return this;
    },

    isGenderCorrect(gender) {
        cy.get(this.TXT_VALUE).contains(gender).should("be.visible");
        return this;
    },

    isMobileCorrect(mobile) {
        cy.get(this.TXT_VALUE).contains(mobile).should("be.visible");
        return this;
    },

    isDOBCorrect(day, month, year) {
        let value = day + " " + month + "," + year;
        cy.get(this.TXT_VALUE).contains(value).should("be.visible");
        return this;
    },

    isPictureCorrect(picture) {
        cy.get(this.TXT_VALUE).contains(picture).should("be.visible");
        return this;
    },

    isSubjectsCorrect(subjects) {
        let subjects_a = ""
        for (let i = 0; i < subjects.length; i++) {
            subjects_a = subjects_a + ", " + subjects[i];
        };
        subjects_a = subjects_a.slice(2);
        cy.get(this.TXT_VALUE).contains(subjects_a).should("be.visible");
        return this;
    },

    isHobbiesCorrect(hobbies) {
        let hobbies_a = ""
        for (let i = 0; i < hobbies.length; i++) {
            hobbies_a = hobbies_a + ", " + hobbies[i];
        };
        hobbies_a = hobbies_a.slice(2);
        cy.get(this.TXT_VALUE).contains(hobbies_a).should("be.visible");
        return this;
    },

    isAddressCorrect(currentAddress) {
        cy.get(this.TXT_VALUE).contains(currentAddress).scrollIntoView().should("be.visible");
        return this;
    },

    isStateCorrect(state, city) {
        if (state != "" && city != "") {
            let value = state + " " + city;
            cy.get(this.TXT_VALUE).contains(value).should("be.visible");
        }
        else {
            let value = state + city;
            cy.get(this.TXT_VALUE).contains(value).should("be.visible");
        };
        return this;
    },
}