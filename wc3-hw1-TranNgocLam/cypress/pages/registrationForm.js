export const registerForm = {
    TXT_LASTNAME: "#lastName",
    TXT_FIRSTNAME: "#firstName",
    RDO_GENDER: "#genterWrapper input",
    TXT_USERNUMBER: "#userNumber",
    BTN_SUBMIT: "#submit",
    DTP_DOB: "#dateOfBirthInput",
    DTP_DOB_DAY: ".react-datepicker__day--0",
    DTP_DOB_MONTH: ".react-datepicker__month-select",
    DTP_DOB_YEAR: ".react-datepicker__year-select",
    DDL_SUBJECTS: "#subjectsInput",
    CHK_HOBBIES: "#hobbiesWrapper :checkbox",
    DLG_UPLOADPICTURE: "#uploadPicture",
    TXT_CURRENTADDRESS: "#currentAddress",
    DDL_STATE: "#state input",
    DDL_CITY: "#city input",

    inputLastName(lastName) {
        cy.get(this.TXT_LASTNAME).type(lastName, { force: true });
        return this;
    },

    inputFirstName(firstName) {
        cy.get(this.TXT_FIRSTNAME).type(firstName, { force: true });
        return this;
    },

    checkGender(gender) {
        cy.get(this.RDO_GENDER).check(gender)
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

        /*  // Open date picker
         cy.get('#dateOfBirthInput').click();
         // Select year
         cy.get('.react-datepicker__year-select').select(year);
         // Select month
         cy.get('.react-datepicker__month-select').select(month);
         // Select day
         cy.get(`.react-datepicker__day--0${day}`).first().click(); */
        return this
    },

    inputSubjects(subjects) {
        for (let i = 0; i < subjects.length; i++) {
            cy.get(this.DDL_SUBJECTS).type(subjects[i]).type('{enter}')
        }

        return this;
    },

    checkHobbies(hobbies) {
        for (let i = 0; i < hobbies.length; i++) {
            switch (hobbies[i]) {
                case "Sports":
                    cy.get(this.CHK_HOBBIES).check("1")
                    break
                case "Reading":
                    cy.get(this.CHK_HOBBIES).check("2")
                    break
                case "Music":
                    cy.get(this.CHK_HOBBIES).check("3")
                    break
            }

        }

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
}

export const confirmForm = {
    BTN_CLOSE: "#closeLargeModal",

    isCorrectName(name) {
        cy.get('table tbody tr')
            .filter((k, tr) => {
                return tr.children[1].innerText.includes(name)
            })
            .should('have.text', 'Student Name' + name)
        return this
    },

    isCorrectGender(gender) {
        cy.get('table tbody tr')
            .filter((k, tr) => {
                return tr.children[1].innerText === gender
            })
            .should('have.text', 'Gender' + gender)
        return this
    },

    isCorrectMobile(userNumber) {
        cy.get('table tbody tr')
            .filter((k, tr) => {
                return tr.children[1].innerText === userNumber
            })
            .should('have.text', 'Mobile' + userNumber)
        return this
    },

    isCorrectDOB(day, month, year) {
        let dob = day + " " + month + "," + year
        cy.get('table tbody tr')
            .filter((k, tr) => {
                return tr.children[1].innerText === dob
            })
            .should('have.text', 'Date of Birth' + dob)
        return this
    },

    isCorrectSubjects(subjects) {
        let txt_subject = ""
        for (let i = 0; i < subjects.length - 1; i++) {
            txt_subject += subjects[i] + ", "
        }
        txt_subject += subjects[subjects.length - 1]
        cy.get('table tbody tr')
            .filter((k, tr) => {
                return tr.children[1].innerText === txt_subject
            })
            .should('have.text', 'Subjects' + txt_subject)

        return this;
    },

    isCorrectHobbies(hobbies) {
        let txt_hobbies = ""
        for (let i = 0; i < hobbies.length - 1; i++) {
            txt_hobbies += hobbies[i] + ", "
        }
        txt_hobbies += hobbies[hobbies.length - 1]
        cy.get('table tbody tr')
            .filter((k, tr) => {
                // txt_hobbies = tr.children[1].innerText
                return tr.children[1].innerText === txt_hobbies
            })
            .should('have.text', 'Hobbies' + txt_hobbies)
        return this;
    },

    isCorrectPicture(picture) {
        let pieces = picture.split('/');
        let filename = pieces[pieces.length - 1];
        cy.get('table tbody tr')
            .filter((k, tr) => {
                // txt_hobbies = tr.children[1].innerText
                return tr.children[1].innerText === filename
            })
            .should('have.text', 'Picture' + filename)
        return this
    },

    isCorrectAddress(currentAddress) {
        
        cy.get('table tbody tr')
            .filter((k, tr) => {
                // txt_hobbies = tr.children[1].innerText
                return tr.children[1].innerText === currentAddress
            })
            .should('have.text', 'Address' + currentAddress)
        return this;
    },

    isCorrectStateAndCity(state, city) {
        let txt_statecity = state + " " +city
        cy.get('table tbody tr')
            .filter((k, tr) => {
                // txt_hobbies = tr.children[1].innerText
                return tr.children[1].innerText === txt_statecity
            })
            .should('have.text', 'State and City' + txt_statecity)
        return this;
    },


    clickClose() {
        cy.get(this.BTN_CLOSE).click({ force: true });
        return this;
    },
}