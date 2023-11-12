// import chaiColors from 'chai-colors';

// import tinycolor from 'tinycolor2';
const RED = "rgb(220, 53, 69)"
const GREEN = "rgb(40, 167, 69)"
function checkBorderColor(element, valid){
    if (valid){
        cy.get(element).should('have.css', 'border-color', GREEN);
    }else{
        cy.get(element).should('have.css', 'border-color', RED);
    }
    return this
}
export const registerForm = {
    TXT_LASTNAME: "#lastName",
    TXT_FIRSTNAME: "#firstName",
    RDO_GENDER: "#genterWrapper input",
    LBL_GENDER: "#genterWrapper label",
    TXT_EMAIL: "#userEmail",
    TXT_USERNUMBER: "#userNumber",
    BTN_SUBMIT: "#submit",
    DTP_DOB: "#dateOfBirthInput",
    DTP_DOB_DAY: ".react-datepicker__day--0",
    DTP_DOB_MONTH: ".react-datepicker__month-select",
    DTP_DOB_YEAR: ".react-datepicker__year-select",
    DDL_SUBJECTS: "#subjectsInput",
    CHK_HOBBIES: "#hobbiesWrapper",
    DLG_UPLOADPICTURE: "#uploadPicture",
    TXT_CURRENTADDRESS: "#currentAddress",
    DDL_STATE: "#state input",
    DDL_CITY: "#city input",
    RED: "rgb(220, 53, 69)",
    GREEN: "rgb(40, 167, 69)",

    inputLastName(lastName) {
        cy.get(this.TXT_LASTNAME).type(lastName, { force: true });
        return this;
    },

    inputFirstName(firstName) {
        cy.get(this.TXT_FIRSTNAME).type(firstName, { force: true });
        return this;
    },

    inputEmail(email) {
        cy.get(this.TXT_EMAIL).type(email, { force: true });
        return this;
    },
    checkGender(gender) {
        cy.get(this.RDO_GENDER).check(gender, {force: true} )
        return this;
    },

    inputUserNumber(userNumber) {
        cy.get(this.TXT_USERNUMBER).type(userNumber);
        return this;
    },

    chooseDOB(day, month, year) {
        // Open date picker
        cy.get(this.DTP_DOB).click();
        // Select year
        cy.get(this.DTP_DOB_YEAR).select(year);
        // Select month
        cy.get(this.DTP_DOB_MONTH).select(month);
        // Select day
        cy.get(this.DTP_DOB_DAY + day).first().click();
        return this
    },

    inputSubjects(subjects) {
        for (let i = 0; i < subjects.length; i++) {
            cy.get(this.DDL_SUBJECTS).type(subjects[i]).type('{enter}')
        }

        return this;
    },

    checkHobbies(hobbies) {
        hobbies.forEach(element => {
            cy.get(this.CHK_HOBBIES).contains(element).click();
        });
        return this;
    },

    uploadPicture(picture) {
        cy.get(this.DLG_UPLOADPICTURE).selectFile(picture)
        return this
    },

    inputCurrentAddress(currentAddress) {
        cy.get(this.TXT_CURRENTADDRESS).type(currentAddress, { force: true });
        return this;
    },

    inputState(state) {
        cy.get(this.DDL_STATE).type(state, { force: true }).type('{enter}', { force: true })
        return this;
    },
    inputCity(city) {
        cy.get(this.DDL_CITY).type(city, { force: true }).type('{enter}', { force: true })
        return this;
    },

    clickSubmit() {
        cy.get(this.BTN_SUBMIT).click({ force: true });
        return this;
    },
    checkFirstNameValid(valid) {
        checkBorderColor(this.TXT_FIRSTNAME, valid)
        return this
    },

    checkLastNameValid(valid) {
        checkBorderColor(this.TXT_LASTNAME, valid)
        return this
    },

    checkEmailValid(valid) {
        checkBorderColor(this.TXT_EMAIL, valid)
        return this
    },
    checkMobileValid(valid) {
        checkBorderColor(this.TXT_USERNUMBER, valid)
        return this
    },
    isGenderChecked(valid) {
        checkBorderColor(this.LBL_GENDER, valid)
        return this
    },
    checkDOBValid(valid){
        checkBorderColor(this.DTP_DOB, valid)
        return this
    },
    checkPictureValid(valid){
        checkBorderColor(this.DLG_UPLOADPICTURE, valid)
        return this
    },
    checkAddressValid(valid){
        checkBorderColor(this.TXT_CURRENTADDRESS, valid)
        return this
    }
}

export const confirmForm = {
    TXT_VALUE: "table tbody tr td+td",
    BTN_CLOSE: "#closeLargeModal",
    LBL_STUDENTNAME: "table tbody tr:nth-child(1) td:nth-child(2)",

    isCorrectName(firstName, lastName) {
        let name = firstName.trim() + ' ' + lastName.trim()
        cy.get(this.TXT_VALUE).contains(name).should("be.visible")
        return this
    },

    isCorrectEmail(email) {
        cy.get(this.TXT_VALUE).contains(email).should("be.visible")
        return this
    },

    isCorrectGender(gender) {
        cy.get(this.TXT_VALUE).contains(gender).should("be.visible")
        return this
    },

    isCorrectMobile(userNumber) {
        cy.get(this.TXT_VALUE).contains(userNumber).should("be.visible")
        return this
    },

    isCorrectDOB(day, month, year) {
        let dob = day + " " + month + "," + year
        cy.get(this.TXT_VALUE).contains(dob).should("be.visible")
        return this
    },

    isCorrectSubjects(subjects) {
        let txt_subject = ""
        for (let i = 0; i < subjects.length - 1; i++) {
            txt_subject += subjects[i] + ", "
        }
        txt_subject += subjects[subjects.length - 1]
        cy.get(this.TXT_VALUE).contains(txt_subject).should("be.visible")

        return this;
    },

    isCorrectHobbies(hobbies) {
        let txt_hobbies = ""
        for (let i = 0; i < hobbies.length - 1; i++) {
            txt_hobbies += hobbies[i] + ", "
        }
        txt_hobbies += hobbies[hobbies.length - 1]
        cy.get(this.TXT_VALUE).contains(txt_hobbies).should("be.visible")
        return this;
    },

    isCorrectPicture(picture) {
        let pieces = picture.split('/');
        let filename = pieces[pieces.length - 1];
        cy.get(this.TXT_VALUE).contains(filename).should("be.visible")
        return this
    },

    isCorrectAddress(currentAddress) {
        cy.get(this.TXT_VALUE).contains(currentAddress).should("be.visible")
        return this;
    },

    isCorrectStateAndCity(state, city) {
        let txt_statecity = state + " " + city
        cy.get(this.TXT_VALUE).contains(txt_statecity).should("be.visible")
        return this;
    },


    clickClose() {
        cy.get(this.BTN_CLOSE).click({ force: true });
        return this;
    },
}