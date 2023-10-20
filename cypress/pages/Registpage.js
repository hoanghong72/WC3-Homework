export const Registpage = {
    TXT_FIRSTNAME: "#firstName",
    TXT_LASTNAME: "#lastName",
    TXT_EMAIL: "#userEmail",
    RDO_GENDER: "#gender-radio-2",
    TXT_MOBILE: "#userNumber",
    DDL_DOB: "#dateOfBirthInput",
    DDL_DOB_MONTH: ".react-datepicker__month-select",
    DDL_DOB_YEAR: ".react-datepicker__year-select",
    DDL_DOB_DAY: ".react-datepicker__day--014",
    TXT_SUBJECTS: ".subjects-auto-complete__value-container",
    CHK_HOBBIES: "#hobbies-checkbox-2",
    BTN_PICTURE: "#uploadPicture",
    TXT_ADDRESS: "#currentAddress",
    DDL_STATE: "#state input",
    DDL_CITY: "#city input", 
    BTN_SUBMIT: "#submit",
    BTN_CLOSE_FINISH: "#closeLargeModal",


    typeFirstname(firstName) {
        cy.get(this.TXT_FIRSTNAME).type(firstName);
        return this;
    },

    typeLastname(lastName) {
        cy.get(this.TXT_LASTNAME).type(lastName);
        return this;
    },

    typeEmail(email) {
        cy.get(this.TXT_EMAIL).type(email);
        return this;
    },

    selectGender(gender) {
        cy.get(this.RDO_GENDER).click({force: true});
        return this;
    },

    typeUserMobile(phoneNumber) {
        cy.get(this.TXT_MOBILE).type(phoneNumber);
        return this;
    },

    chooseDOB(month, year, date) {
        cy.get(this.DDL_DOB).click();
        cy.get(this.DDL_DOB_MONTH).select(month);
        cy.get(this.DDL_DOB_YEAR).select(year);
        cy.get(this.DDL_DOB_DAY).click();
        return this;
    },

    chooseSubjects(subjects) {
        cy.get(this.TXT_SUBJECTS).type(subjects).click({force: true});
        return this;
    },

    selectHobbies(hobby) {
        cy.get(this.CHK_HOBBIES).click({force: true});
        return this;
    },

    choosePiture(file1) {
        cy.get(this.BTN_PICTURE).selectFile(file1);
        return this;
    },

    typeAddress(address) {
        cy.get(this.TXT_ADDRESS).type(address);
        return this;
    }, 

    typeState(state) {
        cy.get(this.DDL_STATE).type(state, {force: true}).type('{enter}');
        return this;
    }, 

    typeCity(city) {
        cy.get(this.DDL_CITY).type(city, {force: true}).type('{enter}');
        return this;
    }, 

    clickSubmit() {
        cy.get(this.BTN_SUBMIT).click({force: true});
        return this;
    },
}    

export const confirmform = {
        TXT_NAME_CF: "tbody > :nth-child(1) > :nth-child(2)",
        TXT_EMAIL_CF: "tbody > :nth-child(2) > :nth-child(2)",
        TXT_GENDER_CF: "tbody > :nth-child(3) > :nth-child(2)",
        TXT_MOBILE_CF: "tbody > :nth-child(4) > :nth-child(2)",
        TXT_DOB_CF: "tbody > :nth-child(5) > :nth-child(2)",
        TXT_SUBJECTS_CF: "tbody > :nth-child(6) > :nth-child(2)",
        TXT_HOBBIES_CF: "tbody > :nth-child(7) > :nth-child(2)",
        TXT_PICTURE_CF: "tbody > :nth-child(8) > :nth-child(2)",
        TXT_ADDRESS_CF: "tbody > :nth-child(9) > :nth-child(2)",
        TXT_STATE_AND_CITY_CF: "tbody > :nth-child(10) > :nth-child(2)",

        isNameCorrect(firstName, lastName) {
            cy.get(this.TXT_NAME_CF).should('have.text', firstName+ " " +lastName);
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
        isPictureCorrect(file1) {
            cy.get(this.TXT_PICTURE_CF).should('have.text', file1);
            return this;
        },
        isAddressCorrect (address) {    
            cy.get(this.TXT_ADDRESS_CF).should('have.text', address);
            return this;
        },
        isState_and_City_Correct (state, city) {    
            cy.get(this.TXT_STATE_AND_CITY_CF).should('have.text', state+ " " + city);
            return this;
        }
    }





