export const registrationPage = {
    TXT_FIRSTNAME: "#firstName",
    TXT_LASTNAME: "#lastName",
    TXT_USEREMAIL: "#userEmail",
    RDO_GENDER: "#gender-radio-2", // only Female
    LBL_GENDER: "#gender-radio-2 + label",
    TXT_USERNUMBER: "#userNumber",

    DTP_DATEOFBIRTH: "#dateOfBirthInput",
    DTP_MONTH: ".react-datepicker__month-select",
    DTP_YEAR: ".react-datepicker__year-select",
    DTP_DAY: ".react-datepicker__day--0",

    TXT_SUBJECTS: "#subjectsInput",
    CHK_HOBBIES: "#hobbies-checkbox-2", // only Reading
    BTN_PICTURE: "#uploadPicture",
    TXT_ADDRESS: "#currentAddress",

    DDL_STATE: "#state input",
    DDL_CITY: "#city input",

    BTN_SUBMIT: "#submit",


    // Actions -----------------------------------------------

    typeFirstName(firstName) {
        cy.get(this.TXT_FIRSTNAME).type(firstName);
        return this;
    },

    typeLastName(lastName) {
        cy.get(this.TXT_LASTNAME).type(lastName);
        return this;
    },

    typeUserEmail(userEmail) {
        cy.get(this.TXT_USEREMAIL).type(userEmail);
        return this;
    },

    chooseGender(gender) {
        cy.get(this.RDO_GENDER).click({ force: true });
        return this;
    },

    typeUserNumber(userNumber) {
        cy.get(this.TXT_USERNUMBER).type(userNumber);
        return this;
    },

    chooseDateOfBirth(day,month,year) {
        cy.get(this.DTP_DATEOFBIRTH).click();
        cy.get(this.DTP_YEAR).select(year);
        cy.get(this.DTP_MONTH).select(month);
        cy.get(this.DTP_DAY+day).first().click();
        return this;
    },

    chooseSubject(subjects) {
        cy.get(this.TXT_SUBJECTS).type(subjects).type('{enter}');
        return this;
    },

    chooseHobbies(hobbies) {
        cy.get(this.CHK_HOBBIES).check({ force: true });
        return this;
    },

    choosePicture(picture) {
        cy.get(this.BTN_PICTURE).selectFile("../w3-hw1-vy/cypress/images/" + picture);
        return this;
    },

    typeCurrentAddress(address) {
        cy.get(this.TXT_ADDRESS).type(address);
        return this;
    },

    chooseState(state) {
        cy.get(this.DDL_STATE).type(state, { force: true }).type('{enter}');
        return this;
    },

    chooseCity(city) {
        cy.get(this.DDL_CITY).type(city, { force: true }).type('{enter}');
        return this;
    },

    clickSubmit() {
        cy.get(this.BTN_SUBMIT).click({ force: true });
        return this;
    },


    // Validation -----------------------------------------------
    /* 
        - valid color: green
        - invalid color: red
    */
    RED: "rgb(220, 53, 69)",
    GREEN: "rgb(40, 167, 69)",

    isValid(firstName = true, lastName = true, email = true,
        gender = true, mobile = true, picture = false) {
        if (firstName == true) {
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', this.GREEN)
        }
        else {
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', this.RED);
        }

        if (lastName == true) {
            cy.get(this.TXT_LASTNAME).should('have.css', 'border-color', this.GREEN)
        }
        else {
            cy.get(this.TXT_LASTNAME).should('have.css', 'border-color', this.RED);
        }

        if (email == true) {
            cy.get(this.TXT_USEREMAIL).should('have.css', 'border-color', this.GREEN)
        }
        else {
            cy.get(this.TXT_USEREMAIL).should('have.css', 'border-color', this.RED);
        }

        if (mobile == true) {
            cy.get(this.TXT_USERNUMBER).should('have.css', 'border-color', this.GREEN)
        }
        else {
            cy.get(this.TXT_USERNUMBER).should('have.css', 'border-color', this.RED);
        }

        if (gender == true) {
            cy.get(this.LBL_GENDER).should('have.css', 'border-color', this.GREEN)
        }
        else {
            cy.get(this.LBL_GENDER).should('have.css', 'border-color', this.RED);
        }

        // need to check --> picture = true
        if (picture == true) {
            cy.get(this.BTN_PICTURE).invoke('val').should('match', /png|jpg/g);
        }
    },

};