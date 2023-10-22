export const Registpage = {
    TXT_FIRSTNAME: "#firstName",
    TXT_LASTNAME: "#lastName",
    TXT_EMAIL: "#userEmail",
    RDO_GENDER: "#gender-radio-",
    TXT_MOBILE: "#userNumber",
    DDL_DOB: "#dateOfBirth",
    DDL_DOB_MONTH: ".react-datepicker__month-select",
    DDL_DOB_YEAR: ".react-datepicker__year-select",
    DDL_DOB_DAY: ".react-datepicker__day--",
    TXT_SUBJECTS: ".subjects-auto-complete__value-container",
    CHK_HOBBIES: "#hobbies-checkbox-",
    BTN_PICTURE: "#uploadPicture",
    TXT_ADDRESS: "#currentAddress",
    DDL_STATE: "#state input",
    DDL_CITY: "#city input", 
    BTN_SUBMIT: "#submit",
    BTN_CLOSEFINISH: "#closeLargeModal",
    GREEN: "rgb(40, 167, 69)",
    RED: "rgb(220, 53, 69)",


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
        if (gender == "Male") {
            cy.get(this.RDO_GENDER + "1").click({force: true})
            } else if (gender == "Female") {
            cy.get(this.RDO_GENDER + "2").click({force: true})
            } else if (gender == "Other") {
            cy.get(this.RDO_GENDER + "3").click({force: true})
            };
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
        cy.get(this.DDL_DOB_DAY+0+date).first(date).click();
        return this;
    },

    chooseSubjects(subjects) {
        cy.get(this.TXT_SUBJECTS).type(subjects).type('{enter}');
        return this;
    },

    selectHobbies(hobby) {
        if (hobby == "Sport") {
        cy.get(this.CHK_HOBBIES + "1").click({force: true})
        } else if (hobby == "Reading") {
        cy.get(this.CHK_HOBBIES + "2").click({force: true})
        } else if (hobby == "Music") {
        cy.get(this.CHK_HOBBIES + "3").click({force: true})
        };
        return this;
    },

    choosePiture(file) {
        cy.get(this.BTN_PICTURE).selectFile(file, {force:true});
        return this;
    },

    typeAddress(address) {
        cy.get(this.TXT_ADDRESS).type(address, {force: true});
        return this;
    }, 

    typeState(state) {
        cy.get(this.DDL_STATE).type(state, {force: true}).type('{enter}', {force:true});
        return this;
    }, 

    typeCity(city) {
        cy.get(this.DDL_CITY).type(city, {force: true}).type('{enter}', {force:true});
        return this;
    }, 

    clickSubmit() {
        cy.get(this.BTN_SUBMIT).click({force: true});
        return this;
    },

    // NOTICE FOR WRONG VALUE

    firstNameValid (firstName = true) {
        if (firstName == true) {
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', this.GREEN)
        } else {
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', this.RED)
        }
        return this;

    },

    lastNameValid (lastName = true) {
        if (lastName == true) {
            cy.get(this.TXT_LASTTNAME).should('have.css', 'border-color', this.GREEN)
        } else {
            cy.get(this.TXT_LASTNAME).should('have.css', 'border-color', this.RED)
        }
        return this;

    },

    emailValid (email = true) {
        if (email == true) {
            cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.GREEN)
        } else {
            cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.RED)
        }
        return this;

    },

    genderValid (gender = true) {
        if (gender == true) {
            cy.get(this.RDO_GENDER).should('have.css', 'border-color', this.GREEN)
        } else {
            cy.get(this.RDO_GENDER).should('have.css', 'border-color', this.RED)
        }
        return this;

    },

    mobileValid (phoneNumber = true) {
        if (phoneNumber == true) {
            cy.get(this.TXT_MOBILE).should('have.css', 'border-color', this.GREEN)
        } else {
            cy.get(this.TXT_MOBILE).should('have.css', 'border-color', this.RED)
        }
        return this;

    },
    
    dobValid (month, year, date = true) {
        if (month, year, date == true) {
            cy.get(this.DDL_DOB).should('have.css', 'border-color', this.GREEN)
        } else {
            cy.get(this.DDL_DOB).should('have.css', 'border-color', this.RED)
        }
        return this;

    },

}    







