export const registrationPage = {
    TXT_FIRSTNAME: "#firstName",
    TXT_LASTNAME: "#lastName",
    TXT_USEREMAIL: "#userEmail",
    RDO_GENDER: "#gender-radio-2",
    TXT_USERNUMBER: "#userNumber",
    DTP_DATEOFBIRTH: "#dateOfBirthInput",
    DTP_MONTH:".react-datepicker__month-select",
    DTP_YEAR:".react-datepicker__year-select",
    DTP_DAY:".react-datepicker__day--011",

    TXT_SUBJECTS:"#subjectsInput",
    DDL_SUBJECTS: ".subjects-auto-complete__menu",
    
    CHK_HOBBIES: "#hobbies-checkbox-2",
    BTN_PICTURE:"#uploadPicture",
    TXT_ADDRESS: "#currentAddress",
    
    // TXT_STATE:"#state >div>div>div>div>input",
    DDL_STATE:"#state >div>div>div>div>input",
    // TXT_CITY:"#city > div",
    DDL_CITY:"#city >div>div>div>div>input",

    BTN_SUBMIT:"#submit",

    typeFirstName(firstName){
        cy.get(this.TXT_FIRSTNAME).type(firstName);
        return this;
    }, 

    typeLastName(lastName){
        cy.get(this.TXT_LASTNAME).type(lastName);
        return this;
    },

    typeUserEmail(userEmail){
        cy.get(this.TXT_USEREMAIL).type(userEmail);
        return this;
    },

    chooseGender(gender){
        cy.get(this.RDO_GENDER).click({force: true});
        return this;
    },

    typeUserNumber(userNumber){
        cy.get(this.TXT_USERNUMBER).type(userNumber);
        return this;
    },

    chooseDateOfBirth(dateOfBirth){
        cy.get(this.DTP_DATEOFBIRTH).click();
        cy.get(this.DTP_YEAR).select('2023');
        cy.get(this.DTP_MONTH).select('October');
        cy.get(this.DTP_DAY).first().click();
        return this;
    },

    chooseSubject(subjects){
        cy.get(this.TXT_SUBJECTS).type(subjects).type('{enter}');
        return this;
    },

    chooseHobbies(hobbies){
        //cy.get(this.CHK_HOBBIES).click({force: true});
        cy.get(this.CHK_HOBBIES).check({force: true});
        return this;
    },

    choosePicture(picture){
        cy.get(this.BTN_PICTURE).selectFile("../w3-hw1-vy/cypress/images/1.png");
        return this;
    },

    typeCurrentAddress(address){
        cy.get(this.TXT_ADDRESS).type(address);
        return this;
    },

    chooseState(state){
        cy.get(this.DDL_STATE).type(state,{force: true}).type('{enter}');
        return this;
    },

    chooseCity(city){
        cy.get(this.DDL_CITY).type(city,{force: true}).type('{enter}');
        return this;
    },

    clickSubmit(){
        cy.get(this.BTN_SUBMIT).click({force: true});
        return this;
    },
};