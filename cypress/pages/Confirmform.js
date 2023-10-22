export const confirmform = {
    TXT_NAME_CF: "table >tbody > tr:nth-child(1) > td:nth-child(2)",
    TXT_EMAIL_CF: "table >tbody > tr:nth-child(2) > td:nth-child(2)",
    TXT_GENDER_CF: "table >tbody > tr:nth-child(3) > td:nth-child(2)",
    TXT_MOBILE_CF: "table >tbody > tr:nth-child(4) > td:nth-child(2)",
    TXT_DOB_CF: "table >tbody > tr:nth-child(5) > td:nth-child(2)",
    TXT_SUBJECTS_CF: "table >tbody > tr:nth-child(6) > td:nth-child(2)",
    TXT_HOBBIES_CF: "table >tbody > tr:nth-child(7) > td:nth-child(2)",
    TXT_PICTURE_CF: "table >tbody > tr:nth-child(8) > td:nth-child(2)",
    TXT_ADDRESS_CF: "table >tbody > tr:nth-child(9) > td:nth-child(2)",
    TXT_STATEANDCITY_CF: "tbody > tr:nth-child(10) > td:nth-child(2)",

    isNameCorrect(firstName, lastName) {
        cy.get(this.TXT_NAME_CF).should('have.text', firstName + ' ' + lastName);
        return this;
    },

    isMailCorrect(email) {
        cy.get(this.TXT_EMAIL_CF).should('have.text', email);
        return this;
    },

    isGenderCorrect(gender) {
        cy.get(this.TXT_GENDER_CF).should('have.text', gender);
        return this;
    },

    isMobileCorrect(phoneNumber) {
        cy.get(this.TXT_MOBILE_CF).should('have.text', phoneNumber);
        return this;
    },
    
    isDOBCorrect(date, month, year) {
        cy.get(this.TXT_DOB_CF).should('have.text', date+ " " + month+ "," +year);
        return this;
    },
    
    isSubjectsCorrect(subjects) {
        cy.get(this.TXT_SUBJECTS_CF).should('have.text', subjects);
        return this;
    },

    isHobbiesCorrect(hobby) {
        cy.get(this.TXT_HOBBIES_CF).should('have.text', hobby);
        return this;
    },
    isPictureCorrect(file) {
        cy.get(this.TXT_PICTURE_CF).should('have.text', file);
        return this;
    },
    isAddressCorrect (address) {    
        cy.get(this.TXT_ADDRESS_CF).should('have.text', address);
        return this;
    },
    isState_and_City_Correct (state, city) {    
        cy.get(this.TXT_STATEANDCITY_CF).should('have.text', state+ " " + city);
        return this;
    }
} 